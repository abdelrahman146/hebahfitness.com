import * as React from "react";

export interface GoToActionProps {
   bgImage?: string;
}

export const GoToAction: React.FunctionComponent<GoToActionProps> = ({ bgImage, children }) => {
   return (
      <section
         style={{ backgroundImage: `url(${bgImage || ""})` }}
         className="h-96 m-auto bg-fixed bg-center bg-cover bg-primary-600"
      >
         <div className="w-full h-full flex flex-col items-center bg-no-repeat justify-center backdrop-opacity-30 backdrop-invert bg-white/30">
            {children}
         </div>
      </section>
   );
};

{
   /* <h2 className="font-heading uppercase text-txtcolors-light-1 text-2xl">TIRED OF NOT FEELING YOUR BEST?</h2>
            <h2 className="mt-4 font-heading uppercase font-bold text-txtcolors-light-1 text-5xl">
               LET&apos;S TALK ABOUT YOUR HEALTH.
            </h2>
            <button
               type="button"
               className="mt-8 font-heading uppercase text-center leading-tight text-txtcolors-light-1 bg-primary-800 hover:bg-primary-500 py-5 px-10 "
            >
               Let&apos;s Chat
            </button> */
}
