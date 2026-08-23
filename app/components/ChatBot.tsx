"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { BOT_NAME, BOT_AVATAR, QUICK_PROMPTS, getBotReply } from "../data/portfolio-data";

export default function ChatBot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi, I'm Kiro — Ayush's assistant. Ask me about his projects, skills, or how to reach him!",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [botTyping, setBotTyping] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowGreeting(true), 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, botTyping]);

  const sendChat = (raw: string) => {
    const text = raw.trim();
    if (!text || botTyping) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setChatInput("");
    setBotTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: getBotReply(text) }]);
      setBotTyping(false);
    }, 650);
  };

  const toggleChat = () => {
    setChatOpen((v) => !v);
    setShowGreeting(false);
    setShowBadge(false);
  };

  return (
    <>
      {/* Greeting bubble */}
      <AnimatePresence>
        {showGreeting && !chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-24 right-6 z-[70] max-w-[220px]"
          >
            <div className="relative bg-white rounded-2xl rounded-br-sm shadow-xl px-4 py-3 text-sm text-gray-800 border border-gray-200">
              <button
                onClick={() => setShowGreeting(false)}
                aria-label="Dismiss greeting"
                className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-gray-300 hover:bg-gray-400 rounded-full text-white text-xs"
              >
                <X size={12} />
              </button>
              🖐️ Hey! Ask me about Ayush!
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-[70] w-[90vw] max-w-sm h-[70vh] max-h-[560px] flex flex-col rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200"
          >
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-900 text-white">
              <span className="heartbeat w-9 h-9 rounded-full overflow-hidden ring-2 ring-orange-400 shrink-0 inline-block">
                <img
                  src={BOT_AVATAR}
                  alt={BOT_NAME}
                  className="w-full h-full object-cover"
                />
              </span>
              <div>
                <p className="font-semibold leading-tight">{BOT_NAME}</p>
                <p className="text-xs text-gray-400 leading-tight">
                  Ayush's Assistant
                </p>
              </div>
            </div>

            <div
              ref={chatBodyRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`fade-in-up flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-orange-500 text-white rounded-br-sm"
                        : "bg-white text-gray-800 shadow-sm rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {botTyping && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-2 shadow-sm">
                    <Loader2 size={16} className="animate-spin text-orange-500" />
                  </div>
                </div>
              )}
            </div>

            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {QUICK_PROMPTS.map((qp) => (
                  <button
                    key={qp}
                    onClick={() => sendChat(qp)}
                    className="text-xs px-3 py-1.5 rounded-full bg-gray-100 hover:bg-orange-100 text-gray-700 transition-colors"
                  >
                    {qp}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendChat(chatInput);
              }}
              className="flex items-center gap-2 p-3 border-t border-gray-200 bg-white"
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder={`Ask ${BOT_NAME} anything...`}
                className="flex-1 px-3 py-2 rounded-full bg-gray-100 text-sm outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                disabled={botTyping || !chatInput.trim()}
                className="p-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 rounded-full text-white transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <button
        onClick={toggleChat}
        aria-label="Open chat assistant"
        className="fixed bottom-6 right-6 z-[70] w-14 h-14 rounded-full shadow-lg overflow-visible bg-orange-500 hover:bg-orange-600 text-white transition-colors flex items-center justify-center"
      >
        {chatOpen ? (
          <X size={24} />
        ) : (
          <span className="heartbeat relative block w-full h-full rounded-full overflow-hidden ring-2 ring-white">
            <img
              src={BOT_AVATAR}
              alt={BOT_NAME}
              className="w-full h-full object-cover"
            />
            {showBadge && (
              <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-red-500 text-white text-[9px] font-bold rounded-full border-2 border-white">
                1
              </span>
            )}
          </span>
        )}
      </button>
    </>
  );
}
