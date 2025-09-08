import * as itemS from '@/pages/RandingPage/styled/RandingPage.SelectMemberPage.style';

function MemberCard({img}) {
    return (
        <itemS.MemberCardContainer>
            <itemS.MemberImage src={img}/>
            <itemS.MemberPersonalContainer>
                <itemS.MemeberPersonalWrapper>성격 1</itemS.MemeberPersonalWrapper>
                <itemS.MemeberPersonalWrapper>성격 2</itemS.MemeberPersonalWrapper>
                <itemS.MemeberPersonalWrapper>MBTI</itemS.MemeberPersonalWrapper>
            </itemS.MemberPersonalContainer>
        </itemS.MemberCardContainer>
    )
}

export default MemberCard