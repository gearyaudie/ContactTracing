import React, { useState } from "react";
import { db } from "../database/firebase";
import "./Register.css";

function Register() {
  // States used in Register.js //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [building, setBuilding] = useState("");

  // Move data from input to Firebase DB //
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("students")
      .add({
        name: name,
        email: email,
        id: id,
        date: date,
        building: building,
      })
      .then(() => {
        alert("Data Recorded!");
      })
      .catch((e) => {
        alert(e.message);
      });

    setName("");
    setEmail("");
    setId("");
    setDate("");
    setDate("");
    setBuilding("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container2'>
        <div className='form2'>
          <div className='heading'>
            <img src='' className='logo' />
            <h1>Registration Form</h1>
          </div>
          <div className='wrap'>
            <div className='f1'>
              <label>Full Name</label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <span className='focus-input'></span>
            </div>
            <div className='f2'>
              <label>Student ID</label>
              <input
                type='text'
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
              <span className='focus-input'></span>
            </div>
          </div>
          <div className='wrap2'>
            <label>Email</label>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className='focus-input'></span>
          </div>
          <div className='wrap2'>
            <label>Date (ex. dd/mm/yy)</label>
            <input
              type='text'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <span className='focus-input'></span>
          </div>
          <div className='wrap2'>
            <label>Building (ex. A)</label>
            <input
              type='text'
              value={building}
              onChange={(e) => setBuilding(e.target.value)}
              required
            />
            <span className='focus-input'></span>
          </div>

          <button className='btn2' type='submit'>
            Register
          </button>
        </div>
        <div className='image'>
          <img src='./img/bg.jpg' className='img' alt='' />
        </div>
      </div>
    </form>
  );
}

export default Register;
