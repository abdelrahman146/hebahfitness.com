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
   const { post, categories, related } = data;
   const info = post.frontmatter;

   return (
      <Layout title={info.title}>
         <PageHeader headline={""} bgImage={"/images/header-1.jpg"} subheadline={"Fitness Health and Care for you"} />
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
                     <Img style={ImageStyle.PLAIN} src={info.image} />
                     <RenderedHTML dangerouslySetInnerHTML={{ __html: post.html }} />
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
         {related && related.edges.length > 0 && (
            <Section bgcolor={BgColor.LIGHT_2}>
               <Container>
                  <div className="flex flex-col gap-8">
                     <HeadingText size={TextSize.XL_4}>Related Posts</HeadingText>
                     <div className="flex flex-col lg:flex-row gap-5 items-center">
                        {related.edges.map(({ node }) => {
                           return (
                              <div key={node.slug} className="flex flex-col gap-5 text-center">
                                 <Img
                                    size={ImageSize.MEDIUM}
                                    style={ImageStyle.BORDERED}
                                    src={node.frontmatter.image}
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
   query PostQuery($slug: String!, $categories: [String]!) {
      post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
         html
         frontmatter {
            title
            categories
            created_at(formatString: "MM YYYY")
            tags
            summary
            image
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
                  image
               }
            }
         }
      }
   }
`;
