import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import '../styles/components/pageheader.css';


function PageHeader() {
    return (
        <header className="nav-header">
            <div className="top-bar-container">
                <Link to="/" className="logout-button" >
                    <FaSignOutAlt size={22} color="rgba(0, 0, 0, 0.7)" />
                </Link>
            </div>
        </header>
    );
}

export default PageHeader;