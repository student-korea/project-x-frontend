import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styled/CheerArtist.module.css';

const SelectMember = () => {
  return (
    <div className='Module-Container'>
      <h1>멤버를 선택해주세요</h1>
      <div className='MemberContainer'>
        <Link to="/CheerArtist">
        <div className='MemberCard'>
            <div className='MemberImg'>
                <img src="img/image1.png" />
            </div>
            <div className='MemberContent'>
              <p>캐릭터 이름</p>
            </div>
        </div>
        </Link>
        <div className='MemberCard'>
            <div className='MemberImg'>
                <img src="img/image1.png" />
            </div>
            <div className='MemberContent'>
              <p>캐릭터 이름</p>
            </div>
        </div>
        <div className='MemberCard'>
            <div className='MemberImg'>
                <img src="img/image1.png" />
            </div>
            <div className='MemberContent'>
              <p>캐릭터 이름</p>
            </div>
        </div>
        <div className='MemberCard'>
            <div className='MemberImg'>
                <img src="img/image1.png" />
            </div>
            <div className='MemberContent'>
              <p>캐릭터 이름</p>
            </div>
        </div>
        <div className='MemberCard'>
            <div className='MemberImg'>
                <img src="img/image1.png" />
            </div>
            <div className='MemberContent'>
              <p>캐릭터 이름</p>
            </div>
        </div>
        <div className='MemberCard'>
            <div className='MemberImg'>
                <img src="img/image1.png" />
            </div>
            <div className='MemberContent'>
              <p>캐릭터 이름</p>
            </div>
        </div>
        <div className='MemberCard'>
            <div className='MemberImg'>
                <img src="img/image1.png" />
            </div>
            <div className='MemberContent'>
              <p>캐릭터 이름</p>
            </div>
        </div>
        <div className='MemberCard'>
            <div className='MemberImg'>
                <img src="img/image1.png" />
            </div>
            <div className='MemberContent'>
              <p>캐릭터 이름</p>
            </div>
        </div>
      </div>
    </div>
  );
};
export default SelectMember;