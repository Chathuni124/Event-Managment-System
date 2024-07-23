import React from 'react';
import { Link } from 'react-router-dom';
import '../component/Header.css';

const Header = () => {
    const handleLogout = () => {
        alert('Logged out successfully!'); 
    };

    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li>
                        <Link to="/add-event" className="nav-link">Add Event</Link>
                    </li>
                    <li>
                        <button onClick={handleLogout} className="nav-button">Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
