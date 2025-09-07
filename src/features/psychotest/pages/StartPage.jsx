import React from 'react';
import '../psychotest.css';

const StartPage = ({ onStart, onClose, selectedCharacter }) => {
  const handleStartTest = () => {
    onStart?.();
  };

  const handleClose = () => {
    onClose?.();
  };

  return (
    <div className="modal-container" role="dialog" aria-modal="true" aria-labelledby="pt-title">
      <div className="test-modal">
        {/* 헤더 */}
        <div className="header">
          <button className="close-button" onClick={handleClose} aria-label="닫기">×</button>
          <h1 className="title" id="pt-title">나의 최애 버추얼 아이돌 찾기</h1>
        </div>

        {/* 본문 */}
        <div className="content">
          {/* 히어로 */}
          <div className="hero-section">
            <div className="logo-container" aria-hidden="true">
              <div className="logo-icon">🧠</div>
              <h2 className="logo-text">심리 테스트</h2>
            </div>

            <div className="floating-elements" aria-hidden="true">
              <div className="float-item heart">💖</div>
              <div className="float-item star">✨</div>
              <div className="float-item music">🎵</div>
              <div className="float-item sparkle">💫</div>
            </div>
          </div>

          {/* 설명 */}
          <div className="description-section">
            {selectedCharacter && (
              <div className="selected-pill" aria-label="선택 캐릭터">
                선택한 캐릭터: <strong>{selectedCharacter.name || selectedCharacter}</strong>
              </div>
            )}

            <h3 className="main-description">
              심리테스트로 찾는<br/>
              <span className="highlight">나만의 버추얼 아이돌</span>
            </h3>

            <div className="test-info" aria-hidden="true">
              <div className="info-pill"><span className="info-icon">⏱️</span><span>약 3분</span></div>
              <div className="info-pill"><span className="info-icon">📝</span><span>9문항</span></div>
            </div>

            <p className="sub-description">
              12가지 매력적인 성격 유형 중에서<br/>
              당신과 가장 잘 맞는 캐릭터를 찾아드려요
            </p>
          </div>
        </div>

        {/* 푸터 */}
        <div className="footer">
          <button className="start-button" onClick={handleStartTest}>
            <div className="button-content">
              <span className="button-text">테스트 시작하기</span>
              <div className="button-icon" aria-hidden="true">→</div>
            </div>
            <div className="button-glow" aria-hidden="true"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
