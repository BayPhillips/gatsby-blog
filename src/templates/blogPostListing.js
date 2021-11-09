import React from 'react'
import { Link } from 'gatsby'
import { DateFormatter } from '../helpers/utils'
import Layout from '../components/layout'
import BlogPostPreview from '../components/blogPostPreview'

const BlogPostListingTemplate = ({ data, pageContext, location }) => {
  const { group, index, first, last, pageCount } = pageContext

  const nextPageUrl =
    index == pageCount ? null : `/blog/${(index + 1).toString()}/`

  const previousIndex = index - 1
  const previousPageUrl =
    previousIndex >= 1
      ? previousIndex == 1
        ? `/blog`
        : `/blog/${previousIndex.toString()}/`
      : null

  const pageTitle = index > 1 ? `Blog | Page ${index}` : `Blog`
  const description =
    "Various blog posts regarding programming, technology and random musings of someone who's not that interesting..."

  return (
    <Layout location={location} title={pageTitle} description={description}>
      <section className="uk-section">
        <div
          className="uk-grid uk-grid-medium uk-child-width-1-1"
          data-uk-grid
        >
          {group.map(({ node }) => (
            <BlogPostPreview key={`blogpost-${node.id}`} blogPost={node} />
          ))}
        </div>
        <div data-uk-grid="" className="uk-margin">
          {previousPageUrl ? (
            <Link to={previousPageUrl}>&lt; Newer Posts</Link>
          ) : null}
          {nextPageUrl ? (
            <Link to={nextPageUrl} className="uk-width-expand uk-text-right">
              Older Posts &gt;
            </Link>
          ) : null}
        </div>
      </section>
    </Layout>
  )
}

export default BlogPostListingTemplate
