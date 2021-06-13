import {
  FETCH_CASES_REQ,
  FETCH_CASES_FAIL,
  FETCH_CASES_SUCCESS,
} from "../types/cases";

const initialState = {
  loading: false,
  confirmed: [],
  deaths: [],
  recovered: [],
  error: "",
};

const casesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CASES_REQ:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CASES_SUCCESS:
      return {
        loading: false,
        confirmed: action.payload,
        deaths: action.payload2,
        recovered: action.payload3,
        error: "",
      };
    case FETCH_CASES_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default casesReducer;
