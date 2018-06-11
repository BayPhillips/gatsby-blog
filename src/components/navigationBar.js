import React from "react"
import Link from 'gatsby-link'

class NavigationBar extends React.Component {
  render() {
    const items = this.props.menu.node.items
    
    return (
      <div className="uk-container">
        <nav className="uk-navbar-container uk-navbar-transparent uk-margin-bottom uk-margin uk-hidden@s" data-uk-navbar>
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
            <a href="" className="uk-navbar-item uk-logo">Bay Phillips</a>
          </div>
        </nav>
        <nav className="uk-navbar-container uk-navbar-transparent uk-margin-bottom uk-visible@s" data-uk-navbar>
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
              <ul className="uk-iconnav">
                <li><a href="http://www.github.com/bayphillips" className="uk-icon-link" data-uk-icon="icon: github"></a></li>
                <li><a href="http://www.facebook.com/bay.phillips" className="uk-icon-link" data-uk-icon="icon: facebook"></a></li>
                <li><a href="http://www.twitter.com/bayphillips" className="uk-icon-link" data-uk-icon="icon: twitter"></a></li>
                <li><a href="http://www.instagram.com/bayphillips" className="uk-icon-link" data-uk-icon="icon: instagram"></a></li>
              </ul>
          </div>
        </nav>
        <div id="mobile-menu" data-uk-offcanvas="overlay: true">
          <div className="uk-offcanvas-bar">
            <ul className="uk-nav uk-nav-primary">
              {items.map(item => (
                <li key={item.id}>
                  <Link to={"/" + item.page.slug}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default NavigationBar