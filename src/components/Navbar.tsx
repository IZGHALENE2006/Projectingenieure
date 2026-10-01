import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navigation principale">
        <Link className="navbar__brand" to="/" aria-label="H&A Ingénieure — Accueil">
          <img
            className="navbar__logo"
            src="/logo.jpeg"
            alt="H&A Ingénieure, bureau d’études en génie civil et génie électrique"
            width="1080"
            height="823"
            fetchPriority="high"
          />
        </Link>

        <ul className="navbar__links">
          <li>
            <NavLink className="navbar__link" to="/" end>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar__link" to="/services">
              Nos services
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
