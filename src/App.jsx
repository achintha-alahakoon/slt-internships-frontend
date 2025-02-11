import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserHeader from "./Components/UserHeader";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import JoinWithUs from "./Pages/JoinWithUs";
import Apply from "./Pages/Apply";

const AppContent = () => {

  return (
    <div>
    <UserHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/join-with-us" element={<JoinWithUs />} />
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
