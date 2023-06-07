import React from "react";
import "../Encouragement/Encouragement.css";

const Encouragement = ({ cardKey, quote, author }) => {

    return (
        <section className='encouragement'>
            <h3 className="quote">"{quote}"</h3>
            <p className="author">- {author}</p>
        </section>
    )
}

export default Encouragement

Encouragement.propTypes = {
    cardKey: PropTypes.string,
    quote: PropTypes.string,
    author: PropTypes.string
}