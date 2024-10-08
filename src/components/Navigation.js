import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/quizz" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>quizz</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;