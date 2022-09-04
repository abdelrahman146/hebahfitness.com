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
   RenderedHTML,
   Section,
   TextColor,
   TextSize,
} from "../components";

export default function BlogPost({ data }) {
   const { post, categories, related, page, about } = data;
   const info = post.frontmatter;

   return (
      <Layout
         title={post.frontmatter.title}
         description={post.frontmatter.summary || page.frontmatter.description}
         keywords={post.frontmatter.tags || page.frontmatter.keywords}
      >
         <PageHeader
            headline={page.frontmatter.page_title}
            bgImage={page.frontmatter.image}
            subheadline={page.frontmatter.page_subtitle}
         />
         <Section bgcolor={BgColor.LIGHT_1}>
            <Container>
               <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                  <div className="lg:col-span-3 flex flex-col gap-8">
                     <HeadingText size={TextSize.XL_5} color={TextColor.DARK_1}>
                        {info.title}
                     </HeadingText>
                     <BodyText size={TextSize.XL_2} color={TextColor.SECONDARY_600}>
                        {info.summary}
                     </BodyText>
                     <HeadingText size={TextSize.XL_2}>{info.categories.join(", ")}</HeadingText>
                     <Img style={ImageStyle.PLAIN} src={info.image} dynamic />
                     <RenderedHTML dangerouslySetInnerHTML={{ __html: post.html }} />
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
                           {categories.edges.map((category, i) => (
                              //@ts-ignore
                              <Link
                                 className="font-body text-2xl"
                                 key={category.node.frontmatter.slug + i}
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
         {related && related.edges.length > 0 && (
            <Section bgcolor={BgColor.LIGHT_2}>
               <Container>
                  <div className="flex flex-col gap-8">
                     <HeadingText size={TextSize.XL_4}>Related Posts</HeadingText>
                     <div className="flex flex-col lg:flex-row gap-5 items-center">
                        {related.edges.map(({ node }, i) => {
                           return (
                              <div key={node.slug + i} className="flex flex-col gap-5 text-center">
                                 <Img
                                    size={ImageSize.MEDIUM}
                                    style={ImageStyle.BORDERED}
                                    src={node.frontmatter.image}
                                    dynamic
                                 />
                                 {/* @ts-ignore */}
                                 <Link
                                    className="font-body text-2xl"
                                    key={node.frontmatter.slug}
                                    to={"/blog/post/" + node.frontmatter.slug}
                                 >
                                    {node.frontmatter.title}
                                 </Link>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </Container>
            </Section>
         )}
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
   query PostQuery($slug: String!, $categories: [String]!) {
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
      post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
         html
         frontmatter {
            title
            categories
            created_at(formatString: "MM YYYY")
            tags
            summary
            image {
               childImageSharp {
                  gatsbyImageData(width: 960)
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
      related: allMarkdownRemark(
         filter: { frontmatter: { type: { eq: "post" }, slug: { ne: $slug }, categories: { in: $categories } } }
         sort: { fields: frontmatter___created_at, order: DESC }
         limit: 3
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
               }
            }
         }
      }
   }
`;
