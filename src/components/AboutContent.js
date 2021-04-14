import React from "react";
import Footer from "./Footer";

function AboutContent() {
  return (
    <div className='about'>
      <div className='container'>
        <div className='card grid'>
          <div className='about-1'>
            <h2>Contact Tracing</h2>
          </div>
          <div className='about-2'>
            <p className='about-2-p'>
              What? A contact tracing website to prevent further spread of the
              COVID-19 pandemic.
            </p>
            <p className='about-2-p'>
              How? The website works by collecting data from user input through
              a designated QR code, automated e-mail would be sent to contacts
              through the form in the home page.
            </p>
            <p className='about-2-p'>
              Who? This project is designed for Universities to use
            </p>
            <p className='about-2-p'>
              Why? Research shows that contact tracing is most effective during
              the early period of infection.
            </p>
          </div>
        </div>
      </div>
      <div className='about-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default AboutContent;
