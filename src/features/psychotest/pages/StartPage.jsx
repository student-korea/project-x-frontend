import React from "react";
import "../psychotest.css";

import ModalContainer from "../components/ModalContainer.jsx";
import HeaderBar from "../components/HeaderBar.jsx";
import FooterBar from "../components/FooterBar.jsx";
import StartCtaButton from "../components/StartCtaButton.jsx";
import Hero from "../components/Hero.jsx";

const StartPage = ({ onStart, onClose }) => {
  return (
    <ModalContainer titleId="pt-title">
      <HeaderBar
        titleId="pt-title"
        title="나의 최애 버추얼 아이돌 찾기"
        onClose={onClose}
      />

      <div className="content">
        <Hero />

        <div className="description-section">
          <h3 className="main-description">
            심리테스트로 찾는
            <br />
            <span className="highlight">나만의 버추얼 아이돌</span>
          </h3>

          <div className="test-info" aria-hidden="true">
            <div className="info-pill">
              <span className="info-icon">⏱️</span>
              <span>약 2분</span>
            </div>
            <div className="info-pill">
              <span className="info-icon">📝</span>
              <span>9문항</span>
            </div>
          </div>

          <p className="sub-description">
            12가지 매력적인 성격 유형 중에서
            <br />
            당신과 가장 잘 맞는 캐릭터를 찾아드려요
          </p>
        </div>
      </div>

      <FooterBar>
        <StartCtaButton onClick={onStart} />
      </FooterBar>
    </ModalContainer>
  );
};

export default StartPage;
