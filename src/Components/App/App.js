import React, { Component } from "react";
import {Route, NavLink } from "react-router-dom";
import '../App/App.css';
import CardContainer from '../CardContainer/CardContainer';
import Favorite from "../Favorite/Favorite";

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

  favoriteQuote = (quote) => {
    if (this.state.favorites.length > 0) {
      this.setState({ favorites: [...this.state.favorites, quote] })
    } else {
      this.setState({ favorites: quote })
    }
  }

  toggleFavorite = (id) => {
    const selectedQuote = quotes.find(quote => quote._id === id);

    if (!this.state.favorites.includes(selectedQuote)) {
      this.favoriteQuote(selectedQuote)
    } else if (this.state.favorites.includes(selectedQuote)) {
      const updatedFavs = this.state.favorites.filter(favorite => favorite._id !== id)
      this.setState({ favorites: updatedFavs })
    }
  }

  render() {
    return (
      <main className="main-page">
        <h1>Meditation is Medicine for the Mind</h1>
        <h2>Encouragement Regarding Aging</h2>
        <nav>
          <NavLink to='/'>All Quotes</NavLink>
          <NavLink to='/favorites'>Favorites</NavLink>
        </nav>
        {this.state.error && <h5 className="error-message">{this.state.error}</h5>}
        <Switch>
          <Route path='/' render={() => <CardContainer quotes={this.state.quotes} favorites={this.state.favorites} favoriteQuote={this.favoriteQuote} />}/>
          <Route path='/favorites' render={() => <Favorite quotes={this.state.quotes} favorites={this.state.favorites} favoriteQuote={this.favoriteQuote} />}/>
        </Switch>
      </main>
    )
  }
}

export default App;