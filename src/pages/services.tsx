import * as React from "react";
import { IntroBlock, ServicesList } from "../blocks/services";
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
import { services_data } from "../content";

export interface ServicesData {
   header: {
      headerImage: string;
      headline: string;
      subheadline: string;
   };
   introBlock: {
      headline: string;
      subheadline: string;
      p1: string;
      p2: string;
   };
   services: {
      title: string;
      subtitle: string;
      summary: string;
      path: string;
      image: string;
   }[];
}

export interface ServicesPageProps {
   data: ServicesData;
}

const ServicesPage: React.FunctionComponent<ServicesPageProps> = () => {
   const data = services_data;

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
         <ServicesList services={data.services} />
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
