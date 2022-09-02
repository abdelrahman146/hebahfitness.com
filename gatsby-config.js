module.exports = {
   siteMetadata: {
      title: `hebahfitness.com`,
      author: `Abdel Rahman Hussein`,
      titleTemplate: "%s · Fitness and Nutrition Coach",
      description: "",
      url: "https://www.hebahfitness.com", // No trailing slash allowed!
      siteUrl: "https://www.hebahfitness.com", // No trailing slash allowed!
   },
   plugins: [
      "gatsby-plugin-netlify-cms",
      "gatsby-plugin-image",
      // {
      //   resolve: 'gatsby-plugin-google-analytics',
      //   options: {
      //     trackingId: '',
      //   },
      // },
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-sitemap",
      "gatsby-plugin-postcss",
      // {
      //   resolve: 'gatsby-plugin-manifest',
      //   options: {
      //     icon: 'src/static/images/icon.png',
      //   },
      // },
      {
         resolve: `gatsby-plugin-emotion`,
         options: {
            // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
            // The values for each key in this example are the defaults the plugin uses.
            sourceMap: true,
            autoLabel: "dev-only",
            labelFormat: `[local]`,
            cssPropOptimization: true,
         },
      },
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      `gatsby-transformer-yaml`,
      {
         resolve: "gatsby-source-filesystem",
         options: {
            name: "images",
            path: "./static/images/",
         },
         __key: "images",
      },
      {
         resolve: "gatsby-source-filesystem",
         options: {
            name: "posts",
            path: "./content/posts",
         },
         __key: "posts",
      },
      {
         resolve: "gatsby-source-filesystem",
         options: {
            name: "categories",
            path: "./content/categories",
         },
         __key: "categories",
      },
      {
         resolve: `gatsby-transformer-remark`,
      },
   ],
};
