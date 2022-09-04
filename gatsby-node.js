/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const { fmImagesToRelative } = require("gatsby-remark-relative-images-v2");

exports.onCreateNode = ({ node }) => {
   fmImagesToRelative(node);
};

exports.createPages = async function ({ actions, graphql }) {
   const { data } = await graphql(`
      query {
         posts: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "post" } } }
            sort: { fields: frontmatter___created_at, order: DESC }
            limit: 5000
         ) {
            edges {
               node {
                  frontmatter {
                     slug
                     categories
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
      }
   `);
   const posts = data.posts.edges;
   const categories = data.categories.edges;

   /**
    * Create Post Pages
    */
   posts.forEach(({ node }) => {
      const slug = path.join("/blog/post/", node.frontmatter.slug);
      actions.createPage({
         path: slug,
         component: require.resolve(`./src/templates/post.tsx`),
         context: { slug: node.frontmatter.slug, categories: node.frontmatter.categories },
      });
   });

   const perPage = 6;

   /**
    * Blog pagination
    */
   const numPages = Math.ceil(posts.length / perPage);
   Array.from({ length: numPages }).forEach((_, i) => {
      actions.createPage({
         path: i === 0 ? `/blog` : `/blog/${i + 1}`,
         component: require.resolve("./src/templates/blog.tsx"),
         context: {
            limit: perPage,
            skip: i * perPage,
            numPages,
            currentPage: i + 1,
         },
      });
   });

   /**
    * Blog Category pagination
    */
   const categoriesPromises = categories.map(({ node }) => {
      const category = node.frontmatter.slug;

      return graphql(`
         query {
            posts: allMarkdownRemark(
               filter: { frontmatter: { type: { eq: "post" }, categories: { in: ["${category}"] } } }
               sort: { fields: frontmatter___created_at, order: DESC }
               limit: 5000
            ) {
               edges {
                  node {
                     frontmatter {
                        slug
                        categories
                     }
                  }
               }
            }
         }
      `);
   });

   const categoriesPosts = await Promise.all(categoriesPromises);
   categoriesPosts.forEach(({ data }, i) => {
      const posts = data.posts.edges;
      const numPages = Math.ceil(posts.length / perPage);
      const category = categories[i].node.frontmatter.slug;
      if (numPages === 0) {
         actions.createPage({
            path: `/blog/category/${category}`,
            component: require.resolve("./src/templates/category.tsx"),
            context: {
               category,
               limit: perPage,
               skip: 0,
               numPages,
               currentPage: 1,
            },
         });
      } else {
         Array.from({ length: numPages }).forEach((_, i) => {
            actions.createPage({
               path: i === 0 ? `/blog/category/${category}` : `/blog/cateogry/${category}/${i + 1}`,
               component: require.resolve("./src/templates/category.tsx"),
               context: {
                  category,
                  limit: perPage,
                  skip: i * perPage,
                  numPages,
                  currentPage: i + 1,
               },
            });
         });
      }
   });
};
