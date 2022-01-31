import * as React from "react";
import { Button, Img } from "../../atoms";
import { ButtonColor, ButtonSize, ImageSize, ImageStyle } from "../../foundation";

export interface BoxProps {
   action?: React.ReactNode;
   images?: [string, string, string];
}

export const Box: React.FunctionComponent<BoxProps> = ({ children, action, images }) => {
   const createTape = (images) => {
      return images.map((image, index) => (
         <li key={index} className="my-2 first:block hidden md:block">
            <Img style={ImageStyle.PLAIN} size={ImageSize.MEDIUM} src={image} />
         </li>
      ));
   };

   return (
      <>
         <div className="flex flex-col md:grid  md:grid-cols-3 items-center">
            <ul className="md:col-span-1 list-none translate-y-10 md:translate-y-0 lg:-translate-y-5 xl:translate-y-0 z-10 ">
               {createTape(images)}
            </ul>
            <div className="md:col-span-2 md:-translate-x-10 mx-2 md:mx-0">
               <div className="h-1 bg-bgcolors-light-2 w-full translate-y-12" />
               <div className="h-2 bg-bgcolors-light-2 w-full translate-y-14" />
               <div className="bg-bgcolors-light-1 px-12 py-24 md:ps-20">{children}</div>
               {action && (
                  <div className="-translate-y-7 text-center">
                     <Button size={ButtonSize.LARGE} color={ButtonColor.ACCENT}>
                        {action}
                     </Button>
                  </div>
               )}
            </div>
         </div>
      </>
   );
};
