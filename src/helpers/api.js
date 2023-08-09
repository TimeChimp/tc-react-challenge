import config from "../config";
import axiosInstance from "./axiosInterceptor";

// API paths
const apiPaths = {
  newReleases: `${config.api.baseUrl}/browse/new-releases`,
  featuredPlaylists: `${config.api.baseUrl}/browse/featured-playlists`,
  browseGenres: `${config.api.baseUrl}/browse/categories`,
};

// Fetch and display Released This Week songs
export async function fetchReleasedThisWeek() {
  try {
    const response = await axiosInstance.get(apiPaths.newReleases);
    const releasedThisWeekSongs = response.data.albums.items;
    return releasedThisWeekSongs;
  } catch (error) {
    console.error("Error fetching Released This Week songs:", error);
  }
}

// Fetch and display Featured Playlists
export async function fetchFeaturedPlaylists() {
  try {
    const response = await axiosInstance.get(apiPaths.featuredPlaylists);
    const featuredPlaylists = response.data.playlists.items;
    return featuredPlaylists;
  } catch (error) {
    console.error("Error fetching Featured Playlists:", error);
  }
}

// Fetch and display Browse genres
export async function fetchBrowseGenres() {
  try {
    const response = await axiosInstance.get(apiPaths.browseGenres);
    const browseGenres = response.data.categories.items;
    return browseGenres;
  } catch (error) {
    console.error("Error fetching Browse genres:", error);
  }
}
