import React, { useState } from "react";
import "../CardContainer/CardContainer.css";
import Encouragement from "../Encouragement/Encouragement";

function CardContainer({ quotes }) {
    const [favorites, setFavorites] = useState([]);
    let cards;

    const toggleFavorite = (id) => {
        const selectedQuote = quotes.find(quote => quote._id === id);

        if (selectedQuote && !favorites.some(favorite => favorite._id === id)) {
          const newFavorite = {
            _id: selectedQuote._id,
            quoteText: selectedQuote.quoteText,
            quoteAuthor: selectedQuote.quoteAuthor
          };
          setFavorites([...favorites, newFavorite]);
        } else if (selectedQuote && favorites.some(favorite =>favorite._id === id)) {
          setFavorites(favorites.filter(favorite => favorite._id !== id));
        }
    }

    if (window.location.pathname === '/') {
        cards = quotes.map(quote => {
            const isFavorite = favorites.includes(quote._id)
        
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
        cards = favorites.map(favorite => {

        })
    }

    return (
        <section className="cards-container">
            {cards}
        </section>
    )
}

export default CardContainer
  