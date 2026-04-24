import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './SpotlightPage.css'

/* Page 1 — dark navy screen with a cursor-following spotlight that reveals the content */
export default function SpotlightPage() {
  const pageRef = useRef(null)
  const navigate = useNavigate()

  /* Update CSS custom properties on mouse move so the spotlight follows the cursor */
  function handleMouseMove(e) {
    const rect = pageRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    pageRef.current.style.setProperty('--spotlight-x', `${x}px`)
    pageRef.current.style.setProperty('--spotlight-y', `${y}px`)
  }

  return (
    <div
      className="spotlight-page"
      ref={pageRef}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight mask layer — reveals content underneath as cursor moves */}
      <div className="spotlight-mask" />

      {/* Content revealed by the spotlight */}
      {/* Text block — left-aligned like the design */}
      <div className="spotlight-content">
        <p className="spotlight-line--sans">hey upper east siders...</p>
        <p className="spotlight-line--mixed">
          <span className="spotlight-cursive-inline">gossip girl here</span>
          {' – and i have'}
        </p>
        <p className="spotlight-line--sans">the biggest news ever</p>
      </div>

      {/* Envelope — absolutely positioned bottom-right, overlapping the last text line */}
      <button
        className="spotlight-envelope-btn"
        onClick={() => navigate('/main')}
        aria-label="Enter landing page"
      >
        <img src="/assets/-3S.png" alt="envelope" className="spotlight-envelope-img" />
      </button>
    </div>
  )
}
