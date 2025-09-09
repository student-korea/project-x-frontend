// src/pages/psychotest/PsyComponent.jsx
import React, { useMemo, useState } from "react";
import styled, { keyframes, css } from "styled-components";



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
  // 질문 목록 메모이즈 (렌더마다 재생성 방지)
  const questions = useMemo(()=>([
    { id:1, question:"집에 혼자 있을 때 하고 싶은 건?", optionA:"게임이나 유튜브 보다가 잠든다.", optionB:"시집이나 음악을 듣고, 책 읽기" },
    { id:2, question:"친구들과 모임에서 당신은?", optionA:"분위기를 주도하며 대화를 이끈다", optionB:"조용히 듣고 필요할 때만 말한다" },
  ]),[]);
  const totalQuestions = questions.length;

  // 진행 상태/선택/답안 스토리지
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);

  const current = questions[index];
  const progress = Math.round(((index+1)/totalQuestions)*100);

  // 다음: 선택값 누적 → 마지막이면 완료 콜백
  const handleNext=()=>{
    if(!selected) return;
    const newAnswers=[...answers];
    newAnswers[index]={id:current.id, choice:selected};
    setAnswers(newAnswers);
    if(index<totalQuestions-1){
      setIndex(i=>i+1);
      setSelected(newAnswers[index+1]?.choice ?? null);
    }else{
      onComplete?.({answers:newAnswers});
    }
  };
  // 이전: 인덱스 감소 + 이전 선택 복원
  const handlePrev=()=>{
    if(index===0) return;
    const prev=index-1;
    setIndex(prev);
    setSelected(answers[prev]?.choice ?? null);
  };

  return (
    <ModalContainer titleId="ptq-title">
      <HeaderBar
        titleId="ptq-title"
        title="나의 최애 버추얼 아이돌 찾기"
        onClose={onClose}
        right={`질문 ${index+1}/${totalQuestions}`}
      />
      <Content>
        <ProgressBar value={progress} />
        <QuestionSection><QuestionText>{current.question}</QuestionText></QuestionSection>
        <OptionsCol>
          <OptionButton selected={selected==='A'} onClick={()=>setSelected('A')}>{current.optionA}</OptionButton>
          <OptionButton selected={selected==='B'} onClick={()=>setSelected('B')}>{current.optionB}</OptionButton>
        </OptionsCol>
      </Content>
      <FooterBar style={{ display:"flex", gap:8 }}>
        <NavButton onClick={handlePrev} disabled={index===0}>이전</NavButton>
        <PageIndicator style={{ marginLeft:"auto", marginRight:"auto" }}>나만의 아이돌 찾기</PageIndicator>
        <NavButton onClick={handleNext} disabled={!selected}>
          {index===totalQuestions-1 ? "결과" : "다음"}
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
 * 애니메이션 키프레임
 * - gradientShift: 배경 그라디언트가 좌우로 흐르는 효과
 * - shine: 라이트가 가로질러 지나가는 하이라이트
 * - floatKF: 이모지가 살짝 떠다니는 부유 효과
 * ========================================= */
const gradientShift = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;
const shine = keyframes`
  0%{transform:translateX(-100%)}
  50%{transform:translateX(100%)}
  100%{transform:translateX(100%)}
`;
const floatKF = keyframes`
  0%,100%{ transform: translateY(0) rotate(0) }
  25%{ transform: translateY(-8px) rotate(2deg) }
  50%{ transform: translateY(-4px) rotate(-1deg) }
  75%{ transform: translateY(-6px) rotate(1deg) }
`;

/* =========================================
 * 공통 레이아웃/스타일 블록
 * - ThemeProvider로 전달된 theme(grad, color, shadow 등) 값을 사용
 * - 접근성: role, aria-* 를 적용하는 컨테이너는 JSX에서 추가
 * ========================================= */

/** 모달의 전체 오버레이(검은 반투명 배경 + 중앙 정렬) */
const ModalContainerWrap = styled.div`
  position: fixed; inset: 0;
  background: rgba(0,0,0,.6);
  display:flex; justify-content:center; align-items:center;
  z-index:1000; backdrop-filter: blur(8px);
`;

/** 실제 카드 모달 박스 (라운드, 그림자, 은은한 텍스처 오버레이 포함) */
const TestModal = styled.div`
  background: linear-gradient(145deg, #ffffff, ${({theme})=>theme.color.surface});
  width:90%; max-width:400px;
  height:85vh; max-height:700px;
  border-radius:20px; display:flex; flex-direction:column;
  overflow:hidden; position:relative;
  box-shadow: ${({theme})=>theme.shadow.modal};
  line-height: 1.4; /* ← reset.css/body의 1을 여기서 끊어줌 */

  /* 패턴 텍스처 오버레이 */
  &::after{
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image: radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px);
    background-size:6px 6px; mix-blend-mode: overlay; opacity:.35;
  }
`;

/** 상단 헤더: 타이틀/닫기/우측 보조정보 영역 */
const Header = styled.div`
  background: ${({theme})=>theme.grad.header};
  background-size:180% 180%;
  padding:20px; text-align:center; position:relative; color:#fff; flex-shrink:0;

  /* hover 시 그라디언트가 부드럽게 이동 */
  &:hover { animation: ${gradientShift} 6s ease infinite; }
`;
/** 헤더 타이틀 텍스트 */
const Title = styled.h1`
  font-size:17px; font-weight:600; margin:0; text-shadow:0 2px 4px rgba(0,0,0,.1);
`;
/** 좌측 상단 닫기 버튼 (유리효과) */
const CloseButton = styled.button`
  position:absolute; left:20px; top:50%; transform: translateY(-50%);
  background: rgba(255,255,255,.2); border:none; border-radius:50%;
  width:36px; height:36px; font-size:20px; color:#fff; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  transition: all .3s ease; backdrop-filter: blur(10px);
  &:hover { background: rgba(255,255,255,.3); transform: translateY(-50%) scale(1.1); }
`;
/** 헤더 우측 보조 정보(예: 진행 상태 텍스트) */
const ProgressInfo = styled.div`
  font-size:14px; color:#eee; margin-top:5px;
  position:absolute; right:20px; top:50%; transform: translateY(-50%);
`;

/** 헤더/푸터 사이 스크롤 영역(콘텐츠) */
const Content = styled.div`
  flex:1; padding:30px 25px 20px; overflow-y:auto; position:relative;

  /* 얇은 커스텀 스크롤바 */
  &::-webkit-scrollbar { width:4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(102,126,234,.3); border-radius:2px; }
`;

/** 하단 푸터 (상단으로 옅게 페이드되는 배경) */
const Footer = styled.div`
  padding:25px; background: linear-gradient(to top, rgba(255,255,255,.9), transparent);
  flex-shrink:0;
`;

/** 진행도 바 컨테이너: role/aria는 JSX attrs로 주입 */
const Progress = styled.div.attrs(({value})=>({role:'progressbar','aria-label':`진행도 ${value}%`}))`
  width:100%; height:6px; background: rgba(102,126,234,.15);
  border-radius:999px; margin:0 0 16px 0; overflow:hidden;
`;
/** 진행도 바의 채워진 부분(너비를 value로 제어) */
const ProgressFill = styled.div`
  height:100%;
  width: ${({value}) => `${value}%`};
  background: ${({theme})=>theme.grad.progress};
  border-radius:999px; transition: width .25s ease;
`;

/** A/B 선택 버튼 (선택 상태에 따라 배경색 변화) */
const OptionBtn = styled.button`
  background: ${({selected}) => (selected ? '#4a90e2' : '#2c2c2c')};
  color:#fff; border:none; border-radius:8px;
  padding:20px 16px; font-size:14px; line-height:1.4; text-align:left;
  cursor:pointer; transition:all .2s ease; min-height:60px; display:flex; align-items:center;

  &:hover { background: ${({selected}) => (selected ? '#4a90e2' : '#3c3c3c')}; }
`;

/** 이전/다음 내비 버튼 (비활성 시 색 약화) */
const NavBtn = styled.button`
  background:none; border:none; color:#4a90e2; font-size:14px; cursor:pointer; padding:8px 12px; min-width:50px; text-align:center;
  &:disabled { color:#ccc; cursor:not-allowed; }
`;

/** CTA(시작) 버튼: 그라디언트, 글로우, hover 애니메이션 */
const StartButton = styled.button`
  width:100%;
  background: ${({theme})=>theme.grad.header};
  background-size:200% 200%;
  border:none; border-radius:16px; padding:0; cursor:pointer; position:relative; overflow:hidden;
  box-shadow:${({theme})=>theme.shadow.cta}; transition:all .3s ease;

  &:hover { transform: translateY(-2px); box-shadow:${({theme})=>theme.shadow.ctaHover}; animation:${gradientShift} 3s ease infinite; }
  &:active { transform: translateY(0); }
`;
const ButtonContent = styled.div`
  display:flex; align-items:center; justify-content:center; padding:16px 24px; color:#fff; position:relative; z-index:2;
`;
const ButtonText = styled.span`
  font-size:1.1rem; font-weight:600; flex:1; text-align:center;
`;
const ButtonIcon = styled.span`
  font-size:1.3rem; transition: transform .3s ease;
  ${StartButton}:hover & { transform: translateX(4px); }
`;
const ButtonGlow = styled.div`
  position:absolute; inset:0; left:-100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.3), transparent);
  transition:left .6s ease;
  ${StartButton}:hover & { left: 100%; }
`;

/** 히어로 영역(로고+이모지 장식) */
const HeroWrap = styled.div`
  text-align:center; margin-bottom:35px; position:relative;
`;
/** 로고 박스: 라디얼 하이라이트 + 히어로 그라디언트 */
const LogoContainer = styled.div`
  background-image:
    radial-gradient(120% 90% at 85% -10%, rgba(255,255,255,.35) 0%, transparent 60%),
    ${({theme})=>theme.grad.hero};
  background-blend-mode: screen, normal;
  border-radius:20px; padding:25px; margin: 0 auto 20px; width: fit-content;
  box-shadow:${({theme})=>theme.shadow.logo}; position:relative; overflow:hidden;

  /* 좌→우 스치는 라이트 효과 */
  &::before{
    content:''; position:absolute; inset:0;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,.12), transparent);
    transform: translateX(-100%); animation: ${shine} 3s infinite;
  }
`;
const LogoIcon = styled.div`
  font-size: 2.5rem; margin-bottom: 8px; filter: drop-shadow(0 2px 4px rgba(0,0,0,.2));
`;
const LogoText = styled.h2`
  color:#fff; font-size:1.1rem; font-weight:700; margin:0; text-shadow:0 2px 4px rgba(0,0,0,.3);
`;
const FloatingElements = styled.div`
  position:absolute; inset:0; pointer-events:none;
`;
const FloatItem = styled.div`
  position:absolute; font-size:1.2rem; opacity:.7; animation:${floatKF} 4s ease-in-out infinite;
`;
const Heart = styled(FloatItem)` top:20%; left:10%; animation-delay:0s; `;
const Star  = styled(FloatItem)` top:15%; right:15%; animation-delay:1s; `;
const Music = styled(FloatItem)` bottom:40%; left:15%; animation-delay:2s; `;
const Sparkle = styled(FloatItem)` bottom:30%; right:10%; animation-delay:3s; `;

/** 페이지 중앙 하단 안내 텍스트 */
const PageIndicator = styled.div`
  color:#999; font-size:12px;
`;

/** 질문 텍스트/옵션 영역 레이아웃 */
const QuestionSection = styled.div`
  text-align:center; margin-bottom:60px;
`;
const QuestionText = styled.h2`
  font-size:18px; font-weight:500; color:#333; line-height:1.4; margin:0;
`;
const OptionsCol = styled.div`
  display:flex; flex-direction:column; gap:15px; margin-bottom:40px;
`;

/** 스타트 설명 블럭 */
const DescriptionSection = styled.div`
  text-align:center;
`;
const MainDescription = styled.h3`
  font-size:1.3rem; font-weight:600; color:${({theme})=>theme.color.textStrong}; line-height:1.4; margin:0 0 25px;
`;
const Highlight = styled.span`
  background: linear-gradient(135deg, #667eea, #a78bfa);
  -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; font-weight:700;
`;
const TestInfo = styled.div`
  display:flex; justify-content:center; gap:15px; margin-bottom:20px;
`;
const Pill = styled.div`
  background:${({theme})=>theme.grad.pill}; color:#fff; padding:8px 16px; border-radius:20px;
  font-size:.85rem; font-weight:500; display:flex; align-items:center; gap:6px; box-shadow:${({theme})=>theme.shadow.pill};
`;
const InfoIcon = styled.span` font-size:1rem; `;
const SubDescription = styled.p` font-size:.9rem; color:${({theme})=>theme.color.textMuted}; line-height:1.5; margin:0; `;

/** 결과 페이지: 캐릭터 이미지 영역 */
const CharacterSection = styled.div` text-align:center; margin-bottom:20px; `;
const CharacterImageBox = styled.div`
  display:inline-block; border:3px solid ${({theme})=>theme.color.primary};
  border-radius:12px; overflow:hidden; margin-bottom:15px;
`;
const CharacterImg = styled.img` width:200px; height:200px; object-fit:cover; display:block; `;
const Placeholder = styled.div`
  width:200px; height:200px; display:grid; place-items:center; background:#eef1ff; color:#667eea; font-size:48px;
`;

/** 결과 텍스트/배지 블럭 */
const CharacterInfo = styled.div` text-align:center; margin-bottom:20px; `;
const CharacterName = styled.h2` font-size:20px; font-weight:600; color:#333; margin:0 0 10px; `;
const PersonalityTag = styled.span`
  background:${({theme})=>theme.color.warnBg}; color:${({theme})=>theme.color.warnText};
  padding:8px 12px; border-radius:6px; font-size:13px; display:inline-block; border:1px solid ${({theme})=>theme.color.warnBorder};
`;

/** 결과 설명/디테일/추가 정보 래핑 */
const ResultDescWrap = styled.div` background:#fff; border-radius:8px; padding:20px 15px; margin-bottom:20px; `;
const ResultDesc = styled.p` font-size:14px; color:#333; line-height:1.5; margin:0 0 15px; text-align:center; `;
const Details = styled.div` margin-bottom:15px; `;
const DetailItem = styled.p` font-size:13px; color:#666; line-height:1.6; margin:0 0 8px; text-align:left; `;
const AdditionalInfo = styled.div` border-top:1px solid #eee; padding-top:15px; `;
const InfoLine = styled.p` font-size:13px; color:#666; line-height:1.5; margin:0 0 5px; `;

/** 결과 하단 재시작 버튼 */
const RetryBtn = styled.button`
  width:100%; background:#6c757d; color:#fff; border:none; border-radius:25px;
  padding:12px 20px; font-size:14px; font-weight:500; cursor:pointer; transition: background .2s ease;
  &:hover{ background:#5a6268; }
`;

/* =========================================
 * 공통 JSX 컴포넌트
 * - 아래 컴포넌트들은 위에서 정의한 styled 블록을 조합
 * - 접근성: role="dialog"/aria-* 속성 부여
 * ========================================= */

/** 모달 컨테이너(오버레이 + 카드) */
function ModalContainer({ titleId, children }) {
  return (
    <ModalContainerWrap role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <TestModal>{children}</TestModal>
    </ModalContainerWrap>
  );
}

/** 상단 헤더바(타이틀/닫기/우측 보조정보) */
function HeaderBar({ titleId, title, onClose, right }) {
  return (
    <Header>
      <CloseButton onClick={onClose} aria-label="닫기">×</CloseButton>
      <Title id={titleId}>{title}</Title>
      {right ? <ProgressInfo>{right}</ProgressInfo> : null}
    </Header>
  );
}

/** 하단 푸터 래퍼 */
function FooterBar({ children, style }) { return <Footer style={style}>{children}</Footer>; }

/** 진행도 바 */
function ProgressBar({ value }) {
  return (
    <Progress value={value}>
      <ProgressFill value={value} />
    </Progress>
  );
}

/** 선택지 버튼(A/B) */
function OptionButton({ selected, onClick, children }) {
  return <OptionBtn selected={selected} onClick={onClick}>{children}</OptionBtn>;
}

/** 내비게이션 버튼(이전/다음) */
function NavButton({ variant="next", disabled, onClick, children }) {
  return <NavBtn onClick={onClick} disabled={disabled}>{children}</NavBtn>;
}

/** 시작 CTA 버튼(글로우 + 애니메이션) */
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

/** 캐릭터 이미지(없으면 플레이스홀더 표시) */
function CharacterImage({ src, alt }) {
  const has = src && src.trim().length > 0;
  return (
    <CharacterImageBox>
      {has ? <CharacterImg src={src} alt={alt} /> : <Placeholder aria-label="이미지 없음">🙂</Placeholder>}
    </CharacterImageBox>
  );
}

/** 결과 텍스트 블럭(설명/디테일/추가 정보) */
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

/** 상단 히어로(로고 + 떠다니는 이모지) */
function Hero() {
  return (
    <HeroWrap>
      <LogoContainer aria-hidden="true">
        <LogoIcon>🧠</LogoIcon>
        <LogoText>심리 테스트</LogoText>
      </LogoContainer>
      <FloatingElements aria-hidden="true">
        <Heart>💖</Heart><Star>✨</Star><Music>🎵</Music><Sparkle>💫</Sparkle>
      </FloatingElements>
    </HeroWrap>
  );
}

