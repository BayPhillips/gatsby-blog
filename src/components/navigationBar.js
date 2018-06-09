import React from "react"
import Link from 'gatsby-link'

class NavigationBar extends React.Component {
  render() {
    const items = this.props.menu.node.items
    
    return (
      <div className="uk-container">
        <nav className="uk-navbar-container uk-navbar-transparent uk-margin-bottom" data-uk-navbar>
          <div className="uk-navbar-left">
            <Link to={"/"} className="uk-navbar-item uk-logo">Bay Phillips</Link>
            <ul className="uk-navbar-nav">
              {items.map(item => (
                <li key={item.id}>
                  <Link to={"/" + item.page.slug}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="uk-navbar-right">
              <ul className="uk-navbar-nav">
                <li><a href="http://www.github.com/bayphillips" data-uk-icon="icon: github"></a></li>
              </ul>
          </div>
        </nav>
        <hr />
      </div>
    )
  }
}

export default NavigationBar