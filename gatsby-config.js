require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const parameters = {
  siteUrl: process.env.SITE_URL,
  s3Bucket: process.env.S3_BUCKET,
  contentful: {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: process.env.CONTENTFUL_HOST
  },
  gTag: {
    trackingIds: [
      process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    ],
    gtagConfig: {
      anonymize_ip: true,
      cookie_expires: 0,
    },
    pluginConfig: {
      head: false,
      respectDNT: true,
    }
  }
}

module.exports = {
  siteMetadata: {
    description: `Personal blog for Bay Phillips, a Software Engineering leader based out of Denver working with other really smart people.`,
    keywords: `ios,swift,react,fullstack,rails,engineer,engineering manager,nyc,new york city,cooking,Plated,seed,seedhealth`,
    siteUrl: parameters.siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: parameters.contentful,
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: parameters.gTag
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
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 960,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: parameters.siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Bay Phillips",
        short_name: "Bay Phillips",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#FFFFFF",
        display: "minimal-ui",
        icon: "src/images/ninaicon.png",
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-force-trailing-slashes`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: parameters.s3Bucket
      }
    }
  ],
}
