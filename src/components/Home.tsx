import './Home.css'

const iconPaths = {
  drafting: (
    <>
      <circle cx="12" cy="5" r="2" />
      <path d="m10.5 6.5-6 14m9-14 6 14M12 1v2M5 15a11 11 0 0 0 14 0M12 12v3" />
    </>
  ),
  building: (
    <>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M6 12H4a2 2 0 0 0-2 2v8h20V10a2 2 0 0 0-2-2h-2M10 22v-4h4v4" />
      <path d="M10 6h4m-4 4h4m-4 4h4" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      <circle cx="9" cy="7" r="4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  arrow: <path d="M12 4v16m-6-6 6 6 6-6" />,
}

function HomeIcon({ name }: { name: keyof typeof iconPaths }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {iconPaths[name]}
    </svg>
  )
}

const cards = [
  {
    icon: 'drafting',
    title: 'Le bureau d’études',
    description:
      'H&A INGÉNIEURE est un bureau d’études d’ingénierie en bâtiment et génie civil. Notre équipe d’ingénieurs et de projeteurs intervient dans les domaines suivants :',
    items: [
      'Béton armé',
      'Charpente métallique',
      'Électricité (CFO / CFA)',
      'Assainissement, réseaux et voirie',
    ],
  },
  {
    icon: 'building',
    title: 'Domaines d’activités',
    description:
      'Nous réalisons pour le compte de nos clients publics ou privés les études d’ingénierie pour les types d’ouvrages suivants :',
    items: [
      'Habitations individuelles ou groupements d’habitations',
      'Immeubles de logements',
      'Immeubles de bureaux',
      'Bâtiments à usages industriels',
      'Équipements publics (écoles, hôpitaux, gymnases)',
    ],
  },
  {
    icon: 'users',
    title: 'Nos clients',
    description:
      'Nous accompagnons les acteurs publics et privés dans leurs projets de construction :',
    items: [
      'Particuliers',
      'Entreprises',
      'Fonds d’investissements privés',
      'Maîtres d’ouvrage publics',
      'Agences d’architecture et bureaux d’études',
    ],
  },
] as const

function Home() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <img
          className="home-hero__photo"
          src="/photoAccueil.jpeg"
          alt="Équipe d’ingénieurs examinant les plans d’un projet sur un chantier"
          width="960"
          height="640"
          fetchPriority="high"
        />
        <div className="home-hero__overlay" />

        <div className="home-container home-hero__content">
          <p className="home-eyebrow home-eyebrow--light">
            Génie civil & génie électrique
          </p>
          <h1 id="home-title">
            L’ingénierie au service<br />
            <span>de vos projets.</span>
          </h1>
          <p className="home-hero__description">
            Conception, études, suivi et conseil.<br />
            Votre bureau d’études en bâtiment et génie civil.
          </p>
          <a className="home-hero__link" href="#presentation">
            Découvrir notre bureau
            <HomeIcon name="arrow" />
          </a>
        </div>

        <div className="home-accreditation">
          <div className="home-container home-accreditation__inner">
            <span className="home-accreditation__icon">
              <HomeIcon name="shield" />
            </span>
            <div className="home-accreditation__text">
              <p className='text-4xl'>BET AGRÉÉ PAR L'ÉTAT : D14 D15</p>
              <span>CERT. N° EX/2026/5287/048276</span>
            </div>
          </div>
        </div>
      </section>

      <section id="presentation" className="home-presentation" aria-labelledby="presentation-title">
        <div className="home-container">
          <div className="home-section-heading">
            <p className="home-eyebrow">H&A Ingénieure</p>
            <h2 id="presentation-title">Une expertise au plus près de vos projets.</h2>
          </div>

          <div className="home-cards">
            {cards.map((card, index) => (
              <article className="home-card" key={card.title}>
                <div className="home-card__top">
                  <span className="home-card__icon">
                    <HomeIcon name={card.icon} />
                  </span>
                  <span className="home-card__number" aria-hidden="true">
                    0{index + 1}
                  </span>
                </div>
                <h3>{card.title}</h3>
                <p className="home-card__description">{card.description}</p>
                <ul className="home-card__list">
                  {card.items.map((item) => (
                    <li key={item}>
                      <HomeIcon name="check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

