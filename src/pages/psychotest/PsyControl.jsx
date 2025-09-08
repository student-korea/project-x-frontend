// src/pages/psychotest/PsyControl.jsx

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ptTheme } from "./ptTheme"; // ✅ 심리테스트 전용 테마 토큰(색/그라디언트/그림자)
import { StartPage, QuestionPage, ResultPage } from "./PsyComponent.jsx";

/**
 * PsyControl
 * -------------------------------------------------------------
 * - 심리테스트의 "흐름 관리자" 컴포넌트
 * - 라우터 없이 내부 state(step)로 Start → Questions → Result 전환
 * - 각 페이지는 콜백(onStart/onComplete/onRetry/onClose)으로만 제어
 * - ThemeProvider로 하위 컴포넌트에 theme을 주입(styled-components)
 */
export default function PsyControl() {

  const [step, setStep] = useState("home");

  /** result: 결과 페이지에서 사용할 계산된 결과 데이터
   *  - deriveResultFromAnswers()에서 만들어 채워짐
   *  - 다시하기/닫기 시 초기화
   */
  const [result, setResult] = useState(null);

  const openStart = () => setStep("start");

  /** 모든 페이지 닫고 홈으로 복귀(결과도 초기화) */
  const closeAll = () => {
    setResult(null);
    setStep("home");
  };

  /** 시작 모달 → 질문 화면 진입 */
  const handleStart = () => setStep("questions");

  /** 질문 완료 콜백
   *  - answers: [{ id, choice: 'A'|'B' }, ...]
   *  - 결과 계산 후 result 상태에 저장 → 결과 화면으로 전환
   */
  const handleComplete = ({ answers }) => {
    const computed = deriveResultFromAnswers(answers);
    setResult(computed);
    setStep("result");
  };

  /** 결과 화면에서 "다시하기"
   *  - 결과 초기화 → 다시 시작 모달로
   */
  const handleRetry = () => {
    setResult(null);
    setStep("start");
  };

  return (
    // ✅ ThemeProvider: 하위의 모든 styled-components가 theme 접근 가능
    <ThemeProvider theme={ptTheme}>
      {/* 데모용 외부 래퍼: 실제 제품에선 페이지 레이아웃에 맞게 감싸면 됨 */}
      <div style={{ padding: 24, maxWidth: 960, margin: "0 auto" }}>
        {/* 1) 홈(데모) 화면: 라우팅 없이 흐름만 테스트할 때 사용 */}
        {step === "home" && (
          <>
            <h1>테스트 데모</h1>
            <p>버튼을 눌러 테스트 흐름(시작 → 질문 → 결과) 확인</p>
            <button
              onClick={openStart}
              style={{
                background: "#87b2d4",
                border: "none",
                padding: "10px 16px",
                cursor: "pointer",
              }}
            >
              테스트 시작
            </button>
          </>
        )}

        {/* 2) 시작(소개) 모달
            - onStart: 질문 화면으로 진입
            - onClose: 전체 닫고 홈으로 */}
        {step === "start" && (
          <StartPage onStart={handleStart} onClose={closeAll} />
        )}

        {/* 3) 질문 화면
            - onComplete: 답변 목록을 받아 결과 계산 → 결과 화면 전환
            - onClose: 전체 닫고 홈으로 */}
        {step === "questions" && (
          <QuestionPage onClose={closeAll} onComplete={handleComplete} />
        )}

        {/* 4) 결과 화면
            - result: 계산된 결과 객체
            - onRetry: 결과 초기화 후 다시 시작 모달로
            - onClose: 전체 닫고 홈으로 */}
        {step === "result" && (
          <ResultPage result={result} onRetry={handleRetry} onClose={closeAll} />
        )}
      </div>
    </ThemeProvider>
  );
}

/**
 * deriveResultFromAnswers(answers)
 * -------------------------------------------------------------
 * - 입력: [{ id: number, choice: 'A' | 'B' }, ...]
 * - 간단한 더미 규칙:
 *     · A 선택이 많거나 동점 => '상냥함' 타입(에리나)
 *     · B 선택이 많음       => '시크함' 타입(리나에)
 * - 실제 서비스에서는 여기에 점수표/가중치/유형 매핑 로직을 연결
 */
function deriveResultFromAnswers(answers = []) {
  // A = +1, B = -1 점수 합산
  const score = answers.reduce(
    (acc, a) => acc + (a?.choice === "A" ? 1 : -1),
    0
  );
  const isA = score >= 0;

  // 결과 객체(결과 페이지에서 표시)
  return {
    characterImage: "", // 이미지 URL. 없으면 플레이스홀더가 표시됨
    characterName: isA ? "에리나" : "리나에",
    personality: isA ? "상냥함" : "시크함",
    description: isA ? "항상 밝고 다정하다." : "절제된 매력과 차분한 카리스마.",
    details: [], // 부가 설명(배열). 필요 시 채워 넣기
  };
}
