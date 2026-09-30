import './Navbar.css'

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navigation principale">
        <a className="navbar__brand" href="#accueil" aria-label="H&A Ingénieure — Accueil">
          <img
            className="navbar__logo"
            src="/logo.jpeg"
            alt="H&A Ingénieure, bureau d’études en génie civil et génie électrique"
            width="1080"
            height="823"
            fetchPriority="high"
          />
        </a>

        <ul className="navbar__links">
          <li>
            <a className="navbar__link" href="#accueil" aria-current="page">
              Accueil
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
