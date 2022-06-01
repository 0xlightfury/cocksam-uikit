import React from "react";
import styled, { keyframes } from "styled-components";
import PanIcon from "./PanIcon";
import { SpinnerProps } from "./types";


const pulse = keyframes`
  0% { transform: rotate(0deg); }
  20% { transform: rotate(0deg); }
  40% { transform: rotate(0deg); }
  50% { transform: scale(1); }
  55% { transform: scale(1.1); }
  60% { transform: scale(1.2); }
  65% { transform: scale(1.3); }
  70% { transform: scale(1.4); }
  75% { transform: scale(1.5); }
  80% { transform: scale(1.2); }
  90% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const Container = styled.div`
  position: relative;
`;

const FloatingPanIcon = styled(PanIcon)`
// position: absolute;
top: 0;
left: 0;
animation: ${pulse} 5s linear infinite;
transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <FloatingPanIcon width={`${size * 0.5}px`} />
    </Container>
  );
};

export default Spinner;
