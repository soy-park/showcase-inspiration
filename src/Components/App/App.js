import React, { Component } from "react";
import {Route, Switch, NavLink } from "react-router-dom";
import '../App/App.css';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [], 
      favorites: [],
      error: ''
    }
  }

  componentDidMount = () => {
    return fetch("https://quote-garden.onrender.com/api/v3/quotes")
      .then(response => {
        if (!response.ok) {
          this.setState({ error: `${response.status}, ${response.statusText}`})
          throw new Error(`${response.status}, ${response.statusText}`)
        }
        return response.json()
      }) 
      .then(data => {
        this.setState({ quotes: data.data })
      })
      .catch(err => {
        this.setState({ error: `${err}` })
        throw new Error(`${err}`)
      })
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
        <Switch>
          <Route exact path='/' render={() => <CardContainer quotes={this.state.quotes} />}/>
          <Route path='/favorites' render={() => <CardContainer quotes={this.state.favorites} />}/>
        </Switch>
      </main>
    )
  }
}

export default App;