import * as React from "react";
import { CertificationsBlock, HeroBlock, IntroBlock, ServicesBlock, TestimonialsBlock } from "../blocks/home";
import {
   Button,
   ButtonColor,
   ButtonSize,
   GoToAction,
   HeadingText,
   RenderHtml,
   TextColor,
   TextSize,
} from "../components";
import { Layout } from "../components/Layout/Layout";
import { graphql, Link } from "gatsby";

const IndexPage = ({ data }) => {
   const { page, certifications, about, services, testimonials } = data;

   return (
      <Layout
         title={page.frontmatter.meta_title}
         description={page.frontmatter.meta_description}
         keywords={page.frontmatter.keywords}
      >
         <HeroBlock heroImage={page.frontmatter.image} headline={page.frontmatter.page_title} />
         <CertificationsBlock heading="Certifications" data={certifications} />
         <IntroBlock
            images={["/assets/landing/heba-1.jpg", "/assets/landing/heba-2.jpg", "/assets/landing/heba-3.jpg"]}
            jobTitle={about.frontmatter.title}
            otherTitles={about.frontmatter.skills}
            summary={<RenderHtml content={about.html} />}
         />
         <ServicesBlock headline="How I Work With Clients" services={services} />
         <TestimonialsBlock
            bgImage="/assets/food/food-1.jpg"
            testimonials={testimonials}
            title={"Client Success Stories"}
         />
         {/* <BlogBlock categories={data.blogCategories} /> */}
         <GoToAction bgImage="/assets/action.jpg">
            <div className="p-4 text-center">
               <HeadingText color={TextColor.LIGHT_1} size={TextSize.XL_2}>
                  TIRED OF NOT FEELING YOUR BEST?
               </HeadingText>
               <HeadingText color={TextColor.LIGHT_1} size={TextSize.XL_5}>
                  LET&apos;S TALK ABOUT YOUR HEALTH.
               </HeadingText>
               <div className="mt-8">
                  {/* @ts-ignore */}
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
};

export default IndexPage;

export const query = graphql`
   query IndexQuery {
      page: markdownRemark(frontmatter: { type: { eq: "page" }, slug: { eq: "home" } }) {
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
      certifications: allMarkdownRemark(
         filter: { frontmatter: { type: { eq: "certification" } } }
         sort: { fields: frontmatter___date, order: DESC }
      ) {
         edges {
            node {
               frontmatter {
                  badge {
                     childImageSharp {
                        gatsbyImageData(width: 500)
                     }
                  }
                  title
               }
            }
         }
      }
      about: markdownRemark(frontmatter: { type: { eq: "general" }, slug: { eq: "about" } }) {
         frontmatter {
            name
            title
            skills
         }
         html
      }
      services: allMarkdownRemark(filter: { frontmatter: { type: { eq: "service" } } }) {
         edges {
            node {
               frontmatter {
                  image {
                     childImageSharp {
                        gatsbyImageData(width: 500)
                     }
                  }
                  title
                  subtitle
                  summary
               }
            }
         }
      }
      testimonials: allMarkdownRemark(filter: { frontmatter: { type: { eq: "testimonial" } } }) {
         edges {
            node {
               frontmatter {
                  date(formatString: "LL")
                  from
                  body
               }
            }
         }
      }
   }
`;
