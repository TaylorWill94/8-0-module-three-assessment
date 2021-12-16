import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav">
            <Link to='/'>Home</Link>
            <Link to='movies'>Movies</Link>
            <Link to='people'>People</Link>
            <Link to='locations'>Locations</Link>
        </nav>
    )
}

export default NavBar;