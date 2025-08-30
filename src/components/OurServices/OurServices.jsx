import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./OurServices.module.css";

const OurServices = () => {
  const services = [
    {
      title: "Web Applicatiom Development",
      subtitle: "Modern, scalable, and functional solutions",
      description:
        "We create custom web applications focused on performance, security, and intuitive user experience. Perfect for automation, e-commerce, and specific business needs",
    },
    {
      title: "Website Development",
      subtitle: "Your brand, online",
      description:
        "We build responsive and fast websites that showcase your company in the best way possible — from simple presentation pages to complex platforms.",
    },
    {
      title: "Custom Design",
      subtitle: "A unique look for a unique business",
      description:
        "We craft a distinctive visual identity that sets your brand apart. Every design is tailored to your business goals and your target audience.",
    },
    {
      title: "SEO Optimization ",
      subtitle: "Faster, better, higher on Google",
      description:
        "We improve performance, SEO, and UX to ensure better search engine rankings and an exceptional user experience.",
    },
    {
      title: "Maintenance and Support",
      subtitle: "Security and continuous growth",
      description:
        "We provide regular technical maintenance, security updates, and upgrades to ensure uninterrupted performance of your website or application.",
    },
  ];

  const renderServices = () => {
    return services.map((service, index) => (
      <ServiceCard
        key={index}
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
      />
    ));
  };

  return (
    <div className={styles.ourServices}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.serviceCards}>{renderServices()}</div>
    </div>
  );
};

export default OurServices;
