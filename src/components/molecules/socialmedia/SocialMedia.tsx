import * as React from "react";

export interface SocialMediaProps {
   items: React.ReactNode[];
}

export const SocialMedia: React.FunctionComponent<SocialMediaProps> = ({ items }) => {
   return (
      <ul
         className={`list-none flex-wrap flex-row justify-evenly justify-items-stretch flex-grow hidden lg:flex flex-1 `}
      >
         {items.map((item, index) => (
            <li
               key={index}
               className="text-txtcolors-dark-1 font-navigation uppercase [list-style-type:none] mx-1 hover:text-primary-500 cursor-pointer"
            >
               {item}
            </li>
         ))}
      </ul>
   );
};
