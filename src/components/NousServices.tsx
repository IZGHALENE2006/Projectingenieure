import { Link } from 'react-router-dom'
import ServiceIcon from './ServiceIcon'
import './Services.css'

function NousServices() {
  return (
    <section className="services-page" aria-labelledby="services-title">
      <div className="services-container">
        <nav className="services-breadcrumb" aria-label="Fil d’Ariane">
          <Link to="/">Accueil</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Nos services</span>
        </nav>

        <header className="services-intro">
          <p className="services-eyebrow">Nos domaines d’expertise</p>
          <h1 id="services-title">Deux expertises.<br /><span>Une même exigence.</span></h1>
          <p>
            Du génie civil au génie électrique, nous concevons des solutions
            techniques adaptées à la nature et aux ambitions de votre projet.
          </p>
        </header>

        <div className="service-choices">
          <article className="service-choice">
            <div className="service-choice__image">
              <img src="/photoAccueil.jpeg" alt="Ingénieurs étudiant les plans sur un chantier de construction" width="960" height="640" />
              <span className="service-choice__index" aria-hidden="true">01</span>
            </div>
            <div className="service-choice__body">
              <span className="service-symbol"><ServiceIcon name="building" /></span>
              <h2>Génie civil</h2>
              <p>
                L’ingénierie du bâtiment et des infrastructures, de la conception
                des structures aux réseaux et à la voirie.
              </p>
              <ul className="service-tags" aria-label="Expertises en génie civil">
                <li>Béton armé</li>
                <li>Charpente métallique</li>
                <li>Voirie & réseaux</li>
              </ul>
              <div className="service-choice__footer">
                <span className="service-choice__soon">Présentation à venir</span>
              </div>
            </div>
          </article>

          <Link className="service-choice service-choice--link" to="/services/electrique" aria-label="Découvrir le service Génie électrique">
            <div className="service-choice__image">
              <img src="/Courant%20Fort%20.jpeg" alt="Installations électriques, schémas de distribution et étude d’éclairage d’un bâtiment" width="1536" height="1024" />
              <span className="service-choice__index" aria-hidden="true">02</span>
            </div>
            <div className="service-choice__body">
              <span className="service-symbol"><ServiceIcon name="bolt" /></span>
              <h2>Génie électrique</h2>
              <p>
                Des études complètes en courant fort et courant faible pour des
                installations sûres, fiables et adaptées à vos besoins.
              </p>
              <ul className="service-tags" aria-label="Expertises en génie électrique">
                <li>Courant fort · CFO</li>
                <li>Courant faible · CFA</li>
              </ul>
              <div className="service-choice__footer">
                <span>Découvrir notre expertise</span>
                <span className="service-choice__arrow"><ServiceIcon name="arrow-right" /></span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NousServices

