import * as React from "react";
import { BodyText, HeadingText, Img } from "../../atoms";
import { ImageSize, ImageStyle, TextColor, TextSize } from "../../foundation";

export interface CardProps {
   image?: {
      style: ImageStyle;
      src: string;
      alt: string;
   };
   heading?: string;
}

export const Card: React.FunctionComponent<CardProps> = ({ image, heading, children }) => {
   return (
      <>
         {image && (
            <div className="flex justify-center">
               <Img
                  style={image.style || ImageStyle.BORDERED}
                  size={ImageSize.XLARGE}
                  src={image.src || ""}
                  alt={image.alt || ""}
               />
            </div>
         )}
         {heading && (
            <div className="my-8">
               <HeadingText size={TextSize.XL_2} color={TextColor.PRIMARY_500}>
                  {heading}
               </HeadingText>
            </div>
         )}
         <BodyText size={TextSize.LARGE}>{children}</BodyText>
      </>
   );
};
