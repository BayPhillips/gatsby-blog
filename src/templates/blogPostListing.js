import React from "react"
import Link from "gatsby-link"
import moment from "moment"

const BlogPostListingTemplate = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext
  
  const nextPageUrl = index == pageCount 
    ? null 
    : `/blog/${(index + 1).toString()}`
  
  const previousPageUrl = index - 1 == 0
    ? nextPageUrl 
      ? "/blog" 
      : null 
    : `/blog/${(index - 1).toString()}`

  return (
    <section className="uk-section">
      { group.map(({ node }) => (
        <article key={ node.id } className="uk-article">
          <h1 className="uk-article-title">
            <Link to={`/blog/${node.postSlug}`} className="uk-link-heading">{ node.postTitle }</Link>
          </h1>
          <div className="uk-article-meta">
            { moment(node.datePosted).fromNow() }
          </div>
          <div className="uk-margin"
            dangerouslySetInnerHTML={{
              __html: node.contentPreview.childMarkdownRemark.html,
            }}
          />
          <hr className="uk-divider-small" />
        </article>
      ))}
      <div data-uk-grid="" className="uk-margin">
        { previousPageUrl ? <Link to={previousPageUrl}>&lt; Older Posts</Link> : null }
        { nextPageUrl ? <Link to={nextPageUrl} className="uk-width-expand uk-text-right">Newer Posts &gt;</Link> : null }
      </div>
    </section>
  )
}

export default BlogPostListingTemplate