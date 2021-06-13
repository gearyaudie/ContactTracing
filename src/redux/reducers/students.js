import {
  FETCH_STUDENTS_REQ,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAIL,
} from "../types/students";

const initialState = {
  loading: false,
  students: [],
  error: "",
};

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS_REQ:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STUDENTS_SUCCESS:
      return {
        students: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_STUDENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default studentsReducer;
