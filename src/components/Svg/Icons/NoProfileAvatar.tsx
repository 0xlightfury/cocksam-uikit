import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <path
        fill="#E9EAEB"
        d="M47.4,24C47.4,37,36.9,47.4,24,47.4S0.6,37,0.6,24S11.1,0.7,24,0.7S47.4,11.1,47.4,24z"
      />
      <defs>
        <filter
          id="Adobe_OpacityMaskFilter"
          filterUnits="userSpaceOnUse"
          x="7.5"
          y="10.3"
          width="33.1"
          height="37.2"
        >
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
          />
        </filter>
      </defs>
      <mask
        maskUnits="userSpaceOnUse"
        x="7.5"
        y="10.3"
        width="33.1"
        height="37.2"
        id="A_2_"
      >
        <path
          fill="#C4C4C4"
          d="M47.4,24C47.4,37,36.9,47.4,24,47.4S0.6,37,0.6,24S11.1,0.7,24,0.7S47.4,11.1,47.4,24z"
        />
      </mask>
      <g style={{ mask: "url(#A_2_)" }}>
        <path
          fill="#BDC2C4"
          d="M40.6,44.9c0-5.6-7.4-10.1-16.6-10.1S7.5,39.3,7.5,44.9v2.6h33.1L40.6,44.9L40.6,44.9z M36.3,21.6
		c0,6.3-5.6,11.4-12.4,11.4s-12.4-5.1-12.4-11.4S17,10.3,23.9,10.3S36.3,15.4,36.3,21.6z"
        />
      </g>
    </Svg>
  );
};

export default Icon;
