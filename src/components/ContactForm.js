import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm({ students }) {
  // States used in the contact form component
  const [studentData, setStudentData] = useState([]);
  const [Email, setEmail] = useState([]);
  const [filter, setFilter] = useState();
  const [filterB, setFilterB] = useState();
  const [newData, setNewData] = useState();

  // New Filter Test
  function filterData(e) {
    e.preventDefault();
    let first_filter = [];
    students.forEach((student) => {
      if (student.date === filter) {
        first_filter.push(student);
      }
    });
    setStudentData(first_filter);

    // Create a new data Variable for the second filter //
    var newData = [];
    studentData.forEach((student) => {
      // Map data from database to the new variable //
      newData.push({
        email: student.email,
        building: student.building,
      });
    });
    setNewData(newData);

    // Set the email data to a new variable for multiple email capability //
    var email = [];
    newData.forEach((nd) => {
      email.push(nd.email);
    });
    setEmail(email);
  }

  // Filter Database (By Date)

  // function filterData(e) {
  //   e.preventDefault();
  //   db.collection("students")
  //     .where("date", "==", filter)
  //     .onSnapshot((snapshot) => {
  //       const students = [];
  //       snapshot.forEach((doc) => {
  //         const data = doc.data();
  //         students.push(data);
  //       });
  //       setStudents(students);

  //       // Create a new data Variable for the second filter //
  //       var newData = [];
  //       students.map((student) => {
  //         // Map data from database to the new variable //
  //         newData.push({
  //           email: student.email,
  //           building: student.building,
  //         });
  //       });
  //       setNewData(newData);

  //       // Set the email data to a new variable for multiple email capability //
  //       var email = [];
  //       newData.forEach((nd) => {
  //         email.push(nd.email);
  //       });
  //       setEmail(email);
  //     });
  // }

  // Filter Database (By Building)
  function filterBuilding(e) {
    e.preventDefault();
    let new_email = [];
    newData.forEach((nd) => {
      if (nd.building === filterB) {
        new_email.push(nd.email);
      }
    });
    setEmail(new_email);
  }

  // Activate Email JS through this function //
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1itvl2g",
        "template_wkao8d5",
        e.target,
        "user_Cu7YtNY74RV8gPluq9tNI"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Error: Something went wrong, please try again.");
        }
      );

    e.target.reset();
    setEmail("");
  }

  return (
    <div className='ct'>
      <div className='container grid'>
        <div className='ct-form-text'>
          <h3>Fast and Efficient, the contact tracing form</h3>
          <br></br>
          <p>
            The Contact Tracing app for COVID-19. Inform your contacts within
            UCSI, select their names through the form and send them a custom
            message too!
          </p>
        </div>

        <div className='ct-form card'>
          <form onSubmit={filterData} className='filter'>
            <input
              type='text'
              placeholder='Filter Date'
              onChange={(e) => setFilter(e.target.value)}
            />
            <input className='btn btn-filter' type='submit' value='Filter' />
          </form>
          <form onSubmit={filterBuilding} className='filter'>
            <input
              type='text'
              placeholder='Filter Building'
              onChange={(e) => setFilterB(e.target.value)}
            />
            <input className='btn btn-filter' type='submit' value='Filter' />
          </form>
          <form onSubmit={sendEmail}>
            <div className='form-control'>
              <textarea
                className='form-control'
                type='text'
                placeholder='Email'
                defaultValue={Email}
                name='email'
                required
              />
            </div>
            <div className='form-control'>
              <input
                type='text'
                className='form-control'
                placeholder='Add Custom Message'
                name='message'
                required
              />
            </div>
            <input type='submit' className='btn btn-primary' value='Send' />
          </form>
        </div>
      </div>
    </div>
  );
}
