import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../css/vote.module.css';

export const Vote = () => {
    return (
        <div className='Module-Container'>
            <h1>유닛조합에 투표 해주세요</h1>
            <div className='VoteContainer'>
                <div className='VoteSelect'>
                    <div className='radio-info'>
                        <input type="radio" name="choice" id="choice"></input>
                        <h3>유닛 조합 1</h3>
                    </div>
                    <div className='Unit'>
                        <div className='VoteCard'>
                            <div className='VoteImg'>
                                <img src="img/image1.png" />
                            </div>
                            <div className='VoteContent'>
                            <p>캐릭터 이름</p>
                            </div>
                        </div>
                        <div className='VoteCard'>
                            <div className='VoteImg'>
                                <img src="img/image1.png" />
                            </div>
                            <div className='VoteContent'>
                            <p>캐릭터 이름</p>
                            </div>
                        </div>
                        <div className='VoteCard'>
                            <div className='VoteImg'>
                                <img src="img/image1.png" />
                            </div>
                            <div className='VoteContent'>
                            <p>캐릭터 이름</p>
                            </div>
                        </div>
                        <div className='VoteCard'>
                            <div className='VoteImg'>
                                <img src="img/image1.png" />
                            </div>
                            <div className='VoteContent'>
                            <p>캐릭터 이름</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='VoteSelect'>
                    <div className='radio-info'>
                        <input type="radio" name="choice" id="choice"></input>
                        <h3>멋지고 귀엽고 시크하고 웃기고 매력있고 모든걸 다하는 조합</h3>
                    </div>
                    <div className='Unit'>
                        <div className='VoteCard'>
                            <div className='VoteImg'>
                                <img src="img/image1.png" />
                            </div>
                            <div className='VoteContent'>
                            <p>캐릭터 이름</p>
                            </div>
                        </div>
                        <div className='VoteCard'>
                            <div className='VoteImg'>
                                <img src="img/image1.png" />
                            </div>
                            <div className='VoteContent'>
                            <p>캐릭터 이름</p>
                            </div>
                        </div>
                        <div className='VoteCard'>
                            <div className='VoteImg'>
                                <img src="img/image1.png" />
                            </div>
                            <div className='VoteContent'>
                            <p>캐릭터 이름</p>
                            </div>
                        </div>
                        <div className='VoteCard'>
                            <div className='VoteImg'>
                                <img src="img/image1.png" />
                            </div>
                            <div className='VoteContent'>
                            <p>캐릭터 이름</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='VoteSelect'>
                    <div className='radio-info'>
                        <input type="radio" name="choice" id="choice"></input>
                        <h3>유닛 조합 3</h3>
                    </div>
                    <div className='Unit'>
                        <div className='VoteCard'>
                            <div className='VoteImg'>
                                <img src="img/image1.png" />
                            </div>
                            <div className='VoteContent'>
                            <p>캐릭터 이름</p>
                            </div>
                        </div>
                        <div className='VoteCard'>
                            <div className='VoteImg'>
                                <img src="img/image1.png" />
                            </div>
                            <div className='VoteContent'>
                            <p>캐릭터 이름</p>
                            </div>
                        </div>
                        <div className='VoteCard'>
                            <div className='VoteImg'>
                                <img src="img/image1.png" />
                            </div>
                            <div className='VoteContent'>
                            <p>캐릭터 이름</p>
                            </div>
                        </div>
                        <div className='VoteCard'>
                            <div className='VoteImg'>
                                <img src="img/image1.png" />
                            </div>
                            <div className='VoteContent'>
                            <p>캐릭터 이름</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            {/* // VoteContainer */}
            {/* 
                투표 완료시 투표가 완료되었습니다 alert
                투표를 한 경우 -> 투표에 참여하셨습니다 안내와 블락처리 필요
            */}
            <div className='VoteBlock'>
                <div className='NoMoreVote'>
                    <p>이미 투표에 참여하셨습니다.</p>
                    <p>결과를 기다려주세요</p>
                </div>
            </div>
        </div>
    );
}

export default Vote;