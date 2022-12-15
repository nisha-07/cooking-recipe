import './Navbar.css';

import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

const Navbar = () => {
    const { color } = useContext(ThemeContext);

    return (
        <div className='navbar' style={{ background: color }}>
            <nav>
                <Link to="/" className='brand'>
                    Cooking recipe
                </Link>
                <Searchbar />
                <Link to="/create">
                    Create a new recipe
                </Link>
            </nav>
        </div>
    )
}

export default Navbar
