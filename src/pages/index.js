import React from 'react'
import { graphql } from 'gatsby'
import * as PropTypes from 'prop-types'
import Layout from '../components/layout'
import BlogPostPreview from '../components/blogPostPreview'

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends React.Component {
  render() {
    const allPosts = this.props.data.blogPosts.edges
    
    return (
      <Layout
        location={this.props.location}
      >
        <section className="uk-section-small">
          <div className="uk-flex uk-flex-center uk-flex-middle">
            <div className="uk-margin-right uk-width-2-3">
              <h1>Welcome!</h1>
              <p 
                className="uk-text-small" 
                dangerouslySetInnerHTML={{
                  __html: this.props.data.welcomeMessage.body.childMarkdownRemark.html
                }}
              />
            </div>
          </div>
        </section>
        <section className="uk-section-small">
          <h2>Recently posted</h2>
          <div
            className="uk-grid uk-grid-medium uk-child-width-1-1"
            data-uk-grid
          >
            {allPosts.map(({ node }) => (
              <BlogPostPreview key={node.id} blogPost={node} />
            ))}

          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    welcomeMessage: contentfulBlurb(name: { eq: "welcome-message" }) {
      name
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    blogPosts: allContentfulBlogPost(
      limit: 6
      sort: { fields: [datePosted], order: DESC }
    ) {
      edges {
        node {
          id
          postTitle
          datePosted
          postSlug
          contentPreview {
            childMarkdownRemark {
              html
            }
          }
          headerImage {
            fluid(maxHeight: 225) {
              ...GatsbyContentfulFluid_withWebp
            }
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
