import * as React from "react";

export const Container: React.FunctionComponent = ({ children }) => {
   return <div className="container px-8 md:px-0">{children}</div>;
};
