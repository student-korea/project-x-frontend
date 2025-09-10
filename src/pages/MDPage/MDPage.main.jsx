<<<<<<< Updated upstream
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mdPageStyles, hoverEffects } from './styled/MDPage.main.styled';


function MDPage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 더미 데이터
  const carouselSlides = [
    { id: 1, title: '캐러셀 슬라이드 1' },
    { id: 2, title: '캐러셀 슬라이드 2' },
    { id: 3, title: '캐러셀 슬라이드 3' }
  ];

  const newProducts = [
    { id: 1, name: '신상품 1', price: '29,000', originalPrice: '35,000' },
    { id: 2, name: '신상품 2', price: '19,000', originalPrice: '25,000' },
    { id: 3, name: '신상품 3', price: '39,000', originalPrice: '45,000' }
  ];

  const bestProducts = [
    { id: 4, name: '베스트 1', price: '25,000', originalPrice: '30,000' },
    { id: 5, name: '베스트 2', price: '15,000', originalPrice: '20,000' },
    { id: 6, name: '베스트 3', price: '35,000', originalPrice: '40,000' }
  ];

  const eventProducts = [
    { id: 7, name: '이벤트 1', price: '20,000', originalPrice: '28,000' },
    { id: 8, name: '이벤트 2', price: '30,000', originalPrice: '38,000' },
    { id: 9, name: '이벤트 3', price: '18,000', originalPrice: '24,000' }
  ];

  const notices = [
    { id: 1, title: '새로운 상품이 출시되었습니다!', date: '2024.03.15' },
    { id: 2, title: '봄맞이 할인 이벤트 진행 중', date: '2024.03.10' }
  ];

  const handleSlideChange = (direction) => {
    if (direction === 'prev') {
      setCurrentSlide(currentSlide === 0 ? carouselSlides.length - 1 : currentSlide - 1);
    } else {
      setCurrentSlide(currentSlide === carouselSlides.length - 1 ? 0 : currentSlide + 1);
    }
  };

  const ProductCard = ({ product }) => (
    <div 
      style={mdPageStyles.productCard}
      onMouseEnter={hoverEffects.productCard.onMouseEnter}
      onMouseLeave={hoverEffects.productCard.onMouseLeave}
      onClick={() => navigate(`/MD/product/${product.id}`)}
    >
      <div style={mdPageStyles.productImageContainer}>
        상품 이미지
      </div>
      <div style={mdPageStyles.productInfo}>
        <div style={mdPageStyles.productName}>{product.name}</div>
        <div style={mdPageStyles.productPriceContainer}>
          <span style={mdPageStyles.productPrice}>{product.price}원</span>
          <span style={mdPageStyles.productOriginalPrice}>{product.originalPrice}원</span>
        </div>
      </div>
    </div>
  );

  const Section = ({ title, products, onMoreClick }) => (
    <div style={mdPageStyles.sectionContainer}>
      <div style={mdPageStyles.sectionHeader}>
        <h2 style={mdPageStyles.sectionTitle}>{title}</h2>
        <button 
          style={mdPageStyles.moreButton}
          onMouseEnter={hoverEffects.moreButton.onMouseEnter}
          onMouseLeave={hoverEffects.moreButton.onMouseLeave}
          onClick={onMoreClick}
        >
          더보기
        </button>
      </div>
      <div style={mdPageStyles.productGrid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

  return (
    <div style={mdPageStyles.container}>
      {/* 캐러셀 섹션 */}
      <div style={mdPageStyles.carouselSection}>
        <div style={{ 
          fontSize: '28px', 
          color: '#172031', 
          fontWeight: 'bold',
          fontFamily: 'Pretendard, sans-serif'
        }}>
          {carouselSlides[currentSlide].title}
        </div>
        
        {/* 캐러셀 내비게이션 */}
        <button 
          style={{...mdPageStyles.carouselNavButton, ...mdPageStyles.carouselNavLeft}}
          onMouseEnter={hoverEffects.carouselNavButton.onMouseEnter}
          onMouseLeave={hoverEffects.carouselNavButton.onMouseLeave}
          onClick={() => handleSlideChange('prev')}
        >
          &#8249;
        </button>
        
        <button 
          style={{...mdPageStyles.carouselNavButton, ...mdPageStyles.carouselNavRight}}
          onMouseEnter={hoverEffects.carouselNavButton.onMouseEnter}
          onMouseLeave={hoverEffects.carouselNavButton.onMouseLeave}
          onClick={() => handleSlideChange('next')}
        >
          &#8250;
        </button>

        {/* 캐러셀 인디케이터 */}
        <div style={mdPageStyles.carouselIndicators}>
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              style={{
                ...mdPageStyles.carouselIndicator,
                ...(index === currentSlide 
                  ? mdPageStyles.carouselIndicatorActive 
                  : mdPageStyles.carouselIndicatorInactive
                )
              }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* 신상품 섹션 */}
      <Section 
        title="신상품" 
        products={newProducts}
        onMoreClick={() => console.log('신상품 더보기 클릭!')}
      />

      {/* 베스트 섹션 */}
      <Section 
        title="베스트" 
        products={bestProducts}
        onMoreClick={() => console.log('베스트 더보기 클릭!')}
      />

      {/* 이벤트 섹션 */}
      <Section 
        title="이벤트" 
        products={eventProducts}
        onMoreClick={() => console.log('이벤트 더보기 클릭!')}
      />

      {/* 공지사항 섹션 */}
      <div style={mdPageStyles.sectionContainer}>
        <div style={mdPageStyles.sectionHeader}>
          <h2 style={mdPageStyles.sectionTitle}>공지사항</h2>
          <button 
            style={mdPageStyles.moreButton}
            onMouseEnter={hoverEffects.moreButton.onMouseEnter}
            onMouseLeave={hoverEffects.moreButton.onMouseLeave}
            onClick={() => console.log('공지사항 더보기 클릭!')}
          >
            더보기
          </button>
        </div>
        <div style={mdPageStyles.noticeList}>
          {notices.map(notice => (
            <div 
              key={notice.id}
              style={mdPageStyles.noticeItem}
              onMouseEnter={hoverEffects.noticeItem.onMouseEnter}
              onMouseLeave={hoverEffects.noticeItem.onMouseLeave}
              onClick={() => console.log(`공지사항 ${notice.id} 클릭!`)}
            >
              <span style={mdPageStyles.noticeTitle}>{notice.title}</span>
              <span style={mdPageStyles.noticeDate}>{notice.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MDPage;
=======
// MDPage.main.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styled/MDPage.main.styled';

function MDMain() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // 캐러셀 더미 데이터
  const carouselData = [
    { id: 1, title: '신규 회원 10% 할인', content: '첫 구매 시 특별 혜택을 만나보세요!' },
    { id: 2, title: '한정판 굿즈 출시', content: 'Project X 한정판 상품들을 확인해보세요!' },
    { id: 3, title: '무료배송 이벤트', content: '5만원 이상 구매 시 무료배송 혜택!' }
  ];

  // 인기 상품 더미 데이터
  const popularProducts = [
    { id: 1, name: '한정판 포토북', price: 25000, image: '상품 이미지 1', description: 'Project X 한정판 포토북' },
    { id: 2, name: 'Project X 굿즈 세트', price: 18000, image: '상품 이미지 2', description: '프로젝트 X 공식 굿즈' },
    { id: 3, name: '한정판 스티커팩', price: 8000, image: '상품 이미지 3', description: '홀로그램 스티커 세트' }
  ];

  // 신상품 더미 데이터
  const newProducts = [
    { id: 4, name: 'Project X 에코백', price: 15000, image: '상품 이미지 4', description: '친환경 캔버스 에코백' },
    { id: 5, name: '한정판 키링', price: 12000, image: '상품 이미지 5', description: '메탈 키링 한정판' },
    { id: 6, name: 'Project X 머그컵', price: 20000, image: '상품 이미지 6', description: '세라믹 머그컵' }
  ];

  // 공지사항 더미 데이터
  const notices = [
    { id: 1, title: '신규 회원 가입 이벤트 안내', date: '2024.12.15' },
    { id: 2, title: '배송 지연 안내 (12월 말 연휴)', date: '2024.12.14' },
    { id: 3, title: '한정판 상품 재입고 알림', date: '2024.12.13' },
    { id: 4, title: '웹사이트 유지보수 안내', date: '2024.12.12' },
    { id: 5, title: '고객센터 운영시간 변경 안내', date: '2024.12.11' }
  ];

  // 캐러셀 네비게이션
  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? carouselData.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === carouselData.length - 1 ? 0 : currentSlide + 1);
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  // 상품 클릭 핸들러
  const handleProductClick = (productId) => {
    navigate(`/MD/product/${productId}`);
  };

  // 더보기 버튼 핸들러
  const handleMoreProducts = () => {
    navigate('/MD/products');
  };

  return (
    <S.Container>
      <S.MainContent>
        {/* 캐러셀 섹션 */}
        <S.CarouselSection>
          <S.CarouselContainer>
            <S.CarouselNavButton 
              $direction="left" 
              onClick={handlePrevSlide}
            >
              ‹
            </S.CarouselNavButton>
            
            <S.CarouselContent>
              <h2>{carouselData[currentSlide].title}</h2>
              <p>{carouselData[currentSlide].content}</p>
            </S.CarouselContent>
            
            <S.CarouselNavButton 
              $direction="right" 
              onClick={handleNextSlide}
            >
              ›
            </S.CarouselNavButton>
          </S.CarouselContainer>
          
          <S.CarouselIndicators>
            {carouselData.map((_, index) => (
              <S.Indicator
                key={index}
                $active={currentSlide === index}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </S.CarouselIndicators>
        </S.CarouselSection>

        {/* 신상품 섹션 */}
        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>신상품</S.SectionTitle>
            <S.MoreButton onClick={handleMoreProducts}>더보기</S.MoreButton>
          </S.SectionHeader>
          
          <S.ProductGrid>
            {popularProducts.map(product => (
              <S.ProductCard 
                key={product.id}
                onClick={() => handleProductClick(product.id)}
              >
                <S.ProductImage>
                  {product.image}
                </S.ProductImage>
                <S.ProductInfo>
                  <S.ProductName>{product.name}</S.ProductName>
                  <S.ProductPrice>₩{product.price.toLocaleString()}</S.ProductPrice>
                  <S.ProductDescription>{product.description}</S.ProductDescription>
                </S.ProductInfo>
              </S.ProductCard>
            ))}
          </S.ProductGrid>
        </S.Section>

        {/* 베스트 섹션 */}
        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>베스트</S.SectionTitle>
            <S.MoreButton onClick={handleMoreProducts}>더보기</S.MoreButton>
          </S.SectionHeader>
          
          <S.ProductGrid>
            {newProducts.map(product => (
              <S.ProductCard 
                key={product.id}
                onClick={() => handleProductClick(product.id)}
              >
                <S.ProductImage>
                  {product.image}
                </S.ProductImage>
                <S.ProductInfo>
                  <S.ProductName>{product.name}</S.ProductName>
                  <S.ProductPrice>₩{product.price.toLocaleString()}</S.ProductPrice>
                  <S.ProductDescription>{product.description}</S.ProductDescription>
                </S.ProductInfo>
              </S.ProductCard>
            ))}
          </S.ProductGrid>
        </S.Section>

   {/* 이벤트 섹션 */}
        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>이벤트</S.SectionTitle>
            <S.MoreButton onClick={handleMoreProducts}>더보기</S.MoreButton>
          </S.SectionHeader>
          
          <S.ProductGrid>
            {newProducts.map(product => (
              <S.ProductCard 
                key={product.id}
                onClick={() => handleProductClick(product.id)}
              >
                <S.ProductImage>
                  {product.image}
                </S.ProductImage>
                <S.ProductInfo>
                  <S.ProductName>{product.name}</S.ProductName>
                  <S.ProductPrice>₩{product.price.toLocaleString()}</S.ProductPrice>
                  <S.ProductDescription>{product.description}</S.ProductDescription>
                </S.ProductInfo>
              </S.ProductCard>
            ))}
          </S.ProductGrid>
        </S.Section>
        {/* 공지사항 섹션 - 더보기 버튼 제거 */}
        <S.NoticeSection>
          <S.NoticeTitle>📢 공지사항</S.NoticeTitle>
          <S.NoticeList>
            {notices.map(notice => (
              <S.NoticeItem key={notice.id}>
                {notice.title}
                <S.NoticeDate>{notice.date}</S.NoticeDate>
              </S.NoticeItem>
            ))}
          </S.NoticeList>
        </S.NoticeSection>
      </S.MainContent>
    </S.Container>
  );
}

export default MDMain;
>>>>>>> Stashed changes
