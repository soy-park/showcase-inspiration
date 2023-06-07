import React, { Component } from "react";
import {Route, NavLink, Switch } from "react-router-dom";
import '../App/App.css';
import CardContainer from '../CardContainer/CardContainer';
import Favorite from "../Favorite/Favorite";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

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
    if (this.state.favorites.some(favorite => favorite._id === quote._id)) {
      return;
    } else {
      this.setState((prevState) => ({favorites: [...prevState.favorites, quote]}))
    }
  }

  toggleFavorite = (id) => {
    const selectedQuote = this.state.quotes.find(quote => quote._id === id);

    if (!this.state.favorites.some(favorite => favorite._id === id)) {
      this.favoriteQuote(selectedQuote)
    } else {
      const updatedFavs = this.state.favorites.filter(favorite => favorite._id !== id)
      this.setState({ favorites: updatedFavs })
    }
  }

  render() {
    return (
      <main className="main-page">
        <section className="header-and-nav">
          <h1 className="heading">Medicine for the Mind</h1>
          <nav>
            <NavLink to='/'>All Quotes</NavLink>
            <NavLink to='/favorites'>Favorites</NavLink>
          </nav>
        </section>
        <section className="encouragement-section">
        {this.state.error && <p className="error-message">{this.state.error}</p>}
          <Switch>
            <Route exact path='/' render={() => <CardContainer quotes={this.state.quotes} favorites={this.state.favorites} toggleFavorite={this.toggleFavorite} />}/>
            <Route path='/favorites' render={() => <Favorite favorites={this.state.favorites} toggleFavorite={this.toggleFavorite} />}/>
            <Route path="*" render={() => <NotFoundPage />} />
          </Switch>
        </section>
      </main>
    )
  }
}

export default App;