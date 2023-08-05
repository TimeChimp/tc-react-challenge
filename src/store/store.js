import { configureStore } from "@reduxjs/toolkit";
import { spotifyApi } from "../api/spotifyApi";

export const store = configureStore({
  reducer: { [spotifyApi.reducerPath]: spotifyApi.reducer },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spotifyApi.middleware),
});
