import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";
import './App.css';

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
    return fetch("https://quote-garden.onrender.com/api/v3/quots")
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