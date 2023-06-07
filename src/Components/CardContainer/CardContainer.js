import React from "react";
import "../CardContainer/CardContainer.css";
import Encouragement from "../Encouragement/Encouragement";

function CardContainer({ quotes, favorites, toggleFavorite }) {

    const cards = quotes.map(quote => {
        const isFavorite = favorites.includes(quote)
        
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

    return (
        <section className="cards-container">
            {cards}
        </section>
    )
}

export default CardContainer
  