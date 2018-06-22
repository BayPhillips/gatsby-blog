import React from "react"
import { Link, graphql } from "gatsby"
import * as PropTypes from "prop-types"
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light";
import js from 'react-syntax-highlighter/dist/languages/javascript';
import docco from 'react-syntax-highlighter/dist/styles/docco';
import moment from 'moment'
import Layout from "../components/layout"

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
    return (
      <Layout>
        <article className="uk-article">
          <h1 className="uk-article-title">{postTitle}</h1>
          <div className="uk-article-meta">
            Posted on { moment(datePosted).format('MMMM Do YYYY') }
          </div>
          <div className="uk-margin"
            dangerouslySetInnerHTML={{
              __html: postContent.childMarkdownRemark.html,
            }}
          />
        </article>
      </Layout>
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