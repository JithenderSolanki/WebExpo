import React, { useEffect } from "react";
import "./Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <footer className="footer" style={{ textAlign: "center" }}>
      <p>&copy;WebExpo. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
