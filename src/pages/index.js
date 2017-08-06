import React from 'react'
import Link from 'gatsby-link'
import { navigateTo } from "gatsby-link"
import * as PropTypes from "prop-types"

const propTypes = {
  data: PropTypes.object.isRequired,
}

const BlogPost = ({ node }) =>
  <div key={node.id}>
    <h3>
      <Link to={"/posts/" + node.id }>{node.postTitle}</Link>
    </h3>
    <p>
      {node.postContent.postContent}
    </p>
  </div>

const Header = () =>
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>

class IndexPage extends React.Component {
  render() {
    const allPosts = this.props.data.all.edges
    return (
      <div>
        <h1>Posts</h1>
        {allPosts.map(({ node }, i) => <BlogPost node={node} />)}
      </div>        
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    all: allContentfulBlogPost(limit: 1000) {
      edges {
        node {
          id
          postTitle
          datePosted
          postContent {
            postContent
          }
          author {
            name
            avatar {
              file {
                url
                fileName
                contentType
              }
            }
          }
        }
      }
    }
  }
`