import { graphql } from "gatsby";
import * as React from "react";
import { BgColor, Box, Container, DisplayText, HeadingText, PageHeader, Section, TextSize } from "../components";
import { Layout } from "../components/Layout/Layout";

const IndexPage = ({ data }) => {
   const { page, about } = data;

   return (
      <Layout
         title={page.frontmatter.meta_title}
         description={page.frontmatter.meta_description}
         keywords={page.frontmatter.meta_keywords}
      >
         <PageHeader
            headline={page.frontmatter.page_title}
            bgImage={page.frontmatter.image}
            subheadline={page.frontmatter.page_subtitle}
         />
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
                        images={[
                           "/assets/landing/heba-1.jpg",
                           "/assets/landing/heba-2.jpg",
                           "/assets/landing/heba-3.jpg",
                        ]}
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
                                 href={`mailto:${about.frontmatter.email}`}
                              >
                                 {about.frontmatter.email}
                              </a>
                           </div>
                           <div className="col-span-4 font-bold">Instagram:</div>
                           <div className="col-span-8">
                              <a
                                 className="text-secondary-800 hover:text-secondary-500 cursor-pointer"
                                 href={`https://www.instagram.com/hebah.fitness/`}
                              >
                                 {about.frontmatter.mobile}
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

export const query = graphql`
   query ContactQuery {
      page: markdownRemark(frontmatter: { type: { eq: "page" }, slug: { eq: "contact" } }) {
         frontmatter {
            meta_title
            page_title
            page_subtitle
            meta_keywords
            meta_description
            image {
               childImageSharp {
                  gatsbyImageData(width: 1920)
               }
            }
         }
      }
      about: markdownRemark(frontmatter: { type: { eq: "general" }, slug: { eq: "about" } }) {
         frontmatter {
            email
            mobile
         }
      }
   }
`;
