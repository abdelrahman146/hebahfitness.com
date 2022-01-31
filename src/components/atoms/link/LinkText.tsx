import * as React from "react";
import { LinkColor } from "../../foundation";

export interface LinkTextProps {
   color: LinkColor;
   bold?: boolean;
   underline?: boolean;
}

export const LinkText: React.FunctionComponent<LinkTextProps> = ({ children, color, underline, bold }) => {
   let className = `font-heading uppercase cursor-pointer`;
   if (color) className = className + " " + color;
   if (underline) className = className + " text-underline";
   if (bold) className = className + " font-bold";

   return <span className={className}>{children}</span>;
};
