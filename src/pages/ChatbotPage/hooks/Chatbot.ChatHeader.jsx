// src/components/ChatHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ChatHeader = ({ selectedChat, toggleActions, isActionsVisible, sendAutoMessage }) => {
  return (
    <div className="chat-header">
      <div className="chat-header-top">
        <div className="chat-user-info">
          <svg className="icon-lg" fill="currentColor" viewBox="0 0 20 20">
            <Link to="/ChatChoice"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/></Link>
          </svg>
          <div className="chat-avatar">
            <img src={selectedChat.avatarUrl} alt={`${selectedChat.name} Avatar`} className="avatar-img" />
          </div>
          <h2 className="chat-username">{selectedChat.name}</h2>
        </div>
        <svg onClick={toggleActions} className="icon-lg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
        </svg>
      </div>
      {isActionsVisible && (
        <div className="chat-actions">
          <button className="action-btn" onClick={() => sendAutoMessage('안녕?')}>인사하기</button>
          <button className="action-btn" onClick={() => sendAutoMessage('잘지냈어?')}>안부묻기</button>
          <button className="action-btn" onClick={() => sendAutoMessage('이야기해줘')}>이야기</button>
          <button className="action-btn" onClick={() => sendAutoMessage('나 심심해..')}>심심함</button>
        </div>
      )}
    </div>
  );
};

export default ChatHeader;