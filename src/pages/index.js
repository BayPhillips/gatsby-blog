import React from 'react'
import Link from 'gatsby-link'
import { navigateTo } from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"

const propTypes = {
  data: PropTypes.object.isRequired,
}

const BlogPost = ({ node }) =>
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
    const nina = this.props.data.nina.edges[0].node

    return (
      <div className="uk-container">
        <div className="uk-cover-container uk-height-large">
          <Img sizes={nina.sizes} />
          <div className="uk-position-top uk-light">
            <h3 className="uk-padding">Ninabee</h3>
          </div>
        </div>
        <section className="uk-margin">
          <h3>Recent Blog Posts</h3>
          <div className="uk-flex uk-flex-column">
            {allPosts.map(({ node }, i) => <BlogPost key={node.id} node={node} />)}
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
    nina: allContentfulAsset(filter: {title: {eq: "nina-web"} }) {
      edges {
        node {
          title,
          sizes(maxWidth: 1280) {
            ...GatsbyContentfulSizes_noBase64
          }
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