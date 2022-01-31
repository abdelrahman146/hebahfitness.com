import * as React from "react";

export interface RenderHtmlProps {
   content: string;
}

export const RenderHtml: React.FunctionComponent<RenderHtmlProps> = ({ content }) => {
   return <div className="content font-body" dangerouslySetInnerHTML={{ __html: content }} />;
};
