import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import UserHeader from "./Components/UserHeader";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import JoinWithUs from "./Pages/JoinWithUs";
import JobDetails from "./Pages/JobDetails";
import Apply from "./Pages/Apply";

const AppContent = () => {
  const location = useLocation();

  const noHeaderPaths = ["/job-details", "/apply"];

  return (
    <div>
      {!noHeaderPaths.includes(location.pathname) && <UserHeader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/join-with-us" element={<JoinWithUs />} />
        <Route path="/job-details" element={<JobDetails />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
