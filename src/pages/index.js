import React from 'react'
import { Link, graphql } from 'gatsby'
import * as PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import moment from 'moment'

const propTypes = {
  data: PropTypes.object.isRequired,
}

const BlogPostPreview = ({ node }) => (
  <div key={node.id}>
    <Link to={`/blog/${node.postSlug}/`}>
      <div className="uk-card uk-card-default uk-card-hover">
        <Img
          fluid={node.headerImage.fluid}
          outerWrapperClassName={`uk-card-media-top`}
        />
        <div className="uk-card-body">
          <h3 className="uk-card-title uk-margin-remove-bottom">
            {node.postTitle}
          </h3>
          <p className="uk-text-meta uk-margin-remove-top">
            Posted {moment(node.datePosted).fromNow()}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: node.contentPreview.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Link>
  </div>
)

class IndexPage extends React.Component {
  render() {
    const allPosts = this.props.data.blogPosts.edges
    const welcomeMessage = this.props.data.welcomeMessage

    return (
      <Layout
        location={this.props.location}
        title="Bay Phillips | Software Engineer in NYC"
      >
        <section className="uk-section-small">
          <div className="uk-flex uk-flex-center uk-flex-middle">
            <div className="uk-margin-right uk-width-2-3">
              <h1>Welcome!</h1>
              <p className="uk-text-small">
                My name is Bay Phillips and I'm a software engineer based out of
                New York City. I've been coding since I was 14 and haven't
                stopped since. I'm currently an Engineering Manager at{' '}
                <a href="https://www.plated.com" target="_blank" rel="noopener">
                  Plated
                </a>{' '}
                and love what I get to do every day. Sometimes I write blog
                posts about various things in tech.
              </p>
            </div>
          </div>
        </section>
        <section className="uk-section-small">
          <h2>Recently posted</h2>
          <div
            className="uk-grid uk-grid-medium uk-grid-match uk-child-width-1-3@xl uk-child-width-1-3@l uk-child-width-1-2@m uk-child-width-1-1@s"
            data-uk-grid
          >
            {allPosts.map(({ node }, i) => (
              <BlogPostPreview key={node.id} node={node} />
            ))}

          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    welcomeMessage: contentfulBlurb(name: { eq: "welcome-message" }) {
      name
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    blogPosts: allContentfulBlogPost(
      limit: 6
      sort: { fields: [datePosted], order: DESC }
    ) {
      edges {
        node {
          id
          postTitle
          datePosted
          postSlug
          contentPreview {
            childMarkdownRemark {
              html
            }
          }
          headerImage {
            fluid(maxHeight: 225) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
