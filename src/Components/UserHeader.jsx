import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Tabs, Tab, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  XOutlined,
} from "@ant-design/icons";
import Logo from "../assets/logo.png";
import "../Styles/UserHeader.css";

const UserHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Check if Home tab is active and not scrolled
  const isHomeActive = activeTab === "/" && !scrolled;
  const textColor = isHomeActive ? "white" : "black";

  return (
    <AppBar className={`appBar ${scrolled ? "scrolled" : ""}`}>
      <Toolbar className="toolbar">
        {/* Logo Section */}
        <Box>
          <img src={Logo} alt="Logo" className="logo" />
        </Box>

        {/* Navigation Tabs */}
        <Box className="tabs-container">
          <Tabs value={activeTab} onChange={handleChange} textColor="primary" indicatorColor="primary">
            <Tab label="Home" value="/" component={Link} to="/" style={{ fontWeight: activeTab === "/" ? "bold" : "normal", color: textColor }} />
            <Tab label="About Us" value="/about-us" component={Link} to="/about-us" style={{ fontWeight: activeTab === "/about-us" ? "bold" : "normal", color: activeTab === "/about-us" ? "#1450A3" : textColor }} />
            <Tab label="Join With Us" value="/join-with-us" component={Link} to="/join-with-us" style={{ fontWeight: activeTab === "/join-with-us" ? "bold" : "normal", color: activeTab === "/join-with-us" ? "#1450A3" : textColor }} />
            <Tab label="Contact Us" value="/contact-us" component={Link} to="/contact-us" style={{ fontWeight: activeTab === "/contact-us" ? "bold" : "normal", color: activeTab === "/contact-us" ? "#1450A3" : textColor }} />
          </Tabs>
        </Box>

        {/* Social Icons */}
        <Box className="social-icons">
          <FacebookOutlined style={{ fontSize: "26px", cursor: "pointer", color: textColor }} />
          <InstagramOutlined style={{ fontSize: "26px", cursor: "pointer", color: textColor }} />
          <XOutlined style={{ fontSize: "26px", cursor: "pointer", color: textColor }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UserHeader;
