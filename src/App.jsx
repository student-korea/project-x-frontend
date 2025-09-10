import { useState } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css'
<<<<<<< Updated upstream
=======
import { Route, Routes, Link, useLocation } from "react-router-dom";
>>>>>>> Stashed changes
import SplashPage from './pages/RandingPage/RandingPage.SplashPage';

import MDPage from './pages/MDPage/MDPage.main';
import ProductDetail from './pages/MDPage/MDPage.ProductDetail';
import Header from './pages/MDPage/Header';
import SelectMemberPage from './pages/RandingPage/RandingPage.SelectMemberPage';
<<<<<<< Updated upstream



function App() {
  const location = useLocation();
  
  // 헤더를 표시할 페이지들
  const pagesWithHeader = ['/MD', '/home', '/community', '/content', '/chat'];
  
  // 상품 상세페이지도 헤더 표시되도록 조건 추가
  const shouldShowHeader = pagesWithHeader.includes(location.pathname) || 
                          location.pathname.startsWith('/MD/product/');

  return (

    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      {shouldShowHeader && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/MD" element={<MDPage />} />
          <Route path="/MD/product/:id" element={<ProductDetail />} />
          <Route path="/home" element={<div>Home 페이지</div>} />
          <Route path="/community" element={<div>Community 페이지</div>} />
          <Route path="/content" element={<div>Content 페이지</div>} />
          <Route path="/chat" element={<div>Chat 페이지</div>} />
          <Route path="/" element={<SplashPage />} />
          <Route path="/selectMember" element={<SelectMemberPage />} />
        </Routes>
      </main>
    </div>

  )
}

export default App
=======
import CommunityHome from './pages/CommunityPage/CommunityHome';
import CheerArtist from './pages/CommunityPage/Community.CheerArtist';
import FandomTalk from './pages/CommunityPage/Community.FandomTalk';
import Vote from './pages/CommunityPage/Community.Vote';
import SelectMember from './pages/CommunityPage/Community.SelectMember';
import Cart from './pages/MDPage/MDPage.Cart';
import Payment from './pages/MDPage/MDPage.Payment';
import PaymentComplete from './pages/MDPage/MDPage.PaymentComplete';
import ProductList from './pages/MDPage/MDPage.ProductList';
import ProductDetail from './pages/MDPage/MDPage.ProductDetail';
import About from './pages/MDPage/MDPage.About';
import MDMain from './pages/MDPage/MDPage.main';
import Header from './pages/MDPage/MDPage.header';

export default function App() {
  const location = useLocation();
  
  // 헤더 표시 조건
  const shouldShowHeader = 
                        location.pathname.startsWith('/MD/product') ||
                        location.pathname.startsWith('/MD/cart') ||
                        location.pathname.startsWith('/MD/payment') ||
                        location.pathname.startsWith('/MD/products') ||
                        location.pathname.startsWith('/MD/about') ||
                        location.pathname === '/MD';

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/selectMember" element={<SelectMemberPage />} />

        {/* 커뮤니티 path */}
        <Route path="/CommunityHome" element={<CommunityHome />} />
        <Route path='/Community/Vote' element={<Vote />} />
        <Route path="/Community/CheerArtist" element={<CheerArtist />} />
        <Route path="/Community/SelectMember" element={<SelectMember />} />
        <Route path="/Community/FandomTalk" element={<FandomTalk />} />
        
        {/* MD path */}
        <Route path="/MD" element={<MDMain />} />
        <Route path="/MD/products" element={<ProductList />} />
        <Route path="/MD/product/:id" element={<ProductDetail />} />
        <Route path="/MD/payment" element={<Payment />} />
        <Route path="/MD/payment-complete" element={<PaymentComplete />} />
        <Route path="/MD/cart" element={<Cart />} />
        <Route path="/MD/about" element={<About />} />

      </Routes>
    </>
  )
}
>>>>>>> Stashed changes
