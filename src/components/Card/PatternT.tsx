import React from "react";
import styled from "styled-components";

const StyledPattern = styled.div`
  width: 60%;
  position: absolute;
  left: 0px;
  top: 0px;
`;

const PatternT = () => {
  return (
    <StyledPattern>
      <svg viewBox="0 0 670 306" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7" filter="url(#filter0_f_37_2179)">
        <circle cx="237" cy="-146" r="322" fill="url(#paint0_linear_37_2179)"/>
        </g>
        <defs>
        <filter id="filter0_f_37_2179" x="-215" y="-598" width="904" height="904" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="65" result="effect1_foregroundBlur_37_2179"/>
        </filter>
        <linearGradient id="paint0_linear_37_2179" x1="-71.9899" y1="165.085" x2="657.984" y2="-277.425" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1B76FF"/>
        <stop offset="1" stop-color="#23CBFF"/>
        </linearGradient>
        </defs>
      </svg>
    </StyledPattern>
  );
};

export default PatternT;
