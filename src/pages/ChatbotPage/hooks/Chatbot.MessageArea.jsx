// src/components/MessageArea.jsx
import React, { useRef, useEffect } from 'react';
import { findContactByNameOrEnglish } from '../utils/helpers';

const MessageArea = ({ selectedChat, contacts, messagesEndRef, handleFeedback }) => {
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [selectedChat.messages]);

  return (
    <div className="messages-area">
      <div className="date-divider">
        <button className="date-btn">오늘</button>
        <p className="date-text">{selectedChat.name}과의 대화가 시작되었습니다</p>
      </div>
      {selectedChat.messages?.map((message) => (
        <div key={message.id} className={`message ${message.sender === 'user' ? 'user' : ''}`}>
          <div className={`message-content ${message.sender === 'user' ? 'user' : ''}`}>
            {message.sender !== 'user' && (
              <div className="message-avatar">
                <img 
                  src={findContactByNameOrEnglish(contacts, message.sender)?.avatarUrl || '/images/user_default.png'} 
                  alt={`${message.sender} Avatar`} 
                  className="avatar-img" 
                />
              </div>
            )}
            <div>
              {message.sender !== 'user' && (
                <div className="message-sender-name">
                  {findContactByNameOrEnglish(contacts, message.sender)?.name || message.sender}
                </div>
              )}
              <div className={`message-bubble ${message.sender === 'user' ? 'user' : 'bot'}`}>
                {message.text}
              </div>
              {message.sender !== 'user' && (
                <div className="message-footer">
                  <div className="like-dislike-buttons">
                    <button className="like-button" onClick={() => handleFeedback('like')}>👍</button>
                    <button className="dislike-button" onClick={() => handleFeedback('dislike')}>👎</button>
                  </div>
                  <div className="message-time">
                    {message.time}
                  </div>
                </div>
              )}
              {message.sender === 'user' && (
                <div className="message-time user">
                  {message.time}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageArea;