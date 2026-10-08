import {
  Clock3,
  MapPin,
  MessageCircle,
  Martini,
  Store,
  Trophy,
  ArrowUpRight,
} from 'lucide-react';

const logoSrc = '/images/SnapInsta.to_817329503_18110618407964205_4406768761620626291_n.jpg[1].jpeg';

function App() {
  return (
    <main className="page-shell">
      <section className="poster" aria-label="EA FC 26/27 gaming tournament poster">
        <div className="poster-glow poster-glow-one" />
        <div className="poster-glow poster-glow-two" />
        <div className="grid-overlay" />

        <header className="poster-header">
          <div className="brand-lockup">
            <div className="logo-frame">
              <img src={logoSrc} alt="Stayela logo" />
            </div>
            <span className="brand-caption">Presents</span>
          </div>
          <div className="edition-pill">
            <span className="edition-dot" />
            Season 01
          </div>
        </header>

        <div className="hero-copy">
          <p className="eyebrow"><span /> The ultimate console showdown</p>
          <h1>
            <span>EA FC</span>
            <strong>26/27</strong>
          </h1>
          <div className="hero-rule"><span>GAMING TOURNAMENT</span><i /></div>
          <p className="hero-description">Bring your squad. Own the pitch.<br />Leave with the bragging rights.</p>
        </div>

        <div className="event-date-card">
          <div className="date-number">07</div>
          <div className="date-meta">
            <span>November</span>
            <strong>2026</strong>
          </div>
          <div className="date-divider" />
          <div className="day-label">SAT<span>•</span></div>
        </div>

        <div className="details-grid">
          <div className="detail-card location-card">
            <div className="icon-wrap"><MapPin size={20} strokeWidth={2.2} /></div>
            <div><span className="detail-label">Venue</span><strong>352 Elias Motswaledi Road</strong><small>Mofolo South</small></div>
          </div>
          <div className="detail-card">
            <div className="icon-wrap"><Clock3 size={20} strokeWidth={2.2} /></div>
            <div><span className="detail-label">Kick-off</span><strong>16H00</strong><small>Doors open early</small></div>
          </div>
          <div className="detail-card fee-card">
            <div className="icon-wrap"><Trophy size={20} strokeWidth={2.2} /></div>
            <div><span className="detail-label">Entry fee</span><strong>R80</strong><small>Per player</small></div>
          </div>
        </div>

        <div className="experience-row">
          <div className="experience-card bar-card">
            <div className="experience-icon"><Martini size={22} /></div>
            <div><strong>Cocktail bar</strong><span>Alcoholic & non-alcoholic drinks available</span></div>
          </div>
          <div className="experience-card stall-card">
            <div className="experience-icon"><Store size={22} /></div>
            <div><strong>Free stall spots</strong><span>Available — enquire first to reserve</span></div>
          </div>
        </div>

        <footer className="poster-footer">
          <div className="contact-block">
            <span className="footer-label"><MessageCircle size={14} /> Info & enquiries</span>
            <div className="contacts"><span>Kgotso <b>+27 63 194 3892</b></span><span>Khanyi <b>+27 62 709 3218</b></span><span>Hludi <b>+27 65 853 3209</b></span></div>
          </div>
          <div className="cta-mark"><span>READY?</span><ArrowUpRight size={19} /></div>
        </footer>
      </section>
    </main>
  );
}

export default App;
