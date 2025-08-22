"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, Bot, User } from "lucide-react";
import ReactMarkdown from 'react-markdown';

// Main Component
export default function ChatWidget() {
  // --- UNTOUCHED LOGIC ---
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [userKey, setUserKey] = useState("");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    let key = localStorage.getItem("indocs_ai_key");
    if (!key) {
      key = "user-" + Math.random().toString(36).substr(2, 9);
      localStorage.setItem("indocs_ai_key", key);
    }
    setUserKey(key);

    if (isOpen && messages.length === 0) {
      const greeting = {
        role: "assistant",
        text: "Hi there 👋, my self **Macda**! I am your assistant on behalf of Indocs Media. How can I help you today?",
      };
      setMessages([greeting]);
    }
  }, [isOpen]);

  useEffect(() => {
    // Auto-scroll to the latest message
    if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    const res = await fetch("https://macdabackend.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input, userKey }),
    });

    const data = await res.json();
    const reply = { role: "assistant", text: data.reply };
    setMessages((prev) => [...prev, reply]);
  };
  // --- END OF UNTOUCHED LOGIC ---


  // -- UI COMPONENTS --
  const ChatHeader = () => (
    <div className="p-4 border-b bg-white rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
            <div className="relative">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Bot className="text-purple-600" size={24} />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
                <h3 className="font-semibold text-gray-800">Macda</h3>
                <p className="text-xs text-gray-500">Indocs Media Assistant</p>
            </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
        </button>
    </div>
  );

  const Message = ({ message }) => {
    const isUser = message.role === "user";
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`flex items-end gap-2 ${isUser ? "justify-end" : "justify-start"}`}
      >
        {!isUser && (
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center self-start">
                <Bot className="text-gray-600" size={18} />
            </div>
        )}
        <div
          className={`max-w-xs md:max-w-md px-4 py-3 text-sm ${
            isUser
              ? "bg-purple-600 text-white rounded-t-2xl rounded-l-2xl"
              : "bg-gray-100 text-gray-800 rounded-t-2xl rounded-r-2xl"
          }`}
        >
          <ReactMarkdown components={{p: ({node, ...props}) => <p className="m-0" {...props} />}}>
            {message.text}
          </ReactMarkdown>
        </div>
      </motion.div>
    );
  };
  
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end">
      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-[90vw] sm:w-96 h-[70vh] max-h-[700px] bg-gray-50 shadow-2xl rounded-2xl flex flex-col overflow-hidden border"
          >
            <ChatHeader />
            <div ref={chatContainerRef} className="flex-1 p-4 space-y-4 overflow-y-auto">
              {messages.map((m, i) => (
                <Message key={i} message={m} />
              ))}
            </div>
            <div className="p-4 border-t bg-white">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  className="flex-1 w-full bg-gray-100 border-transparent text-black rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
                  placeholder="Type a message..."
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim()}
                  className="w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-full transition-all duration-200 ease-in-out hover:bg-purple-700 disabled:bg-purple-300 disabled:cursor-not-allowed transform hover:scale-110 active:scale-95"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Widget Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-xl flex items-center justify-center mt-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle chat"
      >
        <AnimatePresence mode="wait">
            <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -30 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 30 }}
                transition={{ duration: 0.2 }}
            >
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
            </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}