import React from "react";
import styled from "styled-components";
import PatternB from "./PatternB";
import PatternT from "./PatternT";
import { StyledCard, StyledCardInner } from "./StyledCard";
import { CardProps } from "./types";

const StyledChild = styled.div`
  isolation: isolate;
  z-index: 1;
`;

const Card: React.FC<CardProps> = ({ ribbon, children, background, ...props }) => {
  return (
    <StyledCard {...props}>
      <StyledCardInner background={background} hasCustomBorder={!!props.borderBackground}>
        {/* <PatternT />
        <PatternB /> */}
        <StyledChild>
          {ribbon}
          {children}
        </StyledChild>
      </StyledCardInner>
    </StyledCard>
  );
};
export default Card;
