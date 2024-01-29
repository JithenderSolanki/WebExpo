// App.js
import React from "react";
import "./App.css"; // Import your CSS file

import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import WhyParticipateSection from "./components/WhyParticipateSection";
import Rounds from "./components/Rounds";
import CertificateSection from "./components/CertificateSection";
import CashPrizeSection from "./components/CashPrizeSection";
import RegisterSection from "./components/RegisterSection";
import PaymentSection from "./components/PaymentSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <WhyParticipateSection />
      <Rounds />
      <CertificateSection />
      <CashPrizeSection />
      <RegisterSection />
      <PaymentSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
