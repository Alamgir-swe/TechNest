
import { useEffect, useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import bannerImage from './assets/banner-stack.png'
import './App.css'

type Technology = {
  id: string
  name: string
  category: string
  description: string
  icon: string
  rating: number
  difficulty: string
  badge: string
}

const navItems = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState<Technology[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/technologies.json')
        const data = (await response.json()) as Technology[]
        setTechnologies(data)
      } catch (error) {
        console.error('Failed to load technology data:', error)
        toast.error('Could not load technologies. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    void fetchData()
  }, [])

  const stackIds = useMemo(() => new Set(stack.map((item) => item.id)), [stack])

  const handleAddToStack = (technology: Technology) => {
    if (stackIds.has(technology.id)) {
      toast.warn(`${technology.name} is already in your stack.`)
      return
    }

    setStack((current) => [...current, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  const handleRemove = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id)
    setStack((current) => current.filter((item) => item.id !== id))
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from your stack.`)
    }
  }

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.info('Your stack is already empty.')
      return
    }

    setStack([])
    toast.error('All technologies removed from your stack.')
  }

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

          <section className="tech-section">
            <div className="tech-grid-area">
              {loading ? (
                <div className="loading-state">Loading technologies...</div>
              ) : (
                <div className="tech-grid">
                  {technologies.map((technology) => {
                    const isAdded = stackIds.has(technology.id)

                    return (
                      <article key={technology.id} className="tech-card">
                        <div className="tech-card__top">
                          <div className="tech-icon-wrap">
                            <img src={technology.icon} alt={technology.name} className="tech-icon" />
                          </div>
                          <span className="tech-badge">{technology.badge}</span>
                        </div>

                        <h3>{technology.name}</h3>
                        <p className="tech-description">{technology.description}</p>

                        <div className="tech-meta-row">
                          <span className="meta-chip">{technology.category}</span>
                          <span className="meta-chip meta-chip--muted">{technology.difficulty}</span>
                        </div>

                        <div className="rating-row">
                          <span className="star">★</span>
                          <span>{technology.rating.toFixed(1)}</span>
                        </div>

                        <button
                          className={`add-button ${isAdded ? 'is-added' : ''}`}
                          onClick={() => handleAddToStack(technology)}
                          disabled={isAdded}
                        >
                          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
                        </button>
                      </article>
                    )
                  })}
                </div>
              )}
            </div>

            <aside className="stack-panel">
              {stack.length === 0 ? (
                <div className="stack-empty">
                  <h2>Your Stack</h2>
                  <p>No technologies selected yet.</p>
                  <div className="empty-box">Your stack is empty.</div>
                </div>
              ) : (
                <div className="stack-filled">
                  <h2>Your Stack</h2>
                  <p>{stack.length} Technology Selected</p>

                  <div className="stack-list">
                    {stack.map((item) => (
                      <div key={item.id} className="stack-item">
                        <div className="stack-item__left">
                          <img src={item.icon} alt={item.name} className="stack-item__icon" />
                          <div className="stack-item__text">
                            <strong>{item.name}</strong>
                            <span>{item.category}</span>
                          </div>
                        </div>
                        <button className="remove-item" onClick={() => handleRemove(item.id)} aria-label={`Remove ${item.name}`}>
                          ×
                        </button>
                      </div>
                    ))}
                  </div>

                  <button className="remove-all-button" onClick={handleRemoveAll}>Remove All</button>
                </div>
              )}
            </aside>
          </section>
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
