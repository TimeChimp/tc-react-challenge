import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Mutex } from "async-mutex";

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.spotify.com/v1/browse",
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const refreshTokenBaseQuery = fetchBaseQuery({
  baseUrl: "https://accounts.spotify.com/api/token",
  headers: [["Content-Type", "application/x-www-form-urlencoded"]],
});

const customFetchBase = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        var details = {
          grant_type: "client_credentials",
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
        };

        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        const refreshResult = await refreshTokenBaseQuery(
          {
            credentials: "include",
            method: "POST",
            body: formBody,
          },
          api,
          extraOptions
        );

        if (refreshResult.data) {
          // Retry the initial query
          localStorage.setItem("accessToken", refreshResult.data.access_token);
          result = await baseQuery(args, api, extraOptions);
        } else {
          console.error("could not authorize");
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export default customFetchBase;
