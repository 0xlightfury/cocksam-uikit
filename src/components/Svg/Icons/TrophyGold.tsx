import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const fillColor = theme.isDark ? "#280D5F" : "#FFFFFF";
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <path
        d="M17 30C11.7 22.6 9.2 9.5 9.2 9.5l14.8-8 14.8 8s-2.1 13.2-7.1 20.6L17 30z"
        fill="#FFD800"
      ></path>
      <path
        d="M20.7 30.3c-.1 0-.3 0-.4-.2-2.6-2.3-4.9-6.1-6.8-11.5-1.4-4-2-7.2-2-7.4-.1-.3.2-.7.5-.7.3-.1.7.2.7.5 0 .1 2.5 13.1 8.4 18.1.3.2.3.6.1.9-.1.2-.3.3-.5.3z"
        fill="#FFEB99"
      ></path>
      <path
        d="M35.7 7.8c-.8 3.8-2.5 10.2-5.1 15.3-.9 1.8-2.8 3-4.9 3H14.6c.7 1.4 1.5 2.7 2.3 3.9h14.7c5-7.4 7.1-20.6 7.1-20.6l-3-1.6z"
        opacity="0.3" fill="#664400" enable-background="new"
      ></path>
      <path
        d="M38.3 42.5H9.8v-9.8c0-1.5 1.2-2.7 2.7-2.7h23.1c1.5 0 2.7 1.2 2.7 2.7v9.8z"
        fill="#664400"
      ></path>
      <path d="M9.8 38.1H38.3V42.5H9.8z" fill="#56361D"></path>
      <path
        d="M12.1 40.9c-.3 0-.6-.3-.6-.6v-6.8c0-.3.3-.6.6-.6s.6.3.6.6v6.8c.1.4-.2.6-.6.6z"
        fill="#56361D"
      ></path>
      <path
        d="M30.8 35.7H17.7c-.7 0-1.3-.6-1.3-1.3v-.3c0-.7.6-1.3 1.3-1.3h13.1c.7 0 1.3.6 1.3 1.3v.3c0 .7-.6 1.3-1.3 1.3z"
        fill="#FFF5CC"
      ></path>
      <g>
        <path
          d="M27.1 17L24 20.1 20.8 17 19 18.8 24 23.8 25.8 22 25.8 22 29 18.8z"
          fill={fillColor}
        ></path>
        <path
          d="M18.2 16.3L17.3 17.2 18.2 18.1 19.1 17.2z"
          fill={fillColor}
        ></path>
        <path
          d="M16.8 14.7L15.8 15.6 16.6 16.5 17.5 15.6z"
          fill={fillColor}
        ></path>
        <path
          d="M19.1 14L18.2 13.2 17.3 14.1 18.2 14.9z"
          fill={fillColor}
        ></path>
        <path
          d="M19.8 16.5L20.8 15.6 19.8 14.7 19 15.6z"
          fill={fillColor}
        ></path>
        <path
          d="M28.8 17.2L29.6 18.1 30.5 17.2 29.6 16.3z"
          fill={fillColor}
        ></path>
        <path
          d="M27.2 15.7L28.1 16.5 29 15.6 28.1 14.8z"
          fill={fillColor}
        ></path>
        <path
          d="M29.6 15L30.5 14.1 29.6 13.2 28.8 14.1z"
          fill={fillColor}
        ></path>
        <path
          d="M31.2 14.8L30.3 15.6 31.2 16.5 32.2 15.6z"
          fill={fillColor}
        ></path>
        <path
          d="M27.1 14.3L24 11.1 20.8 14.3 19 12.4 24 7.5 25.8 9.3 25.8 9.3 29 12.4z"
          fill={fillColor}
        ></path>
        <g>
          <path
            d="M22 15.1l.9-.3v2h1.5c.3 0 .5-.2.7-.5.1-.2.1-.4.1-.7 0-.4-.1-.7-.3-.9-.1-.1-.3-.2-.5-.2H22l.3-.8h2.3c.5 0 1 .2 1.3.7.3.4.4.8.4 1.3s-.1 1-.4 1.4-.7.6-1.2.6h-2.5l-.2-2.6z"
            fill={fillColor}
          ></path>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
