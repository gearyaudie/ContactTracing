import {
  FETCH_STUDENTS_REQ,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAIL,
} from "../types/students";

import { db } from "../../database/firebase";

export const fetchStudentsReq = () => {
  return {
    type: FETCH_STUDENTS_REQ,
  };
};

export const fetchStudentsSuccess = (students) => {
  return {
    type: FETCH_STUDENTS_SUCCESS,
    payload: students,
  };
};

export const fetchStudentsFail = (error) => {
  return {
    type: FETCH_STUDENTS_FAIL,
    payload: error,
  };
};

export const fetchStudents = () => {
  return (dispatch) => {
    dispatch(fetchStudentsReq);
    db.collection("students")
      .get()
      .then((snapshot) => {
        const students = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          students.push(data);
        });
        dispatch(fetchStudentsSuccess(students));
      })
      .catch((err) => {
        dispatch(fetchStudentsFail(err));
      });
  };
};
