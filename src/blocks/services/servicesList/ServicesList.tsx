import { Link } from "gatsby";
import * as React from "react";
import {
   BgColor,
   BodyText,
   Button,
   ButtonColor,
   ButtonSize,
   HeadingText,
   SideImageSection,
   TextSize,
} from "../../../components";

export interface Service {
   title: string;
   subtitle: string;
   summary: string;
   path: string;
   image: string;
}

export interface ServicesListProps {
   services: Service[];
}

export const ServicesList: React.FunctionComponent<ServicesListProps> = ({ services }) => {
   const createServices = (services: Service[]) => {
      return services.map((service, index) => (
         <SideImageSection
            title={service.title}
            bgColor={index % 2 === 0 ? BgColor.LIGHT_2 : BgColor.LIGHT_1}
            key={index}
            imageUrl={service.image}
            imageSide={index % 2 === 0 ? "START" : "END"}
         >
            <div className="">
               <div className="mb-8">
                  <HeadingText size={TextSize.XL_2}>{service.subtitle}</HeadingText>
               </div>
               <BodyText size={TextSize.XL}>{service.summary}</BodyText>
               <div className="mt-8">
                  <Button size={ButtonSize.XL} color={ButtonColor.SECONDARY}>
                     <Link to={service.path}>{"LEARN MORE"}</Link>
                  </Button>
               </div>
            </div>
         </SideImageSection>
      ));
   };

   return <div className="">{createServices(services)}</div>;
};
