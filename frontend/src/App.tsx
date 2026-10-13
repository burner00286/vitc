import { useState } from 'react';

const EVENTHUB_URL = 'https://eventhubcc.vit.ac.in/EventHub/';
const REGISTRATION_URL = 'https://forms.gle/cEAhnS1wKxaog5TZA';
const POSTER_URL = '/images/qnx-workshop-poster.jpeg';
const QR_URL = '/images/registration-qr.jpeg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="QNX Workshop home">
        <span className="wordmark-accent" aria-hidden="true" />
        <span>
          <strong>QNX WORKSHOP</strong>
          <small>VIT CHENNAI · SENSE</small>
        </span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? 'Close' : 'Menu'}
      </button>
      <nav id="site-navigation" className={menuOpen ? 'site-nav site-nav-open' : 'site-nav'} aria-label="Main navigation">
        <a href="#details" onClick={closeMenu}>Workshop details</a>
        <a href="#schedule" onClick={closeMenu}>Schedule</a>
        <a href="#poster" onClick={closeMenu}>Poster & QR</a>
      </nav>
    </header>
  );
}

function EventHubButton() {
  return (
    <a className="eventhub-button" href={EVENTHUB_URL} target="_blank" rel="noreferrer">
      Open VIT EventHub <span aria-hidden="true">↗</span>
    </a>
  );
}

function RegistrationQr() {
  return (
    <a className="qr-link" href={REGISTRATION_URL} target="_blank" rel="noreferrer">
      <img src={QR_URL} width="247" height="247" loading="lazy" decoding="async" alt="Registration QR code from the official QNX Workshop poster" />
      <span>Scan to open registration form ↗</span>
    </a>
  );
}

export default function App() {
  return (
    <div id="top" className="page-shell">
      <Header />

      <main>
        <section className="hero" aria-labelledby="main-title">
          <div className="hero-copy">
            <p className="overline"><span /> SENSE · SCHOOL OF ELECTRONICS ENGINEERING</p>
            <h1 id="main-title">The QNX<br /><span>Workshop</span></h1>
            <p className="hero-summary">
              A practical introduction to QNX Neutrino, a real-time operating system used in embedded and safety-critical systems.
            </p>

            <dl className="hero-facts">
              <div>
                <dt>Dates</dt>
                <dd>16–17 October 2026</dd>
              </div>
              <div>
                <dt>Time</dt>
                <dd>9:00 AM–4:30 PM</dd>
              </div>
              <div>
                <dt>Venue</dt>
                <dd>AB3 510 · VIT Chennai</dd>
              </div>
            </dl>
            <p className="hero-note">Part 1 also includes an online session on 18 October. Timing to be confirmed by the organisers.</p>
          </div>

          <figure className="poster-preview" id="poster">
            <a href={POSTER_URL} target="_blank" rel="noreferrer" aria-label="Open the official QNX Workshop poster full size">
              <img src={POSTER_URL} width="1131" height="1600" decoding="async" alt="Official QNX Workshop poster provided by VIT Chennai SENSE" />
            </a>
            <figcaption>
              <span>Official workshop poster</span>
              <a href={POSTER_URL} target="_blank" rel="noreferrer">Open full size ↗</a>
            </figcaption>
          </figure>
        </section>

        <section className="registration" aria-labelledby="registration-title">
          <p className="overline">REGISTRATION & EVENT INFORMATION</p>
          <h2 id="registration-title">Ready to take part?</h2>
          <p className="registration-copy">Use the official VIT EventHub portal for event information. You can also open the registration form from the poster QR code.</p>
          <EventHubButton />
          <p className="registration-separator">OR SCAN THE POSTER QR</p>
          <RegistrationQr />
          <p className="portal-note">The button opens the general EventHub portal; confirm the QNX listing and registration status there.</p>
        </section>

        <section className="details section-wrap" id="details" aria-labelledby="details-title">
          <div className="section-heading" id="schedule">
            <p className="overline">AT A GLANCE</p>
            <h2 id="details-title">Workshop details</h2>
          </div>
          <div className="detail-grid">
            <article className="detail-card">
              <span className="detail-label">PART 01</span>
              <h3>QNX Workshop</h3>
              <p className="detail-price">₹200</p>
              <p>In-person sessions on 16–17 October, followed by an online session on 18 October. The poster lists the in-person timing as 9:00 AM–4:30 PM at AB3 510.</p>
            </article>
            <article className="detail-card">
              <span className="detail-label">PART 02</span>
              <h3>Follow-on session</h3>
              <p className="detail-price free-price">Free for Part 1 attendees</p>
              <p>Scheduled for 30–31 October. Attendance at both parts is required to be eligible for the QNX certification exam at VIT Chennai.</p>
            </article>
          </div>
        </section>

        <section className="organisers section-wrap" aria-labelledby="organisers-title">
          <div className="section-heading">
            <p className="overline">NEED MORE INFORMATION?</p>
            <h2 id="organisers-title">Workshop coordinators</h2>
          </div>
          <div className="coordinator-columns">
            <div>
              <h3>Student coordinators</h3>
              <p>M. Shweta <a href="tel:7397475099">73974 75099</a></p>
              <p>Sanjana <a href="tel:8610273014">86102 73014</a></p>
            </div>
            <div>
              <h3>Faculty coordinators</h3>
              <p>Dr. Vijayakumar Peroumal <a href="tel:9894727271">98947 27271</a></p>
              <p>Dr. Manmohan Sharma <a href="tel:88981370593">88981 370593</a></p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-wordmark" href="#top">QNX WORKSHOP <span>· VIT CHENNAI</span></a>
        <span>October 2026</span>
      </footer>
    </div>
  );
}
