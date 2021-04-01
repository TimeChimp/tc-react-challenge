export const selectNewReleases = (state) => state.discover.newReleases?.albums?.items || [];
export const selectPlaylists = (state) => state.discover.playlists?.playlists?.items || [];
export const selectCategories = (state) => state.discover.categories?.categories?.items || [];
export const selectDiscoverDataLoading = (state) => state.discover.loading;
