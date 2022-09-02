import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout/Layout";
import {
   BgColor,
   BodyText,
   Button,
   ButtonColor,
   ButtonSize,
   Container,
   GoToAction,
   HeadingText,
   ImageSize,
   ImageStyle,
   Img,
   PageHeader,
   Section,
   TextColor,
   TextSize,
} from "../components";

export default function BlogPost({ data, pageContext }) {
   const { categories, posts } = data;
   const { numPages, currentPage } = pageContext;

   return (
      <Layout title={"The Self-car blog"}>
         <PageHeader
            headline={"The Self-car blog"}
            bgImage={"/images/header-1.jpg"}
            subheadline={"HEALTH, WELLNESS, & SELF-CARE FOR ENTREPRENEURS"}
         />
         <Section bgcolor={BgColor.LIGHT_1}>
            <Container>
               <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                  <div className="lg:col-span-3 flex flex-col gap-8 ">
                     <HeadingText size={TextSize.XL_4}>Posts</HeadingText>
                     {posts.edges.length > 0 ? (
                        <div className="flex flex-col gap-10">
                           {posts.edges.map(({ node }) => {
                              return (
                                 <div key={node.slug} className="flex flex-col lg:flex-row gap-5 items-center">
                                    <Img
                                       size={ImageSize.MEDIUM}
                                       style={ImageStyle.BORDERED}
                                       src={node.frontmatter.image}
                                    />
                                    <div className="flex flex-col gap-3">
                                       {/* @ts-ignore */}
                                       <Link
                                          className="font-header uppercase tracking-wider font-bold text-2xl"
                                          key={node.frontmatter.slug}
                                          to={"/blog/post/" + node.frontmatter.slug}
                                       >
                                          {node.frontmatter.title}
                                       </Link>
                                       <BodyText size={TextSize.XL}>{node.frontmatter.summary}</BodyText>
                                       <div className="">
                                          <Link
                                             className="font-header uppercase tracking-wider font-bold text-2xl"
                                             to={"/blog/post/" + node.frontmatter.slug}
                                          >
                                             <Button color={ButtonColor.ACCENT} size={ButtonSize.LARGE}>
                                                Read More
                                             </Button>
                                          </Link>
                                       </div>
                                    </div>
                                 </div>
                              );
                           })}
                        </div>
                     ) : (
                        <BodyText size={TextSize.XL} color={TextColor.PRIMARY_500}>
                           Coming soon...
                        </BodyText>
                     )}
                     <div className="ms-auto">
                        <div className="flex items-center gap-5">
                           {currentPage > 1 && (
                              <Link to={`/blog/${currentPage === 2 ? "" : currentPage - 1}`}>
                                 <Button color={ButtonColor.SECONDARY} size={ButtonSize.SMALL}>
                                    Previous
                                 </Button>
                              </Link>
                           )}
                           {numPages > currentPage && (
                              <Link to={`/blog/${currentPage + 1}`}>
                                 <Button color={ButtonColor.SECONDARY} size={ButtonSize.SMALL}>
                                    Next
                                 </Button>
                              </Link>
                           )}
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col gap-8">
                     <div className="flex flex-col gap-5 ">
                        <Img style={ImageStyle.BORDERED} src={"/images/heba-profile.jpg"} />
                        <div className="text-center">
                           <HeadingText size={TextSize.XL_2}>Hey, I&apos;m Heba</HeadingText>
                        </div>
                        <div className="px-4">
                           <BodyText size={TextSize.XL}>
                              I am a Nutrition Coach certified in Biochemistry, Nutrition, and Body Building. I am
                              passionate about helping people in reaching their health & physique goals through well
                              programmed training & nutritional plans specifically tailored to their goals.
                           </BodyText>
                        </div>
                        <div className="text-center">
                           <Button color={ButtonColor.ACCENT} size={ButtonSize.LARGE}>
                              Learn More
                           </Button>
                        </div>
                     </div>
                     <div className="bg-bgcolors-light-4 p-5 text-center">
                        <HeadingText size={TextSize.XL} color={TextColor.DARK_1}>
                           SEARCH BY CATEGORY
                        </HeadingText>
                        <div className="flex flex-col gap-5 justify-center mt-5">
                           {categories.edges.map((category) => (
                              //@ts-ignore
                              <Link
                                 className="font-body text-2xl"
                                 key={category.node.frontmatter.slug}
                                 to={"/blog/category/" + category.node.frontmatter.slug}
                              >
                                 {category.node.frontmatter.name}
                              </Link>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </Container>
         </Section>
         <GoToAction bgImage="/images/action.jpg">
            <div className="p-4 text-center">
               <HeadingText color={TextColor.LIGHT_1} size={TextSize.XL_2}>
                  TIRED OF NOT FEELING YOUR BEST?
               </HeadingText>
               <HeadingText color={TextColor.LIGHT_1} size={TextSize.XL_5}>
                  LET&apos;S TALK ABOUT YOUR HEALTH.
               </HeadingText>
               <div className="mt-8">
                  <Link to="/contact">
                     <Button color={ButtonColor.PRIMARY} size={ButtonSize.LARGE}>
                        Let&apos;s Chat
                     </Button>
                  </Link>
               </div>
            </div>
         </GoToAction>
      </Layout>
   );
}

export const query = graphql`
   query BlogQuery($skip: Int!, $limit: Int!) {
      categories: allMarkdownRemark(filter: { frontmatter: { type: { eq: "category" } } }) {
         edges {
            node {
               frontmatter {
                  slug
                  name
               }
            }
         }
      }
      posts: allMarkdownRemark(
         filter: { frontmatter: { type: { eq: "post" } } }
         sort: { fields: frontmatter___created_at, order: DESC }
         limit: $limit
         skip: $skip
      ) {
         edges {
            node {
               frontmatter {
                  title
                  slug
                  image
                  summary
                  categories
               }
            }
         }
         totalCount
      }
   }
`;
