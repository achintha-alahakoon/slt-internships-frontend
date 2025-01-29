import React from "react";
import { Button } from "@mui/material";
import Apply from "../Pages/Apply";

const AvailablePositions = () => {
  return (
    <div>
      <h4 style={{ fontSize: "16px", marginBottom: "4px" }}>
        Beware when applying for internships online
      </h4>
      <p style={{ marginTop: 0 }}>
        Many large employers are targets of fraudsters. SLT will never ask internship 
        applicants for credit card information or to buy equipment directly. 
        Ensure you apply only through our official website. If you have concerns, 
        please <a href="/contact-us" style={{ color: "#1450A3", textDecoration: "none", fontWeight: "bold" }}>
          get in touch
        </a>.
      </p>
      
      <h2 style={{ color: "#1450A3", fontSize: "32px", margin: "50px 0 0" }}>
        Looking for new opportunities?
      </h2>
      <p style={{ marginTop: 0 }}>
        Stay updated with the latest internship openings by subscribing to our notifications.
      </p>
      <Apply />
    </div>
  );
};

export default AvailablePositions;
