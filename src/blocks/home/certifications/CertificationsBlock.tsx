import * as React from "react";
import { Container, HeadingText, Icon, IconsList, PaddingYSize, Section, TextSize } from "../../../components";

export interface Certification {
   frontmatter: {
      badge: string;
      title: string;
   };
}

export interface CertificationsBlockProps {
   heading?: string;
   data?: {
      edges: {
         node: Certification;
      }[];
   };
}

export const CertificationsBlock: React.FunctionComponent<CertificationsBlockProps> = ({ data, heading }) => {
   const items: Icon[] = data
      ? data.edges.map(({ node }) => ({
           src: node.frontmatter.badge,
           title: node.frontmatter.title,
           alt: node.frontmatter.title,
        }))
      : [];

   return (
      <Section paddingY={PaddingYSize.LARGE}>
         <Container>
            <div className="text-center">
               <HeadingText size={TextSize.XL_4}>{heading}</HeadingText>
            </div>
            <IconsList items={items} />
         </Container>
      </Section>
   );
};
