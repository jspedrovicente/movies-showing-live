import './header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link className='logo' to="/"> Filmes Atuais :)</Link>
            <Link className='favoritos' to="/favoritos"> Filmes Curtidos</Link>
        </header>
    )

}

export default Header;