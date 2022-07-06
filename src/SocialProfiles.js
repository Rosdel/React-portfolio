import React, { Component } from "react"
import SOCILA_PROFILES from "./data/socialProfiles"

class SocialProfile extends Component {
  render() {
    const { link, image } = this.props.socialProfile
    return (
      <span>
        <a href={link}>
          <img
            src={image}
            alt="social-profile"
            style={{ width: 35, height: 35, margin: 10 }}
          />
        </a>
      </span>
    )
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h2>Connect with Me!</h2>
        <div>
          {SOCILA_PROFILES.map((SOCILA_PROFILE) => {
            return (
              <SocialProfile
                key={SOCILA_PROFILE.id}
                socialProfile={SOCILA_PROFILE}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
export default SocialProfiles
