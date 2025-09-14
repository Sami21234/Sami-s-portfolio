
import React, { useState } from "react";
import botData from "../../botData";
import "./chatbot.css";

export default function Chatbot() {
  const [messages, setMessages] = useState([]); // no localStorage now
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const addMessage = (content, sender) => {
    setMessages((prev) => [...prev, { ...content, sender }]);
  };

  const getBotReply = (input) => {
    const lower = input.toLowerCase();

    if (["hi", "hello", "hii"].some((greet) => lower.includes(greet))) {
      return {
        type: "text",
        text: "Hey 👋 How can I help you? You can ask about Sami's About, Contact, Projects, Education, or Skills.",
      };
    }
    if (lower.includes("about")) return { type: "text", text: botData.about };
    if (lower.includes("project")) return { type: "projects", projects: botData.projects };
    if (lower.includes("education")) return { type: "text", text: botData.education };
    if (lower.includes("skill")) return { type: "text", text: botData.skills.join(", ") };
    if (lower.includes("contact")) return { type: "text", text: botData.contact };

    return {
      type: "text",
      text: "I’m not sure about that 🤔. Try asking about projects, education, skills, or contact!",
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;
    addMessage({ type: "text", text: input }, "user");

    const reply = getBotReply(input);
    addMessage(reply, "bot");

    setInput("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>

      {/* Chatbot Window */}
      {open && (
        <div className="chatbot-container floating">
          <div className="chatbot-header">
            <span>🤖 Sami'sBot</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-message ${msg.sender}`}>
                {msg.type === "text" && <p>{msg.text}</p>}

                {msg.type === "projects" && (
                  <ul className="project-list">
                    {msg.projects.map((p, idx) => (
                      <li key={idx}>
                        <strong>{p.name}</strong>: {p.description}{" "}
                        <a href={p.link} target="_blank" rel="noreferrer">
                          🔗 View
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask me about Sami..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
