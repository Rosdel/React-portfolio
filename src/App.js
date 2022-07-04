import React, { Component } from "react"
class App extends Component {
  constructor() {
    super()
    this.state = { displayBio: false }
    this.readMore = this.readMore.bind(this)
    this.showLess = this.showLess.bind(this)
  }
  readMore() {
    this.setState({ displayBio: true })
  }
  showLess() {
    this.setState({ displayBio: false })
  }
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Rosdell and I am a software Developer</p>
        <p>I am always looking forward to working on a meaningful project</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Kampala Uganda,and I code everyday</p>
            <p>
              my favorite language is JavaScript and I think React.js is awesome
            </p>
            <p>Besides coding i also do Ziki and swimming</p>
            <button onClick={this.showLess}>Show Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.readMore}>Read More</button>
          </div>
        )}
        {/* {bio} */}
      </div>
    )
  }
}
export default App
