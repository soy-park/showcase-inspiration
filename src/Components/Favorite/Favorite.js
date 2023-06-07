import React from "react";
import '../Favorite/Favorite.css'
import Encouragement from "../Encouragement/Encouragement";
import PropTypes from "prop-types";

function Favorite({ favorites, toggleFavorite }) {
    
    const favs = favorites.map(favorite => {
        return (
            <article className="fav-card">
                <Encouragement
                    key={favorite._id}
                    quote={favorite.quoteText}
                    author={favorite.quoteAuthor}
                />
                <button 
                    className="delete-button"
                    onClick={() => toggleFavorite(favorite._id)}>
                    Remove from Favorites
                </button>
            </article>
        )
    })
    return (
        <section className='favs-container'>
            {favs}
        </section>
    )   
}

export default Favorite;

Encouragement.propTypes = {
    favorites: PropTypes.array,
    toggleFavorite: PropTypes.func.isRequired
}