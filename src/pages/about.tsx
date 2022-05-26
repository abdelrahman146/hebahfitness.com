import * as React from "react";
import { PageHeader } from "../components";
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
      </div>
   );
};
export default AboutPage;
