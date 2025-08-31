import React, { useState } from "react";
import classes from "./Contact.module.css";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Development",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Website Development",
      message: "",
    });
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

      
      <form className={classes.form} onSubmit={handleSubmit}>
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
          >
            <option>Website Development</option>
            <option>Web Application</option>
            <option>Maintenance</option>
            <option>SEO Optimization</option>
            <option>Custom Design</option>
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

        <button type="submit">Submit</button>
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
