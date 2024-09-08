import React, { useState } from 'react';
import ChatInterface from '../components/ChatInterface';
import ToneFilter from '../components/ToneFilter';

const DemoPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { 
        text: "Thank you for your message. I understand your position and would like to propose a mutually beneficial solution.", 
        sender: 'bot' 
      }]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-light">Mariko AI Demo</h1>
      <p className="text-xl mb-8 text-center text-light">
        Experience how Mariko AI helps maintain cordial communication in legal mediation.
      </p>
      <div className="bg-secondary rounded-lg shadow-lg p-6">
        <ChatInterface messages={messages} />
        <ToneFilter
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default DemoPage;