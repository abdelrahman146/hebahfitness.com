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
import { Service } from "../blocks/home/services/ServicesBlock";
import { index_data } from "../content";
import { Testimonial } from "../blocks/home/testimonials/TestimonialsBlock";
import type { Certification } from "../blocks/home/certifications/CertificationsBlock";
import { BlogCategory } from "../blocks/home/blog/BlogBlock";
import { Layout } from "../components/Layout/layout";
import { Link } from "gatsby";

export interface IndexData {
   heroImage: string;
   heroImageMobile: string;
   headline: string;
   certifications: Certification[];
   introImages: [string, string, string];
   jobTitle: string;
   otherTitles: string[];
   introSummary: string;
   services: Service[];
   testimonials: Testimonial[];
   blogCategories: BlogCategory[];
}

interface IndexPageProps {
   data: IndexData;
}

const IndexPage: React.FunctionComponent<IndexPageProps> = () => {
   const data = index_data;

   return (
      <Layout title="Home">
         <HeroBlock heroImage={data.heroImage} heroImageMobile={data.heroImageMobile} headline={data.headline} />
         <CertificationsBlock heading="Certifications" data={data.certifications} />
         <IntroBlock
            images={data.introImages}
            jobTitle={data.jobTitle}
            otherTitles={data.otherTitles}
            summary={<RenderHtml content={data.introSummary} />}
         />
         <ServicesBlock headline="How I Work With Clients" services={data.services} />
         <TestimonialsBlock
            bgImage="images/food/food-1.jpg"
            testimonials={data.testimonials}
            title={"Client Success Stories"}
         />
         {/* <BlogBlock categories={data.blogCategories} /> */}
         <GoToAction bgImage="images/action.jpg">
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
};

export default IndexPage;
