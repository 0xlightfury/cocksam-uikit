import styled from "styled-components";
import { space, variant as StyledSystemVariant } from "styled-system";
import { lightColors } from "../../theme";
import { styleVariants, styleScales } from "./themes";
import { ProgressProps, variants } from "./types";

interface BarProps {
  primary?: boolean;
  $useDark: boolean;
}

export const Bar = styled.div<BarProps>`
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, #3F8CFF 0%, #093A84 100%);
  opacity: ${({ $useDark, primary }) => {
    if ($useDark) return primary ? "1" : "0.6";
    return primary ? "1" : "0.6";
  }};
  height: calc(100% - 2px);
  transition: width 200ms ease;
  margin: 1px;
`;

Bar.defaultProps = {
  primary: false,
};

interface StyledProgressProps {
  variant: ProgressProps["variant"];
  scale: ProgressProps["scale"];
  $useDark: boolean;
}

const StyledProgress = styled.div<StyledProgressProps>`
  position: relative;
  background-color: black;
  border: 1px solid #5B5B5B;
  backdrop-filter: blur(219px);
  box-shadow: ${({ theme }) => theme.shadows.inset};
  overflow: hidden;

  ${Bar} {
    border-radius: ${({ variant }) => (variant === variants.FLAT ? "0" : "32px")};
  }

  ${StyledSystemVariant({
    variants: styleVariants,
  })}
  ${StyledSystemVariant({
    prop: "scale",
    variants: styleScales,
  })}
  ${space}
`;

export default StyledProgress;
