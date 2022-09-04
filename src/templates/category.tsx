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

export default function BlogCategory({ data, pageContext }) {
   const { categories, posts, page, about } = data;
   const { numPages, currentPage } = pageContext;

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
         <Section bgcolor={BgColor.LIGHT_1}>
            <Container>
               <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                  <div className="lg:col-span-3 flex flex-col gap-8 ">
                     <HeadingText size={TextSize.XL_4}>Posts</HeadingText>
                     {posts.edges.length > 0 ? (
                        <div className="flex flex-col gap-8">
                           {posts.edges.map(({ node }) => {
                              return (
                                 <div key={node.slug} className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center">
                                    <div className="col-span-1">
                                       <Img style={ImageStyle.BORDERED} src={node.frontmatter.image} dynamic />
                                    </div>
                                    <div className="col-span-1 md:col-span-3">
                                       <div className="flex flex-col gap-3">
                                          {/* @ts-ignore */}
                                          <Link
                                             className="font-header uppercase tracking-wider font-bold text-2xl"
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
                        <Img style={ImageStyle.BORDERED} src={about.frontmatter.profile} dynamic />
                        <div className="text-center">
                           <HeadingText size={TextSize.XL_2}>Hey, I&apos;m Heba</HeadingText>
                        </div>
                        <div className="px-4">
                           <BodyText size={TextSize.XL}>{about.frontmatter.summary}</BodyText>
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
         <GoToAction bgImage="/assets/action.jpg">
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
   query BlogCategory($skip: Int!, $limit: Int!, $category: String!) {
      page: markdownRemark(frontmatter: { type: { eq: "page" }, slug: { eq: "blog" } }) {
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
            name
            summary
            profile {
               childImageSharp {
                  gatsbyImageData(width: 500)
               }
            }
         }
      }
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
         filter: { frontmatter: { type: { eq: "post" }, categories: { in: [$category] } } }
         sort: { fields: frontmatter___created_at, order: DESC }
         limit: $limit
         skip: $skip
      ) {
         edges {
            node {
               frontmatter {
                  title
                  slug
                  image {
                     childImageSharp {
                        gatsbyImageData(width: 500)
                     }
                  }
                  summary
                  categories
               }
            }
         }
      }
   }
`;
