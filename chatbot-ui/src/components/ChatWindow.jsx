import Message from "./Message";
import { useState } from "react";

function ChatWindow() {
  const [messages, setMessages] = useState([
    {
      text: "hello",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([
      ...messages,
      {
        text: input,
        sender: "user",
      },
    ]);

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <span className="status-dot"></span>
        JARVIS
      </div>

      <div className="chat-body">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
      </div>

      <div className="button-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;