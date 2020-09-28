import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb1">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link className="nav-link" to="/"><i className="fas fa-home"></i></Link></li>
                <li className="nav-item"><Link className="nav-link" to="/books">Books</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/authors">Authors</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/genres">Genres</Link></li>
            </ul>
        </div>
    </nav>
);
