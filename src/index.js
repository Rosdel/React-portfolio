import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
ReactDOM.render(<App />, document.getElementById("root"))

class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  speak() {
    console.log("I am", this.name, "and i am", this.age, "years old")
  }
}
// const Animal1 = new Animal("simba", 3)
// Animal1.speak()

class lion extends Animal {
  constructor(name, age, furColor, speed) {
    super(name, age)
    this.furColor = furColor
    this.speed = speed
  }
  roar() {
    console.log(
      "i have",
      this.furColor,
      "fur",
      "and i can run at",
      this.speed,
      "metre/minute"
    )
  }
}
const lion1 = new lion("komba", 6, "brown", 25)
lion1.speak()
lion1.roar()
