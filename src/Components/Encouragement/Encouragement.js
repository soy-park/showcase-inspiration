import React from "react";
import "../Encouragement/Encouragement.css";

const Encouragement = ({ cardKey, quote, author }) => {

    return (
        <article className='card'>
            <h2 className="quote">{quote}</h2>
            <p className="author">{author}</p>
        </article>
    )
}

export default Encouragement