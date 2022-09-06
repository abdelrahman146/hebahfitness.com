import { graphql, Link } from "gatsby";
import * as React from "react";
import { IntroBlock, ServicesList } from "../blocks/services";
import {
   Button,
   ButtonColor,
   ButtonSize,
   GoToAction,
   HeadingText,
   PageHeader,
   TextColor,
   TextSize,
} from "../components";
import { Layout } from "../components/Layout/Layout";

const introBlock = {
   headline: "Feeling hopeless because you've tried everything?",
   subheadline: "let's make sure it never happens to you!",
   p1: "You have probably tried different diets before to lose weight and mostly they all cause weight loss. However, you were not able to maintain the weight loss! The reason being is the approach you implemented was not optimal for you. Therefore, you could not maintain it as a lifestyle! People tend to know how to lose weight but cannot maintain it!",
   p2: "Choosing me to be your coach not only will help you to lose weight but also guide you to how to maintain the weight loss based on foods you enjoy and incorporating more nutritional lower calories food choices! It’s time to make the change forever!",
};

export interface ServicesData {
   header: {
      headerImage: string;
      headline: string;
      subheadline: string;
   };
   introBlock: {
      headline: string;
      subheadline: string;
      p1: string;
      p2: string;
   };
   services: {
      title: string;
      subtitle: string;
      summary: string;
      path: string;
      image: string;
   }[];
}

export interface ServicesPageProps {
   data: ServicesData;
}

const ServicesPage = ({ data }) => {
   const { page, services } = data;

   return (
      <Layout
         title={page.frontmatter.meta_title}
         description={page.frontmatter.meta_description}
         keywords={page.frontmatter.meta_keywords}
      >
         <div className="">
            <PageHeader
               headline={page.frontmatter.page_title}
               bgImage={page.frontmatter.image}
               subheadline={page.frontmatter.page_subtitle}
            />
            <IntroBlock
               headline={introBlock.headline}
               subheadline={introBlock.subheadline}
               p1={introBlock.p1}
               p2={introBlock.p2}
            />
            <ServicesList services={services} />
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
         </div>
      </Layout>
   );
};
export default ServicesPage;

export const query = graphql`
   query ServicesQuery {
      page: markdownRemark(frontmatter: { type: { eq: "page" }, slug: { eq: "services" } }) {
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
   }
`;
