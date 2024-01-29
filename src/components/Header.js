import React, { useEffect } from "react";
import "./Header.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <header className="header" data-aos="zoom-in">
      <h1 style={{ textAlign: "center" }}>Welcome to WebExpo!</h1>
      <h5 style={{ textAlign: "center" }}>
        Sign up now and let your creativity shine!
      </h5>
    </header>
  );
};

export default Header;
