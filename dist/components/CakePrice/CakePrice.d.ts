import React from "react";
import { Colors } from "../../theme";
export interface Props {
    color?: keyof Colors;
    cakePriceUsd?: number;
    withLogo?: boolean;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
