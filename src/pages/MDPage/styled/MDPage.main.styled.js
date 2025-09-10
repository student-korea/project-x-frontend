<<<<<<< Updated upstream
// MDPage.main.styled.js (비율 조정 및 캐러셀 개선)
export const mdPageStyles = {
  // 메인 컨테이너 - 화면 전체를 꽉 채움
  container: {
    width: '100vw',
    backgroundColor: '#fff',
    minHeight: 'calc(100vh - 73px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px 100px', // 패딩 조정
    margin: 0,
    boxSizing: 'border-box'
  },

  // 캐러셀 섹션 - 비율 조정
  carouselSection: {
    width: '100%',
    maxWidth: '1200px', // 캐러셀 폭 증가
    height: '400px', // 캐러셀 높이 증가
    flexShrink: 0,
    borderRadius: '25px',
    opacity: 0.8,
    background: '#B3D1F0',
    marginBottom: '50px', // 여백 줄임
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  // 캐러셀 내비게이션 버튼 - 동그라미 제거, 위치 조정
  carouselNavButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none', // 배경 제거
    border: 'none',
    width: '60px', // 크기 증가
    height: '60px',
    cursor: 'pointer',
    fontSize: '2.5rem', // 폰트 크기 증가
    color: '#172031',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },

  carouselNavLeft: {
    left: '40px' // 위치 조정
  },

  carouselNavRight: {
    right: '40px' // 위치 조정
  },

  // 캐러셀 페이지 인디케이터 - 크기 조정
  carouselIndicators: {
    position: 'absolute',
    bottom: '25px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '12px'
  },

  carouselIndicator: {
    width: '35px', // 크기 조정
    height: '15px',
    flexShrink: 0,
    borderRadius: '50px',
    cursor: 'pointer',
    border: 'none'
  },

  carouselIndicatorActive: {
    background: '#A259FF'
  },

  carouselIndicatorInactive: {
    background: '#ffffff'
  },

  // 섹션 컨테이너 - 비율 조정
  sectionContainer: {
    width: '100%',
    maxWidth: '1200px', // 캐러셀과 동일한 폭
    marginBottom: '60px' // 간격 조정
  },

  // 섹션 헤더
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px' // 간격 줄임
  },

  // 섹션 제목 - 크기 조정
  sectionTitle: {
    color: '#000',
    fontFamily: 'Inter, sans-serif',
    fontSize: '28px', // 폰트 크기 조정
    fontStyle: 'italic',
    fontWeight: '700',
    lineHeight: 'normal',
    margin: 0
  },

  // 더보기 버튼 - 크기 축소
  moreButton: {
    width: '60px', // 폭 축소
    height: '32px', // 높이 축소
    flexShrink: 0,
    background: '#74B9FF',
    border: 'none',
    borderRadius: '16px', // 라운드 조정
    cursor: 'pointer',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '11px', // 폰트 크기 축소
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  // 상품 그리드 - 비율 조정
  productGrid: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px', // 간격 증가
    justifyItems: 'center',
    maxWidth: '1000px', // 최대 폭 증가
    margin: '0 auto'
  },

  // 상품 카드 - 크기 조정
  productCard: {
    width: '300px', // 폭 증가
    height: '350px', // 높이 증가
    flexShrink: 0,
    background: '#F8F8F8',
    border: '1px solid #E5E5E5',
    borderRadius: '15px',
    padding: '20px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column'
  },

  // 상품 이미지 컨테이너 - 크기 조정
  productImageContainer: {
    width: '260px', // 폭 증가
    height: '180px', // 높이 증가
    flexShrink: 0,
    background: '#F0F0F0',
    borderRadius: '10px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    color: '#999'
  },

  // 상품 정보
  productInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  productName: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '15px',
    fontFamily: 'Pretendard, sans-serif',
    textAlign: 'center'
  },

  productPriceContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px'
  },

  productPrice: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#172031',
    fontFamily: 'Pretendard, sans-serif'
  },

  productOriginalPrice: {
    fontSize: '14px',
    color: '#999',
    textDecoration: 'line-through',
    fontFamily: 'Pretendard, sans-serif'
  },

  // 공지사항 섹션 - 비율 조정
  noticeSection: {
    width: '100%',
    maxWidth: '1200px', // 캐러셀과 동일한 폭
    marginBottom: '40px'
  },

  noticeList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px' // 간격 줄임
  },

  noticeItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 25px', // 패딩 조정
    background: '#f8f9fa',
    borderRadius: '12px', // 라운드 조정
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    minHeight: '50px' // 높이 조정
  },

  noticeTitle: {
    fontSize: '15px', // 폰트 크기 조정
    fontWeight: '500',
    color: '#333',
    fontFamily: 'Pretendard, sans-serif'
  },

  noticeDate: {
    fontSize: '13px', // 폰트 크기 조정
    color: '#666',
    fontFamily: 'Pretendard, sans-serif'
  }
};

// 호버 효과 함수들
export const hoverEffects = {
  productCard: {
    onMouseEnter: (e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }
  },
  
  noticeItem: {
    onMouseEnter: (e) => {
      e.currentTarget.style.backgroundColor = '#e9ecef';
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.backgroundColor = '#f8f9fa';
    }
  },

  moreButton: {
    onMouseEnter: (e) => {
      e.currentTarget.style.backgroundColor = '#5a9cfc';
      e.currentTarget.style.transform = 'scale(1.05)';
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.backgroundColor = '#74B9FF';
      e.currentTarget.style.transform = 'scale(1)';
    }
  },

  carouselNavButton: {
    onMouseEnter: (e) => {
      e.currentTarget.style.color = '#000';
      e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.color = '#172031';
      e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
    }
  }
};
=======
// MDPage.main.styled.js
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #ffffff;
  padding: 0;
  margin: 0;
`;

export const MainContent = styled.main`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px 100px;
`;

// 캐러셀 섹션
export const CarouselSection = styled.section`
  margin-bottom: 60px;
  position: relative; /* 자식 요소인 캐러셀 컨테이너를 기준으로 위치 잡기 위함 */
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 1200px;
  height: 400px;
  margin: 0 auto;
  border-radius: 25px;
  opacity: 0.8;
  background-color: #B3D1F0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const CarouselContent = styled.div`
  color: #172031;
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

export const CarouselNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background-color: #B3D1F0;
  border: 1px solid #172031;
  border-radius: 50%;
  color: #172031;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${props => props.$direction === 'left' ? 'left: 40px;' : 'right: 40px;'}
  
  &:hover {
    background-color: #172031;
    color: #ffffff;
    transform: translateY(-50%) scale(1.1);
  }
`;

// 캐러셀 하단 인디케이터 컨테이너
export const CarouselIndicators = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 5px; 
  z-index: 10;
  
  /* 캐러셀 중앙 정렬을 위한 코드 추가 */
  left: 50%;
  transform: translateX(-50%);
`;

// 개별 인디케이터 버튼
export const Indicator = styled.button`
  width: 40px;
  height: 17px;
  border: 2px solid #A259FF;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${props => props.$active ? '#A259FF' : '#ffffff'};
  
  &:hover {
    opacity: 0.8;
  }
`;

// 섹션 공통 스타일
export const Section = styled.section`
  margin-bottom: 60px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
`;

// 섹션 헤더 - 제목과 more 버튼을 한 줄에 정렬
export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

// 섹션 제목
export const SectionTitle = styled.h2`
  font-family: 'Pretendard', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #172031;
  margin: 0;
`;

// More 버튼
export const MoreButton = styled.a`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #74B9FF;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #5599e5;
  }
`;

// 상품 그리드
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  width: 300px;
  height: 350px;
  background-color: #F8F8F8;
  border: 1px solid #E5E5E5;
  border-radius: 15px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.15);
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 180px;
  background-color: #F0F0F0;
  border-radius: 10px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-family: 'Pretendard', sans-serif;
  border: 1px solid #E5E5E5;
`;

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProductName = styled.h3`
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #172031;
  margin: 0;
  line-height: 1.3;
`;

export const ProductPrice = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #A259FF;
  margin: 0;
`;

export const ProductDescription = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.4;
`;

// 공지사항 섹션
export const NoticeSection = styled.section`
  max-width: 1400px;
  margin: 80px auto 0;
  padding: 30px;
  background-color: #F8F8F8;
  border-radius: 15px;
  border: 1px solid #E5E5E5;
`;

export const NoticeTitle = styled.h3`
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #172031;
  margin: 0 0 20px 0;
  border-bottom: 2px solid #B3D1F0;
  padding-bottom: 10px;
`;

export const NoticeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NoticeItem = styled.li`
  padding: 12px 0;
  border-bottom: 1px solid #E5E5E5;
  font-family: 'Pretendard', sans-serif;
  color: #172031;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    color: #74B9FF;
    padding-left: 10px;
  }
`;

export const NoticeDate = styled.span`
  color: #999;
  font-size: 13px;
  margin-left: 10px;
`;
>>>>>>> Stashed changes
