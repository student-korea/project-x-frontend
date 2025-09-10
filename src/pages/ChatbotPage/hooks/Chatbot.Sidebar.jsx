// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ contacts, selectedChat }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">
          <span>💬</span>
          <h2 className="sidebar-title-text">대화 상대 선택</h2>
        </div>
      </div>
      <div className="contacts-list">
        {contacts.map((contact) => (
          <Link to={`/ChatApp/${contact.englishName}`} key={contact.englishName} className="link-no-style">
            <div className={`contact-item ${selectedChat.englishName === contact.englishName ? 'active' : ''}`}>
              <div className="contact-content">
                <div className="contact-avatar">
                  <img src={contact.avatarUrl} alt={`${contact.name} Avatar`} className="avatar-img" />
                </div>
                <div className="contact-info">
                  <div className="contact-name">{contact.name}</div>
                  <div className="contact-message">{contact.lastMessage}</div>
                </div>
                <div className="contact-time">{contact.time}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;