module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `sk06mmp11skx`,
        accessToken: `da033a3c2032686274f051bb4ea8c31ed3c6250c5b6479902907fd003fbed9b0`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-source-plated`
  ],
}
