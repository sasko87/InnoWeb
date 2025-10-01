// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";
// import styles from "./ChatAI.module.css";

// const socket = io("http://localhost:3000");

// const ChatAI = ({ initialMessages = [], onClose }) => {
//   const [messages, setMessages] = useState(initialMessages || []);
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     socket.on("receive_message", (reply) => {
//       setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
//     });

//     return () => {
//       socket.off("receive_message");
//     };
//   }, []);

//   const sendMessage = () => {
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input };
//     setMessages((prev) => [...prev, userMessage]);

//       setTimeout(() => {
//       setMessages((prev) => [...prev, { sender: "bot", text: "Thanks for your message!" }]);
//     }, 500);
//     setInput("");
//   };

//   return (
//     <div className={styles.chatContainer}>
//       <div className={styles.chatHeader}>
//          {onClose && (
//           <button className={styles.closeButton} onClick={onClose}>
//         X
//           </button>
//         )}
//            </div>
//           <div className={styles.chatBox}>
//         {messages.map((msg, index) => (
//           <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       <div className="inputArea">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type a message..."
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default ChatAI;
