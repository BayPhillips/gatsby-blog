const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const createPaginatedPages = require("gatsby-paginate");

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programatically
// create pages.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
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
        blogPosts: allContentfulBlogPost(limit: 1000, sort: { fields: [datePosted], order: DESC}) {
          edges {
            node {
              id
              postTitle
              datePosted
              contentPreview {
                childMarkdownRemark {
                  html
                }
              }
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

        createPaginatedPages({
          edges: result.data.blogPosts.edges,
          createPage: createPage,
          pageTemplate: `src/templates/blogPostListing.js`,
          pageLength: 10,
          pathPrefix: `blog`
        })

        const blogPostTemplate = path.resolve(`./src/templates/blogPost.js`)
        for (let edge of result.data.blogPosts.edges) {
          createPage({
            path: `/blog/${edge.node.postSlug}/`,
            component: slash(blogPostTemplate),
            context: {
              postSlug: edge.node.postSlug,
            },
          })
        }
      })
      .then(() => {
        resolve()
      })
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === "build-html") {
    actions.loader("null", {
      test: /uikit/,
      loader: "null-loader",
    });
  }
};