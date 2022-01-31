import * as React from "react";
import { TextColor, TextSize } from "../../foundation";

export interface HeadingTextProps {
   size?: TextSize;
   color?: TextColor;
}

export const HeadingText: React.FunctionComponent<HeadingTextProps> = ({ children, size, color }) => {
   let className = "font-heading uppercase leading-snug lg:tracking-wide";
   if (size) className = className + " " + size;
   if (color) className = className + " " + color;

   return <h2 className={className}>{children}</h2>;
};
