import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import NavigationBar from '../components/navigationBar'
import Footer from '../components/footer'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import "typeface-roboto"
import "typeface-nunito-sans"
import "../styles/main.scss"
import { StaticQuery, graphql } from "gatsby"

// UIKit is undefined in static build
if (typeof UIkit.use === 'function') UIkit.use(Icons);

const TemplateWrapper = ({ children, location, title, description, keywords, isArticle = false }) =>
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site: site {
          siteMetadata {
            description
            keywords
          }
        }
        menu: allContentfulMenu(filter: { name: { eq: "Main menu"}}) {
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
      <div>
        <Helmet
          title={title}
          defaultTitle={title}
          titleTemplate="%s | Bay Phillips"
          meta={[
            { name: 'description', content: description !== undefined ? description : data.site.siteMetadata.description },
            { name: 'keywords', content: keywords !== undefined 
              ? keywords.map(k => k.toLowerCase()).join(',') 
              : data.site.siteMetadata.keywords 
            },
          ]}
        >
          <link rel="canonical" href={ `https://blog.bayphillips.com${location.pathname}`} />

          {/* OpenGraph tags */}
          <meta property="og:url" content={`https://blog.bayphillips.com${location.pathname}`} />
          {isArticle ? <meta property="og:type" content="article" /> : null}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="fb:app_id" content={config.fbAppID} />

          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content={config.twitter} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />

        </Helmet>
        <NavigationBar location={location} menu={data.menu.edges[0]} />
        <div className="uk-container">
          { children }
        </div>
        <Footer />
      </div>
    )}
  />

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper