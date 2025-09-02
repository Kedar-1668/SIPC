import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeInSection from "../components/FadeInSection";
import "./JoinUs.css";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roll: "",
    phone: "",
    club: "",
  });
  const [status, setStatus] = useState("");
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 15}px, ${e.clientY - 15}px, 0)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (result.status === "success") {
        setStatus("✅ Registration successful!");
        setFormData({ name: "", email: "", roll: "", phone: "", club: "" });
      } else {
        setStatus("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Error submitting form.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="cursor-glow" ref={cursorRef}></div>
      <FadeInSection>
        <div className="section form">
          <div className="form-container">
            <h1 className="form-title">Join SIPC</h1>
            <p className="form-subtitle">Fill in your details to register</p>

            <form className="club-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="roll"
                placeholder="SIC"
                value={formData.roll}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <button type="submit">Register</button>
            </form>
            <p className="form-status">{status}</p>
          </div>
        </div>
      
      </FadeInSection>

      <Footer />
    </>
  );
};

export default JoinUs;
