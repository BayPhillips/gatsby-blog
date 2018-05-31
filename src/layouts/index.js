import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import NavigationBar from '../components/navigationBar'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import "../styles/main.scss"

// local components
import StylingOverrides from '../components/localStyling';

// UIKit is undefined in static build
if (typeof UIkit.use === 'function') UIkit.use(Icons);

const TemplateWrapper = ({ children, data }) =>
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <StylingOverrides>
        <NavigationBar menu={data.menu.edges[0]} />
        <div className="uk-container">
          { children() }
        </div>
    </StylingOverrides>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
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
`