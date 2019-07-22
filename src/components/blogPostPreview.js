import React from 'react'
import { Link } from 'gatsby'
import { DateFormatter } from '../helpers/utils'

const TagFooter = ({tags}) => (
  tags.map((tag) => (
    <Link 
      to={`/blog/${tag.tagSlug}/`} 
      className={"uk-badge uk-margin-small-right uk-padding-small"}
    >
      {tag.displayName}
    </Link>
  ))
)
  

const BlogPostPreview = ({ blogPost }) => { 
  const tags = blogPost.tags

  return (
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
          {tags !== null && <TagFooter tags={tags} /> } 
        </div>
      </div>
    </Link>
  </div>
)
        }

export default BlogPostPreview