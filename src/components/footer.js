import React from "react"
import SocialMediaLinks from "../components/socialMediaLinks"

class Footer extends React.Component {
  render() {
    // Keep this empty for now
    return (
      <footer className="uk-container" key={"mainFooter"}>
        <div className="uk-hidden@s uk-flex uk-flex-center uk-margin">
          <SocialMediaLinks />
        </div>
      </footer>
    )
  }
}

export default Footer