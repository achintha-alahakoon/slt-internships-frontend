import React from "react";
import "../Styles/AboutUs.css";
import Footer from "../Components/Footer";
import Office from "../assets/business.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Content Section */}
      <div className="content">
        <div className="image-section">
          <img src={Office} alt="SLT Office" className="image" />
        </div>

        <div className="text-section">
          <p className="intro-text">
            Sri Lanka Telecom (SLT) is the National Information and
            Communications Technology (ICT) solutions provider and the leading
            broadband and backbone infrastructure services provider of Sri
            Lanka. For over 163 years, the Company has served the Nation’s need
            for connectivity, operating on fixed, mobile, and other operational
            segments. SLT fulfills the needs of over nine million customers on
            the island through its high-speed fiber, copper, and wireless access
            network.
          </p>
          <p className="intro-text">
            The company’s transformation into a digital service provider has
            enabled it to move beyond traditional telecommunications services,
            providing a variety of services and solutions that cater to a
            digital lifestyle. SLT is positioned as a key global player by
            connecting Sri Lanka to the world through international submarine
            cable systems.
          </p>
        </div>
      </div>

      <div className="principal-lines-section">
        <h2 className="subHeading">Principal Lines of Business</h2>
        <p className="text">
          The Sri Lanka Telecom (“SLT”) Group provides diversified services and
          a wide range of ICT solutions to its diverse customer base through the
          latest technologies. These cover fixed and mobile telephony, broadband
          data services, Internet Protocol Television (IPTV), cloud computing,
          and more.
        </p>
      </div>

      {/* Footer Section */}
      <div className="about-us-footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;

