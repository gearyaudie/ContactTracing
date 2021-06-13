import React, { useEffect } from "react";
import LogbookContent from "../components/LogbookContent";
import Navbar from "../components/Navbar";

import { useSelector, useDispatch } from "react-redux";
import { fetchStudents } from "../redux/actions/students";

function Logbook() {
  const students = useSelector((state) => state.studentsData.students);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return (
    <div>
      <Navbar />
      <LogbookContent students={students} />
    </div>
  );
}

export default Logbook;
