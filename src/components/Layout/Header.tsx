import { Link } from "gatsby";
import * as React from "react";
import { useState } from "react";
import { ButtonColor, ButtonSize, Menu, PaddingYSize } from "..";
import { Button, Section } from "../atoms";
import { MenuStyle } from "../foundation";
import { MenuItem } from "./layout";

export interface HeaderProps {
   menu: MenuItem[];
}

export const Header: React.FunctionComponent<HeaderProps> = ({ menu }) => {
   const [showMobileMenu, setShowMobileMenu] = useState(false);

   const createMenuItems = (menu: MenuItem[]) =>
      menu.map((item) => (
         <Link key={item.text} to={item.path}>
            {item.text}
         </Link>
      ));

   return (
      <div>
         <Section paddingY={PaddingYSize.XL}>
            <div className="flex flex-col gap-2 justify-stretch">
               <div className="bg-bgcolors-light-3 p-3 items-center flex gap-8">
                  <div className="font-display flex font-bold text-4xl absolute">
                     <h1>Hebah</h1>
                     <h1>Fitness</h1>
                  </div>
                  <div className="hidden lg:block ps-72">
                     <Menu style={MenuStyle.ROW} items={createMenuItems(menu)} />
                  </div>
                  <div className="block lg:hidden ps-72">
                     <Button
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        color={ButtonColor.SECONDARY}
                        size={ButtonSize.SMALL}
                     >
                        Menu
                     </Button>
                  </div>
               </div>
               {showMobileMenu && (
                  <div className="bg-bgcolors-light-3 p-3 w-full">
                     <Menu style={MenuStyle.COL} items={createMenuItems(menu)} />
                  </div>
               )}
            </div>
         </Section>
      </div>
   );
};
