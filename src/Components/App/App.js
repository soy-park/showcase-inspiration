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
          throw new Error(`${response.status}, ${response.statusText}`)
        }
        return response.json()
      }) 
      .then(data => {
        this.setState({ quotes: data.data })
      })
      .catch(err => {
        this.setState({ error: `${err.message}` })
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
    const selectedQuote = this.state.quotes.find(quote => quote._id === id);

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
        <h2>Aging: Number of Years of Fun</h2>
        <nav>
          <NavLink exact to='/'>All Quotes</NavLink>
          <NavLink to='/favorites'>Favorites</NavLink>
        </nav>
        {this.state.error && <h5 className="error-message">{this.state.error}</h5>}
        <Route exact path='/' render={() => <CardContainer quotes={this.state.quotes} favorites={this.state.favorites} toggleFavorite={this.toggleFavorite} />}/>
        <Route path='/favorites' render={() => <Favorite favorites={this.state.favorites} toggleFavorite={this.toggleFavorite} />}/>
      </main>
    )
  }
}

export default App;