import React from 'react'
import { Link } from 'gatsby'
import { DateFormatter } from '../helpers/utils'

const BlogPostPreview = ({ blogPost }) => (
  <div key={blogPost.id}>
    <Link to={`/blog/${blogPost.postSlug}/`}>
      <div className="uk-card uk-card-default uk-card-hover">
        <div className="uk-card-body">
          <h3 className="uk-card-title uk-margin-remove-bottom">
            {blogPost.postTitle}
          </h3>
          <p className="uk-text-meta uk-margin-remove-top">
            Posted {DateFormatter(blogPost.datePosted)}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: blogPost.contentPreview.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Link>
  </div>
)

export default BlogPostPreview