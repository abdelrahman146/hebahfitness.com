import * as React from "react";
import { Img } from "../../atoms";
import { ImageSize, ImageStyle } from "../../foundation";

export interface ImagesTapeProps {
   images: [string, string, string];
}

export const ImagesTape: React.FunctionComponent<ImagesTapeProps> = ({ images }) => {
   const createTape = (images) => {
      return images.map((image, index) => (
         <li key={index} className="my-2">
            <Img style={ImageStyle.PLAIN} size={ImageSize.MEDIUM} src={image} />
         </li>
      ));
   };

   return (
      <>
         <ul className="list-none text-center">{createTape(images)}</ul>
      </>
   );
};
