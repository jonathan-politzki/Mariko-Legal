import React, { useState } from 'react';
import { detectTone } from '../utils/toneDetection';

const ToneFilter = ({ inputValue, setInputValue, onSendMessage }) => {
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (detectTone(inputValue)) {
      setShowWarning(true);
    } else {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleIgnoreWarning = () => {
    onSendMessage(inputValue);
    setInputValue('');
    setShowWarning(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full p-3 border border-secondary rounded-lg mb-4 text-primary"
        rows="3"
        placeholder="Type your message here..."
      />
      <button type="submit" className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
        Send Message
      </button>
      {showWarning && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <p className="mb-4 text-primary">Warning: Your message may contain an aggressive tone. Are you sure you want to send it?</p>
            <div className="flex justify-end space-x-4">
              <button onClick={() => setShowWarning(false)} className="bg-secondary text-white px-4 py-2 rounded-lg">
                Edit Message
              </button>
              <button onClick={handleIgnoreWarning} className="bg-accent text-white px-4 py-2 rounded-lg">
                Send Anyway
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default ToneFilter;