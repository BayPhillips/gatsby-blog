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
      <article className="uk-article">
        <h1 className="uk-article-title">{postTitle}</h1>
        <div className="uk-article-meta">
          Posted on {datePosted}
        </div>
        <div className="uk-margin"
          dangerouslySetInnerHTML={{
            __html: postContent.childMarkdownRemark.html,
          }}
        />
      </article>
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