// MDPage.ProductDetail.styled.js
<<<<<<< Updated upstream
export const productDetailStyles = {
  container: {
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    padding: '0',
    margin: '0'
  },
  
  contentWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 80px',
    display: 'flex',
    gap: '60px'
  },
  
  // 왼쪽 이미지 영역
  imageSection: {
    flex: '1',
    maxWidth: '500px'
  },
  
  mainImage: {
    width: '100%',
    height: '400px',
    backgroundColor: '#F8F8F8',
    border: '1px solid #E5E5E5',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    overflow: 'hidden'
  },
  
  mainImagePlaceholder: {
    color: '#999',
    fontSize: '18px',
    fontFamily: 'Pretendard, sans-serif'
  },
  
  thumbnailContainer: {
    display: 'flex',
    gap: '15px',
    marginTop: '20px'
  },
  
  thumbnail: {
    width: '80px',
    height: '80px',
    backgroundColor: '#F0F0F0',
    border: '1px solid #E5E5E5',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease'
  },
  
  thumbnailActive: {
    border: '2px solid #A259FF'
  },
  
  // 오른쪽 정보 영역
  infoSection: {
    flex: '1',
    maxWidth: '500px',
    padding: '20px 0'
  },
  
  productTitle: {
    fontSize: '32px',
    fontWeight: '700',
    fontFamily: 'Pretendard, sans-serif',
    color: '#172031',
    marginBottom: '20px',
    lineHeight: '1.4'
  },
  
  productPrice: {
    fontSize: '28px',
    fontWeight: '700',
    fontFamily: 'Pretendard, sans-serif',
    color: '#A259FF',
    marginBottom: '30px'
  },
  
  optionSection: {
    marginBottom: '40px'
  },
  
  optionLabel: {
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: 'Pretendard, sans-serif',
    color: '#172031',
    marginBottom: '12px',
    display: 'block'
  },
  
  quantityContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '30px'
  },
  
  quantityInput: {
    width: '60px',
    height: '40px',
    border: '1px solid #E5E5E5',
    borderRadius: '8px',
    textAlign: 'center',
    fontSize: '16px',
    fontFamily: 'Pretendard, sans-serif'
  },
  
  quantityButton: {
    width: '40px',
    height: '40px',
    border: '1px solid #E5E5E5',
    borderRadius: '8px',
    backgroundColor: '#F8F8F8',
    cursor: 'pointer',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    color: '#172031'
  },
  
  // 버튼 섹션
  buttonSection: {
    display: 'flex',
    gap: '15px',
    marginBottom: '40px'
  },
  
  cartButton: {
    flex: '1',
    height: '50px',
    backgroundColor: '#B3D1F0',
    color: '#172031',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: 'Pretendard, sans-serif',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  
  buyButton: {
    flex: '1',
    height: '50px',
    backgroundColor: '#74B9FF',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: 'Pretendard, sans-serif',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  
  // 상품 상세 정보 영역
  detailSection: {
    width: '100%',
    maxWidth: '1200px',
    margin: '60px auto 0',
    padding: '0 80px'
  },
  
  // 탭 네비게이션
  tabContainer: {
    display: 'flex',
    borderBottom: '2px solid #E5E5E5',
    marginBottom: '30px'
  },
  
  tabButton: {
    padding: '15px 30px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '18px',
    fontWeight: '600',
    fontFamily: 'Pretendard, sans-serif',
    color: '#666',
    cursor: 'pointer',
    borderBottom: '3px solid transparent',
    transition: 'all 0.3s ease'
  },
  
  tabButtonActive: {
    color: '#172031',
    borderBottom: '3px solid #B3D1F0'
  },
  
  detailContent: {
    backgroundColor: '#F8F8F8',
    borderRadius: '15px',
    padding: '40px',
    minHeight: '300px',
    border: '1px solid #E5E5E5'
  },
  
  detailText: {
    fontSize: '16px',
    lineHeight: '1.6',
    fontFamily: 'Pretendard, sans-serif',
    color: '#172031',
    marginBottom: '20px'
  },
  
  specList: {
    listStyle: 'none',
    padding: '0',
    margin: '0'
  },
  
  specItem: {
    display: 'flex',
    padding: '12px 0',
    borderBottom: '1px solid #E5E5E5',
    fontSize: '15px',
    fontFamily: 'Pretendard, sans-serif'
  },
  
  specLabel: {
    width: '120px',
    fontWeight: '600',
    color: '#172031'
  },
  
  specValue: {
    color: '#666',
    flex: '1'
  }
};

// 호버 및 인터랙션 효과
export const productDetailEffects = {
  thumbnail: {
    onMouseEnter: (e) => {
      e.target.style.transform = 'scale(1.05)';
      e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    },
    onMouseLeave: (e) => {
      e.target.style.transform = 'scale(1)';
      e.target.style.boxShadow = 'none';
    }
  },
  
  cartButton: {
    onMouseEnter: (e) => {
      e.target.style.backgroundColor = '#9CC5E8';
      e.target.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: (e) => {
      e.target.style.backgroundColor = '#B3D1F0';
      e.target.style.transform = 'translateY(0)';
    }
  },
  
  buyButton: {
    onMouseEnter: (e) => {
      e.target.style.backgroundColor = '#5A9FEE';
      e.target.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: (e) => {
      e.target.style.backgroundColor = '#74B9FF';
      e.target.style.transform = 'translateY(0)';
    }
  },
  
  quantityButton: {
    onMouseEnter: (e) => {
      e.target.style.backgroundColor = '#E5E5E5';
    },
    onMouseLeave: (e) => {
      e.target.style.backgroundColor = '#F8F8F8';
    }
  }
};
=======
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #ffffff;
  padding: 0;
  margin: 0;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 80px;
  display: flex;
  gap: 60px;
`;

// 왼쪽 이미지 영역
export const ImageSection = styled.div`
  flex: 1;
  max-width: 500px;
`;

export const MainImage = styled.div`
  width: 100%;
  height: 400px;
  background-color: #F8F8F8;
  border: 1px solid #E5E5E5;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const MainImagePlaceholder = styled.span`
  color: #999;
  font-size: 18px;
  font-family: 'Pretendard', sans-serif;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

export const Thumbnail = styled.div`
  width: 80px;
  height: 80px;
  background-color: #F0F0F0;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: ${props => props.$active ? '2px solid #A259FF' : '1px solid #E5E5E5'};
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
`;

// 오른쪽 정보 영역
export const InfoSection = styled.div`
  flex: 1;
  max-width: 500px;
  padding: 20px 0;
`;

export const ProductTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  font-family: 'Pretendard', sans-serif;
  color: #172031;
  margin-bottom: 20px;
  line-height: 1.4;
  margin: 0 0 20px 0;
`;

export const ProductPrice = styled.div`
  font-size: 28px;
  font-weight: 700;
  font-family: 'Pretendard', sans-serif;
  color: #A259FF;
  margin-bottom: 30px;
`;

export const OptionSection = styled.div`
  margin-bottom: 40px;
`;

export const OptionLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  font-family: 'Pretendard', sans-serif;
  color: #172031;
  margin-bottom: 12px;
  display: block;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-bottom: 30px;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  width: fit-content;
`;

export const QuantityInput = styled.input`
  width: 50px;
  height: 35px;
  border: none;
  text-align: center;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  background-color: transparent;
  
  &:focus {
    outline: none;
  }
`;

export const QuantityButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #172031;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #F8F8F8;
  }
`;

export const TotalPrice = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #172031;
  margin-bottom: 30px;
  font-family: 'Pretendard', sans-serif;
`;

// 버튼 섹션
export const ButtonSection = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
`;

export const CartButton = styled.button`
  flex: 1;
  height: 50px;
  background-color: #B3D1F0;
  color: #172031;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Pretendard', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #9CC5E8;
    transform: translateY(-2px);
  }
`;

export const BuyButton = styled.button`
  flex: 1;
  height: 50px;
  background-color: #74B9FF;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Pretendard', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #5A9FEE;
    transform: translateY(-2px);
  }
`;

export const ProductDescription = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  font-family: 'Pretendard', sans-serif;
`;

// 하단 상세 정보 영역
export const DetailSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 60px auto 0;
  padding: 0 80px;
`;

export const TabContainer = styled.div`
  display: flex;
  border-bottom: 2px solid #E5E5E5;
  margin-bottom: 30px;
`;

export const TabButton = styled.button`
  padding: 15px 30px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Pretendard', sans-serif;
  color: ${props => props.$active ? '#172031' : '#666'};
  cursor: pointer;
  border-bottom: ${props => props.$active ? '3px solid #B3D1F0' : '3px solid transparent'};
  transition: all 0.3s ease;
  
  &:hover {
    color: #172031;
  }
`;

export const DetailContent = styled.div`
  background-color: #F8F8F8;
  border-radius: 15px;
  padding: 40px;
  min-height: 300px;
  border: 1px solid #E5E5E5;
`;

export const DetailText = styled.div`
  font-size: 16px;
  line-height: 1.6;
  font-family: 'Pretendard', sans-serif;
  color: #172031;
  margin-bottom: 20px;
  
  strong {
    font-weight: 700;
  }
`;

export const SpecList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SpecItem = styled.li`
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #E5E5E5;
  font-size: 15px;
  font-family: 'Pretendard', sans-serif;
`;

export const SpecLabel = styled.span`
  width: 120px;
  font-weight: 600;
  color: #172031;
`;

export const SpecValue = styled.span`
  color: #666;
  flex: 1;
`;
>>>>>>> Stashed changes
