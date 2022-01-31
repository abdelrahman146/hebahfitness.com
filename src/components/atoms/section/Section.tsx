import * as React from "react";
import { BgColor, PaddingYSize } from "../../foundation";

export interface SectionProps {
   bgcolor?: BgColor;
   paddingY?: PaddingYSize;
}

export const Section: React.FunctionComponent<SectionProps> = ({ bgcolor, children, paddingY = PaddingYSize.XL }) => {
   return (
      <>
         <div className={`${bgcolor || BgColor.LIGHT_1} flex flex-col justify-center items-center ${paddingY}`}>
            {children}
         </div>
      </>
   );
};
