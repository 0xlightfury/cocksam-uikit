import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 100 100" {...props}>
      <circle cx="50" cy="50" r="0" fill="none" stroke="#ffb400" stroke-width="10">
        <animate attributeName="r" repeatCount="indefinite" dur="2.380952380952381s" values="0;35" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-1.1904761904761905s"></animate>
        <animate attributeName="opacity" repeatCount="indefinite" dur="2.380952380952381s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-1.1904761904761905s"></animate>
      </circle>
      <circle cx="50" cy="50" r="0" fill="none" stroke="#000000" stroke-width="10">
        <animate attributeName="r" repeatCount="indefinite" dur="2.380952380952381s" values="0;35" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"></animate>
        <animate attributeName="opacity" repeatCount="indefinite" dur="2.380952380952381s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"></animate>
      </circle>
    </Svg>
  );
};

export default Icon;
