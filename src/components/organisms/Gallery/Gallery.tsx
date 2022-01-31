import * as React from "react";
import { Img, ImageSize, Button, ButtonSize, ButtonColor, ImageStyle } from "../..";

export interface Media {
   src: string;
   alt?: string;
   title?: string;
}

export interface GalleryProps {
   items: Media[];
}

export const Gallery: React.FunctionComponent<GalleryProps> = ({ items }) => {
   const createGallery = (items: Media[]) => {
      return items.map((item, index) => (
         <div key={index} className="my-4 md:my-0 mx-auto md:mx-4">
            <Img size={ImageSize.LARGE} style={ImageStyle.BORDERED} src={item.src || ""} alt={item.alt || ""} />
            {item.title && (
               <div className="mt-6 text-center">
                  <Button size={ButtonSize.LARGE} color={ButtonColor.ACCENT}>
                     {item.title}
                  </Button>
               </div>
            )}
         </div>
      ));
   };

   return <div className="flex flex-col md:flex-row justify-center">{createGallery(items)}</div>;
};
