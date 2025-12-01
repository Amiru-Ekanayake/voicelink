import React, { useState } from "react";
import { model } from "../aiClient";
import { IoSend } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const ChatPopup = () => {
    console.log("Loaded Gemini API Key:", import.meta.env.VITE_GEMINI_API_KEY);
    
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm VoiceLink AI, I am your 24/7 University Platform Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

const sendMessage = async () => {
  if (!input.trim()) return;

  console.log("➡️ Sending user message to Gemini:", input);

  const userMsg = { sender: "user", text: input };
  setMessages((prev) => [...prev, userMsg]);

  const prompt = input;
  setInput("");
  setLoading(true);

  try {
    // Convert messages into Gemini history format
    const history = messages.map((m) => ({
      role: m.sender === "user" ? "user" : "model",
      parts: [{ text: m.text }],
    }));

    console.log("📚 Gemini Chat History:", history);

    const chat = model.startChat({ history });

    const result = await chat.sendMessage(prompt);

    console.log("✅ Gemini Raw Response:", result);

    // This is where Gemini’s reply text actually is
    const reply = result.response.text();
    console.log("🤖 Gemini Reply:", reply);

    const botMsg = { sender: "bot", text: reply };
    setMessages((prev) => [...prev, botMsg]);

  } catch (err) {
    console.error("❌ GEMINI ERROR:", err);

    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: "Under Development." },
    ]);
  }

  setLoading(false);
};




  return (
    <>
      {/* Floating AI Button */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6A5CFF, #00C2FF)",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          color: "#fff",
          fontSize: "28px",
        }}
      >
        💬
      </button>

      {/* Chat Popup Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "25px",
            width: "360px",
            height: "480px",
            background: "#ffffff",
            borderRadius: "15px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            animation: "popup 0.3s ease",
            zIndex: 9999,
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #6A5CFF, #00C2FF)",
              padding: "15px",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong style={{ fontSize: "18px" }}>VoiceLink AI</strong>
              <p style={{ margin: 0, fontSize: "12px", opacity: 0.9 }}>
                Connecting Communities Through Feedback
              </p>
            </div>

            <IoClose
              size={26}
              style={{ cursor: "pointer" }}
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "15px",
              overflowY: "auto",
              background: "#f8f9ff",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "12px",
                  textAlign: msg.sender === "user" ? "right" : "left",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "10px 14px",
                    borderRadius: "12px",
                    maxWidth: "80%",
                    background:
                      msg.sender === "user"
                        ? "linear-gradient(135deg, #6A5CFF, #00C2FF)"
                        : "#fff",
                    color: msg.sender === "user" ? "white" : "#333",
                    boxShadow:
                      msg.sender === "bot"
                        ? "0 2px 5px rgba(0,0,0,0.1)"
                        : "none",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && <p>⏳ VoiceLink AI is typing…</p>}
          </div>

          {/* Input Section */}
          <div
            style={{
              padding: "10px",
              borderTop: "1px solid #eee",
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "25px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <IoSend size={28} color="#6A5CFF" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatPopup;
