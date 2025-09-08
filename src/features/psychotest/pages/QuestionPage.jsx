import React, { useMemo, useState } from "react";
import "../psychotest.css";

import ModalContainer from "../components/ModalContainer.jsx";
import HeaderBar from "../components/HeaderBar.jsx";
import FooterBar from "../components/FooterBar.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import OptionButton from "../components/OptionButton.jsx";
import NavButton from "../components/NavButton.jsx";
import PageIndicator from "../components/PageIndicator.jsx";

const QuestionPage = ({ onClose, onComplete }) => {
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
      // ... 이어서 추가
    ],
    []
  );

  const totalQuestions = questions.length;
  const [index, setIndex] = useState(0);
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
};

export default QuestionPage;
