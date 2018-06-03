import React from 'react'
import Link from 'gatsby-link'
import { navigateTo } from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"

const propTypes = {
  data: PropTypes.object.isRequired,
}

const BlogPostPreview = ({ node }) =>
  <div key={node.id} className="uk-card uk-card-default uk-card-hover uk-margin">
    <div className="uk-card-header">
      <h3 className="uk-card-title">
        <Link to={"/posts/" + node.postSlug }>{node.postTitle}</Link>
      </h3>
    </div>
    <div className="uk-card-body"
      dangerouslySetInnerHTML={{
        __html: node.contentPreview.childMarkdownRemark.html,
      }}
    />
  </div>

class IndexPage extends React.Component {
  render() {
    const allPosts = this.props.data.blogPosts.edges
    const bay = this.props.data.bay

    return (
      <div>
        <section className="uk-section-small">
          <div className="uk-panel">
            <Img 
              sizes={bay.avatar.sizes} 
              style={{width: `100px`, height: `100px`}} 
              imgStyle={`uk-margin-left uk-margin-remove-adjacent`} 
            />
            <p>
              This is a blurb about me isn't it great
            </p>
          </div>
        </section>
        <section className="uk-section">
          <h2>Recent Blog Posts</h2>
          <div className="uk-flex uk-flex-column">
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
    bay: contentfulAuthor(name: {eq: "Bay Phillips"}) {
      id
      name
      avatar {
        sizes(maxWidth: 100) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
    },
    blogPosts: allContentfulBlogPost(limit: 5) {
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
        }
      }
    }
  }
`