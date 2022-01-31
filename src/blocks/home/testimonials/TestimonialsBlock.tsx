import * as React from "react";
import { BodyText, DisplayText, SideImageSection, Slider, TextSize } from "../../../components";

export interface Testimonial {
   body: string;
   from: string;
}

export interface TestimonialsBlockProps {
   title: string;
   bgImage: string;
   testimonials: Testimonial[];
}

export const TestimonialsBlock: React.FunctionComponent<TestimonialsBlockProps> = ({
   testimonials = [],
   bgImage,
   title = "",
}) => {
   const createTestimonials = (testimonials: Testimonial[]) => {
      return testimonials.map((item, index) => (
         <div key={index} className="">
            <BodyText>{item.body}</BodyText>
            <div className="mt-8">
               <DisplayText size={TextSize.MED}>{item.from}</DisplayText>
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
