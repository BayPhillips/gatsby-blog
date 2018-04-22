import React from "react"
import Link from 'gatsby-link'

class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="uk-navbar-container" uk-navbar>
        <div className="uk-navbar-left">
          <Link to={"/"} className="uk-navbar-item uk-logo">Bay Philips</Link>
          <ul className="uk-navbar-nav">
            <li><Link to={"blog"}>Blog</Link></li>
            <li><Link to={"contact"}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavigationBar