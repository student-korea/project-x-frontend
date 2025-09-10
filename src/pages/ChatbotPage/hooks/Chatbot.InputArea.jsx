// src/components/InputArea.jsx
import React from 'react';

const InputArea = ({ newMessage, setNewMessage, sendMessage, handleKeyPress }) => {
  return (
    <div className="input-area">
      <div className="input-container">
        <button className="add-btn">
          <svg className="icon-lg" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
          </svg>
        </button>
        <div className="input-wrapper">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="메시지를 입력하세요..."
            className="message-input"
          />
        </div>
        <button
          onClick={sendMessage}
          disabled={!newMessage.trim()}
          className={`send-btn ${newMessage.trim() ? 'active' : 'inactive'}`}
        >
          <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InputArea;