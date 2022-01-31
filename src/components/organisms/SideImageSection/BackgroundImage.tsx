import * as React from "react";

interface BackgroundImageProps {
   imageUrl: string;
   fade?: boolean;
   bgColor: string;
   imageSide: "START" | "END";
}

export function BackgroundImage({ imageUrl, fade, imageSide }: BackgroundImageProps) {
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
