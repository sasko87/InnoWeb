import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Projects from "../Projects/Projects";
import OurServices from "../Services/OurServices";
import About from "../About/About";
import Pricing from "../Pricing/Pricing";
import ChatAI from "../../components/ChatAI/ChatAI";
import chatAiIcon from "../../assets/chatbot.jpg";

const HomePage = () => {
  const [showChat, setShowChat] = useState(false);
  const [initialMessages, setInitialMessages] = useState([]);

  const handleChatClick = () => {
    setInitialMessages([{ sender: "bot", text: "Hello, how can I help you?" }]);
    setShowChat(true);
  };

  return (
    <>
      <div>
        <section id="hero">
          <Hero />
        </section>
        <section id="services">
          <OurServices />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="about">
          <About />
        </section>
      </div>

      {/* Floating ChatAi icon */}
      <img
        src={chatAiIcon}
        alt="Chatbot"
        loading="lazy"
        onClick={handleChatClick}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          cursor: "pointer",
          borderRadius: "50%",
          backgroundColor: "#fff",
          border: "2px solid #093d62ff",
          zIndex: 1000,
        }}
      />

      {/* Chat Window */}
      {showChat && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            zIndex: 999,
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 15px 42px rgba(0, 0, 0, 0.3)",
            overflow: "hidden",
          }}
        >
          <ChatAI
            initialMessages={initialMessages}
            onClose={() => setShowChat(false)}
          />
        </div>
      )}
    </>
  );
};

export default HomePage;
