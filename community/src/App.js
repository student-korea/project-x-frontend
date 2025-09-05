import logo from './logo.svg';
import React from 'react';
import './App.css';
import './css/community.css';
import icon './img/voteicon.png'

function App() {
  return (

    <div className='container'>

      {/* 상단 헤더 */}
      <div className='headerNav'>
        <header>
          <div className='headerCategory'>
            <div className='navbarlogo'>project-x</div>
            <div className='navbar'>HOME</div>
            <div className='navbar'>MD</div>
            <div className='navbar'>community</div>
            <div className='navbar'>Content</div>   
            <div className='navbar'>Chat</div>          
          </div>
          <div>
            <div className='headerLogin'>
             <div className='navbar_login'>로그인</div>
            </div>
          </div>
        </header>
      </div>

      {/* 배너부분 */}
      <div className='bannerContainer'>
        <div className='bannerContent'>
          <div className='bannertop'>
            <img src="(icon)"></img>
            <div className='bannerTitle'>투표하기</div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default App;
