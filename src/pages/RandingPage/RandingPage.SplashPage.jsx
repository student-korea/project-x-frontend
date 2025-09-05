import * as itemS from "@/pages/RandingPage/styled/RandingPage.SplashPage.style"
import { useState } from "react"
function SplashPage() {
    // 호버 가능한 상태인가 (첫 실행때는 애니메이션이 끝나기 전까지 호버 액션 적용 x)
    const [hoverAllowed, setHoverAllowed] = useState(false);
    const [animated, setAnimated] = useState(false);

    return(
        <itemS.SplashPageContainer>
            <itemS.TitleWappper animated={animated} hoverAllowed={hoverAllowed}
            onAnimationEnd={() => {
                setHoverAllowed(true),
                setAnimated(true)
                }}>
                <itemS.TitleSubText>X, 무한한 가능성의 선택</itemS.TitleSubText>
                <itemS.TitleMainText>Project-X</itemS.TitleMainText>
            </itemS.TitleWappper>
        </itemS.SplashPageContainer>
    )
}

export default SplashPage