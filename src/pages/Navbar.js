import React from 'react';
import { Link }from 'react-router-dom';
import '../css/Navbar.css'

function Navbar() {

    return (
        <div className="Navbar">
            <ul>
                <h2>
                    <Link className="links" to='/'>
                        Home
                    </Link>
                </h2>
                
                <h2>
                    <Link className="links" to="/users">
                        User List   
                    </Link>
                </h2>  
            </ul>
        </div>
    );
}

export default Navbar;