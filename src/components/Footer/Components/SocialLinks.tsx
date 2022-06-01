import React from "react";
import styled from "styled-components";
import { darkColors, lightColors } from "../../../theme";
import { Box, FlexProps } from "../../Box";
import Flex from "../../Box/Flex";
import Dropdown from "../../Dropdown/Dropdown";
import Link from "../../Link/Link";
import IconComponent from "../../Svg/IconComponent";
import { socials } from "../config";

const StyledBox = styled(Box)`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  border-radius: 46px;
  border: 1px solid ${({ theme }) => theme.colors.textSubtle};
  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    opacity: 0.65;
  }

  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
`;

const SocialLinks: React.FC<FlexProps> = ({ ...props }) => (
  <Flex {...props}>
    {socials.map((social, index) => {
      const iconProps = {
        iconName: social.icon,
        width: "20px",
        color: lightColors.textSubtle,
        style: { cursor: "pointer" },
      };
      const mr = index < socials.length - 1 ? "24px" : 0;
      return (
        <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
          <StyledBox>
            <IconComponent {...iconProps} />
          </StyledBox>
        </Link>
      );
    })}
  </Flex>
);

export default React.memo(SocialLinks, () => true);
