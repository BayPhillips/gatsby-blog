import React from "react"
import Link from 'gatsby-link'

class NavigationBar extends React.Component {
  render() {
    const items = this.props.menu.node.items
    
    return (
      <div className="uk-container uk-margin">
        <nav className="uk-navbar-container uk-navbar-transparent uk-hidden@s" data-uk-navbar>
          <div className="uk-navbar-left uk-dark">
            <button 
              className="uk-navbar-toggle uk-button" 
              data-uk-navbar-toggle-icon
              data-uk-toggle="target: #mobile-menu"
              href="#"
            >
              Menu
            </button>
          </div>
          <div className="uk-navbar-center">
            <a href="/" className="uk-navbar-item uk-logo">Bay Phillips</a>
          </div>
        </nav>
        <nav className="uk-navbar-container uk-navbar-transparent uk-visible@s" data-uk-navbar>
          <div className="uk-navbar-left">
            <Link to={"/"} className="uk-navbar-item uk-logo">Bay Phillips</Link>
            <ul className="uk-navbar-nav">
              { this.renderNavigationMenuItems() }
            </ul>
          </div>
          <div className="uk-navbar-right">
            { this.renderSocialMediaLinks() }
          </div>
        </nav>
        <div id="mobile-menu" data-uk-offcanvas="overlay: true">
          <div className="uk-offcanvas-bar">
            <button className="uk-offcanvas-close" type="button" data-uk-close></button>
            <ul className="uk-nav uk-nav-primary">
              { this.renderNavigationMenuItems() }
            </ul>
            { this.renderSocialMediaLinks() }
          </div>
        </div>
        <hr className="uk-margin-remove" />
      </div>
    )
  }

  renderNavigationMenuItems() {
    const items = this.props.menu.node.items
    
    return (
      items.map(item => (
        <li key={item.id}>
          <Link to={"/" + item.page.slug}>{item.name}</Link>
        </li>
      ))
    )
  }

  renderSocialMediaLinks() {
    return (
      <ul className="uk-iconnav">
        <li><a href="https://www.github.com/bayphillips" target="_blank" className="uk-icon-link" data-uk-icon="icon: github"></a></li>
        <li><a href="https://www.facebook.com/bay.phillips" target="_blank" className="uk-icon-link" data-uk-icon="icon: facebook"></a></li>
        <li><a href="https://www.twitter.com/bayphillips" target="_blank" className="uk-icon-link" data-uk-icon="icon: twitter"></a></li>
        <li><a href="https://www.instagram.com/bayphillips" target="_blank" className="uk-icon-link" data-uk-icon="icon: instagram"></a></li>
      </ul>
    )
  }
}

export default NavigationBar