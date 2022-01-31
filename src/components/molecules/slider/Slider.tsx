import * as React from "react";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { LinkText } from "../../atoms";
import { LinkColor } from "../../foundation";

export interface SliderProps {
   nextButton: string;
   content: React.ReactNode[];
}

export const Slider: React.FunctionComponent<SliderProps> = ({ nextButton, content }) => {
   const [current, setCurrent] = useState(0);

   function setNext() {
      if (current === content.length - 1) setCurrent(0);
      if (current < content.length - 1) setCurrent(current + 1);
   }

   return (
      <div className="flex relative flex-col h-full">
         {content.map((item, index) => (
            <div
               key={index}
               className={`absolute w-full max-h-[80%] overflow-y-scroll fadein no-scrollbar flex-1 ${
                  index === current ? "block" : "hidden"
               }`}
            >
               {item}
            </div>
         ))}
         <div className="flex mt-auto">
            <div className="ms-auto mt-8">
               <LinkText color={LinkColor.SECONDARY}>
                  <div onClick={setNext} className="flex flex-row items-center">
                     <span className="me-2 font-heading uppercase bold">{nextButton}</span>
                     <BsArrowRight />
                  </div>
               </LinkText>
            </div>
         </div>
      </div>
   );
};
