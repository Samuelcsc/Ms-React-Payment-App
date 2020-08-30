import React from 'react'
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light home">
            <Link to="/" className="navbar-brand logo" ><strong>OLA PAY</strong></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item menu">
                    <Link to="/about" className="nav-link" >About</Link>
                </li>
                <li className="nav-item menu">
                    <Link to="/services"className="nav-link" >Services</Link>
                </li>
                <li className="nav-item menu">
                    <Link to="/contact" className="nav-link" >Contact</Link>
                </li>
                <li className="nav-item menu">
                    <Link to="/contact" className="nav-link" >Blog</Link>
                </li>
                <li className="nav-item menu">
                    <Link to="/contact" className="nav-link" id="sign">Sign In  </Link>
                </li>
                </ul>
            </div>
            
</nav>
    )
}

export default Nav
