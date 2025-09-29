// import React from "react";
// import ServiceCard from "../../components/ServiceCard/ServiceCard";
// import classes from "./OurServices.module.css";
// import { motion } from "framer-motion";

// const OurServices = () => {
//   const services = [
//     {
//       title: "Web Application Development",
//       subtitle: "Modern, scalable, and functional solutions",
//       description:
//         "We create custom web applications focused on performance, security, and intuitive user experience. Perfect for automation, e-commerce, and specific business needs",
//     },
//     {
//       title: "Website Development",
//       subtitle: "Your brand, online",
//       description:
//         "We build responsive and fast websites that showcase your company in the best way possible — from simple presentation pages to complex platforms.",
//     },
//     {
//       title: "Custom Design",
//       subtitle: "A unique look for a unique business",
//       description:
//         "We craft a distinctive visual identity that sets your brand apart. Every design is tailored to your business goals and your target audience.",
//     },
//     {
//       title: "SEO Optimization",
//       subtitle: "Faster, better, higher on Google",
//       description:
//         "We improve performance, SEO, and UX to ensure better search engine rankings and an exceptional user experience.",
//     },
//     {
//       title: "Maintenance and Support",
//       subtitle: "Security and continuous growth",
//       description:
//         "We provide regular technical maintenance, security updates, and upgrades to ensure uninterrupted performance of your website or application.",
//     },
//   ];

//   return (
//     <div className={classes.ourServices}>
// <motion.h2
//   className={classes.heading}
//   initial={{ opacity: 0, y: -50 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 1 }}
// >
//   Our Services
// </motion.h2>
//       <div className={classes.serviceCards}>
//         {services.map((service, index) => (
//           <ServiceCard
//             key={index}
//             title={service.title}
//             subtitle={service.subtitle}
//             description={service.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurServices;
import React from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import classes from "./OurServices.module.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const OurServices = () => {
  const { t } = useTranslation();

  const services = [
    { key: "webapps" },
    { key: "websites" },
    { key: "custom" },
    { key: "seo" },
    { key: "maintenance" },
  ];

  return (
    <div className={classes.ourServices}>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("services.title")}
      </motion.h2>

      <div className={classes.serviceCards}>
        {services.map(({ key }, index) => (
          <ServiceCard
            key={index}
            title={t(`services.list.${key}.title`)}
            subtitle={t(`services.list.${key}.subtitle`)}
            description={t(`services.list.${key}.description`)}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
