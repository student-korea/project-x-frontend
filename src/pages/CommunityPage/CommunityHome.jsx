import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styled/community.css';
import '@/assets/images/CommunityPage/previous.png';
import Banner from '@/pages/CommunityPage/CommunityPage.CommunityHome.Banner';

export const CommunityHome = () => {
    return(
    <div className='Maincontainer'>
    {/* 상단 헤더 */}
      <header className="header">
        <nav className="nav">
          <div className='logo'>Project - x</div>
          <ul className='nav-menu'>
            <li><a href="#">HOME</a></li>
            <li><a href="#">MD</a></li>
            <li><a href="#">COMMUNITY</a></li>
            <li><a href="#">CONTENT</a></li>
            <li><a href="#">CHAT</a></li>
          </ul>
          <div className='userBox'>
            <div className='user-circle '></div>
            <a href="#" className='user-menu'>로그인</a>
          </div>
        </nav>
      </header>

      <div className='ContentContainer'>
        {/* 배너부분 */}
        
        <div className='Container'>
          <Banner></Banner>
        </div>

        {/* 게시판 콘텐츠 */}
        <div className='contents-Container'>
          <section className='contents-Section'>
            <h1>자유게시판</h1>
            <div className='board-Items'>
              <div className='board-item'>
                <h2>나만의 응원봉 공유하기</h2>
                <p>팬심 가득! 나만의 응원봉을 꾸미고 공유해요!</p>
              </div>
              <div className='board-item'>
                <h2>나만의 유닛조합 공유하기</h2>
                <p>유닛을 조합하고 공유해서 데뷔시켜보세요!</p>
              </div>
              <Link to="/FandomTalk">
              <div className='board-item'>
                <h2>팬덤토크</h2>
                <p>우리 팬덤만의 이야기를 나눠요!</p>
              </div>
            </Link>
            </div>
            </section>
            <div className='puzzle-Section'>
              <Link to="/selectMember">
              <div className='puzzle-item'>
                <h2>응원하는 댓글을</h2>
                <h2>남기고<span className='puzzle'>퍼즐</span>을</h2>
                <h2>완성시켜주세요</h2>
              </div>
              <div className='puzzle-img'><img src="/img/puzzle.png"></img></div>
              </Link>
              {/* SelectMember 모듈창 구현 */}
            </div>
        </div>
      </div>
    </div>
    )
}
export default CommunityHome;