import React from "react";
import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledText,
  StyledSocialLinks,
  StyledToolsContainer,
} from "./styles";
import { FooterProps } from "./types";
import { ThemeSwitcher } from "../ThemeSwitcher";
import LangSelector from "../LangSelector/LangSelector";
import CakePrice from "../CakePrice/CakePrice";
import { LogoWithTextIcon, ArrowForwardIcon } from "../Svg";
import { Button } from "../Button";
import { Colors } from "../..";
import Pattern1 from "./Pattern1";
import Pattern from "./Pattern";
import Logo from "../../widgets/Menu/components/Logo";

const MenuItem: React.FC<FooterProps> = ({
  logoHref,
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  return (
    <StyledFooter p={["20px 16px", null, "20px 40px 32px 40px"]} {...props} justifyContent="center">
    {/* <StyledFooterInner p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center"> */}
      {/* <Pattern /> */}
      <Flex flexDirection="column" width={["100%", null, "1200px;"]} zIndex={1}>
        {/* <StyledIconMobileContainer display={["block", null, "none"]}>
          <Logo isDark={isDark} href={logoHref} />
        </StyledIconMobileContainer> */}
        {/* <Flex
          order={[2, null, 1]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mb={["42px", null, "36px"]}
        >
          {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  {href ? (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      color={lightColors.text}
                      bold={false}
                    >
                      {label}
                    </Link>
                  ) : (
                    <StyledText>{label}</StyledText>
                  )}
                </StyledListItem>
              ))}
            </StyledList>
          ))}
          <Box display={["none", null, "block"]}>
            <Logo isDark={isDark} href={logoHref} />
          </Box>
        </Flex> */}
        {/* <StyledToolsContainer
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >
          <Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center">
            <StyledSocialLinks/>
          </Flex>
          <Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center">
            <Box mr="20px">
              <CakePrice cakePriceUsd={cakePriceUsd} color={lightColors.textSubtle as keyof Colors} />
            </Box>
            <Button
              as="a"
              href="/presale"
              target="_blank"
              scale="sm"
              endIcon={<ArrowForwardIcon color={lightColors.backgroundAlt} />}
            >
              {buyCakeLabel}
            </Button>
          </Flex>
        </StyledToolsContainer> */}
        <Flex mb={["30px", null, "0"]} justifyContent="center" alignItems="center">
          <StyledSocialLinks/>
        </Flex>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
