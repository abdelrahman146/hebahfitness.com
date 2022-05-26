import * as React from "react";
import { BgColor, Box, Container, DisplayText, HeadingText, PageHeader, Section, TextSize } from "../components";
import { Layout } from "../components/Layout/Layout";

const IndexPage: React.FunctionComponent = () => {
   return (
      <Layout title="Contact">
         <PageHeader headline={"Let's Talk About Your Health"} bgImage={"images/landing/heba-2.jpg"} subheadline={""} />
         <Section bgcolor={BgColor.LIGHT_2}>
            <Container>
               <div className="flex flex-row flex-wrap max-w-7xl mx-auto items-center">
                  <div className="text-center z-20 hidden lg:block">
                     <div className="-rotate-6">
                        <DisplayText size={TextSize.XL_8}>{"Get In Touch"}</DisplayText>
                     </div>
                     <div className="mt-8">
                        <HeadingText size={TextSize.XL_7}>
                           <strong>{"Contact Details"}</strong>
                        </HeadingText>
                     </div>
                  </div>
                  <div className="flex-1 lg:-translate-x-10">
                     <Box
                        images={["images/landing/heba-1.jpg", "images/landing/heba-2.jpg", "images/landing/heba-3.jpg"]}
                     >
                        <div className="lg:hidden mb-8">
                           <HeadingText size={TextSize.XL_7}>
                              <strong>{"Contact Details"}</strong>
                           </HeadingText>
                        </div>

                        <div className="grid grid-cols-12 gap-2 items-center">
                           <div className="col-span-4 font-bold">Email:</div>
                           <div className="col-span-8">
                              <a
                                 className="text-secondary-800 hover:text-secondary-500 cursor-pointer"
                                 href="mailto:hebahrahall@gmail.com"
                              >
                                 hebahrahall@gmail.com
                              </a>
                           </div>
                           <div className="col-span-4 font-bold">Mobile:</div>
                           <div className="col-span-8">
                              <a
                                 className="text-secondary-800 hover:text-secondary-500 cursor-pointer"
                                 href="https://api.whatsapp.com/send?phone=971585199526&text=Hey%20Heba!"
                              >
                                 +971505199526
                              </a>
                           </div>
                        </div>
                     </Box>
                  </div>
               </div>
            </Container>
         </Section>
      </Layout>
   );
};

export default IndexPage;
