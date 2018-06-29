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

const TemplateWrapper = ({ children, location }) =>
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site: site {
          siteMetadata {
            title
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
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        />
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