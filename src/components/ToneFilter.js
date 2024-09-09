import React, { useState } from 'react';

const ToneFilter = ({ inputValue, setInputValue, onSendMessage }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleSendAnyway = () => {
    onSendMessage(inputValue);
    setInputValue('');
    setShowPopup(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full p-3 border border-accent rounded-lg mb-4 bg-primary text-light"
        rows="3"
        placeholder="Type your message here..."
      />
      <button type="submit" className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
        Send Message
      </button>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-secondary p-6 rounded-lg max-w-md">
            <p className="mb-4 text-light">This is a test pop-up. Do you want to send this message?</p>
            <div className="flex justify-end space-x-4">
              <button onClick={() => setShowPopup(false)} className="bg-primary text-light px-4 py-2 rounded-lg">
                Cancel
              </button>
              <button onClick={handleSendAnyway} className="bg-accent text-white px-4 py-2 rounded-lg">
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default ToneFilter;