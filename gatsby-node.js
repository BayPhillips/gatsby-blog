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
        allContentfulBlogPost(limit: 1000) {
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

        const blogPostTemplate = path.resolve(`./src/templates/blogPost.js`)
        _.each(result.data.allContentfulBlogPost.edges, edge => {
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