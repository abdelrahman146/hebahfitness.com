import * as React from "react";
import { TextColor, TextSize } from "../../foundation";

export interface BodyTextProps {
   size?: TextSize;
   color?: TextColor;
}

export const BodyText: React.FunctionComponent<BodyTextProps> = ({ children, size, color }) => {
   let className = "font-body";
   if (size) className = className + " " + size;
   if (color) className = className + " " + color;

   return <p className={className}>{children}</p>;
};
