import { Link } from 'react-router-dom'
import ServiceIcon from './ServiceIcon'
import './Services.css'

const courantFort = [
  'Étude et bilan de puissance électrique',
  'Dimensionnement des installations électriques',
  'Conception des tableaux électriques TGBT, TD et tableaux divisionnaires',
  'Études des réseaux de distribution électrique BT et MT',
  'Dimensionnement des câbles et canalisations électriques',
  'Étude des protections électriques et de la sélectivité',
  'Étude de mise à la terre et des régimes de neutre',
  'Étude de protection contre les surtensions et la foudre',
  'Conception des installations d’éclairage intérieur et extérieur',
  'Étude de l’éclairage de sécurité',
  'Études et dimensionnement des groupes électrogènes et sources de secours',
  'Études des postes de transformation et équipements moyenne tension',
  'Études des installations photovoltaïques et de leur raccordement électrique',
  'Élaboration des schémas unifilaires et plans d’implantation',
  'Élaboration des dossiers techniques nécessaires à la réalisation des travaux',
]

const courantFaible = [
  'Réseaux informatiques et câblage structuré',
  'Réseaux téléphoniques et prises de communication',
  'Systèmes de détection et d’alarme incendie',
  'Systèmes de vidéosurveillance CCTV',
  'Contrôle d’accès et gestion des accès',
  'Interphonie et vidéophonie',
  'Systèmes d’alarme intrusion',
  'Sonorisation et systèmes de diffusion sonore',
  'Réseaux de communication et infrastructures CFA',
  'Pré-équipement pour les systèmes de gestion technique du bâtiment GTB/GTC',
  'Études et coordination des différents réseaux courants faibles',
]

const projectSteps = [
  'Analyse du besoin',
  'Conception',
  'Dimensionnement',
  'Plans & schémas',
  'Dossier technique',
  'Coordination',
  'Assistance au suivi des travaux',
]

function StudyList({ items }: { items: string[] }) {
  return (
    <ul className="electrical-study__list">
      {items.map((item) => (
        <li key={item}><ServiceIcon name="check" /><span>{item}</span></li>
      ))}
    </ul>
  )
}

function ServiceElectrique() {
  return (
    <div className="electrical-page">
      <header className="electrical-hero">
        <div className="services-container">
          <nav className="services-breadcrumb services-breadcrumb--dark" aria-label="Fil d’Ariane">
            <Link to="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <Link to="/services">Nos services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Génie électrique</span>
          </nav>
          <div className="electrical-hero__inner">
            <div className="electrical-hero__copy">
              <p className="services-eyebrow services-eyebrow--light">Études & ingénierie électrique</p>
              <h1>Génie <span>électrique.</span></h1>
              <p className="electrical-hero__description">
                De l’analyse des besoins au suivi des travaux, des études
                électriques claires, précises et adaptées à chaque projet.
              </p>
            </div>
            <div className="electrical-hero__domains">
              <a href="#courant-fort" className="electrical-domain">
                <ServiceIcon name="bolt" />
                <strong>CFO</strong>
                <span>Puissance & distribution</span>
                <span className="electrical-domain__link">Courant fort <ServiceIcon name="arrow-right" /></span>
              </a>
              <a href="#courant-faible" className="electrical-domain">
                <ServiceIcon name="network" />
                <strong>CFA</strong>
                <span>Communication & sécurité</span>
                <span className="electrical-domain__link">Courant faible <ServiceIcon name="arrow-right" /></span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav className="electrical-navigation" aria-label="Sections du service électrique">
        <div className="services-container electrical-navigation__links">
          <a href="#courant-fort">Courant fort <span>CFO</span></a>
          <a href="#courant-faible">Courant faible <span>CFA</span></a>
          <a href="#approche">Notre approche</a>
          <a href="#demarche">Notre démarche</a>
          <a href="#engagement">Notre engagement</a>
        </div>
      </nav>

      <div className="services-container electrical-studies">
        <section id="courant-fort" className="electrical-study" aria-labelledby="cfo-title">
          <figure className="electrical-study__visual">
            <img src="/CourantFort.jpeg" alt="Étude de courant fort : tableau électrique, schéma unifilaire, distribution et calcul d’éclairage" width="1536" height="1024" />
            <figcaption>
              <span className="service-symbol"><ServiceIcon name="bolt" /></span>
              <div><strong>Puissance & distribution</strong><span>Des installations pensées dans leur ensemble.</span></div>
              <span className="electrical-study__code">CFO</span>
            </figcaption>
          </figure>
          <div className="electrical-study__content">
            <p className="services-eyebrow">01 / Courant fort</p>
            <h2 id="cfo-title">Courant Fort <span>– CFO</span></h2>
            <p className="electrical-study__description">
              Nous réalisons les études complètes des installations électriques
              en courant fort, depuis l’analyse des besoins jusqu’à la
              conception des plans et schémas électriques.
            </p>
            <StudyList items={courantFort} />
          </div>
        </section>

        <section id="courant-faible" className="electrical-study electrical-study--reverse" aria-labelledby="cfa-title">
          <figure className="electrical-study__visual">
            <img src="/Courant%20Faible%20.jpeg" alt="Étude de courant faible : réseaux informatiques, communication, vidéosurveillance, contrôle d’accès et sécurité incendie" width="1536" height="1024" loading="lazy" />
            <figcaption>
              <span className="service-symbol"><ServiceIcon name="network" /></span>
              <div><strong>Communication & sécurité</strong><span>Des réseaux connectés aux besoins du bâtiment.</span></div>
              <span className="electrical-study__code">CFA</span>
            </figcaption>
          </figure>
          <div className="electrical-study__content">
            <p className="services-eyebrow">02 / Courant faible</p>
            <h2 id="cfa-title">Courant Faible <span>– CFA</span></h2>
            <p className="electrical-study__description">
              Nous concevons également les installations de communication,
              de sécurité et de gestion technique des bâtiments.
            </p>
            <StudyList items={courantFaible} />
          </div>
        </section>
      </div>

      <section id="approche" className="electrical-approach" aria-labelledby="approach-title">
        <div className="services-container electrical-approach__inner">
          <div>
            <span className="service-symbol"><ServiceIcon name="layers" /></span>
            <p className="services-eyebrow">Notre approche</p>
            <h2 id="approach-title">Une approche intégrée<br />et adaptée au projet.</h2>
          </div>
          <div className="electrical-prose">
            <p>
              Notre démarche repose sur une conception globale permettant
              d’assurer la cohérence technique entre les installations
              électriques CFO, CFA et les autres corps d’état.
            </p>
            <p>
              Nous réalisons les études en tenant compte de l’architecture du
              bâtiment, des besoins fonctionnels, des contraintes techniques,
              de la sécurité des personnes et des équipements, ainsi que
              des objectifs de performance énergétique.
            </p>
            <p>
              Chaque projet fait l’objet d’une étude adaptée à sa nature et
              à son niveau de complexité, avec une attention particulière
              portée au dimensionnement, à la sécurité, à la fiabilité,
              à la maintenabilité et à l’optimisation des coûts.
            </p>
          </div>
        </div>
      </section>

      <section id="demarche" className="electrical-process services-container" aria-labelledby="process-title">
        <p className="services-eyebrow">Notre démarche</p>
        <h2 id="process-title">De l’étude à la réalisation.</h2>
        <p className="electrical-process__intro">Notre bureau d’études accompagne le projet à différentes étapes :</p>
        <ol className="electrical-process__steps">
          {projectSteps.map((step, index) => (
            <li key={step}>
              <span className="electrical-process__number" aria-hidden="true">0{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="electrical-process__note">
          Notre objectif est de fournir des études électriques claires,
          précises et directement exploitables par les entreprises, tout
          en assurant une coordination efficace avec l’ensemble des
          intervenants du projet.
        </p>
      </section>

      <section id="engagement" className="electrical-commitment" aria-labelledby="commitment-title">
        <div className="services-container electrical-commitment__inner">
          <div>
            <span className="service-symbol"><ServiceIcon name="shield" /></span>
            <p className="services-eyebrow services-eyebrow--light">Qualité · Rigueur · Fiabilité</p>
            <h2 id="commitment-title">Notre engagement.</h2>
          </div>
          <div className="electrical-prose">
            <p>
              Nous plaçons la qualité des études, la rigueur technique et
              la fiabilité des solutions au cœur de notre démarche afin
              de contribuer à la réussite de chaque projet.
            </p>
            <p>
              Qu’il s’agisse d’un bâtiment résidentiel, tertiaire,
              commercial, industriel ou d’un projet d’infrastructure,
              nous proposons des solutions électriques adaptées aux
              besoins spécifiques de nos clients.
            </p>
            <Link className="services-back-link" to="/services">
              <ServiceIcon name="arrow-left" /> Retour à nos services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceElectrique

