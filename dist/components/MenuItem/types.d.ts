import { Colors } from "../../theme";
export declare type MenuItemVariant = "default" | "subMenu";
export interface MenuItemProps {
    isActive?: boolean;
    href?: string;
    externalLink?: boolean;
    variant?: MenuItemVariant;
    statusColor?: keyof Colors;
}
export declare type StyledMenuItemProps = {
    $isActive?: boolean;
    $variant?: MenuItemVariant;
    $statusColor?: keyof Colors;
};
