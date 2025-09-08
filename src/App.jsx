import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, Link } from "react-router-dom";
import SplashPage from './pages/RandingPage/RandingPage.SplashPage';
import Header from './pages/MDPage/Header';
import MDPageMain from './pages/MDPage/MDPage.main';

function App() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      backgroundColor: '#fff',
      overflow: 'auto'
    }}>
      <Header />
      <main style={{
        width: '100%',
        minHeight: 'calc(100vh - 73px)',
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