import { Link } from "gatsby";
import * as React from "react";
import {
   Section,
   Container,
   HeadingText,
   Button,
   Card,
   ButtonColor,
   ButtonSize,
   ImageStyle,
   TextSize,
} from "../../../components";

export interface Service {
   title: string;
   image: string;
   summary: string;
}

export interface ServicesBlockProps {
   services: Service[];
   headline: string;
}

export const ServicesBlock: React.FunctionComponent<ServicesBlockProps> = ({ headline, services }) => {
   const createServices = (services: Service[]) => {
      return services.map((service, index) => (
         <div key={index} className="max-w-sm mx-auto p-5 md:p-0 mb-10 md:mb-0 last:mb-0">
            <Card
               heading={service.title}
               image={{
                  alt: service.title,
                  src: service.image,
                  style: index % 2 == 0 ? ImageStyle.SHADOWED_START : ImageStyle.SHADOWED_END,
               }}
            >
               {service.summary}
            </Card>
         </div>
      ));
   };

   return (
      <Section>
         <Container>
            <div className="text-center mb-8 md:mb-16 xl:mb-24">
               <HeadingText size={TextSize.XL_6}>{headline}</HeadingText>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-10 md:gap-10">{createServices(services)}</div>
            <div className="text-center mt-8 md:mt-16">
               <Button color={ButtonColor.SECONDARY} size={ButtonSize.XL}>
                  <Link to="/services">{"Learn More"}</Link>
               </Button>
            </div>
         </Container>
      </Section>
   );
};
