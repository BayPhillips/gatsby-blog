const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programatically
// create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(
      `
      {
        pages: allContentfulPage {
          edges {
            node {
              id
              slug
            }
          }
        }
        blogPosts: allContentfulBlogPost(limit: 1000) {
          edges {
            node {
              postSlug
            }
          }
        }
      }
    `
    )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const contentfulPageTemplate = path.resolve(`./src/templates/contentfulPage.js`)
        _.each(result.data.pages.edges, edge => {
          createPage({
            path: `/${edge.node.slug}`,
            component: slash(contentfulPageTemplate),
            context: {
              slug: edge.node.slug
            }
          })
        })

        const blogPostTemplate = path.resolve(`./src/templates/blogPost.js`)
        _.each(result.data.blogPosts.edges, edge => {
          createPage({
            path: `/posts/${edge.node.postSlug}/`,
            component: slash(blogPostTemplate),
            context: {
              postSlug: edge.node.postSlug,
            },
          })
        })
      })
      .then(() => {
        resolve()
      })
  })
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /uikit/,
      loader: "null-loader",
    });
  }
};