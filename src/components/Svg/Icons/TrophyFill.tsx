import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const fillColor = theme.isDark ? "#280D5F" : "#FFFFFF";
  return (
  <Svg viewBox="0 0 48 53" {...props}>
    <path
        d="M17.1 33.3c-5.3-7.2-7.6-20.1-7.6-20.1l14.4-7.8 14.4 7.8s-2.1 13.1-7 20.3l-14.2-.2z"
        fill="#796AAE"
      ></path>
      <path
        d="M20.8 33.7c-.2 0-.2 0-.4-.2-2.5-2.1-4.9-6-6.6-11.3-1.4-3.9-2-7-2-7.2-.2-.4 0-.8.4-.8s.6.2.8.6c0 .2 2.3 12.9 8.2 18 .2.2.2.6 0 .8-.2-.1-.2.1-.4.1z"
        opacity="0.38" fill="#664610" enable-background="new"
      ></path>
      <path
        d="M35.5 11.4c-.8 3.7-2.5 10-5.1 15-1 1.8-2.7 2.9-4.7 2.9h-11c.8 1.4 1.4 2.7 2.3 3.9h14.4c4.9-7.2 7-20.3 7-20.3l-2.9-1.5z"
        opacity="0.3" fill="#664610" enable-background="new"
      ></path>
      <path
        d="M38 45.8H10V36c0-1.4 1.2-2.7 2.5-2.7h22.6c1.4 0 2.5 1.2 2.5 2.7l.4 9.8z"
        fill="#664610"
      ></path>
      <path d="M10 41.3H37.9V45.599999999999994H10z" fill="#57371D"></path>
      <path
        d="M12.2 44.2c-.4 0-.6-.2-.6-.6V37c0-.4.2-.6.6-.6s.6.2.6.6v6.4c.2.4-.2.8-.6.8z"
        fill="#57371D"
      ></path>
      <path
        d="M30.5 38.9H17.8c-.8 0-1.2-.6-1.2-1.2v-.2c0-.8.6-1.2 1.2-1.2h12.9c.8 0 1.2.6 1.2 1.2v.2c-.1.6-.6 1.2-1.4 1.2z"
        fill="#FFF5CC"
      ></path>
      <g>
        <path
          d="M27 20.6L23.9 23.5 20.8 20.6 19 22.3 23.9 27.2 25.8 25.5 25.8 25.5 28.8 22.3z"
          fill={fillColor}
        ></path>
        <path
          d="M18.2 19.8L17.5 20.8 18.2 21.6 19.2 20.8z"
          fill={fillColor}
        ></path>
        <path
          d="M16.9 18.2L15.9 19.2 16.8 20 17.8 19.2z"
          fill={fillColor}
        ></path>
        <path
          d="M19.2 17.7L18.2 16.9 17.5 17.7 18.2 18.4z"
          fill={fillColor}
        ></path>
        <path d="M19.8 20L20.8 19.2 19.8 18.2 19 19.2z" fill={fillColor}></path>
        <path
          d="M28.6 20.8L29.4 21.6 30.3 20.8 29.4 19.8z"
          fill={fillColor}
        ></path>
        <path d="M27 19.2L28 20 28.8 19.2 28 18.4z" fill={fillColor}></path>
        <path
          d="M29.4 18.6L30.3 17.7 29.4 16.9 28.6 17.7z"
          fill={fillColor}
        ></path>
        <path
          d="M30.9 18.4L30.1 19.2 30.9 20 31.9 19.2z"
          fill={fillColor}
        ></path>
        <path
          d="M27 17.9L23.9 14.7 20.8 17.9 19 16.1 23.9 11.2 25.8 13 25.8 13 28.8 16.1z"
          fill={fillColor}
        ></path>
      </g>
      <g>
        <path
          d="M21.8 18.8l1-.4v2h1.6c.4 0 .6-.2.8-.6.2-.2.2-.4.2-.8s-.2-.8-.4-1c-.2-.2-.4-.2-.6-.2H22l.4-.8h2.3c.6 0 1 .2 1.4.8.4.4.4.8.4 1.4s-.2 1-.4 1.4c-.4.4-.8.6-1.2.6h-2.5l-.6-2.4z"
          fill={fillColor}
        ></path>
      </g>
  </Svg>
 );
};

export default Icon;
