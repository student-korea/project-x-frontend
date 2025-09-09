import { div } from 'framer-motion/client';
import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../css/CheerArtist.module.css';



const CheerArtist = () => {
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
      {/* 이전으로 넘어가기 */}
      <div className='ContentTop'>
        <div className='prevBtn'><img src="./img/previous.png" /> 이전 </div>
          <div className='Content-Title'>
            <h1>응원메세지를 적고 퍼즐을 맞춰보세요!</h1>
            <h3>멤버를 선택하고 응원댓글을 입력하면 퍼즐 조각이 모여요!</h3>
          </div>
        </div>
        <div className='CheerArtistContainer'>
          <div className='CommentContainer'>
          <div className='CommentReply'>
            <input type="text" id="reply" name="replay" placeholder='멤버이름을 넣어 응원메세지를 적어주세요!'></input>
            <div className='SendImg'>
              <img src="./img/sendImg.png" />
            </div>
          </div>
          <div className='CommentList'>
            <div className='CommentContents'>
              <div className='Userwrap'>
                <div className='UserImg'><img src="./img/image1.png" /></div>
                <div className='UserInfo'>
                  <div className='User_Nickname'>닉네임</div>
                  <div className='Comment_date'>댓글 입력 날짜</div>
                </div>
                <div className='moreIcon'><img src="./img/moreIcon.png" /></div>
              </div>
              <div className='context'>댓글 내용</div>
            </div>
            <div className='CommentContents'>
              <div className='Userwrap'>
                <div className='UserImg'><img src="./img/image1.png" /></div>
                <div className='UserInfo'>
                  <div className='User_Nickname'>닉네임</div>
                  <div className='Comment_date'>댓글 입력 날짜</div>
                </div>
                <div className='moreIcon'><img src="./img/moreIcon.png" /></div>
              </div>
              <div className='context'>댓글 내용</div>
            </div>
            <div className='CommentContents'>
              <div className='Userwrap'>
                <div className='UserImg'><img src="./img/image1.png" /></div>
                <div className='UserInfo'>
                  <div className='User_Nickname'>닉네임</div>
                  <div className='Comment_date'>댓글 입력 날짜</div>
                </div>
                <div className='moreIcon'><img src="./img/moreIcon.png" /></div>
              </div>
              <div className='context'>댓글 내용</div>
            </div>
          </div>
        </div>
        <div className='PuzzleContainer'>
          <div className='puzzleImg'>
            <img src="./img/image1.png" />
          </div>
          <div className='puzzleCongress'>
            <span>[ 퍼즐 완성률: 1000/1000 ]</span>
            <div className='Share'>
              <img src="./img/share.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheerArtist;