
// MDPage.Header.styled.js (화면 완전히 꽉 채우기)
export const headerStyles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100vw', // 뷰포트 전체 폭
    height: '73px',
    backgroundColor: '#B3D1F0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 80px', // 좌우 패딩
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    boxSizing: 'border-box',
    margin: 0
  },

  logo: {
    color: '#172031',
    fontFamily: 'Pretendard, sans-serif',
    fontSize: '25px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center'
  },

  nav: {
    display: 'flex',
    gap: '3rem',
    alignItems: 'center'
  },

  navLink: {
    textDecoration: 'none',
    color: '#172031',
    fontFamily: 'Pretendard, sans-serif',
    fontSize: '25px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    padding: '0.5rem 0',
    transition: 'all 0.3s ease'
  },

  navLinkActive: {
    borderBottom: '3px solid #172031'
  },

  rightSection: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center',
    transition: 'all 0.3s ease'
  },

  searchContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease'
  },

  searchButton: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '50%',
    transition: 'all 0.3s ease',
    color: '#172031'
  },

  searchForm: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },

  searchInputContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '25px',
    border: '2px solid #172031',
    padding: '0.25rem 0.75rem',
    width: '250px',
    transition: 'all 0.3s ease'
  },

  searchIcon: {
    fontSize: '1rem',
    color: '#172031',
    marginRight: '0.5rem'
  },

  searchInput: {
    flex: 1,
    border: 'none',
    background: 'transparent',
    outline: 'none',
    fontSize: '0.9rem',
    padding: '0.25rem 0',
    color: '#172031'
  },

  searchCloseButton: {
    background: 'none',
    border: 'none',
    fontSize: '0.8rem',
    cursor: 'pointer',
    color: '#172031',
    padding: '0.2rem',
    marginLeft: '0.25rem'
  },

  iconSection: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center',
    transition: 'transform 0.3s ease'
  },

  iconSectionHidden: {
    transform: 'scale(0.9)',
    opacity: 0.7
  },

  cartLink: {
    textDecoration: 'none',
    position: 'relative',
    padding: '0.5rem',
    borderRadius: '50%',
    transition: 'background-color 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  cartIcon: {
    fontSize: '1.5rem',
    color: '#172031'
  },

  cartBadge: {
    position: 'absolute',
    top: '0.2rem',
    right: '0.2rem',
    backgroundColor: '#e74c3c',
    color: 'white',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    fontSize: '0.7rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold'
  },

  iconButton: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '50%',
    transition: 'background-color 0.2s',
    color: '#172031'
  },

  dropdownContainer: {
    position: 'relative'
  },

  dropdown: {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    padding: '0.5rem 0',
    minWidth: '120px',
    zIndex: 1001
  },

  dropdownItem: {
    width: '100%',
    padding: '0.5rem 1rem',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    textAlign: 'left',
    fontFamily: 'Pretendard, sans-serif'
  },

  dropdownItemActive: {
    background: '#B3D1F0',
    color: '#172031'
  },

  dropdownItemInactive: {
    color: '#333'
  }
};

// 호버 효과 함수들
export const hoverEffects = {
  onMouseEnter: (e) => {
    e.target.style.backgroundColor = 'rgba(23, 32, 49, 0.1)';
  },
  onMouseLeave: (e) => {
    e.target.style.backgroundColor = 'transparent';
  }
};

// MDPage.Header.styled.js
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1600px;
  height: 73px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 60px;
  position: relative;
  z-index: 100;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  flex-shrink: 0;
`;

export const Logo = styled.h1`
  color: #172031;
  font-family: 'Pretendard', sans-serif;
  font-size: 25px;
  font-weight: 700;
  margin: 0;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 25px;
  flex: 1;
  justify-content: center;
  max-width: 700px;
`;

export const NavItem = styled.button`
  background: none;
  border: none;
  color: #172031;
  font-family: 'Pretendard', sans-serif;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
  
  &:hover {
    background-color: rgba(23, 32, 49, 0.1);
  }
  
  &.active {
    border-bottom: 3px solid #172031;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 320px;
  justify-content: flex-end;
  flex-shrink: 0;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 20px;
  width: 44px;
  height: 44px;
  
  &:hover {
    background-color: rgba(23, 32, 49, 0.1);
  }
`;

export const CartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff4444;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  min-width: 140px;
  z-index: 1000;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.$isOpen ? '0' : '-10px'});
  transition: all 0.3s ease;
`;

export const DropdownItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  color: #172031;
  
  &:hover {
    background-color: #B3D1F0;
  }
  
  &:first-child {
    border-radius: 8px 8px 0 0;
  }
  
  &:last-child {
    border-radius: 0 0 8px 8px;
  }
`;

export const SearchInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #E5E5E5;
  border-radius: 6px;
  font-size: 12px;
  width: 150px;

  &::placeholder {  
    font-size: 12px;  
  }
  &:focus {
    outline: none;
    border-color: #74B9FF;
    box-shadow: 0 0 0 2px rgba(116, 185, 255, 0.2);
  }
`;

