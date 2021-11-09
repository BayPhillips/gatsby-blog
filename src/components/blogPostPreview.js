import React from 'react'
import { Link } from 'gatsby'
import { DateFormatter } from '../helpers/utils'

const TagFooter = ({tags, blogPost}) => (
  tags.map((tag) => (
    <Link
      key={`${blogPost.id}-${tag.tagSlug}`}
      to={`/blog/${tag.tagSlug}/`} 
      className={"uk-badge uk-margin-small-right uk-padding-small"}
    >
      {tag.displayName}
    </Link>
  ))
)
  

const BlogPostPreview = ({ blogPost }) => { 
  const tags = blogPost.tags || []

  return (
  <div>
      <div className="uk-card uk-card-default uk-card-hover">
        <div className="uk-card-body">
          <Link to={`/blog/${blogPost.postSlug}/`}>
            <h3 className="uk-card-title uk-margin-remove-bottom">
              {blogPost.postTitle}
            </h3>
            <p className="uk-text-meta uk-margin-remove-top">
              Posted {DateFormatter(blogPost.datePosted)}
            </p>
            <div className="post-preview"
              dangerouslySetInnerHTML={{
                __html: blogPost.contentPreview.childMarkdownRemark.html,
              }}
            />
          </Link>
          <TagFooter key={`${blogPost.id}-tags`} tags={tags} blogPost={blogPost} />
        </div>
      </div>
  </div>
)
        }

export default BlogPostPreview