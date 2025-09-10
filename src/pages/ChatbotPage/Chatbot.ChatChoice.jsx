import React, { useState } from 'react';
import './styled/ChatChoice.css';

// 컴포넌트들을 import 합니다.
import Header from './hooks/Chatbot.Header';
import CharacterCard from './hooks/Chatbot.CharacterCard';
import CTASection from './hooks/Chatbot.CTASection';

// 멤버 데이터 배열은 그대로 유지합니다.
const members = [
    { id: 'karina', name: '카리나', role: '리더, 메인댄서, 서브보컬, 센터', image: '../src/assets/images/ChatbotPage/karina.jpg' },
    { id: 'wonyoung', name: '장원영', role: '센터, 서브보컬', image: '../src/assets/images/ChatbotPage/wonyoung.jpg' },
    { id: 'minji', name: '민지', role: '리더, 메인보컬', image: '../src/assets/images/ChatbotPage/minji.jpg' },
    { id: 'kazuha', name: '카즈하', role: '메인댄서, 서브보컬', image: '../src/assets/images/ChatbotPage/kazuha.jpg' },
];

function ChatChoice() {
    const [selectedMemberId, setSelectedMemberId] = useState(null);

    const handleSelect = (memberId) => {
        setSelectedMemberId(memberId);
    };

    return (
        <div>
            <Header /> {/* Header 컴포넌트 사용 */}
            
            <main className="choice-main-container">
                <div className="title-section">
                    <h1>✨ We Are Fixer ✨</h1>
                </div>

                <div className="characters-section">
                    {members.map(member => (
                        <CharacterCard 
                            key={member.id}
                            member={member}
                            isSelected={selectedMemberId === member.id}
                            onSelect={handleSelect}
                        />
                    ))}
                </div>

                <CTASection selectedMemberId={selectedMemberId} /> {/* CTASection 컴포넌트 사용 */}
            </main>
        </div>
    );
}

export default ChatChoice; 