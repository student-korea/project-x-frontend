
// 버튼 시작 → StartPage(모달) → QuestionPage → ResultPage 흐름 데모
// 핵심
// - 라우터 없음: 내부 state(step)로 전환
// - 콜백(onStart/onClose/onComplete/onRetry)로 제어
// - 백엔드 없음: 더미 결과 계산 포함
// 라우터 도입: step 제거, navigate()로 전환
// -----------------------------------------------------------------------------

import { useState } from 'react';

// 페이지 컴포넌트 불러오기
// - StartPage: 시작 모달
// - QuestionPage: 질문 진행
// - ResultPage: 결과 표시
import StartPage from './psychotest/pages/StartPage.jsx';
import QuestionPage from './psychotest/pages/QuestionPage.jsx';
import ResultPage from './psychotest/pages/ResultPage.jsx';

export default function CharacterSelectPage() {
  // 화면 단계 관리
  // 'home' | 'start' | 'questions' | 'result'
  const [step, setStep] = useState('home');

  // 결과 데이터 보관
  const [result, setResult] = useState(null);

  // 시작 모달 열기
  const openStart = () => setStep('start');

  // 전부 닫고 초기 화면
  const closeAll = () => {
    setResult(null); // 결과 초기화
    setStep('home');
  };

  // 시작 모달 → 질문 페이지
  const handleStart = () => {
    setStep('questions');
  };

  // 질문 완료 → 결과 계산 → 결과 페이지
  const handleComplete = ({ answers }) => {
    const computed = deriveResultFromAnswers(answers);
    setResult(computed);
    setStep('result');
  };

  // 결과 페이지 → 다시 시작 모달
  const handleRetry = () => {
    setResult(null);
    setStep('start');
  };

  // 렌더링
  return (
    <div style={{ padding: 24, maxWidth: 960, margin: '0 auto' }}>
      {/* 홈 화면 */}
      {step === 'home' && (
        <>
          <h1>테스트 데모</h1>
          <p>버튼을 눌러 테스트 흐름(시작 → 질문 → 결과) 확인</p>

          {/* 시작 모달 열기 버튼 */}
          <button
            onClick={openStart}
            style={{
              background: '#87b2d4',
              border: 'none',
              padding: '10px 16px',
              cursor: 'pointer',
            }}
          >
            테스트 시작
          </button>
        </>
      )}

      {/* 시작 모달 */}
      {step === 'start' && (
        <StartPage
          // selectedCharacter 전달 필요 없으면 생략
          onStart={handleStart}   // 시작 → 질문
          onClose={closeAll}      // 닫기 → 홈
        />
      )}

      {/* 질문 페이지 */}
      {step === 'questions' && (
        <QuestionPage
          onClose={closeAll}      // 닫기 → 홈
          onComplete={handleComplete} // 완료 → 결과 계산 후 이동
        />
      )}

      {/* 결과 페이지 */}
      {step === 'result' && (
        <ResultPage
          result={result}         // 결과 표시
          onRetry={handleRetry}   // 다시하기 → 시작 모달
          onClose={closeAll}      // 닫기 → 홈
        />
      )}
    </div>
  );
}

/**
 * deriveResultFromAnswers(answers)
 * -------------------------------------------------------
 * 입력: [{ id: number, choice: 'A' | 'B' }, ...]
 * 규칙: A 많음 → 상냥함 / B 많음 → 시크함
 * 실제 서비스 로직으로 교체
 */
function deriveResultFromAnswers(answers = []) {
  // 점수 계산: A = +1, B = -1
  const score = answers.reduce((acc, a) => acc + (a?.choice === 'A' ? 1 : -1), 0);
  const isA = score >= 0;

  // 결과 객체 반환
  return {
    characterImage: '',                 // 이미지 URL. 없으면 플레이스홀더 표시
    characterName: isA ? '에리나' : '리나에',
    personality: isA ? '상냥함' : '시크함',
    description: isA ? '항상 밝고 다정하다.' : '절제된 매력과 차분한 카리스마.',
    details: [],                        // 상세 설명 리스트. 필요 시 채움
  };
}
