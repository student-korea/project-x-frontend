import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Link, useLocation } from "react-router-dom";
import SplashPage from './pages/RandingPage/RandingPage.SplashPage';
import Header from './pages/MDPage/Header';
import MDPageMain from './pages/MDPage/MDPage.main';

function App() {
  const location = useLocation();
  
  // 헤더를 표시할 페이지 경로들
  // const pagesWithHeader = ['/MD'];
   const pagesWithHeader = ['/MD', '/home', '/community', '/content', '/chat'];
  // 현재 경로가 헤더를 표시할 페이지인지 확인
  const shouldShowHeader = pagesWithHeader.includes(location.pathname);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      backgroundColor: '#fff',
      overflow: 'auto'
    }}>
      {/* 조건부로 헤더 표시 */}
      {shouldShowHeader && <Header />}
      
      <main style={{
        width: '100%',
        minHeight: shouldShowHeader ? 'calc(100vh - 73px)' : '100vh', // 헤더 유무에 따라 높이 조정
        margin: 0,
        padding: 0,
        backgroundColor: '#fff'
      }}>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/MD" element={<MDPageMain />} />
          <Route path="/home" element={<div>Home 페이지</div>} />
          <Route path="/community" element={<div>Community 페이지</div>} />
          <Route path="/content" element={<div>Content 페이지</div>} />
          <Route path="/chat" element={<div>Chat 페이지</div>} />
        </Routes>
      </main>
    </div>
  )
}

export default App