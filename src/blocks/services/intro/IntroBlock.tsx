import * as React from "react";
import { BodyText, Container, HeadingText, PaddingYSize, Section, TextColor, TextSize } from "../../../components";

export interface IntroBlockProps {
   headline: string;
   subheadline: string;
   p1: string;
   p2: string;
}

export const IntroBlock: React.FunctionComponent<IntroBlockProps> = ({ headline, subheadline, p1, p2 }) => {
   return (
      <Section paddingY={PaddingYSize.XL}>
         <Container>
            <div className="text-center mb-16">
               <HeadingText size={TextSize.XL_5} color={TextColor.PRIMARY_800}>
                  <strong>{headline}</strong>
               </HeadingText>
               <div className="mt-8">
                  <HeadingText size={TextSize.XL_2} color={TextColor.PRIMARY_800}>
                     {subheadline}
                  </HeadingText>
               </div>
            </div>
            <div className="flex flex-row .flex-wrap justify-evenly items-start">
               <div className="w-full md:w-1/3 text-justify">
                  <BodyText size={TextSize.XL}>{p1}</BodyText>
               </div>
               <div className="w-full md:w-1/3 text-justify">
                  <BodyText size={TextSize.XL}>{p2}</BodyText>
               </div>
            </div>
         </Container>
      </Section>
   );
};
