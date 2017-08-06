import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class BlogPostTemplate extends React.Component {
  render() {
    const blogPost = this.props.data.contentfulBlogPost
    const {
      postTitle,
      datePosted,
      postContent,
      author
    } = blogPost
    return (
      <div>
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
          }}
        >
          <h4>
            {postTitle}
          </h4>
        </div>
        <div>
          <p>Posted By: {author.name}</p>
          <img src={author.avatar.file.url} />
        </div>
        <div>
          <span>
            Date Posted: {datePosted}
          </span>
          <div
            dangerouslySetInnerHTML={{
              __html: postContent.postContent,
            }}
          />
        </div>
      </div>
    )
  }
}

BlogPostTemplate.propTypes = propTypes

export default BlogPostTemplate

export const pageQuery = graphql`
  query blogPostQuery($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      id
      postTitle
      postContent {
        postContent
      }
      datePosted
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
`