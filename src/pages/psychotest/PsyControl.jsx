// src/pages/psychotest/PsyControl.jsx
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ptTheme } from "./ptTheme"; // ✅ 테마 불러오기
import { StartPage, QuestionPage, ResultPage } from "./PsyComponent.jsx";

export default function PsyControl() {
  const [step, setStep] = useState("home");
  const [result, setResult] = useState(null);

  const openStart = () => setStep("start");
  const closeAll = () => { setResult(null); setStep("home"); };
  const handleStart = () => setStep("questions");
  const handleComplete = ({ answers }) => {
    const computed = deriveResultFromAnswers(answers);
    setResult(computed);
    setStep("result");
  };
  const handleRetry = () => { setResult(null); setStep("start"); };

  return (
    <ThemeProvider theme={ptTheme}>
      <div style={{ padding: 24, maxWidth: 960, margin: "0 auto" }}>
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
        {step === "start" && <StartPage onStart={handleStart} onClose={closeAll} />}
        {step === "questions" && <QuestionPage onClose={closeAll} onComplete={handleComplete} />}
        {step === "result" && <ResultPage result={result} onRetry={handleRetry} onClose={closeAll} />}
      </div>
    </ThemeProvider>
  );
}

function deriveResultFromAnswers(answers = []) {
  const score = answers.reduce((acc, a) => acc + (a?.choice === "A" ? 1 : -1), 0);
  const isA = score >= 0;
  return {
    characterImage: "",
    characterName: isA ? "에리나" : "리나에",
    personality: isA ? "상냥함" : "시크함",
    description: isA ? "항상 밝고 다정하다." : "절제된 매력과 차분한 카리스마.",
    details: [],
  };
}
