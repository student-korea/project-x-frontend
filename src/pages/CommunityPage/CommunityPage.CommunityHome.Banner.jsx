import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// Swiper 라이브러리
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// 이미지 임포트
import previous from '@/assets/images/CommunityPage/previous.png';
import next from '@/assets/images/CommunityPage/next.png';
import image1 from '@/assets/images/CommunityPage/image1.png';
import image2 from '@/assets/images/CommunityPage/image2.png';
import voteicon from '@/assets/images/CommunityPage/voteicon.png';



export const Banner = () => {
    return (
    <section className='voting-section'>
        <div className='banner-container'>
            {/* 이전으로 넘어가기 */}
            <div className='prevBtn'><img src={previous} /></div>
            {/* 카드 배너 */}
            <div className='slider'>
                <div className='sectionTop'>
                    <div className='voteImg'><img src={voteicon}></img></div>
                    <h1 className='section-title'>
                        투표하기
                    </h1>
                    </div>
                <Swiper 
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{ prevEl: '.prevBtn', nextEl: '.nextBtn' }}
                    loop={true}
                    autoplay={{delay:5000}}
                    spaceBetween={6}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)} 
                >
                    <div className='slide'>
                        <SwiperSlide>
                            <Link to="/vote">
                            <div className='vote-card'>
                                <div className='vote-content'>
                                    <h3 className='vote-title'>응원봉 투표하기</h3>
                                    <p className='vote-date'>2025.09.03~2025.09.24</p>
                                </div>
                                <div className='vote-img'><img src={image2}></img></div>
                            </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/vote">
                            <div className='vote-card'>
                                <div className='vote-content'>
                                    <h3 className='vote-title'>유닛조합 투표하기</h3>
                                    <p className='vote-date'>2025.09.03~2025.09.24</p>
                                </div>
                                <div className='vote-img'><img src={image2} /></div>
                            </div> 
                            </Link>
                        </SwiperSlide>     
                        <SwiperSlide>
                            <Link to="/vote">         
                            <div className='vote-card'>
                                <div className='vote-content'>
                                    <h3 className='vote-title'>투표결과 확인</h3>
                                    <p className='vote-date'>2025.09.03~2025.09.24</p>
                                </div>
                                <div className='vote-img'><img src={image2} /></div>
                            </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/vote">         
                            <div className='vote-card'>
                                <div className='vote-content'>
                                    <h3 className='vote-title'>투표결과 확인</h3>
                                    <p className='vote-date'>2025.09.03~2025.09.24</p>
                                </div>
                                <div className='vote-img'><img src={image2} /></div>
                            </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/vote">         
                            <div className='vote-card'>
                                <div className='vote-content'>
                                    <h3 className='vote-title'>투표결과 확인</h3>
                                    <p className='vote-date'>2025.09.03~2025.09.24</p>
                                </div>
                                <div className='vote-img'><img src={image2} /></div>
                            </div>
                            </Link>
                        </SwiperSlide>
                    </div>
                </Swiper>
                </div>
                {/* 다음으로 넘어가기 */}
            <div className='nextBtn'><img src={next} /></div>
        </div>
    </section> 
    )
}

export default Banner;