import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="nav-container">
                <div className="logo">Project - X</div>
                <nav className="nav-menu">
                    <a href="#" className="nav-item">Home</a>
                    <a href="#" className="nav-item">MD</a>
                    <a href="#" className="nav-item">Community</a>
                    <a href="#" className="nav-item">Content</a>
                    <a href="#" className="nav-item">Chat</a>
                </nav>
                <a href="#" className="login-btn">
                    <span>👤</span>
                    로그인
                </a>
            </div>
        </header>
    );
}

export default Header;