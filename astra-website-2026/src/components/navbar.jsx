import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/bronco-astra-logo.png';

function Navbar() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const q = query.trim();
        if (!q) return;
        navigate(`/search?q=${encodeURIComponent(q)}`);
    }

    return (
        <>
            <nav>
                <NavLink to='/' className="logo">
                    <img src= { logo } alt="Bronco ASTRA Logo" className='astra--logo'/>
                    <h2>Bronco ASTRA</h2>
                </NavLink>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/team'>Team</NavLink>
                <NavLink to='/drone'>Drone</NavLink>
                <NavLink to='/timeline'>Timeline</NavLink>
                <NavLink to='/testing'>Testing</NavLink>
                <NavLink to='/tips'>Tips</NavLink>

                <form className="nav-search" onSubmit={handleSubmit} role="search">
                    <input 
                        className="nav-search__input" 
                        type="search"
                        placeholder="Search..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        aria-label="Search"
                    />
                    <button className="nav-search__btn" type="submit" aria-label="Search">
                        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                            <path
                                d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm11 3-6-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </form>

            </nav>
        </>
    );
}

export default Navbar;