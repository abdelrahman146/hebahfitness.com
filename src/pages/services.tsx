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
   p1: "Commodo enim fugiat enim voluptate ex consequat sint nulla nulla nulla. Exercitation cupidatat ipsum mollit pariatur duis. Ullamco ex aute in fugiat ad consequat cupidatat veniam aliquip. Amet excepteur fugiat mollit nulla incididunt tempor veniam. Proident dolore incididunt ad est quis fugiat commodo sit sit nostrud. Id reprehenderit officia officia aute duis eu culpa culpa magna ex incididunt ex irure.",
   p2: "Proident sint voluptate voluptate commodo excepteur laborum. Esse consectetur nulla reprehenderit officia cillum enim dolore voluptate excepteur. Lorem dolor irure incididunt est in enim in nulla laboris aliquip excepteur cillum nisi reprehenderit.",
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
