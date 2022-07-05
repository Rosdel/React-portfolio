import React, { Component } from "react"
class App extends Component {
  state = { displayBio: false }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio })
  }
  render() {
    return (
      <div>
        <h1>Yeah Man!</h1>
        <p>Call me Rosdell,& I am a software Developer</p>
        <p>I am always looking forward to working on a meaningful project.</p>
        {this.state.displayBio ? (
          <div>
            <p>I am currently based in Kampala ,and I code everyday.</p>
            <p>
              my favorite language is JavaScript and I think React.js made it
              more fun.
            </p>
            <p>Besides coding I also do Ziki and Basketball</p>
            <button onClick={this.toggleDisplayBio}>Show Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>
        )}
        {/* {bio} */}
      </div>
    )
  }
}
export default App
