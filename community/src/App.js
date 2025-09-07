import logo from './logo.svg';
import React from 'react';
import './App.css';
import './css/community.css';

function App() {
  return (

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

      {/* 배너부분 */}
      <div className='Container'>
        <section className='voting-section'>
          <div className='sectionTop'>
            <h1 className='section-title'>
              <img src="/img/voteicon.png" />투표하기
            </h1>
          </div>

          <div className='banner-container'>
            {/* 이전으로 넘어가기 */}
            <div className='prevBtn'><img src="/img/previous.png" /></div>
            {/* 카드 배너 */}
            <div className='slider'>
              <div className='slide'>
                <div className='vote-card'>
                  <div className='vote-content'>
                      <h3 className='vote-title'>응원봉 투표하기</h3>
                      <p className='vote-date'>2025.09.03~2025.09.24</p>
                  </div>
                  <div className='vote-img'><img src="/img/image2.png"></img></div>
                </div>
                <div className='vote-card'>
                  <div className='vote-content'>
                      <h3 className='vote-title'>유닛조합 투표하기</h3>
                      <p className='vote-date'>2025.09.03~2025.09.24</p>
                  </div>
                  <div className='vote-img'><img src="/img/image2.png"></img></div>
                </div>
                <div className='vote-card'>
                  <div className='vote-content'>
                      <h3 className='vote-title'>투표결과 확인</h3>
                      <p className='vote-date'>2025.09.03~2025.09.24</p>
                  </div>
                  <div className='vote-img'><img src="/img/image2.png"></img></div>
                </div>
              </div>
            </div>
            {/* 다음으로 넘어가기 */}
            <div className='nextBtn'><img src="/img/next.png"/></div>
          </div>
        </section>
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
            <div className='board-item'>
              <h2>팬덤토크</h2>
              <p>우리 팬덤만의 이야기를 나눠요!</p>
            </div>
          </div>
          </section>
          <div className='puzzle-Section'>
            <div className='puzzle-item'>
              <h2>응원하는 댓글을</h2>
              <h2>남기고<h2 className='puzzle' >퍼즐</h2>을</h2>
              <h2>완성시켜주세요</h2>
            </div>
            <div className='puzzle-img'><img src="/img/puzzle.png" /></div>
          </div>
      </div>

    </div>
  );
}

export default App;
