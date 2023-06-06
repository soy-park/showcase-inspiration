import React from "react";
import "../CardContainer/CardContainer.css";
import Encouragement from "../Encouragement/Encouragement";

function CardContainer({ quotes }) {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (id) => {
        if (!favorites.includes(id)) {
            setFavorites([...favorites, id])
        } else {
            setFavorites(favorites.filter(cardId => cardId !== id))
        }
    }

    const cards = quotes.map(quote => {
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

    return (
        <section className="cards-container">
            {cards}
        </section>
    )
}

export default CardContainer
  