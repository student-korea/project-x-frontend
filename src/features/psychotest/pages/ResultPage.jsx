// src/features/psychotest/pages/ResultPage.jsx
import React from 'react';
import '../psychotest.css';

const ResultPage = ({ result, onRetry, onClose }) => {
  // 외부에서 result 주입이 없으면 기본 예시 사용
  const data = result ?? {
    characterImage: '',
    characterName: '에리나',
    personality: '상냥함',
    description: '항상 밝고 다정하다.',
    details: [],
    // compatibility / similar / others 등은 선택적으로 넘길 수 있음
  };

  const imgSrc = data.characterImage && data.characterImage.trim().length > 0 ? data.characterImage : null;

  return (
    <div className="modal-container" role="dialog" aria-modal="true" aria-labelledby="ptr-title">
      <div className="test-modal">
        {/* 헤더 */}
        <div className="header">
          <button className="close-button" onClick={() => onClose?.()} aria-label="닫기">×</button>
          <h1 className="title" id="ptr-title">나의 최애 버추얼 아이돌 찾기</h1>
        </div>

        {/* 본문 */}
        <div className="content">
          {/* 캐릭터 이미지 */}
          <div className="character-section">
            <div className="character-image-container">
              {imgSrc ? (
                <img src={imgSrc} alt={data.characterName} className="character-image" />
              ) : (
                <div className="character-image placeholder" aria-label="이미지 없음">🙂</div>
              )}
            </div>
          </div>

          {/* 결과 정보 */}
          <div className="result-section">
            <div className="character-info">
              <h2 className="character-name">{data.characterName}</h2>
              <div className="personality-tag">☆ 중심 : {data.personality}</div>
            </div>

            <div className="description-section">
              <p className="description">{data.description}</p>

              {Array.isArray(data.details) && data.details.length > 0 && (
                <div className="details">
                  {data.details.map((d, i) => (
                    <p key={i} className="detail-item">{d}</p>
                  ))}
                </div>
              )}

              {(data.compatibility || data.similar || data.others) && (
                <div className="additional-info">
                  {data.compatibility && <p className="compatibility">• {data.compatibility}</p>}
                  {data.similar && <p className="similar">• {data.similar}</p>}
                  {data.others && <p className="others">{data.others}</p>}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <div className="footer">
          <button className="retry-button" onClick={() => onRetry?.()}>테스트 다시하기</button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
