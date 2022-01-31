import * as React from "react";
import { ButtonSize, ButtonColor } from "../../foundation";

export interface ButtonProps {
   color: ButtonColor;
   size: ButtonSize;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ children, color, size }) => {
   let className =
      "font-heading uppercase transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300";
   if (color) className = className + " " + color;
   if (size) className = className + " " + size;

   return (
      <button className={className} type="button">
         {children}
      </button>
   );
};
