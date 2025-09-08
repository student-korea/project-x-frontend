// src/pages/psychotest/PsyComponent.jsx
import React, { useMemo, useState } from "react";
import styled, { keyframes, css } from "styled-components";

/* =========================
   keyframes
   ========================= */
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

/* =========================
   Common styled blocks
   ========================= */
const ModalContainerWrap = styled.div`
  position: fixed; inset: 0;
  background: rgba(0,0,0,.6);
  display:flex; justify-content:center; align-items:center;
  z-index:1000; backdrop-filter: blur(8px);
`;
const TestModal = styled.div`
  background: linear-gradient(145deg, #ffffff, ${({theme})=>theme.color.surface});
  width:90%; max-width:400px;
  height:85vh; max-height:700px;
  border-radius:20px; display:flex; flex-direction:column;
  overflow:hidden; position:relative;
  box-shadow: ${({theme})=>theme.shadow.modal};

  &::after{
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image: radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px);
    background-size:6px 6px; mix-blend-mode: overlay; opacity:.35;
  }
`;

const Header = styled.div`
  background: ${({theme})=>theme.grad.header};
  background-size:180% 180%;
  padding:20px; text-align:center; position:relative; color:#fff; flex-shrink:0;

  &:hover { animation: ${gradientShift} 6s ease infinite; }
`;
const Title = styled.h1`
  font-size:17px; font-weight:600; margin:0; text-shadow:0 2px 4px rgba(0,0,0,.1);
`;
const CloseButton = styled.button`
  position:absolute; left:20px; top:50%; transform: translateY(-50%);
  background: rgba(255,255,255,.2); border:none; border-radius:50%;
  width:36px; height:36px; font-size:20px; color:#fff; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  transition: all .3s ease; backdrop-filter: blur(10px);
  &:hover { background: rgba(255,255,255,.3); transform: translateY(-50%) scale(1.1); }
`;
const ProgressInfo = styled.div`
  font-size:14px; color:#eee; margin-top:5px;
  position:absolute; right:20px; top:50%; transform: translateY(-50%);
`;

const Content = styled.div`
  flex:1; padding:30px 25px 20px; overflow-y:auto; position:relative;
  &::-webkit-scrollbar { width:4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(102,126,234,.3); border-radius:2px; }
`;

const Footer = styled.div`
  padding:25px; background: linear-gradient(to top, rgba(255,255,255,.9), transparent);
  flex-shrink:0;
`;

const Progress = styled.div.attrs(({value})=>({role:'progressbar','aria-label':`진행도 ${value}%`}))`
  width:100%; height:6px; background: rgba(102,126,234,.15);
  border-radius:999px; margin:0 0 16px 0; overflow:hidden;
`;
const ProgressFill = styled.div`
  height:100%;
  width: ${({value}) => `${value}%`};
  background: ${({theme})=>theme.grad.progress};
  border-radius:999px; transition: width .25s ease;
`;

const OptionBtn = styled.button`
  background: ${({selected}) => (selected ? '#4a90e2' : '#2c2c2c')};
  color:#fff; border:none; border-radius:8px;
  padding:20px 16px; font-size:14px; line-height:1.4; text-align:left;
  cursor:pointer; transition:all .2s ease; min-height:60px; display:flex; align-items:center;

  &:hover { background: ${({selected}) => (selected ? '#4a90e2' : '#3c3c3c')}; }
`;

const NavBtn = styled.button`
  background:none; border:none; color:#4a90e2; font-size:14px; cursor:pointer; padding:8px 12px; min-width:50px; text-align:center;
  &:disabled { color:#ccc; cursor:not-allowed; }
`;

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

const HeroWrap = styled.div`
  text-align:center; margin-bottom:35px; position:relative;
`;
const LogoContainer = styled.div`
  background-image:
    radial-gradient(120% 90% at 85% -10%, rgba(255,255,255,.35) 0%, transparent 60%),
    ${({theme})=>theme.grad.hero};
  background-blend-mode: screen, normal;
  border-radius:20px; padding:25px; margin: 0 auto 20px; width: fit-content;
  box-shadow:${({theme})=>theme.shadow.logo}; position:relative; overflow:hidden;

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

const PageIndicator = styled.div`
  color:#999; font-size:12px;
`;

const QuestionSection = styled.div`
  text-align:center; margin-bottom:60px;
`;
const QuestionText = styled.h2`
  font-size:18px; font-weight:500; color:#333; line-height:1.4; margin:0;
`;
const OptionsCol = styled.div`
  display:flex; flex-direction:column; gap:15px; margin-bottom:40px;
`;

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

const CharacterSection = styled.div` text-align:center; margin-bottom:20px; `;
const CharacterImageBox = styled.div`
  display:inline-block; border:3px solid ${({theme})=>theme.color.primary};
  border-radius:12px; overflow:hidden; margin-bottom:15px;
`;
const CharacterImg = styled.img` width:200px; height:200px; object-fit:cover; display:block; `;
const Placeholder = styled.div`
  width:200px; height:200px; display:grid; place-items:center; background:#eef1ff; color:#667eea; font-size:48px;
`;

const CharacterInfo = styled.div` text-align:center; margin-bottom:20px; `;
const CharacterName = styled.h2` font-size:20px; font-weight:600; color:#333; margin:0 0 10px; `;
const PersonalityTag = styled.span`
  background:${({theme})=>theme.color.warnBg}; color:${({theme})=>theme.color.warnText};
  padding:8px 12px; border-radius:6px; font-size:13px; display:inline-block; border:1px solid ${({theme})=>theme.color.warnBorder};
`;

const ResultDescWrap = styled.div` background:#fff; border-radius:8px; padding:20px 15px; margin-bottom:20px; `;
const ResultDesc = styled.p` font-size:14px; color:#333; line-height:1.5; margin:0 0 15px; text-align:center; `;
const Details = styled.div` margin-bottom:15px; `;
const DetailItem = styled.p` font-size:13px; color:#666; line-height:1.6; margin:0 0 8px; text-align:left; `;
const AdditionalInfo = styled.div` border-top:1px solid #eee; padding-top:15px; `;
const InfoLine = styled.p` font-size:13px; color:#666; line-height:1.5; margin:0 0 5px; `;

const RetryBtn = styled.button`
  width:100%; background:#6c757d; color:#fff; border:none; border-radius:25px;
  padding:12px 20px; font-size:14px; font-weight:500; cursor:pointer; transition: background .2s ease;
  &:hover{ background:#5a6268; }
`;

/* =========================
   Common Components (JSX)
   ========================= */
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

function OptionButton({ selected, onClick, children }) {
  return <OptionBtn selected={selected} onClick={onClick}>{children}</OptionBtn>;
}

function NavButton({ variant="next", disabled, onClick, children }) {
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
        {personality ? <PersonalityTag>☆ 중심 : {personality}</PersonalityTag> : null}
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
      <FloatingElements aria-hidden="true">
        <Heart>💖</Heart><Star>✨</Star><Music>🎵</Music><Sparkle>💫</Sparkle>
      </FloatingElements>
    </HeroWrap>
  );
}

/* =========================
   Pages
   ========================= */

// Start
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

// Questions
export function QuestionPage({ onClose, onComplete }) {
  const questions = useMemo(()=>([
    { id:1, question:"집에 혼자 있을 때 하고 싶은 건?", optionA:"게임이나 유튜브 보다가 잠든다.", optionB:"시집이나 음악을 듣고, 책 읽기" },
    { id:2, question:"친구들과 모임에서 당신은?", optionA:"분위기를 주도하며 대화를 이끈다", optionB:"조용히 듣고 필요할 때만 말한다" },
  ]),[]);
  const totalQuestions = questions.length;
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const current = questions[index];
  const progress = Math.round(((index+1)/totalQuestions)*100);

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
  const handlePrev=()=>{
    if(index===0) return;
    const prev=index-1;
    setIndex(prev);
    setSelected(answers[prev]?.choice ?? null);
  };

  return (
    <ModalContainer titleId="ptq-title">
      <HeaderBar titleId="ptq-title" title="나의 최애 버추얼 아이돌 찾기" onClose={onClose} right={`질문 ${index+1}/${totalQuestions}`} />
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
        <NavButton onClick={handleNext} disabled={!selected}>{index===totalQuestions-1 ? "결과" : "다음"}</NavButton>
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
