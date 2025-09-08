import React, { useMemo, useState } from "react";
import "../psychotest.css";

/* =========================
   공통 컴포넌트
   ========================= */
function ModalContainer({ titleId, children }) {
  return (
    <div
      className="modal-container"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="test-modal">{children}</div>
    </div>
  );
}

function HeaderBar({ titleId, title, onClose, right }) {
  return (
    <div className="header">
      <button className="close-button" onClick={onClose} aria-label="닫기">
        ×
      </button>
      <h1 className="title" id={titleId}>
        {title}
      </h1>
      {right ? <div className="progress-info">{right}</div> : null}
    </div>
  );
}

function FooterBar({ children, style }) {
  return (
    <div className="footer" style={style}>
      {children}
    </div>
  );
}

function ProgressBar({ value }) {
  return (
    <div className="progress" aria-label={`진행도 ${value}%`}>
      <div className="progress-fill" style={{ width: `${value}%` }} />
    </div>
  );
}

function OptionButton({ selected, onClick, children }) {
  const cls = `option-button ${selected ? "selected" : ""}`;
  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  );
}

function NavButton({ variant = "next", disabled, onClick, children }) {
  const base = "nav-button";
  const specific =
    variant === "prev"
      ? "prev-button"
      : variant === "next"
      ? "next-button"
      : variant;
  const disabledCls = disabled ? "disabled" : "";
  return (
    <button
      className={`${base} ${specific} ${disabledCls}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

function StartCtaButton({ onClick, label = "테스트 시작하기" }) {
  return (
    <button className="start-button" onClick={onClick}>
      <div className="button-content">
        <span className="button-text">{label}</span>
        <div className="button-icon" aria-hidden="true">
          →
        </div>
      </div>
      <div className="button-glow" aria-hidden="true"></div>
    </button>
  );
}

function CharacterImage({ src, alt }) {
  const has = src && src.trim().length > 0;
  return (
    <div className="character-image-container">
      {has ? (
        <img src={src} alt={alt} className="character-image" />
      ) : (
        <div className="character-image placeholder" aria-label="이미지 없음">
          🙂
        </div>
      )}
    </div>
  );
}

function ResultInfo({
  name,
  personality,
  description,
  details = [],
  compatibility,
  similar,
  others,
}) {
  return (
    <div className="result-section">
      <div className="character-info">
        <h2 className="character-name">{name}</h2>
        {personality ? (
          <div className="personality-tag">☆ 중심 : {personality}</div>
        ) : null}
      </div>

      <div className="description-section">
        {description ? <p className="description">{description}</p> : null}

        {Array.isArray(details) && details.length > 0 && (
          <div className="details">
            {details.map((d, i) => (
              <p key={i} className="detail-item">
                {d}
              </p>
            ))}
          </div>
        )}

        {(compatibility || similar || others) && (
          <div className="additional-info">
            {compatibility && (
              <p className="compatibility">• {compatibility}</p>
            )}
            {similar && <p className="similar">• {similar}</p>}
            {others && <p className="others">{others}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

function Hero() {
  return (
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
  );
}

function PageIndicator({ children, style }) {
  return (
    <div className="page-indicator" style={style}>
      {children}
    </div>
  );
}

/* =========================
   페이지 컴포넌트
   ========================= */

// Start
export function StartPage({ onStart, onClose }) {
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
            <span className="highlight">나의 최애 버추얼 아이돌</span>
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
}

// Questions
export function QuestionPage({ onClose, onComplete }) {
  const questions = useMemo(
    () => [
      {
        id: 1,
        question: "집에 혼자 있을 때 하고 싶은 건?",
        optionA: "게임이나 유튜브 보다가 잠든다.",
        optionB: "시집이나 음악을 듣고, 책 읽기",
      },
      {
        id: 2,
        question: "친구들과 모임에서 당신은?",
        optionA: "분위기를 주도하며 대화를 이끈다",
        optionB: "조용히 듣고 필요할 때만 말한다",
      },
      // … 이어서 추가
    ],
    []
  );

  const totalQuestions = questions.length;
  const [index, setIndex] = useState(0); // 0-based
  const [selected, setSelected] = useState(null); // 'A' | 'B' | null
  const [answers, setAnswers] = useState([]); // [{id, choice}...]

  const current = questions[index];
  const progress = Math.round(((index + 1) / totalQuestions) * 100);

  const handleNext = () => {
    if (!selected) return;

    const newAnswers = [...answers];
    newAnswers[index] = { id: current.id, choice: selected };
    setAnswers(newAnswers);

    if (index < totalQuestions - 1) {
      setIndex((i) => i + 1);
      setSelected(newAnswers[index + 1]?.choice ?? null);
    } else {
      onComplete?.({ answers: newAnswers });
    }
  };

  const handlePrev = () => {
    if (index === 0) return;
    const prevIndex = index - 1;
    setIndex(prevIndex);
    setSelected(answers[prevIndex]?.choice ?? null);
  };

  return (
    <ModalContainer titleId="ptq-title">
      <HeaderBar
        titleId="ptq-title"
        title="나의 최애 버추얼 아이돌 찾기"
        onClose={onClose}
        right={`질문 ${index + 1}/${totalQuestions}`}
      />

      <div className="content">
        <ProgressBar value={progress} />

        <div className="question-section">
          <h2 className="question-text">{current.question}</h2>
        </div>

        <div className="options-section">
          <OptionButton
            selected={selected === "A"}
            onClick={() => setSelected("A")}
          >
            {current.optionA}
          </OptionButton>
          <OptionButton
            selected={selected === "B"}
            onClick={() => setSelected("B")}
          >
            {current.optionB}
          </OptionButton>
        </div>
      </div>

      <FooterBar style={{ display: "flex", gap: 8 }}>
        <NavButton variant="prev" onClick={handlePrev} disabled={index === 0}>
          이전
        </NavButton>

        <PageIndicator style={{ marginLeft: "auto", marginRight: "auto" }}>
          나만의 아이돌 찾기
        </PageIndicator>

        <NavButton variant="next" onClick={handleNext} disabled={!selected}>
          {index === totalQuestions - 1 ? "결과" : "다음"}
        </NavButton>
      </FooterBar>
    </ModalContainer>
  );
}

// Result
export function ResultPage({ result, onRetry, onClose }) {
  const data = result ?? {
    characterImage: "",
    characterName: "에리나",
    personality: "상냥함",
    description: "항상 밝고 다정하다.",
    details: [],
  };

  return (
    <ModalContainer titleId="ptr-title">
      <HeaderBar
        titleId="ptr-title"
        title="나의 최애 버추얼 아이돌 찾기"
        onClose={onClose}
      />

      <div className="content">
        <div className="character-section">
          <CharacterImage src={data.characterImage} alt={data.characterName} />
        </div>

        <ResultInfo
          name={data.characterName}
          personality={data.personality}
          description={data.description}
          details={data.details}
          compatibility={data.compatibility}
          similar={data.similar}
          others={data.others}
        />
      </div>

      <FooterBar>
        <NavButton variant="retry-button" onClick={onRetry}>
          테스트 다시하기
        </NavButton>
      </FooterBar>
    </ModalContainer>
  );
}
