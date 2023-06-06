import React from "react";
import "../Encouragement/Encouragement.css";

const Encouragement = ({ cardKey, quote, author }) => {

    return (
        <article className='card'>
            <h3 className="quote">"{quote}"</h3>
            <p className="author">- {author}</p>
        </article>
    )
}

export default Encouragement