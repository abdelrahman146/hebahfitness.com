import { Link } from "gatsby";
import * as React from "react";
import { Section, Container, Box, DisplayText, TextSize, HeadingText, BgColor } from "../../../components";

export interface IntroBlockProps {
   images: [string, string, string];
   jobTitle: string;
   otherTitles: string[];
   summary: React.ReactNode;
}

export const IntroBlock: React.FunctionComponent<IntroBlockProps> = ({
   images = ["", "", ""],
   jobTitle = "",
   otherTitles = [],
   summary = "",
}) => {
   const createOtherTitles = (otherTitles) => {
      return otherTitles.map((title, index) => (
         <li key={index} className="my-1 last:text-primary-500">
            <HeadingText size={TextSize.XL_2}>{title}</HeadingText>
         </li>
      ));
   };

   const ReadMoreButton = (text, url) => <Link to={url}>{text}</Link>;

   return (
      <Section bgcolor={BgColor.LIGHT_2}>
         <Container>
            <div className="flex flex-row flex-wrap max-w-7xl mx-auto items-center">
               <div className="text-center z-20 hidden lg:block">
                  <div className="-rotate-6">
                     <DisplayText size={TextSize.XL_8}>{"Meet Heba"}</DisplayText>
                  </div>
                  <div className="mt-8">
                     <HeadingText size={TextSize.XL_7}>
                        <strong>{jobTitle}</strong>
                     </HeadingText>
                  </div>
                  <ul className="list-none text-center mt-4">{createOtherTitles(otherTitles)}</ul>
               </div>
               <div className="flex-1 lg:-translate-x-10">
                  <Box images={images} action={ReadMoreButton("More About Me", "/about")}>
                     <div className="lg:hidden mb-8">
                        <HeadingText size={TextSize.XL_7}>
                           <strong>{jobTitle}</strong>
                        </HeadingText>
                     </div>
                     {summary}
                  </Box>
               </div>
            </div>
         </Container>
      </Section>
   );
};
