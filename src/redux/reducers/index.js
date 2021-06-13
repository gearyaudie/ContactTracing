import { combineReducers } from "redux";
import studentsReducer from "./students";
import casesReducer from "./cases";

const rootReducer = combineReducers({
  studentsData: studentsReducer,
  casesData: casesReducer,
});

export default rootReducer;
