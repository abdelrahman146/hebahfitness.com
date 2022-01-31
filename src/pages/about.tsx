import * as React from "react";
import {
   Button,
   ButtonColor,
   ButtonSize,
   GoToAction,
   HeadingText,
   PageHeader,
   TextColor,
   TextSize,
} from "../components";
import { about_data } from "../content";

export interface AboutData {
   header: {
      headerImage: string;
      headline: string;
      subheadline: string;
   };
   intro: {
      headline: string;
      subheadline: string;
      body: string;
      image: string;
   };
   story: {
      headline: string;
      subheadline: string;
      body: string;
      image: string;
   };
}

export interface AboutPageProps {
   data: AboutData;
}

const AboutPage: React.FunctionComponent<AboutPageProps> = () => {
   const data = about_data;

   return (
      <div className="">
         <PageHeader
            headline={data.header.headline}
            bgImage={data.header.headerImage}
            subheadline={data.header.subheadline}
         />
         <IntroBlock
            headline={data.introBlock.headline}
            subheadline={data.introBlock.subheadline}
            p1={data.introBlock.p1}
            p2={data.introBlock.p2}
         />
         <AboutList About={data.About} />
         <GoToAction bgImage="images/action.jpg">
            <div className="p-4 text-center">
               <HeadingText color={TextColor.LIGHT_1} size={TextSize.XL_2}>
                  TIRED OF NOT FEELING YOUR BEST?
               </HeadingText>
               <HeadingText color={TextColor.LIGHT_1} size={TextSize.XL_5}>
                  LET&apos;S TALK ABOUT YOUR HEALTH.
               </HeadingText>
               <div className="mt-8">
                  <Button color={ButtonColor.PRIMARY} size={ButtonSize.LARGE}>
                     Let&apos;s Chat
                  </Button>
               </div>
            </div>
         </GoToAction>
      </div>
   );
};
export default ServicesPage;
