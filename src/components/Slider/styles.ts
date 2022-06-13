import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import bunnyHeadMain from "./svg/bunnyhead-main.svg";
import bunnyHeadMax from "./svg/bunnyhead-max.svg";
import bunnyButt from "./svg/bunnybutt.svg";

interface SliderLabelProps {
  progress: string;
}

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMax: boolean;
}

interface DisabledProp {
  disabled?: boolean;
}

const getCursorStyle = ({ disabled = false }: DisabledProp) => {
  return disabled ? "not-allowed" : "cursor";
};

const getBaseThumbStyles = ({ isMax, disabled }: StyledInputProps) => `
  -webkit-appearance: none;
  // background-image: url(${isMax ? bunnyHeadMax : bunnyHeadMain});
  // background-color: transparent;
  background-color: #FFFFFF;
  border: 4px solid #3A6AC3;
  cursor: ${getCursorStyle};
  width: 20px;
  height: 20px;
  filter: ${disabled ? "grayscale(100%)" : "none"};
  transform: translate(-2px, 7px);
  transition: 200ms transform;
  border-radius: 10px;

  &:hover {
    transform: ${disabled ? "scale(1) translate(-2px, 7px)" : "scale(1.1) translate(-2px, 7px)"};
  }
`;

export const SliderLabelContainer = styled.div`
  bottom: 0;
  position: absolute;
  left: 14px;
  width: calc(100% - 30px);
`;

export const SliderLabel = styled(Text)<SliderLabelProps>`
  bottom: 0;
  font-size: 12px;
  left: ${({ progress }) => progress};
  position: absolute;
  text-align: center;
  min-width: 24px; // Slider thumb size
`;

export const BunnyButt = styled.div<DisabledProp>`
  background: url(${bunnyButt}) no-repeat;
  height: 32px;
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  position: absolute;
  width: 15px;
`;

export const BunnySlider = styled.div`
  position: absolute;
  left: 14px;
  width: calc(100% - 14px);
`;

export const StyledInput = styled.input<StyledInputProps>`
  cursor: ${getCursorStyle};
  height: 32px;
  position: relative;

  ::-webkit-slider-thumb {
    ${getBaseThumbStyles}
  }

  ::-moz-range-thumb {
    ${getBaseThumbStyles}
  }

  ::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;

export const BarBackground = styled.div<DisabledProp>`
  background-color: ${({ theme, disabled }) => theme.colors[disabled ? "textDisabled" : "background"]};
  height: 15px;
  position: absolute;
  top: 18px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #5B5B5B;
  opacity: 0.7;
  backdrop-filter: blur(219px);
`;

export const BarProgress = styled.div<DisabledProp>`
  background: linear-gradient(180deg, #3F8CFF 0%, #093A84 100%);
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  height: 11px;
  position: absolute;
  top: 20px;
  border-radius: 8px;
  margin-left: 2px;
`;
