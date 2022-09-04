import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import { ImageSize, ImageStyle } from "../../foundation";

export interface ImageProps {
   src: any;
   alt?: string;
   size?: ImageSize;
   style?: ImageStyle;
   dynamic?: boolean;
}

export const Img: React.FunctionComponent<ImageProps> = ({ children, size, style, src, alt, dynamic }) => {
   let className = "";
   if (size) className = className + " " + size;
   if (style) className = className + " " + style;

   if (dynamic) {
      const img = getImage(src);

      return img ? <GatsbyImage image={img} alt={alt || ""} className={className} /> : <></>;
   }

   return (
      <>
         <img src={src || ""} alt={alt || ""} className={className}>
            {children}
         </img>
      </>
   );
};
