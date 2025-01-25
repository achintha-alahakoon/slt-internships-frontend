import React from "react";
import Logo from "../assets/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import "../Styles/Apply.css";

const Apply = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="apply-header">
        <div>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "220px", height: "80px", marginTop: "15px", marginLeft: "100px" }}
          />
        </div>
        <div>
          <p style={{ fontWeight: "bold" }}>Internship</p>
          <p>
            <FaLocationDot />
            Location
          </p>
        </div>
      </div>

      <div className="apply-content">
        <h2>Personal Information</h2>
        <p>Fields marked with * are required.</p>
        <div className="apply-form">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">First Name*</label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name*</label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            {/* Email Fields */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-email">Confirm Your Email*</label>
                <input
                  type="email"
                  id="confirm-email"
                  placeholder="Re-enter your email"
                  required
                />
              </div>
            </div>

            {/* Location and Phone Fields */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="location">Place of Residence*</label>
                <input
                  type="text"
                  id="location"
                  placeholder="Enter your location"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Additional Fields */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="resume">Resume*</label>
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message to the Hiring Team</label>
              <textarea
                id="message"
                placeholder="Write a message to the hiring team"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
