import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import NavigationBar from '../components/navigationBar'
import { Column, Row } from 'react-foundation'

import 'foundation-sites/dist/css/foundation.css'
import 'foundation-sites/dist/css/foundation-float.css'
import 'foundation-sites/dist/css/foundation-rtl.css'
import 'foundation-sites/dist/css/foundation-prototype.css'
import './index.css'

const TemplateWrapper = ({ children }) =>
  <div id="wrapper">
    <Helmet
      title="Bay Phillips - Software engineer in nyc"
      meta={[
        { name: 'description', content: 'Personal blog for Bay Phillips, a software engineer based out of NYC building native applications.' },
        { name: 'keywords', content: 'ios, swift, engineer, nyc, new york city, cooking, Plated' },
      ]}
    />
    <NavigationBar />
    <Row medium={8} large={7}>
      <Column large={9} medium={9} small={11} centerOnLarge centerOnMedium centerOnSmall>
        {children()}
      </Column>
    </Row>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
