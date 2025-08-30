// import React from "react";
// import classes from "./About.module.css";

// const About = () => {
//   return (
//     <div className={classes.aboutContainer}>
//       <h2 className={classes.subTitle}>About Us</h2>
//       <p className={classes.paragraphOne}>
//         Driven by innovation, powered by expertise{" "}
//       </p>
//       <p className={classes.paragraphTwo}>
//         We are a passionate team of designers, developers, and digital
//         strategists dedicated to creating web solutions that help businesses
//         thrive in the digital age.
//       </p>

//       <div className={classes.cards}>
//         <div className={classes.card}>
//           <p className={classes.paragraphOne}>Our Vision</p>
//           <p className={classes.paragraphTwo}>
//             To be a trusted partner for businesses seeking exceptional online
//             presence and cutting-edge digital solutions. We believe in
//             collaboration, transparency, and quality. Every project is
//             approached with creativity, technical precision, and a focus on the
//             client's goals
//           </p>
//         </div>

//         <div className={classes.card}>
//           <p className={classes.paragraphOne}>Our Mission</p>
//           <p className={classes.paragraphTwo}>
//             To deliver innovative, high-performance websites and web
//             applications that empower our clients to grow and succeed
//           </p>
//         </div>
//       </div>

//       <div className={classes.whyChooseUsContainer}>
//         <h2 className={classes.subTitle}>Why Choose Us?</h2>
//         <div className={classes.whyChooseUsContent}>
//           <div className={classes.whyLeft}>
//             <p className={classes.paragraphOne}>Your success is our priority</p>
//             <p className={classes.paragraphTwo}>
//               We combine expertise, creativity, and a client-first mindset to
//               ensure you get more than just a website — you get a solution that
//               works for your business.
//             </p>
//           </div>
//           <div className={classes.whyRight}>
//             <ul>
//               <li>
//                 Tailored Solutions – Every project is custom-built to fit your
//                 unique goals.
//               </li>
//               <li>24/7 Support – Always here when you need us.</li>
//               <li>Custom-built to fit your unique goals.</li>
//               <li>
//                 Fast Delivery – We meet deadlines without compromising quality.
//               </li>
//               <li>
//                 Proven Reliability – Secure, optimized, and scalable web
//                 solutions.
//               </li>
//               <li>
//                 Cutting-Edge Technology – We use the latest tools and frameworks
//                 to keep your site ahead of the curve.
//               </li>
//               <li>
//                 Long-Term Partnership – We’re here for the journey, not just the
//                 launch.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import { motion } from "framer-motion";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <motion.h2
        className={classes.subTitle}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h2>

      <motion.p
        className={classes.paragraphOne}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Driven by innovation, powered by expertise
      </motion.p>

      <motion.p
        className={classes.paragraphTwo}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        We are a passionate team of designers, developers, and digital
        strategists dedicated to creating web solutions that help businesses
        thrive in the digital age.
      </motion.p>

      <motion.div
        className={classes.cards}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.div className={classes.card}>
          <p className={classes.paragraphOne}>Our Vision</p>
          <p className={classes.paragraphTwo}>
            To be a trusted partner for businesses seeking exceptional online
            presence and cutting-edge digital solutions. We believe in
            collaboration, transparency, and quality. Every project is
            approached with creativity, technical precision, and a focus on the
            client's goals.
          </p>
        </motion.div>

        <motion.div className={classes.card}>
          <p className={classes.paragraphOne}>Our Mission</p>
          <p className={classes.paragraphTwo}>
            To deliver innovative, high-performance websites and web
            applications that empower our clients to grow and succeed.
          </p>
        </motion.div>
      </motion.div>

      <div className={classes.whyChooseUsContainer}>
        <motion.h2
          className={classes.subTitle}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Why Choose Us?
        </motion.h2>

        <div className={classes.whyChooseUsContent}>
          <motion.div
            className={classes.whyLeft}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className={classes.paragraphOne}>Your success is our priority</p>
            <p className={classes.paragraphTwo}>
              We combine expertise, creativity, and a client-first mindset to
              ensure you get more than just a website — you get a solution that
              works for your business.
            </p>
          </motion.div>

          <motion.div
            className={classes.whyRight}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <ul>
              <li>
                Tailored Solutions – Every project is custom-built to fit your
                unique goals.
              </li>
              <li>24/7 Support – Always here when you need us.</li>
              <li>Custom-built to fit your unique goals.</li>
              <li>
                Fast Delivery – We meet deadlines without compromising quality.
              </li>
              <li>
                Proven Reliability – Secure, optimized, and scalable web
                solutions.
              </li>
              <li>
                Cutting-Edge Technology – We use the latest tools and frameworks
                to keep your site ahead of the curve.
              </li>
              <li>
                Long-Term Partnership – We’re here for the journey, not just the
                launch.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
