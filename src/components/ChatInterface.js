import React from 'react';

const ChatInterface = ({ messages }) => {
  return (
    <div className="h-96 overflow-y-auto mb-6 p-4 bg-light rounded-lg">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-4 p-3 rounded-lg ${
            message.sender === 'user' 
              ? 'bg-accent text-white ml-auto' 
              : 'bg-secondary text-white'
          } max-w-[70%] ${message.sender === 'user' ? 'self-end' : 'self-start'}`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatInterface;