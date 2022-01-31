import * as React from "react";
import { TextColor, TextSize } from "../../foundation";

export interface DisplayTextProps {
   size?: TextSize;
   color?: TextColor;
}

export const DisplayText: React.FunctionComponent<DisplayTextProps> = ({ children, size, color }) => {
   let className = "font-display";
   if (size) className = className + " " + size;
   if (color) className = className + " " + color;

   return <h3 className={className}>{children}</h3>;
};
