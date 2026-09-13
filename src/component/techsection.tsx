import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

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

const TechSection = () => {
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
  )
}

export default TechSection
