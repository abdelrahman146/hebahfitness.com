import * as React from "react";
import { Img } from "../..";
import { BgColor, ImageSize, ImageStyle } from "../../foundation";
import { BackgroundImage } from "./BackgroundImage";
import { Heading } from "./Heading";

export interface SideImageSectionProps {
   title?: string;
   imageUrl: string;
   bgColor?: BgColor;
   fade?: boolean;
   imageSide: "START" | "END";
   dynamic?: boolean;
   children?: React.ReactElement;
}

export const SideImageSection: React.FunctionComponent<SideImageSectionProps> = ({
   imageUrl,
   title,
   children,
   bgColor,
   fade,
   imageSide,
   dynamic,
}) => {
   const backgroundColor = bgColor ? bgColor : "bg-[#FFF]";

   return (
      <>
         <div className="md:hidden">
            <Img size={ImageSize.FULL} src={imageUrl} style={ImageStyle.PLAIN} />
            <div className={` bg-[#FFFFFF95] w-full`}>
               <div className="flex flex-row justify-items-stretch w-full min-h-[30rem]">
                  {imageSide === "START" && (
                     <div className="hidden md:visible">
                        <BackgroundImage
                           imageSide={imageSide}
                           imageUrl={imageUrl}
                           fade={fade}
                           bgColor={backgroundColor}
                           dynamic={dynamic}
                        />
                     </div>
                  )}
                  <div className={`md:flex-1 py-8 mx-auto ${bgColor}`}>
                     <div className="flex flex-row justify-items-stretch h-full">
                        {imageSide === "END" && <div className="flex-1 hidden md:block"></div>}
                        <div className="w-full lg:w-2/3 min-h-full flex flex-col">
                           {title && <Heading title={title} imageSide={imageSide} />}
                           <div className="flex-1">{children}</div>
                        </div>
                        {imageSide === "START" && <div className="flex-1 hidden md:block"></div>}
                     </div>
                  </div>
                  {imageSide === "END" && (
                     <BackgroundImage
                        imageSide={imageSide}
                        imageUrl={imageUrl}
                        fade={fade}
                        bgColor={backgroundColor}
                        dynamic={dynamic}
                     />
                  )}
               </div>
            </div>
         </div>
         <div className={`${backgroundColor} hidden md:flex flex-col justify-center items-center w-full`}>
            <div className="flex flex-row justify-items-stretch w-full min-h-[30rem]">
               {imageSide === "START" && (
                  <div className="flex-1 hidden md:block">
                     <BackgroundImage
                        imageSide={imageSide}
                        imageUrl={imageUrl}
                        fade={fade}
                        bgColor={backgroundColor}
                        dynamic={dynamic}
                     />
                  </div>
               )}
               <div className={`md:flex-1 py-16 px-16 ${bgColor}`}>
                  <div className="flex flex-row justify-items-stretch h-full">
                     {imageSide === "END" && <div className="flex-1 hidden md:block"></div>}
                     <div className="w-full lg:w-2/3 min-h-full flex flex-col">
                        {title && <Heading title={title} imageSide={imageSide} />}
                        <div className="flex-1">{children}</div>
                     </div>
                     {imageSide === "START" && <div className="flex-1 hidden md:block"></div>}
                  </div>
               </div>
               {imageSide === "END" && (
                  <div className="flex-1 hidden md:block">
                     <BackgroundImage
                        imageSide={imageSide}
                        imageUrl={imageUrl}
                        fade={fade}
                        bgColor={backgroundColor}
                        dynamic={dynamic}
                     />
                  </div>
               )}
            </div>
         </div>
      </>
   );
};
