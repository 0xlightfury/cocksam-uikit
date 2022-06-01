import React from "react";
import { SvgProps } from "../types";
interface LogoProps extends SvgProps {
    isDark: boolean;
}
declare const Icon: React.FC<LogoProps>;
export default Icon;
