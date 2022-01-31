import * as React from "react";
import { ImageSize, ImageStyle } from "../../foundation";

export interface ImageProps {
   src: string;
   alt?: string;
   size: ImageSize;
   style: ImageStyle;
}

export const Img: React.FunctionComponent<ImageProps> = ({ children, size, style, src, alt }) => {
   let className = "";
   if (size) className = className + " " + size;
   if (style) className = className + " " + style;

   return (
      <img src={src || ""} alt={alt || ""} className={className}>
         {children}
      </img>
   );
};
