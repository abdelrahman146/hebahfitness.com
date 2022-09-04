// @ts-nocheck
import * as React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
// import BgImage from "gatsby-background-image";
import { BgImage } from "gbimage-bridge";

interface BackgroundImageProps {
   imageUrl: any;
   fade?: boolean;
   bgColor: string;
   dynamic?: boolean;
   imageSide: "START" | "END";
}

export function BackgroundImage({ imageUrl, fade, imageSide, dynamic }: BackgroundImageProps) {
   if (dynamic) {
      const image = getImage(imageUrl);
      let background = "";
      if (fade && imageSide == "START") background = `linear-gradient(90deg, transparent, white)`;
      if (fade && imageSide == "END") background = `linear-gradient(-90deg, transparent, white)`;

      return (
         <BgImage image={image} style={{ height: "100%" }}>
            <div
               style={{
                  background: background,
               }}
               className={`flex-1 h-full`}
            ></div>
         </BgImage>
      );
   } else {
      let background = `url(${imageUrl})`;
      if (fade && imageSide == "START") background = `linear-gradient(90deg, transparent, white), ${background}`;
      if (fade && imageSide == "END") background = `linear-gradient(-90deg, transparent, white), ${background}`;

      return (
         <div
            style={{
               backgroundImage: background,
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
            }}
            className={`flex-1 h-full`}
         ></div>
      );
   }
}
