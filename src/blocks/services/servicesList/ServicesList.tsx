import * as React from "react";
import { BgColor, BodyText, HeadingText, SideImageSection, TextSize } from "../../../components";

export interface Service {
   frontmatter: {
      title: string;
      subtitle: string;
      summary: string;
      slug: string;
      image: string;
   };
}

export interface ServicesListProps {
   services: {
      edges: {
         node: Service;
      }[];
   };
}

export const ServicesList: React.FunctionComponent<ServicesListProps> = ({ services }) => {
   const createServices = (services: {
      edges: {
         node: Service;
      }[];
   }) => {
      return services.edges.map(({ node }, index) => (
         <SideImageSection
            title={node.frontmatter.title}
            bgColor={index % 2 === 0 ? BgColor.LIGHT_2 : BgColor.LIGHT_1}
            key={index}
            imageUrl={node.frontmatter.image}
            imageSide={index % 2 === 0 ? "START" : "END"}
            dynamic={true}
         >
            <div className="mx-4 md:mx-0">
               <div className="mb-8">
                  <HeadingText size={TextSize.XL_2}>{node.frontmatter.subtitle}</HeadingText>
               </div>
               <BodyText size={TextSize.XL}>{node.frontmatter.summary}</BodyText>
               {/* <div className="mt-8">
                  <Button size={ButtonSize.XL} color={ButtonColor.SECONDARY}>
                     <Link to={service.path}>{"LEARN MORE"}</Link>
                  </Button>
               </div> */}
            </div>
         </SideImageSection>
      ));
   };

   return <div className="">{createServices(services)}</div>;
};
