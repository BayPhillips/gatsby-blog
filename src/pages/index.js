import React from 'react'
import Link from 'gatsby-link'
import { navigateTo } from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"

const propTypes = {
  data: PropTypes.object.isRequired,
}

const BlogPostPreview = ({ node }) =>
  <div key={node.id}>
    <Link to={"/blog/" + node.postSlug }>
      <div className="uk-card uk-card-default uk-card-hover">
        <Img 
          sizes={node.headerImage.sizes} 
          outerWrapperClassName={`uk-card-media-top`}
        />
        <div className="uk-card-header">
          <h3 className="uk-card-title">
            {node.postTitle}
          </h3>
        </div>
        <div className="uk-card-body"
          dangerouslySetInnerHTML={{
            __html: node.contentPreview.childMarkdownRemark.html,
          }}
        />
      </div>
    </Link>
  </div>

class IndexPage extends React.Component {
  render() {
    const allPosts = this.props.data.blogPosts.edges
    const welcomeMessage = this.props.data.welcomeMessage

    return (
      <div>
        <section className="uk-section-small">
          <div className="uk-flex uk-flex-center uk-flex-middle">
            <div className="uk-margin-right uk-width-2-3">
              <h1>Welcome!</h1>
              <p 
                className="uk-text-small" 
                dangerouslySetInnerHTML={{
                  __html: welcomeMessage.body.childMarkdownRemark.html
                }}
              />
            </div>
          </div>
        </section>
        <section className="uk-section-small">
          <h2>Recently posted</h2>
          <div className="uk-grid-medium uk-grid-match uk-child-width-1-3@xl uk-child-width-1-3@l uk-child-width-1-2@m uk-child-width-1-1@s" data-uk-grid>
            {allPosts.map(({ node }, i) => <BlogPostPreview key={node.id} node={node} />)}
          </div>
        </section> 
      </div>      
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    welcomeMessage: contentfulBlurb(name: { eq: "welcome-message"}) {
      name
      body {
        childMarkdownRemark {
          html
        }
      }
    },
    blogPosts: allContentfulBlogPost(limit: 5, sort: { fields: [datePosted], order: DESC}) {
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
            sizes(maxHeight: 225) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
        }
      }
    }
  }
`