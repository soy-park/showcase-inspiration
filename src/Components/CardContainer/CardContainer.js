import React from "react";
import "../CardContainer/CardContainer.css";
import Encouragement from "../Encouragement/Encouragement";

function CardContainer({ quotes, favorites, toggleFavorite }) {

    const cards = quotes.map(quote => {
        const isFavorite = favorites.some(favorite => favorite._id === quote._id);
        
        return (
            <article className="card">
                <Encouragement 
                    key={quote._id}
                    quote={quote.quoteText}
                    author={quote.quoteAuthor}
                    isFavorite={isFavorite}
                /> 
                <button 
                    className={`favorite-button ${isFavorite ? "favorite" : ''}`} 
                    onClick={() => toggleFavorite(quote._id)}>
                    {isFavorite ? "Unfavorite" : "Favorite!"}
                </button>
            </article>
        )
    })

    return (
        <section className="cards-container">
            {cards}
        </section>
    )
}

export default CardContainer

CardContainer.propTypes = {
    quotes: PropTypes.array.isRequired,
    favorites: PropTypes.array,
    toggleFavorite: PropTypes.func.isRequired
}