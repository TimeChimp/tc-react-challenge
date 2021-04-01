import { all } from 'redux-saga/effects';
import discoverSaga from "./discover/saga";

export default function* rootSaga() {
  yield all([
    discoverSaga(),
  ])
}
