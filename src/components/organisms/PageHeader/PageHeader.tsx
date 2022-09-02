import * as React from "react";
import { Container, HeadingText, TextColor, TextSize } from "../..";

export interface PageHeaderProps {
   bgImage: string;
   headline?: string;
   subheadline?: string;
}

export const PageHeader: React.FunctionComponent<PageHeaderProps> = ({ bgImage, headline, subheadline }) => {
   const className =
      "bg-primary-900 bg-cover bg-center bg-no-repeat h-[33rem] lg:h-[40rem] xl:h-[33rem] flex flex-col justify-center items-center";

   return (
      <div style={{ backgroundImage: `url(${bgImage})` }} className={className}>
         <Container>
            <div className="mx-auto text-center translate-y-10 bg-[#00000080] p-10 w-fit">
               {headline && (
                  <div className="mb-8">
                     <HeadingText size={TextSize.XL_7} color={TextColor.LIGHT_1}>
                        <strong>{headline}</strong>
                     </HeadingText>
                  </div>
               )}
               <div className="">
                  <HeadingText size={TextSize.XL_2} color={TextColor.LIGHT_1}>
                     {subheadline}
                  </HeadingText>
               </div>
            </div>
         </Container>
      </div>
   );
};
