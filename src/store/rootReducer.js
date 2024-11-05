import { combineReducers } from "redux";
import entriesReducer from "../features/entries/entriesSlice";

const rootReducer = combineReducers({
  entries: entriesReducer,
});

export default rootReducer;
