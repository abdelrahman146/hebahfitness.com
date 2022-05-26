import { Link } from "gatsby";
import * as React from "react";
import { Hero, HeadingText, TextSize, TextColor, Button, ButtonSize, ButtonColor } from "../../../components";

export interface HeroBlockProps {
   headline?: string;
   heroImage?: string;
   heroImageMobile?: string;
}

export const HeroBlock: React.FunctionComponent<HeroBlockProps> = ({ headline = "", heroImage, heroImageMobile }) => {
   return (
      <Hero bgImage={heroImage} bgImageMobile={heroImageMobile}>
         <div className="flex translate-y-32 md:translate-y-0">
            <div className="flex-1  text-center bg-[#00000060] lg:bg-[transparent] m-5 lg:m-0 p-5 lg:p-0 ">
               <HeadingText size={TextSize.XL_7} color={TextColor.LIGHT_1}>
                  {headline}
               </HeadingText>
               <div className="mt-8">
                  <Link to="/contact">
                     <Button size={ButtonSize.XL} color={ButtonColor.ACCENT}>
                        {"get started"}
                     </Button>
                  </Link>
               </div>
            </div>
            <div className="flex-1 hidden md:block"></div>
         </div>
      </Hero>
   );
};
