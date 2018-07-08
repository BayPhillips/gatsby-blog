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

    const { 
      html, 
      excerpt 
    } = body.childMarkdownRemark

    return (
      <Layout 
        location={this.props.location} 
        title={title} 
        description={excerpt}
        previewImageUrl={headerImage.fluid.src}>
        <section key={id} className="uk-section uk-padding-remove">
          <h1>
            {title}
          </h1>
          { this.renderHeaderImage() }
          <article className="uk-article uk-margin">
            <div dangerouslySetInnerHTML={{ __html: html, }} />
          </article>
        </section>
      </Layout>
    )
  }

  renderHeaderImage() {
    const image = this.props.data.page.headerImage

    if(image) {
      return (
        <Img
          fluid={image.fluid}
          style={{minHeight: "250px"}}
        />
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
        fluid(maxWidth: 1200) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt
        }
      }
    }
  }
`