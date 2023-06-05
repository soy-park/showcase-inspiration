import React from "react";
import "../CardContainer/CardContainer.css";
import Encouragement from "../Encouragement/Encouragement";

function CardContainer({ quotes }) {
    const cards = quotes.map(quote => {
        return <>
            <Encouragement 
                key={quote.id}
                quote={quote.quoteText}
                author={quote.quoteAuthor}
            />   
        </>
    })

    return (
        <section className="cards-container">
            {cards}
        </section>
    )
}

export default CardContainer