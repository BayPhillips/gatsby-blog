import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"

// registerLanguage('javascript', js);

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
      <section key={id} className="uk-margin">
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
    )
  }

  renderHeaderImage() {
    const image = this.props.data.page.headerImage

    if(image) {
      return (
        <Img sizes={image.sizes} />
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
        sizes {
          srcSet
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