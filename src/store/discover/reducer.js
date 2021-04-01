import { DISCOVER } from "./constants";

const initialState = {
  newReleases: [],
  playlists: [],
  categories: [],
  loading: false,
}

export const discoverReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISCOVER.REFRESH_DISCOVER_DATA:
      const { newReleases, playlists, categories } = action.payload;
      return {
        ...state,
        newReleases,
        playlists,
        categories,
      }

    case DISCOVER.START_DATA_FETCHING:
      return {
        ...state,
        loading: true,
      }

    case DISCOVER.FINISH_DATA_FETCHING:
      return {
        ...state,
        loading: false,
      }

    default:
      return { ...state }
  }
}
