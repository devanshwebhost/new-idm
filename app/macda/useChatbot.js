import { useState, useEffect, useCallback } from 'react';
import Fuse from 'fuse.js';

const useChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [quickQuestions, setQuickQuestions] = useState([]);
  const [chatbotState, setChatbotState] = useState({
    stage: "default",
    tempName: "",
    tempEmail: "",
    tempPhone: "",
    tempDate: "",
    tempTime: "",
  });

  const chatbotResponses = {
    hello: (name) => `👋 Hey ${name ? name + "!" : "there!"} I'm Macda 🤖, your AI assistant from Indocs Media. How can I assist you today?`,
    whoAmI: (name) => `You are ${name || "a valued visitor"}! I'm Macda 🤖, here to help you with Indocs Media's services.`,
    myName: "I am Macda, your friendly AI assistant from Indocs Media! What's on your mind?",
    aboutCompany: "🏢 Indocs Media is a dynamic creative agency specializing in **UI/UX Design & Web Development**, **Video Production**, and **Creative Design**.",
    services: "🛠️ We offer **UI/UX Design & Web Dev**, 🎥 **Video Production**, and 🎨 **Creative Design**. Which one are you curious about?",
    "ui/ux": "🖥️ Our UI/UX team crafts modern, responsive websites. It’s clean, smooth, and user-focused.",
    video: "🎥 We create stunning reels, ads, and wedding highlights that captivate!",
    design: "🎨 From branding to social creatives, we design visuals that speak volumes.",
    contact: "📩 You can contact us through the form or reach out via social links in the footer.",
    book: "🗓️ Awesome! Let's get your appointment booked. May I know your name?",
    faq: {
      "working hours": "🕙 We operate from 10 AM to 6 PM, Monday to Friday.",
      "location": "📍 We're based in New Delhi, India.",
      "internships": "🎓 Yes! Reach out to us via email for internship opportunities."
    },
    
    confirmed: (name, email, phone, date, time) => `✅ Appointment confirmed:\n👤 Name: ${name}\n📧 Email: ${email}\n📱 Phone: ${phone}\n🗓️ Date: ${date}\n🕒 Time: ${time}`,
    default: "🤖 Hmm... I didn’t quite get that. Try asking about our services or say 'book appointment'.",
  };

  const intentKeywords = {
    greetings: ["hi", "hello", "hey", "yo"],
    booking: ["appointment", "book", "schedule", "meeting"],
    aboutCompany: ["about indocs media", "about idm", "what is indocs media"],
    servicesList: ["your services", "list services", "services"],
    generalServicesQuery: ["service", "what can you do", "offerings"],
    video: ["video", "film", "reel", "production", "shoot", "ad"],
    uiUx: ["ui", "web", "website", "ux", "app", "development"],
    design: ["design", "branding", "logo", "creative"],
    contact: ["contact", "email", "phone", "get in touch"],
    thankYou: ["thank", "thanks", "cheers"],
    positiveAcknowledge: ["ok", "great", "cool", "awesome"],
    clearMemory: ["clear", "reset", "forget"],
    whoAmIQuery: ["who am i", "my name"],
    botNameQuery: ["what is your name", "who are you"],
  };

  const fuse = new Fuse(Object.entries(intentKeywords).flatMap(([intent, words]) =>
    words.map(word => ({ word, intent }))), {
    keys: ['word'],
    threshold: 0.4,
  });

  const appendMessage = useCallback((text, sender) => {
    setMessages(prev => [...prev, { text, sender }]);
  }, []);

  const simulateTyping = useCallback((text) => {
    const typingTime = Math.min(3000, text.length * 50);
    setMessages(prev => [...prev, { text: "Typing...", sender: 'ai', typing: true }]);
    setTimeout(() => {
      setMessages(prev => prev.slice(0, -1));
      appendMessage(text, 'ai');
    }, typingTime);
  }, [appendMessage]);

  const showQuickQuestionsWithOptions = useCallback((options) => {
    setQuickQuestions(options);
  }, []);

  const sendBookingEmail = async (data) => {
    try {
      const response = await fetch("https://macdabackend-email.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      response.ok
        ? simulateTyping("📩 Your appointment details have been sent successfully! We'll get in touch soon.")
        : simulateTyping(`⚠️ Failed to send appointment: ${result.error || "Unknown error"}`);
    } catch (err) {
      simulateTyping(`⚠️ Could not send appointment: ${err.message}`);
    }
  };

  const parseDate = (input) => {
    const formats = [
      { regex: /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/, order: ['month', 'day', 'year'] },
      { regex: /^(\d{1,2})\s+([a-zA-Z]+)\s+(\d{4})$/, order: ['day', 'monthName', 'year'] },
    ];

    for (const { regex, order } of formats) {
      const match = input.match(regex);
      if (match) {
        const parts = {};
        order.forEach((key, i) => parts[key] = match[i + 1]);

        let month = parts.month;
        if (parts.monthName) {
          const date = new Date(`${parts.monthName} 1, 2000`);
          if (isNaN(date.getTime())) return null;
          month = (date.getMonth() + 1).toString().padStart(2, '0');
        } else {
          month = month.toString().padStart(2, '0');
        }

        const day = parts.day.toString().padStart(2, '0');
        const year = parts.year.length === 2 ? `20${parts.year}` : parts.year;

        const dateStr = `${year}-${month}-${day}`;
        const dateObj = new Date(dateStr);
        return isNaN(dateObj.getTime()) ? null : dateStr;
      }
    }
    return null;
  };

  const isWeekday = (dateStr) => new Date(dateStr).getDay() >= 1 && new Date(dateStr).getDay() <= 5;
  const isValidTime = (timeStr) => {
    const [hours] = timeStr.split(":").map(Number);
    return hours >= 10 && hours < 18;
  };

  const isValidPhone = (input) => {
    const cleaned = input.replace(/\D/g, '');
    return cleaned.length >= 10 && cleaned.length <= 13;
  };

  const detectIntent = (input) => {
    const results = fuse.search(input);
    return results.length > 0 ? results[0].item.intent : null;
  };

  const handleChatbotLogic = useCallback((input) => {
    const norm = input.toLowerCase();
    const intent = detectIntent(norm);
    const { stage, tempName, tempEmail, tempPhone, tempDate } = chatbotState;

    if (intent === "clearMemory") {
      setChatbotState({ stage: "default", tempName: "", tempEmail: "", tempPhone: "", tempDate: "", tempTime: "" });
      simulateTyping("🧹 All memory cleared.");
      return;
    }

    if (norm.includes("change") && norm.includes("email") || norm.includes("update") && norm.includes("mail")) {
      setChatbotState(prev => ({ ...prev, stage: "askEmail" }));
      simulateTyping("✉️ Sure, please provide your updated email address.");
      return;
    }

    if (stage === "askName") {
      setChatbotState(prev => ({ ...prev, tempName: input, stage: "askEmail" }));
      simulateTyping(`👋 Hello ${input}! Can you please provide your email?`);
      return;
    }

    if (stage === "askEmail") {
      setChatbotState(prev => ({ ...prev, tempEmail: input, stage: "askPhone" }));
      simulateTyping("📱 Got it! Now, your phone number?");
      return;
    }

    if (stage === "askPhone") {
      if (!isValidPhone(input)) {
        simulateTyping("⛔ Please provide a valid phone number with at least 10 digits.");
        return;
      }
      setChatbotState(prev => ({ ...prev, tempPhone: input, stage: "askDate" }));
      simulateTyping("🗓️ Great. What date would you prefer? (e.g. 2025-07-22 or 03/26/03 or 3 Aug 2025)");
      return;
    }

    if (stage === "askDate") {
      const parsedDate = parseDate(input);
      if (!parsedDate) {
        simulateTyping("⛔ Please provide a valid date in formats like 2025-07-22, 03/26/03, or 3 Aug 2025.");
        return;
      }
      if (!isWeekday(parsedDate)) {
        simulateTyping("⛔ Appointments are only available Monday to Friday. Please pick a weekday.");
        return;
      }
      setChatbotState(prev => ({ ...prev, tempDate: parsedDate, stage: "askTime" }));
      simulateTyping("🕒 What time? (Choose between 10:00 and 5:59)");
      return;
    }

    if (stage === "askTime") {
      if (!isValidTime(input)) {
        simulateTyping("⛔ Please choose a time between 10:00 and 5:59.");
        return;
      }
      setChatbotState(prev => ({ ...prev, tempTime: input, stage: "confirmed" }));
      simulateTyping(chatbotResponses.confirmed(tempName, tempEmail, tempPhone, tempDate, input));
      sendBookingEmail({ name: tempName, email: tempEmail, phone: tempPhone, date: tempDate, time: input });
      showQuickQuestionsWithOptions([
        { label: "📋 Services", value: "services" },
        { label: "🧹 Clear", value: "clear" },
      ]);
      return;
    }

    if (intent === "booking") {
      setChatbotState(prev => ({ ...prev, stage: "askName" }));
      simulateTyping(chatbotResponses.book);
    } else if (intent === "greetings") {
      simulateTyping(chatbotResponses.hello(chatbotState.tempName));
      showQuickQuestionsWithOptions([
        { label: "📋 Services", value: "services" },
        { label: "🗓️ Book Appointment", value: "book appointment" },
        { label: "🏢 About Us", value: "about indocs media" },
      ]);
    } else if (intent === "servicesList") {
      simulateTyping(chatbotResponses.services);
    } else if (chatbotResponses.faq[norm]) {
      simulateTyping(chatbotResponses.faq[norm]);
    } else {
      simulateTyping(chatbotResponses.default);
      showQuickQuestionsWithOptions([
        { label: "📋 Services", value: "services" },
        { label: "🗓️ Book", value: "book appointment" },
      ]);
    }
  }, [chatbotState, simulateTyping, showQuickQuestionsWithOptions]);

  const handleUserInput = useCallback((input) => {
    appendMessage(input, 'user');
    setQuickQuestions([]);
    setTimeout(() => handleChatbotLogic(input), 500);
  }, [appendMessage, handleChatbotLogic]);

  useEffect(() => {
    if (isOpen) {
      const name = chatbotState.tempName;
      setTimeout(() => simulateTyping(chatbotResponses.hello(name)), 300);
      showQuickQuestionsWithOptions([
        { label: "📋 Services", value: "services" },
        { label: "🗓️ Book Appointment", value: "book appointment" },
        { label: "🏢 About Us", value: "about indocs media" },
      ]);
    }
  }, [isOpen]);

  return {
    isOpen,
    messages,
    quickQuestions,
    setIsOpen,
    handleUserInput,
    showQuickQuestionsWithOptions,
  };
};

export default useChatbot;
