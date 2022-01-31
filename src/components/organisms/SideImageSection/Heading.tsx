import * as React from "react";
import { HeadingText, TextSize } from "../..";

interface HeadingProps {
   title: string;
   imageSide: "START" | "END";
}

export const Heading: React.FunctionComponent<HeadingProps> = ({ title, imageSide }) => {
   let className = "mb-8";
   if (imageSide === "START") className = className + " lg:-translate-x-36";

   return (
      <div className={className}>
         <HeadingText size={TextSize.XL_6}>{title}</HeadingText>
      </div>
   );
};
