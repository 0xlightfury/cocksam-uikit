import React from "react";
import styled from "styled-components";

const StyledPattern = styled.div`
  width: 50%;
  position: absolute;
  right: 0px;
  bottom: 0px;
`;

const PatternB = () => {
  return (
    <StyledPattern>
      <svg viewBox="0 0 225 293" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5" clip-path="url(#clip0_58_4539)">
        <g opacity="0.25">
        <path d="M220.5 448C305.828 448 375 378.828 375 293.5C375 208.172 305.828 139 220.5 139C135.172 139 66 208.172 66 293.5C66 378.828 135.172 448 220.5 448Z" stroke="white" stroke-width="2"/>
        <path d="M220.5 416.962C288.686 416.962 343.962 361.686 343.962 293.5C343.962 225.314 288.686 170.038 220.5 170.038C152.314 170.038 97.0381 225.314 97.0381 293.5C97.0381 361.686 152.314 416.962 220.5 416.962Z" stroke="white" stroke-width="2"/>
        <path d="M220.5 385.924C271.545 385.924 312.924 344.544 312.924 293.5C312.924 242.456 271.545 201.076 220.5 201.076C169.456 201.076 128.076 242.456 128.076 293.5C128.076 344.544 169.456 385.924 220.5 385.924Z" stroke="white" stroke-width="2"/>
        <path d="M220.5 354.886C254.403 354.886 281.887 327.403 281.887 293.5C281.887 259.597 254.403 232.114 220.5 232.114C186.598 232.114 159.114 259.597 159.114 293.5C159.114 327.403 186.598 354.886 220.5 354.886Z" stroke="url(#paint0_linear_58_4539)" stroke-width="2"/>
        </g>
        </g>
        <defs>
        <linearGradient id="paint0_linear_58_4539" x1="220.5" y1="231.424" x2="220.5" y2="355.576" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white"/>
        </linearGradient>
        <clipPath id="clip0_58_4539">
        <rect width="225" height="293" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </StyledPattern>
  );
};

export default PatternB;
