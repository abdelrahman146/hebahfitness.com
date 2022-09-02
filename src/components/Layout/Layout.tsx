import * as React from "react";
import { Header } from "./Header";
import { Helmet } from "react-helmet";

export type MenuItem = {
   path: string;
   name: string;
   text: string;
};

const menu: MenuItem[] = [
   {
      path: "/",
      text: "Home",
      name: "home",
   },
   {
      path: "/services",
      text: "Change Your Life",
      name: "services",
   },
   {
      path: "/blog",
      text: "Blog",
      name: "services",
   },
   {
      path: "/contact",
      text: "Contact",
      name: "contact",
   },
];

export const Layout: React.FunctionComponent<{ title: string }> = ({ title, children }) => {
   return (
      <div>
         <Helmet>
            <meta charSet="utf-8" />
            <title>{title} - Hebah Fitness</title>
            <meta
               name="description"
               content={
                  "Reach your health & physique goals through well programmed training & nutritional plans specifically tailored to your goals."
               }
            />
            <meta
               name="keywords"
               content="fitness, personal trainer, health coach, coaching, dubai, UAE, diet plan, workout, healthy, best coach in dubai, best personal trainer, female personal trainer"
            />
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
         <Header menu={menu} />
         {children}
      </div>
   );
};
