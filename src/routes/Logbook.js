import React, { useState, useEffect } from "react";
import LogbookContent from "../components/LogbookContent";
import Navbar from "../components/Navbar";

// Import DB From firebase
import { db } from "../database/firebase";

function Logbook() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    db.collection("students")
      .get()
      .then((snapshot) => {
        const students = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          students.push(data);
        });
        setStudents(students);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Navbar />
      <LogbookContent students={students} />
    </div>
  );
}

export default Logbook;
