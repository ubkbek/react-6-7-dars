import { Link, NavLink } from "react-router-dom";
import './header.css'

function Header() {
    return (
        <header className="container">
            <Link to = "/">Standart logo</Link>

            <nav>
                <ul>
                    <li>
                        <NavLink className={({isActive}) => isActive? "link link--active": "link"} to="/users">Users</NavLink>
                    </li>
                    <li>
                    <NavLink className={({isActive}) => isActive? "link link--active": "link"} to="/posts">Posts</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
     );
}

export default Header;