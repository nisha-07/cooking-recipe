import './Navbar.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <Link to="/" className='brand'>
                    Cooking recipe
                </Link>
                <Link to="/create">
                    Create a new recipe
                </Link>
            </nav>

        </div>
    )
}

export default Navbar
