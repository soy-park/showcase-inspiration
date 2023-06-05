import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [], 
      error: ''
    }
  }

  componentDidMount = () => {
    return fetch("https://quote-garden.onrender.com/api/v3/quots")
      .then(response => {
        if (!response.ok) {
         throw new Error(`${response.status}, ${response.statusText}`)
        }
        return response.json()
    }) 
      .then(data => {
        this.setState({ quotes: data.data })
      })
      .catch(err => this.setState({ error: `${err}` }))
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
        {this.state.error && <h5 className="error-message">{this.state.error}</h5>}
      </main>
    )
  }
}

export default App;