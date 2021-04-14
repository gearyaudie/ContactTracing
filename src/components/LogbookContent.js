import React, { useState } from "react";
import Footer from "./Footer";

function LogbookContent({ students }) {
  const [date, setDate] = useState();
  const [building, setBuilding] = useState();
  const [email, setEmail] = useState();

  return (
    <div className='logbook'>
      <div className='container logbook-data'>
        <select name='name' className='form-control'>
          {students &&
            students.map((student, ID) => {
              return (
                <option
                  key={ID}
                  onClick={() => {
                    setEmail(student.email);
                    setDate(student.date);
                    setBuilding(student.building);
                  }}
                >
                  {student.name}
                </option>
              );
            })}
        </select>
        <div>
          <input
            className='form-control'
            type='text'
            placeholder='Email'
            defaultValue={email}
            required
          />
        </div>
        <div>
          <input
            className='form-control'
            type='text'
            placeholder='Date'
            defaultValue={date}
            required
          />
        </div>
        <div>
          <input
            className='form-control'
            type='text'
            placeholder='Building'
            defaultValue={building}
            required
          />
        </div>
      </div>
      <div className='container'>
        <ul>
          <li className='card'>
            The Logbook page allows you to look at previous registration data
          </li>
          <li className='card'>
            Data here are derived from the registration form
          </li>
          <li className='card'>
            Upon a COVID-19 case, find the name of the person and continue with
            the contact tracing process
          </li>
        </ul>
      </div>
      <div className='about-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default LogbookContent;
