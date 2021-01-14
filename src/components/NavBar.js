import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="navBar">
            <div className="logo">
            <Link to="/">
            <i className="fa fa-address-book"></i>
            Contacts
            </Link>
            </div>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/">All</Link>
                    </li>
                    <li>
                        <Link to="/add-contact">Add</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
