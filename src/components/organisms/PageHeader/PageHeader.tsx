// @ts-nocheck
import * as React from "react";
import { Container, HeadingText, TextColor, TextSize } from "../..";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

export interface PageHeaderProps {
   bgImage: any;
   headline?: string;
   subheadline?: string;
}

export const PageHeader: React.FunctionComponent<PageHeaderProps> = ({ bgImage, headline, subheadline }) => {
   const image = getImage(bgImage);
   const backgroundImage = convertToBgImage(image);
   const className = "h-[33rem] lg:h-[40rem] xl:h-[33rem] flex flex-col justify-center items-center";

   return (
      <BackgroundImage Tag={"div"} {...backgroundImage} preserveStackingContext>
         <div className={className}>
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
      </BackgroundImage>
   );
};
