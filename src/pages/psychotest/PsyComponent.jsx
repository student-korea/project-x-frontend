// src/pages/psychotest/PsyComponent.jsx
import React, { useMemo, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components"; // [CHANGED] 로딩 스피너용 keyframes/스타일 추가

import {
  ModalContainerWrap, TestModal, Header, Title, CloseButton, ProgressInfo,
  Content, Footer, StartButton, ButtonContent, ButtonText, ButtonIcon, ButtonGlow,
  HeroWrap, LogoContainer, LogoIcon, LogoText, Floating, Heart, Star, Music, Sparkle,
  DescriptionSection, MainDescription, Highlight, TestInfo, Pill, InfoIcon, SubDescription,
  Progress, ProgressFill, OptionBtn, NavBtn, PageIndicator, QuestionSection, QuestionText, OptionsCol,
  CharacterSection, CharacterImageBox, CharacterImg, Placeholder,
  CharacterInfo, CharacterName, PersonalityTag, ResultDescWrap, ResultDesc, Details, DetailItem, AdditionalInfo, InfoLine,
  RetryBtn,
} from "./ptStyled";

/* =========================================
 * 페이지 컴포넌트
 * - Start / Question / Result
 * - PsyControl.jsx에서 단계 전환 로직으로 렌더
 * ========================================= */

/** Start: 소개 + CTA */
export function StartPage({ onStart, onClose }) {
  return (
    <ModalContainer titleId="pt-title">
      <HeaderBar titleId="pt-title" title="나의 최애 버추얼 아이돌 찾기" onClose={onClose} />
      <Content>
        <Hero />
        <DescriptionSection>
          <MainDescription>
            심리테스트로 찾는<br />
            <Highlight>나의 최애 버추얼 아이돌</Highlight>
          </MainDescription>
          {/* 테스트 소요/문항 수 pill */}
          <TestInfo aria-hidden>
            <Pill><InfoIcon>⏱️</InfoIcon><span>약 2분</span></Pill>
            <Pill><InfoIcon>📝</InfoIcon><span>9문항</span></Pill>
          </TestInfo>
          <SubDescription>
            12가지 매력적인 성격 유형 중에서<br />
            당신과 가장 잘 맞는 캐릭터를 찾아드려요
          </SubDescription>
        </DescriptionSection>
      </Content>
      <FooterBar><StartCtaButton onClick={onStart} /></FooterBar>
    </ModalContainer>
  );
}

/** Questions: 질문/선택/진행도/내비게이션 */
export function QuestionPage({ onClose, onComplete }) {
  // [CHANGED] 질문 스키마를 2지선다 → **options 배열(5지선다)** 로 변경
  const questions = useMemo(() => ([
    {
      id: 1,
      question: "집에서 여유 시간에 가장 하고 싶은 건?",
      options: [
        "🎮 게임하기",
        "📚 책 읽기",
        "🎶 음악 듣기",
        "💤 낮잠 자기",
        "🍳 요리하기",
      ],
    },
    {
      id: 2,
      question: "모임에서 나는 보통 어떤 타입?",
      options: [
        "🎤 분위기 주도",
        "🙂 듣다가 필요한 말만",
        "🤝 모두 챙기며 서포트",
        "😂 농담으로 긴장 풀기",
        "🤔 조용히 관찰",
      ],
    },
  ]), []);
  const totalQuestions = questions.length;

  // 진행 상태/선택/답안 스토리지
  // [CHANGED] selected를 'A/B' 대신 **옵션 인덱스(number)** 로 관리
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);

  // [CHANGED] 결과 전 **로딩 단계** 컨트롤
  const [isLoading, setIsLoading] = useState(false);

  const current = questions[index];
  const progress = Math.round(((index + 1) / totalQuestions) * 100);

  // [CHANGED] 마지막 문항에서 '다음' 클릭 시 → 로딩 표시 → onComplete 호출
  const handleNext = () => {
    if (selected === null || selected === undefined) return;
    const newAnswers = [...answers];
    newAnswers[index] = { id: current.id, choice: selected }; // choice: number(0~4)
    setAnswers(newAnswers);

    if (index < totalQuestions - 1) {
      setIndex((i) => i + 1);
      setSelected(newAnswers[index + 1]?.choice ?? null);
    } else {
      // 마지막 문항 → 로딩 시작
      setIsLoading(true);
      // 짧은 연출 후 결과 계산 콜백
      setTimeout(() => {
        onComplete?.({ answers: newAnswers });
      }, 2300); // [CHANGED] 로딩 시간 필요시 조절
    }
  };

  // 이전: 인덱스 감소 + 이전 선택 복원
  const handlePrev = () => {
    if (index === 0 || isLoading) return; // [CHANGED] 로딩 중에는 뒤로가기 금지
    const prev = index - 1;
    setIndex(prev);
    setSelected(answers[prev]?.choice ?? null);
  };

  return (
    <ModalContainer titleId="ptq-title">
      <HeaderBar
        titleId="ptq-title"
        title="나의 최애 버추얼 아이돌 찾기"
        onClose={onClose}
        right={`질문 ${index + 1}/${totalQuestions}`}
      />
      <Content>
        {/* [CHANGED] 로딩 중에는 질문 대신 로딩 화면 표시 */}
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <ProgressBar value={progress} />
            <QuestionSection>
              <QuestionText>{current.question}</QuestionText>
            </QuestionSection>
            <OptionsCol>
              {/* [CHANGED] 5지선다 렌더링 */}
              {current.options.map((opt, idx) => (
                <OptionButton
                  key={idx}
                  selected={selected === idx}
                  onClick={() => setSelected(idx)}
                >
                  {opt}
                </OptionButton>
              ))}
            </OptionsCol>
          </>
        )}
      </Content>
      <FooterBar style={{ display: "flex", gap: 8 }}>
        <NavButton onClick={handlePrev} disabled={index === 0 || isLoading /* [CHANGED] 로딩 중 비활성화 */}>
          이전
        </NavButton>
        <PageIndicator style={{ marginLeft: "auto", marginRight: "auto" }}>
          나만의 아이돌 찾기
        </PageIndicator>
        <NavButton
          onClick={handleNext}
          disabled={selected === null || isLoading /* [CHANGED] 로딩 중 비활성화 */}
        >
          {index === totalQuestions - 1 ? "결과" : "다음"}
        </NavButton>
      </FooterBar>
    </ModalContainer>
  );
}

/** Result: 결과 이미지/설명/재시작 */
export function ResultPage({ result, onRetry, onClose }) {
  // 결과가 없을 때의 기본 값(디자인 확인용)
  const data = result ?? {
    characterImage: "",
    characterName: "에리나",
    personality: "상냥함",
    description: "항상 밝고 다정하다.",
    details: [],
  };

  return (
    <ModalContainer titleId="ptr-title">
      <HeaderBar titleId="ptr-title" title="나의 최애 버추얼 아이돌 찾기" onClose={onClose} />
      <Content>
        <CharacterSection>
          <CharacterImage src={data.characterImage} alt={data.characterName} />
        </CharacterSection>
        <ResultInfo
          name={data.characterName}
          personality={data.personality}
          description={data.description}
          details={data.details}
          compatibility={data.compatibility}
          similar={data.similar}
          others={data.others}
        />
      </Content>
      <FooterBar><RetryBtn onClick={onRetry}>테스트 다시하기</RetryBtn></FooterBar>
    </ModalContainer>
  );
}

/* =========================================
 * 공통 JSX 조각
 * ========================================= */

function ModalContainer({ titleId, children }) {
  return (
    <ModalContainerWrap role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <TestModal>{children}</TestModal>
    </ModalContainerWrap>
  );
}

function HeaderBar({ titleId, title, onClose, right }) {
  return (
    <Header>
      <CloseButton onClick={onClose} aria-label="닫기">×</CloseButton>
      <Title id={titleId}>{title}</Title>
      {right ? <ProgressInfo>{right}</ProgressInfo> : null}
    </Header>
  );
}

function FooterBar({ children, style }) { return <Footer style={style}>{children}</Footer>; }

function ProgressBar({ value }) {
  return (
    <Progress value={value}>
      <ProgressFill value={value} />
    </Progress>
  );
}

// OptionBtn은 ptStyled.js의 transient prop($selected) 사용
function OptionButton({ selected, onClick, children }) {
  return <OptionBtn $selected={selected} onClick={onClick}>{children}</OptionBtn>;
}

function NavButton({ disabled, onClick, children }) {
  return <NavBtn onClick={onClick} disabled={disabled}>{children}</NavBtn>;
}

function StartCtaButton({ onClick, label="테스트 시작하기" }) {
  return (
    <StartButton onClick={onClick}>
      <ButtonContent>
        <ButtonText>{label}</ButtonText>
        <ButtonIcon aria-hidden>→</ButtonIcon>
      </ButtonContent>
      <ButtonGlow aria-hidden />
    </StartButton>
  );
}

function CharacterImage({ src, alt }) {
  const has = src && src.trim().length > 0;
  return (
    <CharacterImageBox>
      {has ? <CharacterImg src={src} alt={alt} /> : <Placeholder aria-label="이미지 없음">🙂</Placeholder>}
    </CharacterImageBox>
  );
}

function ResultInfo({ name, personality, description, details=[], compatibility, similar, others }) {
  return (
    <div>
      <CharacterInfo>
        <CharacterName>{name}</CharacterName>
        {personality ? <PersonalityTag>☆ 나의 최애 성격 : {personality}</PersonalityTag> : null}
      </CharacterInfo>

      <ResultDescWrap>
        {description ? <ResultDesc>{description}</ResultDesc> : null}
        {Array.isArray(details) && details.length > 0 && (
          <Details>{details.map((d,i)=>(<DetailItem key={i}>{d}</DetailItem>))}</Details>
        )}
        {(compatibility || similar || others) && (
          <AdditionalInfo>
            {compatibility && <InfoLine>• {compatibility}</InfoLine>}
            {similar && <InfoLine>• {similar}</InfoLine>}
            {others && <InfoLine>{others}</InfoLine>}
          </AdditionalInfo>
        )}
      </ResultDescWrap>
    </div>
  );
}

function Hero() {
  return (
    <HeroWrap>
      <LogoContainer aria-hidden="true">
        <LogoIcon>🧠</LogoIcon>
        <LogoText>심리 테스트</LogoText>
      </LogoContainer>
      <Floating aria-hidden="true">
        <Heart>💖</Heart><Star>✨</Star><Music>🎵</Music><Sparkle>💫</Sparkle>
      </Floating>
    </HeroWrap>
  );
}

/* =========================================
 * 로딩 스크린 (ptStyled.js 수정 없이, 이 파일 내부에서만 정의)
 * ========================================= */

// [CHANGED] 로딩 스피너 애니메이션
const spin = keyframes`
  to { transform: rotate(360deg); }
`;

// [CHANGED] 로딩 스피너 스타일
const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid #eee;
  border-top-color: #4a90e2;
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
`;

// [CHANGED] 로딩 화면 컴포넌트
function LoadingScreen() {
  return (
    <div style={{
      height: "500px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Spinner />
      <p style={{ marginTop: 16, fontSize: "1.05rem", color: "#555" }}>
        당신의 결과를 분석중...
      </p>
    </div>
  );
}
