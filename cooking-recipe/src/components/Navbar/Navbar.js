import './Navbar.css';

import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';
import useThemeContext from '../../hooks/useTheme';

const Navbar = () => {

    const { color } = useThemeContext()

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
