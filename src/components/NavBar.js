import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav">
            <Link to='/'> 
            <img src={'https://i.pinimg.com/originals/96/b9/ea/96b9ea8a45b8649b0c9291394e5033e2.jpg'}
            alt='Logo' />
            </Link>
            <Link to='movies'>Movies</Link>
            <Link to='people'>People</Link>
            <Link to='locations'>Locations</Link>
        </nav>
    )
}

export default NavBar;