
import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import styles from "./ChatAI.module.css";

const socket = io("http://localhost:3000", {
  transports: ["websocket"],
  autoConnect: true,
});

const ChatAI = ({ initialMessages = [], onClose }) => {
  const [messages, setMessages] = useState(initialMessages || []);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesRef = useRef(messages);
  const awaitingIdRef = useRef(null);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    
    socket.on("receive_message", ({ reply, requestId }) => {
      if (requestId && awaitingIdRef.current !== requestId) {
        setMessages(prev => [...prev, { sender: "bot", text: reply, id: Date.now() }]);
        return;
      }

      setMessages(prev => [...prev, { sender: "bot", text: reply, id: Date.now() }]);
      setIsTyping(false);
      awaitingIdRef.current = null;
    });

    socket.on("stream_message", ({ chunk, requestId }) => {
      setMessages(prev => {
        const last = prev[prev.length - 1];
        if (last && last.sender === "bot" && last.requestId === requestId) {
          const newLast = { ...last, text: (last.text || "") + chunk };
          return [...prev.slice(0, -1), newLast];
        }
        return [...prev, { sender: "bot", text: chunk, requestId, id: Date.now() }];
      });
      setIsTyping(true);
    });

    socket.on("message_error", ({ message, requestId }) => {
      setMessages(prev => [...prev, { sender: "bot", text: `Error: ${message}`, error: true }]);
      setIsTyping(false);
      awaitingIdRef.current = null;
    });

    return () => {
      socket.off("receive_message");
      socket.off("stream_message");
      socket.off("message_error");
    };
  }, []);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { sender: "user", text: trimmed, id: Date.now() };
    const conversation = [...messagesRef.current, userMessage];

    setMessages(prev => [...prev, userMessage]);

    const requestId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    awaitingIdRef.current = requestId;
    setIsTyping(true);
    setInput("");

    socket.emit("send_message", { conversation, requestId, options: { temperature: 0.2, max_tokens: 800 } });
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <div>Chat</div>
        {onClose && <button className={styles.closeButton} onClick={onClose}>X</button>}
      </div>

      <div className={styles.chatBox}>
        {messages.map((msg, idx) => (
          <div key={msg.id || idx} className={`${styles.message} ${styles[msg.sender]}`}>
            <div className={styles.messageText}>{msg.text}</div>
          </div>
        ))}
        {isTyping && <div className={`${styles.message} ${styles.bot}`}>Bot is typing…</div>}
      </div>

      <div className={styles.inputArea}>
        <textarea
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={onKeyDown}
          rows={2}
        />
        <button className={styles.sendButton} onClick={sendMessage} disabled={!input.trim()}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatAI;

