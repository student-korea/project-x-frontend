import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './hooks/Chatbot.Sidebar';
import ChatHeader from './hooks/Chatbot.ChatHeader';
import MessageArea from './hooks/Chatbot.MessageArea';
import InputArea from './hooks/Chatbot.InputArea';
import Header from './hooks/Chatbot.Header';
import { findContactByNameOrEnglish } from './utils/helpers';
import './styled/ChatApp.css'; 
//
const ChatApp = () => {
  const { chatName } = useParams();

  const [contacts, setContacts] = useState([
    {
      name: '카리나',
      englishName: 'karina',
      lastMessage: '안녕하세요! 카리나입니다. 오늘 하루 어떠셨나요?',
      time: '오후 2:30',
      avatarUrl: '../src/assets/images/ChatbotPage/karina.jpg',
      messages: [{ id: 1, text: '안녕하세요! 카리나입니다. 오늘 하루 어떠셨나요?', sender: 'karina', time: '오후 2:30' },]
    },
    {
      name: '장원영',
      englishName: 'wonyoung',
      lastMessage: '안녕하세요! 장원영입니다. 오늘 하루 어떠셨나요?',
      time: '오후 2:30',
      avatarUrl: '../src/assets/images/ChatbotPage/wonyoung.jpg',
      messages: [{ id: 1, text: '안녕하세요! 장원영입니다. 오늘 하루 어떠셨나요?', sender: 'wonyoung', time: '오후 2:30' }]
    },
    {
      name: '민지',
      englishName: 'minji',
      lastMessage: '안녕하세요! 민지입니다. 오늘 하루 어떠셨나요?',
      time: '오후 2:30',
      avatarUrl: '../src/assets/images/ChatbotPage/minji.jpg',
      messages: [{ id: 1, text: '안녕하세요! 민지입니다. 오늘 하루 어떠셨나요?', sender: 'minji', time: '오후 2:30' }]
    },
    {
      name: '카즈하',
      englishName: 'kazuha',
      lastMessage: '안녕하세요! 카즈하입니다. 오늘 하루 어떠셨나요?',
      time: '오후 2:30',
      avatarUrl: '../src/assets/images/ChatbotPage/kazuha.jpg',
      messages: [{ id: 1, text: '안녕하세요! 카즈하입니다. 오늘 하루 어떠셨나요?', sender: 'kazuha', time: '오후 2:30' }]
    }
  ]);
  
  const [selectedChat, setSelectedChat] = useState(() => {
    const defaultChat = findContactByNameOrEnglish(contacts, chatName);
    return defaultChat || contacts[0];
  });
  
  const [newMessage, setNewMessage] = useState('');
  const [isActionsVisible, setIsActionsVisible] = useState(true);
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: Date.now(),
        text: newMessage,
        sender: 'user',
        time: new Date().toLocaleTimeString('ko-KR', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      };

      setContacts(prev => prev.map(contact => 
        contact.englishName === selectedChat.englishName
          ? { ...contact, 
              lastMessage: newMsg.text, 
              time: newMsg.time,
              messages: [...contact.messages, newMsg]
            }
          : contact
      ));

      setNewMessage('');

      setTimeout(() => {
        const responses = [
          '네! 좋은 질문이에요! 😊',
          '그런 생각도 있네요! 재미있어요!',
          '오늘도 즐거운 하루 보내세요! ✨',
          '언제든 편하게 말씀해주세요!',
          '같이 이야기할 수 있어서 좋아요! 💕'
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const botMsg = {
          id: Date.now() + 1,
          text: randomResponse,
          sender: selectedChat.englishName,
          time: new Date().toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })
        };

        setContacts(prev => prev.map(contact => 
          contact.englishName === selectedChat.englishName
            ? { ...contact, 
                lastMessage: botMsg.text, 
                time: botMsg.time,
                messages: [...contact.messages, botMsg]
              }
            : contact
        ));
      }, 1000 + Math.random() * 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  
  const handleFeedback = (type) => {
    console.log(`${selectedChat.name}의 메시지에 ${type}를 눌렀습니다.`);
  };
  
  const toggleActions = () => {
    setIsActionsVisible(!isActionsVisible);
  };
  
  const autoResponses = {
    '안녕?': '안녕하세요! 만나서 반가워요! 😄',
    '잘지냈어?': '저는 아주 잘 지내고 있어요! 당신은 어떠신가요? ✨',
    '이야기해줘': '무슨 이야기가 하고 싶으세요? 무엇이든 말해주세요! 💬',
    '나 심심해..': '저도 심심했는데 잘됐네요! 우리 재미있는 이야기 해봐요! 😉'
  };

  const sendAutoMessage = (messageText) => {
    const newMsg = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      time: new Date().toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })
    };

    setContacts(prev => prev.map(contact => 
      contact.englishName === selectedChat.englishName
        ? { ...contact, 
            lastMessage: newMsg.text, 
            time: newMsg.time,
            messages: [...contact.messages, newMsg]
          }
        : contact
    ));

    setTimeout(() => {
        const botResponseText = autoResponses[messageText] || '음.. 무슨 말인지 잘 모르겠어요.🤔';
        
        const botMsg = {
          id: Date.now() + 1,
          text: botResponseText,
          sender: selectedChat.englishName,
          time: new Date().toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })
        };

        setContacts(prev => prev.map(contact => 
          contact.englishName === selectedChat.englishName
            ? { ...contact, 
                lastMessage: botMsg.text, 
                time: botMsg.time,
                messages: [...contact.messages, botMsg]
              }
            : contact
        ));
    }, 1000 + Math.random() * 2000);
  };

  useEffect(() => {
    const chatByUrl = findContactByNameOrEnglish(contacts, chatName);
    if (chatByUrl) {
      setSelectedChat(chatByUrl);
    }
  }, [chatName, contacts]);

  return (
    <div className="container">
      <Header />
      <div className="chat-main-container">
        <Sidebar contacts={contacts} selectedChat={selectedChat} />
        <div className="chat-area">
          <ChatHeader 
            selectedChat={selectedChat} 
            toggleActions={toggleActions} 
            isActionsVisible={isActionsVisible} 
            sendAutoMessage={sendAutoMessage}
            />
          <MessageArea 
            selectedChat={selectedChat} 
            contacts={contacts} 
            messagesEndRef={messagesEndRef} 
            handleFeedback={handleFeedback}
            />
          <InputArea 
            newMessage={newMessage} 
            setNewMessage={setNewMessage} 
            sendMessage={sendMessage} 
            handleKeyPress={handleKeyPress}
            />
        </div>
      </div>
    </div>
  );
};

export default ChatApp; 