// @ts-nocheck
import * as React from "react";
import { Container } from "../..";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

export interface HeroProps {
   bgImage?: any;
   bgImageMobile?: string;
}

export const Hero: React.FunctionComponent<HeroProps> = ({ bgImage, bgImageMobile, children }) => {
   const image = getImage(bgImage);
   const backgroundImage = convertToBgImage(image);
   const className = "h-screen md:h-[33rem] lg:h-[40rem] xl:h-screen flex flex-col justify-center items-center";
   const createHero = () => {
      return (
         <>
            {/* {JSON.stringify(backgroundImage)} */}
            <BackgroundImage Tag={"div"} {...backgroundImage} preserveStackingContext>
               <div className={className}>
                  <Container>{children}</Container>
               </div>
            </BackgroundImage>
         </>
      );
   };

   if (bgImageMobile) {
      return (
         <>
            <div className="hidden md:block">{createHero(bgImage)}</div>
            <div className="md:hidden">{createHero(bgImageMobile)}</div>
         </>
      );
   }

   return createHero(bgImage);
};
