import { Link } from 'react-router-dom';
import { navbarClass } from './Navbar.css';

export function Navbar() {
  return (
    <header className={navbarClass}>
      <div>Squid Logs</div>
      <nav>
        <Link to="/auth/login">Login</Link>
      </nav>
    </header>
  );
}
