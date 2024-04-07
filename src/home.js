import { Link } from 'react-router-dom';

export const MainPage = () => (
    <nav>
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contacts">Contacts</Link>
            </li>
        </ul>
    </nav>
);
export default MainPage