// eslint-disable-next-line @typescript-eslint/no-var-requires
const _ = require("lodash");

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
      "gatsby-transformer-yaml",
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-sitemap",
      "gatsby-plugin-postcss",
      "gatsby-plugin-image",

      {
         resolve: "gatsby-plugin-sharp",
         options: {
            defaults: {
               formats: ["auto", "webp"],
               placeholder: "dominantColor",
               quality: 65,
               breakpoints: [750, 1080, 1366, 1920],
               backgroundColor: "transparent",
               tracedSVGOptions: {},
               blurredOptions: {},
               jpgOptions: {},
               pngOptions: {},
               webpOptions: {},
               avifOptions: {},
            },
         },
      },
      "gatsby-transformer-sharp",
      {
         resolve: "gatsby-background-image-es5",
         options: {
            // add your own characters to escape, replacing the default ':/'
            specialChars: "/:",
         },
      },
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
      {
         resolve: "gatsby-source-filesystem",
         options: {
            name: "assets",
            path: `${__dirname}/static/assets`,
         },
      },
      {
         resolve: "gatsby-source-filesystem",
         options: {
            name: "content",
            path: `${__dirname}/content`,
         },
      },
      {
         resolve: "gatsby-transformer-remark",
         options: {
            plugins: [
               "gatsby-remark-relative-images",
               {
                  resolve: "gatsby-remark-images",
                  options: {
                     maxWidth: 800,
                     // withWebp: true,
                     wrapperStyle: (fluidResult) => `flex:${_.round(fluidResult.aspectRatio, 2)};`,
                  },
               },
               "gatsby-remark-copy-linked-files",
            ],
         },
      },
   ],
};
