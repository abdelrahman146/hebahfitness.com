import * as React from "react";
import { BgColor, Container, Gallery, HeadingText, Section, TextSize } from "../../../components";
import { Media } from "../../../components/organisms/Gallery/Gallery";
export interface BlogCategory {
   title: string;
   image: string;
}

export interface BlogBlockProps {
   categories: BlogCategory[];
}

export const BlogBlock: React.FunctionComponent<BlogBlockProps> = ({ categories }) => {
   const mapCategories = (categories: BlogCategory[]): Media[] => {
      return categories.map((category) => ({
         alt: category.title,
         src: category.image,
         title: category.title,
      }));
   };

   return (
      <Section bgcolor={BgColor.LIGHT_2}>
         <Container>
            <div className="text-center">
               <HeadingText size={TextSize.XL_5}>POPULAR</HeadingText>
               <HeadingText size={TextSize.XL_2}>{"On Our Blog"}</HeadingText>
            </div>
            <div className="mt-8">
               <Gallery items={mapCategories(categories)} />
            </div>
         </Container>
      </Section>
   );
};
