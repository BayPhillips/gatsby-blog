import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import NavigationBar from '../components/navigationBar'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// local components
import StylingOverrides from '../components/localStyling';

// UIKit is undefined in static build
if (typeof UIkit.use === 'function') UIkit.use(Icons);

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Bay Phillips - Software engineer in nyc"
      meta={[
        { name: 'description', content: 'Personal blog for Bay Phillips, a software engineer based out of NYC building native applications.' },
        { name: 'keywords', content: 'ios, swift, engineer, nyc, new york city, cooking, Plated' },
      ]}
    />
    <StylingOverrides>
        <NavigationBar />
        <div className="uk-container-large">
          { children() }
        </div>
    </StylingOverrides>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
