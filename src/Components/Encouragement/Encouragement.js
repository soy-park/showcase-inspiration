import React from "react";
import "../Encouragement/Encouragement.css";

const Encouragement = ({ cardKey, quote, author }) => {

    return (
        <details className='encouragement'>
            <h3 className="quote">"{quote}"</h3>
            <p className="author">- {author}</p>
        </details>
    )
}

export default Encouragement