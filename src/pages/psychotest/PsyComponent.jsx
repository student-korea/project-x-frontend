import React, { useMemo, useState } from "react";

// 공통 스타일 임포트
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

function OptionButton({ selected, onClick, children }) {
  // transient prop $selected 사용 (DOM으로 안 내려감)
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
