import React, { Component } from "react";
import { Route } from "react-router-dom";
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
        this.setState({ quotes: data.data })
      })
      .catch(err => {throw new Error(`${err}`)})
  }

  render() {
    return (
      <main className="main-page">
        <h1>Meditation is Medicine for the Mind</h1>
        <h3>Encouragement Regarding Aging</h3>
        <nav>
          <NavLink exact to='/'>All Quotes</NavLink>
          <NavLink to='/favorites'>Favorites</NavLink>
        </nav>
      </main>
    )
  }
}

export default App;