import React from "react"
import Link from 'gatsby-link'

class NavigationBar extends React.Component {
  render() {
    const items = this.props.menu.node.items
    
    return (
      <nav className="uk-navbar-container" uk-navbar>
        <div className="uk-navbar-left">
          <Link to={"/"} className="uk-navbar-item uk-logo">Bay Phillips</Link>
          <ul className="uk-navbar-nav">
            {items.map(item => (
              <li key={item.id}>
                <Link to={item.page.slug}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavigationBar