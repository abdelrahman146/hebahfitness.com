import * as React from "react";
import { Container } from "../..";

export interface HeroProps {
   bgImage?: string;
   bgImageMobile?: string;
}

export const Hero: React.FunctionComponent<HeroProps> = ({ bgImage, bgImageMobile, children }) => {
   const className =
      "bg-primary-900 bg-cover bg-no-repeat h-screen md:h-[33rem] lg:h-[40rem] xl:h-screen flex flex-col justify-center items-center";
   const createHero = (bgImage) => {
      return (
         <div style={{ backgroundImage: `url(${bgImage})` }} className={className}>
            <Container>{children}</Container>
         </div>
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
