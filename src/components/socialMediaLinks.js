import React from "react"
import { Link } from 'gatsby'

class SocialMediaLinks extends React.Component {
  render() {
    return (
      <ul className="uk-iconnav uk-margin-auto" style={{'width': '70%'}}>
        <li><a href="https://www.github.com/bayphillips" target="_blank" className="uk-icon-link" data-uk-icon="icon: github"></a></li>
        <li><a href="https://www.facebook.com/bay.phillips" target="_blank" className="uk-icon-link" data-uk-icon="icon: facebook"></a></li>
        <li><a href="https://www.twitter.com/bayphillips" target="_blank" className="uk-icon-link" data-uk-icon="icon: twitter"></a></li>
        <li><a href="https://www.instagram.com/bayphillips" target="_blank" className="uk-icon-link" data-uk-icon="icon: instagram"></a></li>
      </ul>
    )
  }
}

export default SocialMediaLinks