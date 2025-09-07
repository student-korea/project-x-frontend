// src/App.jsx
import { useState } from 'react';
import CharacterSelectPage from './features/CharacterSelectPage.jsx'; // 현재 구조에 맞춘 경로

export default function App() {
  const [view, setView] = useState('home'); // 'home' | 'select'

  if (view === 'select') {
    return (
      <>
        <CharacterSelectPage />
      </>
    );
  }

  // 홈 화면: 버튼 클릭 시 선택 페이지로
  return (
    <div style={{ padding: 24 }}>
      <h1>홈</h1>
      <button onClick={() => setView('select')}>캐릭터 선택으로 가기</button>
    </div>
  );
}
