import React, { useEffect, useState } from "react";
import classes from "./Contact.module.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";

const ContactPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serviceFromUrl = queryParams.get("service");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: serviceFromUrl || "",
    message: "",
  });
  const [serverMessage, setServerMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   alert("Thank you for contacting us! We will get back to you soon.");
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     service: "Website Development",
  //     message: "",
  //   });
  // };

  const submitMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setServerMessage(data.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Website Development",
          message: "",
        });
      } else {
        setLoading(true);
        setServerMessage(data.error);
      }
    } catch {
      setServerMessage("Something went wrong. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      <motion.h2
        className={classes.heading}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h2>
      <p>
        Whether you’re looking to develop a new website, a mobile app, or
        purchase an existing solution, our team is ready to help.
      </p>

      <form className={classes.form} onSubmit={submitMessage}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone (Optional):
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Service Required:
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            disabled={!!serviceFromUrl}
          >
            <option>Website Development BASIC</option>
            <option>Website Development PRO</option>
            <option>Website Development PREMIUM</option>
            <option>Web Application PREMIUM</option>
            <option>Maintenance PREMIUM</option>
            <option>SEO Optimization</option>
            <option>Custom Design PREMIUM</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        {serverMessage && <p>{serverMessage}</p>}
        <button type="submit" style={{ width: "100%" }}>
          {loading ? "Sending" : "Submit"}
        </button>
        {/* <button type="submit">{loading ? "Sending" : "Submit"}</button> */}
      </form>

      <div className={classes.info}>
        <p>
          <strong>Email:</strong> contact@yourcompany.com
        </p>
        <p>
          <strong>Phone:</strong> ???
        </p>
        <p>
          <strong>Address:</strong> ???
        </p>
        <p>
          <strong>Business Hours:</strong> 24/7{" "}
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
