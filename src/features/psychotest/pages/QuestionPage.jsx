// src/features/psychotest/pages/QuestionPage.jsx
import React, { useMemo, useState } from 'react';
import '../psychotest.css';

const QuestionPage = ({ onClose, onComplete }) => {
  // 실제로는 외부 JSON/서버에서 받아오도록 교체 가능
  const questions = useMemo(() => ([
    {
      id: 1,
      question: '집에 혼자 있을 때 하고 싶은 건?',
      optionA: '게임이나 유튜브 보다가 잠든다.',
      optionB: '시집이나 음악을 듣고, 책 읽기',
    },
    {
      id: 2,
      question: '친구들과 모임에서 당신은?',
      optionA: '분위기를 주도하며 대화를 이끈다',
      optionB: '조용히 듣고 필요할 때만 말한다',
    },
    // … 필요 개수만큼 이어서 추가
  ]), []);

  const totalQuestions = questions.length;
  const [index, setIndex] = useState(0);                // 0-based
  const [selected, setSelected] = useState(null);       // 'A' | 'B' | null
  const [answers, setAnswers] = useState([]);           // [{id, choice}...]

  const current = questions[index];
  const progress = Math.round(((index + 1) / totalQuestions) * 100);

  const handleAnswerSelect = (choice) => setSelected(choice);

  const handleNext = () => {
    if (!selected) return;

    const newAnswers = [...answers];
    // 현재 문항 저장(덮어쓰기 안전)
    newAnswers[index] = { id: current.id, choice: selected };
    setAnswers(newAnswers);

    if (index < totalQuestions - 1) {
      setIndex((i) => i + 1);
      setSelected(newAnswers[index + 1]?.choice ?? null);
    } else {
      // 완료
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
    <div className="modal-container" role="dialog" aria-modal="true" aria-labelledby="ptq-title">
      <div className="test-modal">
        {/* 헤더 */}
        <div className="header">
          <button className="close-button" onClick={() => onClose?.()} aria-label="닫기">×</button>
          <h1 className="title" id="ptq-title">나의 최애 버추얼 아이돌 찾기</h1>
          <div className="progress-info">질문 {index + 1}/{totalQuestions}</div>
        </div>

        {/* 본문 */}
        <div className="content">
          {/* 진행 막대 */}
          <div className="progress" aria-label={`진행도 ${progress}%`}>
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>

          <div className="question-section">
            <h2 className="question-text">{current.question}</h2>
          </div>

          <div className="options-section">
            <button
              className={`option-button ${selected === 'A' ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect('A')}
            >
              {current.optionA}
            </button>

            <button
              className={`option-button ${selected === 'B' ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect('B')}
            >
              {current.optionB}
            </button>
          </div>
        </div>

        {/* 푸터 */}
        <div className="footer" style={{ display: 'flex', gap: 8 }}>
          <button className="nav-button prev-button" onClick={handlePrev} disabled={index === 0}>
            이전
          </button>

          <div className="page-indicator" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            나만의 아이돌 찾기
          </div>

          <button
            className={`nav-button next-button ${!selected ? 'disabled' : ''}`}
            onClick={handleNext}
            disabled={!selected}
          >
            {index === totalQuestions - 1 ? '결과' : '다음'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
