import * as itemS from "@/pages/RandingPage/styled/RandingPage.SplashPage.style"
import { useState } from "react"
import { Link } from "react-router-dom";
function SplashPage() {
    // 호버 가능한 상태인가 (첫 실행때는 애니메이션이 끝나기 전까지 호버 액션 적용 x)
    const [hoverAllowed, setHoverAllowed] = useState(false);
    //  애니메이션이 끝났으면 true, 진행 중이면 false
    const [animated, setAnimated] = useState(false);
    // 편지를 보여 주는 상태 여부
    const [showLetter, setShowLetter] = useState(false);

    return(
        <itemS.SplashPageContainer>
            <itemS.TitleWappper 
            // props로 넘겨주는 상태
            animated={animated} hoverAllowed={hoverAllowed}
            // 첫 진입 후 애니메이션이 종료되면 실행
            onAnimationEnd={() => {
                setHoverAllowed(true),
                setAnimated(true)
                }}
            onClick={()=>setShowLetter(true)}
                >
                <itemS.TitleSubText>X, 무한한 가능성의 선택</itemS.TitleSubText>
                <itemS.TitleMainText>Project-X</itemS.TitleMainText>
            </itemS.TitleWappper>
            {showLetter && (
                <itemS.LetterWrapper>
                    <itemS.LetterTextContainer>
                        <itemS.LetterTitleText>Fixer님께</itemS.LetterTitleText>
                        <itemS.LetterContentText>
                            {`
                            안녕하세요. 
                            우리는 지금 무한한 가능성과 선택의 세계 속을 헤매고 있는 작은 목소리들입니다.
                            어느 길로 가야 할지, 누구의 손을 잡아야 할지 몰라 망설이는 중이에요.
                            그래서, 당신의 손길이 필요합니다.`}
                        </itemS.LetterContentText>
                        <itemS.LetterContentText>
                            {`
                            당신은 이 세계에서 멤버를 고르고, 조합하고, 
                            이야기를 엮어 데뷔 무대에 세울 수 있는 유일한 존재예요. 
                            한 명의 성격, 한 번의 선택이 곧 그룹의 표정과 리듬이 됩니다.
                            모든 가능성은 당신이 빚어낼 수 있는 재료일 뿐이에요.`}
                        </itemS.LetterContentText>
                        <itemS.LetterContentText>
                            {`
                            부담 없이 시작해 주세요. 
                            그 선택이 누군가의 웃음이 되고, 누군가의 응원이 됩니다.
                            Fixer님, 우리에게 첫 발을 내딛는 용기를 주세요.
                            당신의 선택으로 이 작은 별들이 빛나게 될 거예요.`}
                        </itemS.LetterContentText>
                        <itemS.LetterFromTextWrapper>
                            <itemS.LetterFromText>
                                {`언제나 기다리며,
                                Project - x 드림`}
                            </itemS.LetterFromText>
                        </itemS.LetterFromTextWrapper>
                    </itemS.LetterTextContainer>   
                    <itemS.BtnWrapper>
                            <Link to="/selectMember">
                                <itemS.NextBtn>시작하기</itemS.NextBtn>
                            </Link>
                    </itemS.BtnWrapper>   
                </itemS.LetterWrapper>
            )}
        </itemS.SplashPageContainer>
    )
}

export default SplashPage