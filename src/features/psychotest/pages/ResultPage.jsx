import React from "react";
import "../psychotest.css";

import ModalContainer from "../components/ModalContainer.jsx";
import HeaderBar from "../components/HeaderBar.jsx";
import FooterBar from "../components/FooterBar.jsx";
import CharacterImage from "../components/CharacterImage.jsx";
import ResultInfo from "../components/ResultInfo.jsx";
import NavButton from "../components/NavButton.jsx";

const ResultPage = ({ result, onRetry, onClose }) => {
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
};

export default ResultPage;
