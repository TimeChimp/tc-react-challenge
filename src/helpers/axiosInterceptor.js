import axios from "axios";
import querystring from "querystring";
import config from "../config";

// Your Spotify client ID and client secret
const CLIENT_ID = config.api.clientId;
const CLIENT_SECRET = config.api.clientSecret;

// Create an instance of Axios
const axiosInstance = axios.create();

let accessToken = ""; // Access token variable

// Function to fetch and set the access token
const fetchAccessToken = async () => {
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    querystring.stringify({
      grant_type: "client_credentials",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  accessToken = response.data.access_token;
};

// Interceptor to handle the access token
axiosInstance.interceptors.request.use(async (config) => {
  if (!accessToken) {
    await fetchAccessToken();
  }

  // Set the authorization header with the access token
  config.headers["Authorization"] = `Bearer ${accessToken}`;

  return config;
});

export default axiosInstance;
