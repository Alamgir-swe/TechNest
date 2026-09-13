
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import bannerImage from './assets/banner-stack.png'
import TechSection from './component/techsection'
import './App.css'

const navItems = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function App() {

  return (
    <>
      <div className="page-shell">
        <header className="topbar">
          <nav className="navbar container">
            <div className="nav-left desktop-brand">
              <div className="brand-mark">
                <span className="brand-mark__inner">D</span>
              </div>
              <span className="brand-name">Tech Nest</span>
            </div>

            <button className="hamburger-button" type="button" aria-label="Open menu">
              <span />
              <span />
              <span />
            </button>

            <div className="nav-brand-mobile">
              <div className="brand-mark brand-mark--small">
                <span className="brand-mark__inner">D</span>
              </div>
              <span className="brand-name">Dev Stack</span>
            </div>

            <div className="nav-center">
              {navItems.map((item) => (
                <a key={item} href="#" className="nav-link">
                  {item}
                </a>
              ))}
            </div>

            <div className="nav-right">
              <button className="nav-button nav-button--text">Sign In</button>
              <button className="nav-button nav-button--filled">Sign Up</button>
            </div>
          </nav>
        </header>

        <main className="container main-content">
          <section className="hero">
            <div className="hero-copy">
              <p className="eyebrow">Build your perfect stack</p>
              <h1>
                Choose the right <span className="gradient-text">web technologies</span> for your next product.
              </h1>
              <p className="hero-description">
                Explore modern tools, libraries, and platforms to design faster, ship smarter, and build digital experiences that scale.
              </p>
              <div className="hero-actions">
                <button className="primary-button">Explore Technologies</button>
                <button className="secondary-button">Learn More</button>
              </div>
            </div>
            <div className="hero-visual">
              <img src={bannerImage} alt="Technology stack illustration" />
            </div>
          </section>

          <TechSection />
        </main>

        <footer className="footer">
          <div className="container footer-grid">
            <div className="footer-brand">
              <div className="brand-block">
                <div className="brand-mark brand-mark--small">
                  <span className="brand-mark__inner">D</span>
                </div>
                <span className="brand-name"> Tech Nest</span>
              </div>
              <p>Discover the tools, frameworks, and workflows that help teams build faster and smarter.</p>
              <div className="social-links">
                <a href="#" aria-label="GitHub">GitHub</a>
                <a href="#" aria-label="Twitter">Twitter</a>
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
              </div>
            </div>

            <div className="footer-links">
              <div>
                <h4>Product</h4>
                <ul>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Integrations</a></li>
                </ul>
              </div>

              <div>
                <h4>Company</h4>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>

              <div>
                <h4>Legal</h4>
                <ul>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Security</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container footer-bottom__inner">
              <span>© 2026 Tech Nest. All rights reserved.</span>
              <div className="bottom-links">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <ToastContainer position="top-right" autoClose={2400} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover theme="light" />
    </>
  )
}

export default App
