import React from 'react'
import { graphql } from 'gatsby'
import * as PropTypes from 'prop-types'
import Layout from '../components/layout'
import BlogPostPreview from '../components/blogPostPreview'

const propTypes = {
  data: PropTypes.object.isRequired,
}

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
                stopped since. I'm currently a Lead Engineer at{' '}
                <a href="https://www.jetblack.com" target="_blank" rel="noopener">
                  Jetblack
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
            className="uk-grid uk-grid-medium uk-child-width-1-1"
            data-uk-grid
          >
            {allPosts.map(({ node }, i) => (
              <BlogPostPreview blogPost={node} />
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
