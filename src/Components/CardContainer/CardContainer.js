import React, { useState } from "react";
import "../CardContainer/CardContainer.css";
import Encouragement from "../Encouragement/Encouragement";

function CardContainer({ quotes, favorites, favoriteQuote }) {
    let cards;



    // const removeFavorite = (id) => {
    //     const updatedFavs = favorites.filter(favorite => favorite._id !== id)
    //     setState({ favorites: updatedFavs })
    // }

    if (window.location.pathname === '/') {
        console.log(window.location.pathname)
        return cards = quotes.map(quote => {
            const isFavorite = favorites.some(favorite => favorite._id === quote._id)
        
            return (
                <section className="card">
                    <Encouragement 
                        key={quote._id}
                        quote={quote.quoteText}
                        author={quote.quoteAuthor}
                    /> 
                    <button 
                        className={`favorite-button ${isFavorite ? "favorite" : ''}`} 
                        onClick={() => toggleFavorite(quote._id)}>
                        {isFavorite ? "Unfavor" : "Favorite!"}
                    </button>
                </section>
            )
        })
    } else if (window.location.pathname === '/favorites') {
        console.log(favorites)
        return cards = favorites.map(favorite => {

            return (
                <section className="card">
                    <Encouragement 
                        key={favorite._id}
                        quote={favorite.quoteText}
                        author={favorite.quoteAuthor}
                    /> 
                <button 
                    className="delete-button" 
                    // onClick={() => removeFavorite(favorite._id)}>
                    >Remove from Favorites
                </button>
            </section>
            )
        })
    }

    // return (
    //     <section className="cards-container">
    //         {cards}
    //     </section>
    // )
}

export default CardContainer
  