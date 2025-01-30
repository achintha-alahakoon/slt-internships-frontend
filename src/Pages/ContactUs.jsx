import React from "react";
import "../Styles/ContactUs.css";
import Footer from "../Components/Footer";

const ContactUs = () => {
  return (
    <div className="outerContainer">
      <div className="container">
        {/* Header Section */}
        <h1 className="header">Contact Us</h1>
        <p className="intro-text">
          Welcome to the SLT Trainee System support page. Reach out for any
          inquiries, assistance, or feedback. We’re here to help!
        </p>

        {/* Office Section */}
        <div className="section">
          <h2 className="subHeading"> Our Office</h2>
          <p className="text">🏢SLT Headquarters, Lotus Road, Colombo 01, Sri Lanka</p>
        </div>

        {/* Email Section */}
        <div className="section">
          <h2 className="subHeading"> Email Us</h2>
          <p className="text">📧traineesupport@slt.lk</p>
        </div>

        {/* Emergency Contacts Section */}
        <div className="section">
          <h2 className="subHeading"> Emergency Contacts</h2>
          <ul className="emergency-list">
            <li> System Admin: +94 11 2345 678</li>
            <li> IT Helpdesk: +94 11 3456 789</li>
            <li>Supervisor Support: +94 11 4567 890</li>
          </ul>
        </div>

        {/* Additional Information Section */}
        <div className="section">
          <h2 className="subHeading">Additional Information</h2>
          <p className="text">
            ℹ️ For more details about our services, visit our website or contact our support team.
          </p>
          <p className="text">
            🌐 Website: <a href="https://www.slt.lk" className="link">www.slt.lk</a>
          </p>
          <p className="text">
            📧 Support Team: <a href="mailto:support@slt.lk" className="link">support@slt.lk</a>
          </p>
        </div>

        {/* Map Section */}
        <div className="section">
          <h2 className="subHeading">Find Us Here</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.123456789!2d79.8478!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2591b1b1b1b1b%3A0x1b1b1b1b1b1b1b!2sSLT%20Headquarters!5e0!3m2!1sen!2slk!4v1611234567890!5m2!1sen!2slk"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="SLT Headquarters Location"
          ></iframe>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
