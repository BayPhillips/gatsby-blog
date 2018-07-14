import React from "react"
import { Link, graphql } from "gatsby"
import * as PropTypes from "prop-types"
import moment from 'moment'
import Layout from "../components/layout"


const propTypes = {
  data: PropTypes.object.isRequired,
}

class BlogPostTemplate extends React.Component {

  render() {
    const blogPost = this.props.data.blogPost
    const {
      postTitle,
      datePosted,
      postContent,
      author,
      postSlug,
      contentPreview,
      metaContent,
      headerImage
    } = blogPost
    const formattedDate = moment(datePosted, moment.ISO_8601)
    const structuredData = {
      "@context": "http://schema.org",
      "@type": "NewsArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${this.props.data.site.siteMetadata.siteUrl}${this.props.location.pathname}`
      },
      "headLine": `${postTitle}`,
      "description": `${contentPreview.childMarkdownRemark.excerpt}`,
      "image": [
        `http:${headerImage.fluid.src}`
      ],
      "datePublished": formattedDate,
      "dateModified": formattedDate,
      "author": {
        "@type": "Person",
        "name": "Bay Phillips"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Bay Phillips",
        "logo": {
          "@type": "imageObject",
          "url": `http:${headerImage.fluid.src}`
        }
      }
    }

    return (
      <Layout 
        location = { this.props.location } 
        title = { postTitle } 
        description = { contentPreview.childMarkdownRemark.excerpt }
        keywords = { metaContent.keywords }
        previewImageUrl = { headerImage.fluid.src }
        structuredDataJson = { structuredData }
      >
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
    blogPost: contentfulBlogPost(postSlug: { eq: $postSlug }) {
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
    }
    site: site {
      siteMetadata {
        siteUrl
      }
    }
  }
`