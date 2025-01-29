import React, { useState } from "react";
import axios from "axios";
import "../Styles/Apply.css";

const Apply = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    location: "",
    phone: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      alert("Emails do not match!");
      return;
    }

    const uploadData = new FormData();
    uploadData.append("cv", formData.resume);
    uploadData.append("name", `${formData.firstName} ${formData.lastName}`);
    uploadData.append("email", formData.email);
    uploadData.append("phone", formData.phone);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/applicants/upload",
        uploadData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Basic " + btoa("admin:admin123"),
          },
        }
      );

      alert(response.data);
    } catch (error) {
      console.error("Error uploading CV:", error);
      alert("Failed to upload CV. Please try again.");
    }
  };

  return (
    <div className="apply-content">
      <h2>Personal Information</h2>
      <p>Fields marked with * are required.</p>
      <div className="apply-form">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                required
                onChange={handleChange}
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
                name="email"
                placeholder="Enter your email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmEmail">Confirm Your Email*</label>
              <input
                type="email"
                id="confirmEmail"
                name="confirmEmail"
                placeholder="Re-enter your email"
                required
                onChange={handleChange}
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
                name="location"
                placeholder="Enter your location"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="resume">Resume (PDF/DOCX)*</label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message to the Hiring Team</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write a message to the hiring team"
              rows="4"
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Apply;
