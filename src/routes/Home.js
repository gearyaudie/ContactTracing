import React, { useState, useEffect } from "react";

// Import the main components of the Home Route (Api and Contact Form) //
import Api from "../components/Api";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";

import { useSelector, useDispatch } from "react-redux";
import { fetchStudents } from "../redux/actions/students";

function Home() {
  const students = useSelector((state) => state.studentsData.students);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
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
