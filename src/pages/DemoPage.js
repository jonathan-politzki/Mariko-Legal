import React, { useState } from 'react';
import ChatInterface from '../components/ChatInterface';
import ToneFilter from '../components/ToneFilter';

const DemoPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
    // Simulate a response from the opposing counsel
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { text: "This is a simulated response from the opposing counsel.", sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Legal Communication Demo</h1>
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