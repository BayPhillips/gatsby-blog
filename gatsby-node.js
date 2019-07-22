const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const createPaginatedPages = require("gatsby-paginate");

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
              requiresCreation
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
        tags: allContentfulTag {
          edges {
            node {
              displayName
              tagSlug
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
          if(edge.node.requiresCreation) {
            createPage({
              path: `/${edge.node.slug}`,
              component: slash(contentfulPageTemplate),
              context: {
                slug: edge.node.slug
              }
            })
          }
        })

        const taggedBlogPostListingTemplate = path.resolve(`./src/templates/taggedBlogPostListing.js`)

        _.each(result.data.tags.edges, edge => {
          console.log(`Creating page for tag: ${JSON.stringify(edge)}`)
          createPage({
            path: `/blog/${edge.node.tagSlug}/`,
            component: slash(taggedBlogPostListingTemplate),
            context: {
              tagSlug: edge.node.tagSlug
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
            path: `/blog/${edge.node.postSlug}`,
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
