import { all, takeEvery, call, put } from 'redux-saga/effects';
import { DISCOVER } from "./constants";
import { DiscoverService } from "../../services";
import { discoverActions } from "./actions";

function* fetchNewReleases() {
  try {
    yield put(discoverActions.dataFetchingStarted());
    const [newReleases, playlists, categories] = yield all([
      call(DiscoverService.fetchNewReleases),
      call(DiscoverService.fetchPlaylists),
      call(DiscoverService.fetchCategories),
    ])

    yield put(discoverActions.refreshDiscoverData({ newReleases, playlists, categories }));
    yield put(discoverActions.dataFetchingSuccess());
  } catch (e) {
    console.log(e);
  }
}

export default function* discoverSaga() {
  yield all([
    yield takeEvery(DISCOVER.FETCH_DISCOVER_DATA, fetchNewReleases),
  ])
}
