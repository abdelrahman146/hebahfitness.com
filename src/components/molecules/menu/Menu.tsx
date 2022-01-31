import * as React from "react";
import { MenuStyle } from "../../foundation";

export interface MenuProps {
   style?: MenuStyle;
   items: React.ReactNode[];
}

export const Menu: React.FunctionComponent<MenuProps> = ({ style = MenuStyle.ROW, items }: MenuProps) => {
   return (
      <ul className={`flex ${style} items-center list-none`}>
         {items.map((item, index) => (
            <li
               key={index}
               className="text-txtcolors-dark-1 font-navigation uppercase [list-style-type:none] mx-1 hover:text-primary-500 cursor-pointer text-center"
            >
               {item}
            </li>
         ))}
      </ul>
   );
};
