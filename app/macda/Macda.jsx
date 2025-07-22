"use client";
// import React from 'react';
import './macda.css';
import useMacda from './macda.js';
import useChatbot from './useChatbot.js';
import React, { useRef, useEffect } from 'react';

const Macda = () => {
    useMacda();
    const { isOpen, messages, quickQuestions, setIsOpen, handleUserInput } = useChatbot();
    const chatBodyRef = useRef(null);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    return (
        <>
            <div
                id="macda-container"
                className="macda-container"
                onClick={() => {
                    setIsOpen(true);
                    console.log("setIsOpen called, isOpen should be true now!");
                }}
            >
                <div id="macda-eye" className="eye">
                    <div id="macda-pupil" className="pupil"></div>
                </div>
                <div id="macda-speech" className="speech-bubble"></div>
            </div>
            {/* <div>DEBUG: isOpen = {isOpen ? "true" : "false"}</div> */}

            {isOpen && (
                <div className="chatbot-widget open">
                    <div className="chatbot-header">
                        <h3>Indocs AI Assistant</h3>
                        <button onClick={() => setIsOpen(false)}>&times;</button>
                    </div>
                    <div className="chatbot-body" ref={chatBodyRef}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`chatbot-message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="quick-question-container">
                        {quickQuestions.map((q, index) => (
                            <button key={index} onClick={() => handleUserInput(q.value)}>
                                {q.label}
                            </button>
                        ))}
                    </div>
                    <div className="chatbot-footer">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const input = e.target.elements.userInput.value;
                            if (input) {
                                handleUserInput(input);
                                e.target.elements.userInput.value = '';
                            }
                        }}>
                            <input type="text" name="userInput" placeholder="Ask a question..." />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                    {/* <p>isOpen: {isOpen ? 'true' : 'false'}</p> */}
                </div>
            )}
        </>
    );
};

export default Macda;