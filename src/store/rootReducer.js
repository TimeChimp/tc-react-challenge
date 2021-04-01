import { combineReducers } from "redux";
import { discoverReducer } from "./discover/reducer";

const rootReducer = combineReducers({
  discover: discoverReducer,
})

export default rootReducer;
