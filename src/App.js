import React, { Component } from "react";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    }
  }

  componentDidMount = () => {
    return fetch("https://quote-garden.onrender.com/api/v3/quotes")
      .then(response => {
        if (!response.ok) {
         throw new Error(`${response.status}, ${response.statusText}`)
        }
        return response.json()
    }) 
      .then(data => {
        console.log(data)
        this.setState({ quotes: data })
      })
      .catch(err => {throw new Error(`${err}`)})
  }
}

export default App;