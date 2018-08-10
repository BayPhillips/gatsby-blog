import React from 'react'
import SocialMediaLinks from '../components/socialMediaLinks'
import moment from 'moment'

class Footer extends React.Component {
  render() {
    // Keep this empty for now
    return (
      <footer
        className="uk-section-secondary uk-margin-top uk-margin-remove-bottom uk-overflow-hidden"
        key={'mainFooter'}
      >
        <div className="uk-flex uk-flex-column uk-flex-center uk-flex-middle">
          <section className="uk-section">
            <div className="uk-text-center">
              <SocialMediaLinks />
            </div>
            <p className="uk-text-inverse uk-text-small uk-text-center">
              Copyright &copy; {moment(Date.now()).format('YYYY')} Bay Phillips
            </p>
          </section>
        </div>
      </footer>
    )
  }
}

export default Footer
