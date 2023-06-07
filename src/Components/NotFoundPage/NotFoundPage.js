import React from "react";
import { NavLink } from "react-router-dom";

function NotFoundPage() {

    return (
        <main>
            <h3>Page was not found</h3>
            <NavLink to="/">Click here for your Dose of Quotes!</NavLink>
        </main>
    )
}

export default NotFoundPage
