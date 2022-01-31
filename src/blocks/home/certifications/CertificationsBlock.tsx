import * as React from "react";
import { Container, HeadingText, Icon, IconsList, PaddingYSize, Section, TextSize } from "../../../components";

export interface Certification {
   badge: string;
   title: string;
}

export interface CertificationsBlockProps {
   heading?: string;
   data?: Certification[];
}

export const CertificationsBlock: React.FunctionComponent<CertificationsBlockProps> = ({ data, heading }) => {
   const items: Icon[] = data ? data.map((item) => ({ src: item.badge, title: item.title, alt: item.title })) : [];

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
