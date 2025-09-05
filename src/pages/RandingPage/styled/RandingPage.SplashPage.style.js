import styled, { keyframes, css } from "styled-components";
import { useState } from "react";

// 점점 커지는 애니메이션
const scaleUp = keyframes`
    from {
        transform:scale(0);  opacity: 0;
    }
    to {
        transform: scale(1); opacity: 1;
    }
`;

const scaleDown = keyframes`
    from {
        transform:scale(1.05);
    }
    to {
        transform: scale(1);
    }
`;

// 텍스트 fade-in 애니메이션
const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const SplashPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #B3D1F0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* 확대 시 화면 밖 요소 잘리도록 */
`;

export const TitleWappper = styled.div.attrs(() => ({}))`
    width: 647px;
    height: 647px;
    background-color: #FAFAF7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    transform: scale(0); //시작할 시에 요소 크기 0
    // forwords: 애니메이션 끝난 뒤 요소 크기 유지
    // ease-out: 점점 느리게 커지도록 자연스러운 느낌을 줌
    animation: ${pulse} 1s ease-in-out infinite;

    ${({ animated }) => 
        animated ? 
        css`
        /* animated === true 일 때 (진입한 뒤 첫 애니메이션 실행이 종료된 후) */
        transform: scale(1);  /* 애니메이션 없이 기본값 유지 */
      `
    : css`
        /* animated === false 일 때 (처음 진입했을 때) */
        animation: ${scaleUp} 2.5s ease-out forwards;
        
      `
    }
    

    ${({ hoverAllowed }) =>
    hoverAllowed &&
    css`
        &:hover {
            /* 애니메이션이 종료된 후 호버하였을 때*/
            animation: ${pulse} 1s ease-in-out infinite;
        }
        &:not(:hover) {
            /* 애니메이션이 종료된 후 호버를 벗어났을 때*/
            animation: ${scaleDown} 1s ease-in-out forwards;
        }
    `}
`;

    

export const TitleSubText = styled.span`
    color: #172031;
    opacity: 0;                       /* 처음엔 안 보임 */
    animation: ${fadeIn} 1s ease-out forwards;
    animation-delay: 2.5s;              /* 원이 커진 뒤 시작 */
    margin: 0;
    `;

export const TitleMainText = styled.h1`
    color: #172031;
    opacity: 0;                       /* 처음엔 안 보임 */
    animation: ${fadeIn} 1s ease-out forwards;
    animation-delay: 2.5s;              /* 원이 커진 뒤 시작 */
    margin: 0;
    `;