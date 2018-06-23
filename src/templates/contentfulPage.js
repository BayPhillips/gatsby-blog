import React from "react"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from "../components/layout"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ContentfulPageTemplate extends React.Component {
  render() {
    const page = this.props.data.page

    const {
      id,
      title,
      slug,
      headerImage,
      body
    } = page

    return (
      <Layout>
        <section key={id} className="uk-section uk-padding-remove">
          <h1>
            {title}
          </h1>
          { this.renderHeaderImage() }
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: body.childMarkdownRemark.html,
              }}
            />
          </div>
        </section>
      </Layout>
    )
  }

  renderHeaderImage() {
    const image = this.props.data.page.headerImage

    if(image) {
      return (
        <Img fixed={image.fixed} />
      )
    } else { 
      return null
    }
  }
}

ContentfulPageTemplate.propTypes = propTypes

export default ContentfulPageTemplate

export const pageQuery = graphql`
  query contentfulPageQuery($slug: String!) {
    page: contentfulPage(slug: {eq: $slug }) {
      id
      title
      slug
      headerImage {
        fixed(height: 300) {
          ...GatsbyContentfulFixed_noBase64
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`