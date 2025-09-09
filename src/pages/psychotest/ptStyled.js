import styled, { keyframes } from "styled-components";

/* keyframes */
const gradientShift = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;
const shine = keyframes`
  0%{transform:translateX(-100%)}
  50%{transform:translateX(100%)}
  100%{transform:translateX(100%)}
`;
const floatKF = keyframes`
  0%,100%{ transform: translateY(0) rotate(0) }
  25%{ transform: translateY(-8px) rotate(2deg) }
  50%{ transform: translateY(-4px) rotate(-1deg) }
  75%{ transform: translateY(-6px) rotate(1deg) }
`;

/* 레이아웃 */
export const ModalContainerWrap = styled.div`
  position: fixed; inset: 0;
  background: rgba(0,0,0,.6);
  display:flex; justify-content:center; align-items:center;
  z-index:1000; backdrop-filter: blur(8px);
`;
export const TestModal = styled.div`
  background: linear-gradient(145deg, #ffffff, ${({theme})=>theme.color.surface});
  width:90%; max-width:400px; height:85vh; max-height:700px;
  border-radius:20px; display:flex; flex-direction:column; overflow:hidden; position:relative;
  box-shadow:${({theme})=>theme.shadow.modal};
  &::after{
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image: radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px);
    background-size:6px 6px; mix-blend-mode: overlay; opacity:.35;
  }
`;
export const Header = styled.div`
  background:${({theme})=>theme.grad.header};
  background-size:180% 180%;
  padding:20px; text-align:center; position:relative; color:#fff; flex-shrink:0;
  &:hover { animation:${gradientShift} 6s ease infinite; }
`;
export const Title = styled.h1`
  font-size:17px; font-weight:600; margin:0; text-shadow:0 2px 4px rgba(0,0,0,.1);
`;
export const CloseButton = styled.button`
  position:absolute; left:20px; top:50%; transform: translateY(-50%);
  background: rgba(255,255,255,.2); border:none; border-radius:50%;
  width:36px; height:36px; font-size:20px; color:#fff; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  transition: all .3s ease; backdrop-filter: blur(10px);
  &:hover { background: rgba(255,255,255,.3); transform: translateY(-50%) scale(1.1); }
`;
export const ProgressInfo = styled.div`
  font-size:14px; color:#eee; margin-top:5px;
  position:absolute; right:20px; top:50%; transform: translateY(-50%);
`;
export const Content = styled.div`
  flex:1; padding:30px 25px 20px; overflow-y:auto; position:relative;
  &::-webkit-scrollbar { width:4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(102,126,234,.3); border-radius:2px; }
`;
export const Footer = styled.div`
  padding:25px; background: linear-gradient(to top, rgba(255,255,255,.9), transparent);
  flex-shrink:0;
`;

/* CTA 버튼 */
export const StartButton = styled.button`
  width:100%;
  background:${({theme})=>theme.grad.header};
  background-size:200% 200%;
  border:none; border-radius:16px; padding:0; cursor:pointer; position:relative; overflow:hidden;
  box-shadow:${({theme})=>theme.shadow.cta}; transition:all .3s ease;
  &:hover { transform: translateY(-2px); box-shadow:${({theme})=>theme.shadow.ctaHover}; animation:${gradientShift} 3s ease infinite; }
  &:active { transform: translateY(0); }
`;
export const ButtonContent = styled.div`
  display:flex; align-items:center; justify-content:center; padding:16px 24px; color:#fff; position:relative; z-index:2;
`;
export const ButtonText = styled.span`
  font-size:1.1rem; font-weight:600; flex:1; text-align:center;
`;
export const ButtonIcon = styled.span`
  font-size:1.3rem; transition: transform .3s ease;
  ${StartButton}:hover & { transform: translateX(4px); }
`;
export const ButtonGlow = styled.div`
  position:absolute; inset:0; left:-100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.3), transparent);
  transition:left .6s ease;
  ${StartButton}:hover & { left:100%; }
`;

/* 히어로 */
export const HeroWrap = styled.div`
  text-align:center; margin-bottom:35px; position:relative;
`;
export const LogoContainer = styled.div`
  background-image:
    radial-gradient(120% 90% at 85% -10%, rgba(255,255,255,.35) 0%, transparent 60%),
    ${({theme})=>theme.grad.hero};
  background-blend-mode: screen, normal;
  border-radius:20px; padding:25px; margin: 0 auto 20px; width: fit-content;
  box-shadow:${({theme})=>theme.shadow.logo}; position:relative; overflow:hidden;
  &::before{
    content:''; position:absolute; inset:0;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,.12), transparent);
    transform: translateX(-100%); animation: ${shine} 3s infinite;
  }
`;
export const LogoIcon = styled.div`
  font-size: 2.5rem; margin-bottom: 8px; filter: drop-shadow(0 2px 4px rgba(0,0,0,.2));
`;
export const LogoText = styled.h2`
  color:#fff; font-size:1.1rem; font-weight:700; margin:0; text-shadow:0 2px 4px rgba(0,0,0,.3);
`;
export const Floating = styled.div` position:absolute; inset:0; pointer-events:none; `;
const FloatBase = styled.div` position:absolute; font-size:1.2rem; opacity:.7; animation:${floatKF} 4s ease-in-out infinite; `;
export const Heart = styled(FloatBase)` top:20%; left:10%; animation-delay:0s; `;
export const Star  = styled(FloatBase)` top:15%; right:15%; animation-delay:1s; `;
export const Music = styled(FloatBase)` bottom:40%; left:15%; animation-delay:2s; `;
export const Sparkle = styled(FloatBase)` bottom:30%; right:10%; animation-delay:3s; `;

/* 설명 블럭 */
export const DescWrap = styled.div` text-align:center; `;
export const MainDesc = styled.h3`
  font-size:1.3rem; font-weight:600; color:${({theme})=>theme.color.textStrong}; line-height:1.4; margin:0 0 25px;
`;
export const Highlight = styled.span`
  background: linear-gradient(135deg, #667eea, #a78bfa);
  -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; font-weight:700;
`;
export const TestInfo = styled.div` display:flex; justify-content:center; gap:15px; margin-bottom:20px; `;
export const Pill = styled.div`
  background:${({theme})=>theme.grad.pill}; color:#fff; padding:8px 16px; border-radius:20px;
  font-size:.85rem; font-weight:500; display:flex; align-items:center; gap:6px;
  box-shadow:${({theme})=>theme.shadow.pill};
`;
export const InfoIcon = styled.span` font-size:1rem; `;
export const SubDesc = styled.p` font-size:.9rem; color:${({theme})=>theme.color.textMuted}; line-height:1.5; margin:0; `;
