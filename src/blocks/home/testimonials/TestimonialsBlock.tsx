import * as React from "react";
import { BodyText, DisplayText, SideImageSection, Slider, TextSize } from "../../../components";

export interface Testimonial {
   frontmatter: {
      body: string;
      from: string;
   };
}

export interface TestimonialsBlockProps {
   title: string;
   bgImage: string;
   testimonials: {
      edges: {
         node: Testimonial;
      }[];
   };
}

export const TestimonialsBlock: React.FunctionComponent<TestimonialsBlockProps> = ({
   testimonials,
   bgImage,
   title = "",
}) => {
   const createTestimonials = (testimonials: {
      edges: {
         node: Testimonial;
      }[];
   }) => {
      return testimonials.edges.map(({ node }, index) => (
         <div key={index} className="">
            <BodyText>{node.frontmatter.body}</BodyText>
            <div className="mt-8">
               <DisplayText size={TextSize.MED}>{node.frontmatter.from}</DisplayText>
            </div>
         </div>
      ));
   };

   return (
      <SideImageSection imageSide="START" fade imageUrl={bgImage} title={title}>
         <Slider nextButton="More" content={createTestimonials(testimonials)} />
      </SideImageSection>
   );
};
