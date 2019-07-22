import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import * as PropTypes from 'prop-types'
import BlogPostPreview from '../components/blogPostPreview'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class TaggedBlogPostListing extends React.Component {
  render() {
    const blogPosts = this.props.data.blogPosts.edges
    const tag = this.props.data.primaryTag

    return (
      <Layout 
        location={this.props.location} 
        title={`${tag.displayName} Blog Posts`}
        description={`Read my blog posts assocaited with ${tag.displayName}`}
      >
        <section className="uk-section">
          <h1>All "{tag.displayName}" blog posts</h1>
          <div
            className="uk-grid uk-grid-medium uk-child-width-1-1"
            data-uk-grid
          >
            { blogPosts.map(({ node }) => <BlogPostPreview blogPost={node} />) }
          </div>
        </section>
      </Layout>
    )
  }
}

export default TaggedBlogPostListing

export const pageQuery = graphql`
  query tagPostsQuery($tagSlug: String!) {
    primaryTag: contentfulTag(tagSlug: { eq: $tagSlug }) {
      displayName
    }
    blogPosts: allContentfulBlogPost(filter: { tags: {elemMatch: {tagSlug: {eq: $tagSlug}}}}) {
      edges {
        node { 
          id
          postTitle
          postContent {
            childMarkdownRemark {
              html
            }
          }
          datePosted
          author {
            name
          }
          postSlug
          contentPreview {
            childMarkdownRemark {
              html
              excerpt
            }
          }
          headerImage {
            fluid(maxWidth: 900) {
              src
            }
          }
          metaContent {
            keywords
          }
          tags {
            tagSlug
            displayName
          }
        }
      }
    }
  }
`