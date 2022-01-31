import * as React from "react";
import { LogoSize, TextColor } from "../../foundation";

export interface LogoProps {
   size?: LogoSize;
   color?: TextColor;
   logoText: string;
}

export const Logo: React.FunctionComponent<LogoProps> = ({ size, color, logoText }) => {
   let className = "font-display";
   if (size) className = className + " " + size;
   if (color) className = className + " " + color;

   return <h1 className={className}>{logoText}</h1>;
};
