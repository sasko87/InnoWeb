import React from "react";
import { motion } from "framer-motion";

const Subtitle = ({ children }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.h2>
  );
};

export default Subtitle;
