import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import NavigationBar from '../components/navigationBar'
import Footer from '../components/footer'
import 'typeface-roboto'
import 'typeface-nunito-sans'
import '../styles/main.scss'
import { StaticQuery, graphql } from 'gatsby'

const TemplateWrapper = ({
  children,
  location,
  title,
  description,
  keywords,
  previewImageUrl = null,
  structuredDataJson = null,
}) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site: site {
          siteMetadata {
            siteTitle
            siteUrl
            description
            keywords
          }
        }
        defaultImage: contentfulAsset(title: { eq: "Default Avatar" }) {
          fixed(width: 900, height: 450) {
            src
          }
        }
        menu: allContentfulMenu(filter: { name: { eq: "Main menu" } }) {
          edges {
            node {
              id
              name
              items {
                id
                name
                page {
                  id
                  slug
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <MainLayout
        data={data}
        children={children}
        location={location}
        title={title}
        description={description}
        keywords={keywords}
        previewImageUrl={previewImageUrl || data.defaultImage.fixed.src}
        structuredDataJson={structuredDataJson}
      />
    )}
  />
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

class MainLayout extends React.Component {
  componentDidMount() {
    try {
      this.UIkit = require('uikit/dist/js/uikit')
      this.Icons = require('uikit/dist/js/uikit-icons')
      this.UIkit.use(this.Icons)
    } catch (e) {
      console.error(e)
    }
  }
  render() {
    const pageDescription =
      this.props.description !== undefined
        ? this.props.description
        : this.props.data.site.siteMetadata.description

    const pageKeywords =
      this.props.keywords !== undefined
        ? this.props.keywords.map(k => k.toLowerCase()).join(',')
        : this.props.data.site.siteMetadata.keywords

    const canonicalUrl = `${this.props.data.site.siteMetadata.siteUrl}${
      this.props.location.pathname
    }`

    const googleSiteVerification = 'NYAneve0llvi3Mmooz40QrY1GZNCNqsgiqYM-3DSMS4'

    const title = this.props.title || this.props.data.site.siteMetadata.siteTitle;

    return (
      <div className="main-container">
        <Helmet
          title={title}
          defaultTitle={this.props.data.site.siteMetadata.siteTitle}
          titleTemplate="%s | Bay Phillips"
          meta={[
            { name: 'description', content: pageDescription },
            { name: 'keywords', content: pageKeywords },
            { name: 'og:title', content: this.props.title },
            { name: 'og:description', content: pageDescription },
            { name: 'og:url', content: canonicalUrl },
            {
              name: 'og:image',
              content: `https:${this.props.previewImageUrl}`,
            },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:creator', content: '@bayphillips' },
            { name: 'twitter:site', content: '@bayphillips' },
            { name: 'twitter:image:alt', content: this.props.title },
            {
              name: 'google-site-verification',
              content: googleSiteVerification,
            },
          ]}
          script={[
            {
              type: 'application/ld+json',
              innerHTML: `${JSON.stringify(this.props.structuredDataJson)}`,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <NavigationBar
          location={this.props.location}
          menu={this.props.data.menu.edges[0]}
        />
        <div className="uk-container">{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

MainLayout.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TemplateWrapper
