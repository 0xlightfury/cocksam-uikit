import React from "react";
import { Link } from "react-router-dom";
import StyledMenuItem, { StyledMenuItemContainer } from "./styles";
import { MenuItemProps } from "./types";

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  href,
  externalLink = false,
  isActive = false,
  variant = "default",
  statusColor,
  ...props
}) => {
  const itemLinkProps: unknown = href
    ? (externalLink === true)
      ? {
        as: 'a',
        href: href,
      } 
    : {
        as: Link,
        to: href,
      }
    : {
        as: "div",
      };
  return (
    <StyledMenuItemContainer $isActive={isActive} $variant={variant}>
      <StyledMenuItem {...itemLinkProps} $isActive={isActive} $variant={variant} $statusColor={statusColor} {...props}>
        {children}
      </StyledMenuItem>
    </StyledMenuItemContainer>
  );
};

export default MenuItem;
