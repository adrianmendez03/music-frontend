import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
    return (
        <div className="navbar">
            <Link className="logo" to="/">
                Motif
            </Link>
        </div>
    )
}

export default Nav