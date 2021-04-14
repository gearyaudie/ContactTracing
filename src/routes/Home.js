import React, { useState, useEffect } from "react";

// Import the main components of the Home Route (Api and Contact Form) //
import Api from "../components/Api";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";

import { db } from "../database/firebase";

function Home() {
  const [students, setStudents] = useState();

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
      <Showcase />
      <ContactForm students={students} />
      <Api />
      <Footer />
    </div>
  );
}

export default Home;
