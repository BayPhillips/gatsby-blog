require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = `https://blog.bayphillips.com`

module.exports = {
  siteMetadata: {
    description: `Personal blog for Bay Phillips, a Software Engineering Manager based out of NYC working with other really smart people.`,
    keywords: `ios,swift,react,fullstack,rails,engineer,engineering manager,nyc,new york city,cooking,Plated`,
    siteUrl: siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteUrl,
      },
    },
  ],
}
