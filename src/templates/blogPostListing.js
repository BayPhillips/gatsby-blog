import React from "react"
import { Link } from "gatsby"
import moment from "moment"
import Layout from "../components/layout"

const BlogPostListingTemplate = ({ data, pageContext, location }) => {
  const { group, index, first, last, pageCount } = pageContext
  
  console.log(`What is index ${index} and what is pageCount ${pageCount}`)

  const nextPageUrl = index == pageCount 
    ? null 
    : `/blog/${(index + 1).toString()}`

  const previousIndex = index - 1
  const previousPageUrl = previousIndex >= 1
    ? previousIndex == 1 
      ? `/blog`
      : `/blog/${previousIndex.toString()}` 
    : null

  const pageTitle = index > 1
    ? `Blog | Page ${index}`
    : `Blog`
  const description = "Various blog posts regarding programming, technology and random musings of someone who's not that interesting..."
  
  return (
    <Layout location={location} title={pageTitle} description={description}>
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
          { previousPageUrl ? <Link to={previousPageUrl}>&lt; Newer Posts</Link> : null }
          { nextPageUrl ? <Link to={nextPageUrl} className="uk-width-expand uk-text-right">Older Posts &gt;</Link> : null }
        </div>
      </section>
    </Layout>
  )
}

export default BlogPostListingTemplate