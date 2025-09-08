// src/App.jsx
import { Routes, Route } from "react-router-dom";

// 랜딩 페이지

// 심리테스트 컨트롤러
import PsyControl from "./pages/psychotest/PsyControl.jsx";

export default function App() {
  return (
    <Routes>
      {/* 루트(/): 랜딩 페이지 */}


      {/* /psy: 심리테스트 */}
      <Route path="/psy" element={<PsyControl />} />
    </Routes>
  );
}
