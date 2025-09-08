// src/App.jsx
import { useState } from "react";
import PsyControl from "./features/psychotest/PsyControl.jsx";

export default function App() {
  const [view, setView] = useState("home"); // 'home' | 'select'

  if (view === "select") {
    return (
      <>
        <PsyControl />
      </>
    );
  }

  // 홈 화면: 버튼 클릭 시 선택 페이지로
  return (
    <div style={{ padding: 24 }}>
      <h1>홈</h1>
      <button onClick={() => setView("select")}>캐릭터 선택으로 가기</button>
    </div>
  );
}
