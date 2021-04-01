import { DISCOVER } from "./constants";

export const discoverActions = {
  fetchDiscoverData: () => ({
    type: DISCOVER.FETCH_DISCOVER_DATA
  }),
  refreshDiscoverData: (payload) => ({
    type: DISCOVER.REFRESH_DISCOVER_DATA,
    payload,
  }),
  dataFetchingStarted: () => ({
    type: DISCOVER.START_DATA_FETCHING,
  }),
  dataFetchingSuccess: () => ({
    type: DISCOVER.FINISH_DATA_FETCHING,
  })
}
