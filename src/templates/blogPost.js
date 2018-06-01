import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light";
import js from 'react-syntax-highlighter/dist/languages/javascript';
import docco from 'react-syntax-highlighter/dist/styles/docco';

registerLanguage('javascript', js);

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
      author,
      postSlug,
      contentPreview
    } = blogPost
    const codeTest = '(num) => num + 1;'
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
          <p>
            {author.name}
            <img src={author.avatar.responsiveResolution.src} />
          </p>
        </div>
        <div>
          <span>
            Date Posted: {datePosted}
          </span>
          <div
            dangerouslySetInnerHTML={{
              __html: postContent.childMarkdownRemark.html,
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
  query blogPostQuery($postSlug: String!) {
    contentfulBlogPost(postSlug: { eq: $postSlug }) {
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
        avatar {
          id
          responsiveResolution(width: 60, height: 60) {
            src
          }
        }
      }
      postSlug,
      contentPreview {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`