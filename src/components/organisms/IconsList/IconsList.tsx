import * as React from "react";
import { Img, ImageSize, ImageStyle, HeadingText, TextColor, TextSize } from "../..";

export interface Icon {
   src?: string;
   alt?: string;
   title: string;
}

export interface IconsListProps {
   items: Icon[];
}

export const IconsList: React.FunctionComponent<IconsListProps> = ({ items }) => {
   const createIconsList = (items: Icon[]) => {
      return items.map((item, index) => (
         <li key={index} className="md:flex-1 w-full md:w-fit mb-16 last:mb-0 md:mb-0">
            <div className="flex justify-center">
               <Img size={ImageSize.SMALL} style={ImageStyle.PLAIN} src={item.src || ""} alt={item.alt || ""} />
            </div>
            {item.title && (
               <div className="mt-4 text-center">
                  <HeadingText color={TextColor.DARK_2} size={TextSize.LARGE}>
                     {item.title}
                  </HeadingText>
               </div>
            )}
         </li>
      ));
   };

   return <ul className="flex mt-8 flex-row flex-wrap justify-between list-none">{createIconsList(items)}</ul>;
};
