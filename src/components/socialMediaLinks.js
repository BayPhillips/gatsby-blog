import React from "react"
import { Link } from 'gatsby'

class SocialMediaLinks extends React.Component {
  render() {
    return (
      <ul className="uk-iconnav uk-margin-auto" style={{'width': '70%'}}>
        <li>
          <a href="https://www.github.com/bayphillips" target="_blank" rel="noopener noreferrer" className="uk-icon-link" data-uk-icon="icon: github" title="Github">
            <span className="uk-hidden">Github</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/bay.phillips" target="_blank" rel="noopener noreferrer" className="uk-icon-link" data-uk-icon="icon: facebook" title="Facebook">
            <span className="uk-hidden">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/bayphillips" target="_blank" rel="noopener noreferrer" className="uk-icon-link" data-uk-icon="icon: twitter" title="Twitter">
            <span className="uk-hidden">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/bayphillips" target="_blank" rel="noopener noreferrer" className="uk-icon-link" data-uk-icon="icon: instagram" title="Instagram">
            <span className="uk-hidden">Instagram</span>
          </a>
        </li>
      </ul>
    )
  }
}

export default SocialMediaLinks