import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    getCategories: builder.query({ query: () => "categories" }),
    getNewreleases: builder.query({ query: () => "new-releases" }),
    getFeaturedPlaylists: builder.query({ query: () => "featured-playlists" }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetNewreleasesQuery,
  useGetFeaturedPlaylistsQuery,
} = spotifyApi;
