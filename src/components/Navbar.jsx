import { useNavigate } from 'react-router-dom'
import './Navbar.css'

/* Shared navbar used on Page 2 (MainPage) and Page 4 (AboutPage).
   Accepts a `scrollToTea` prop — only needed on MainPage for the Tea button. */
export default function Navbar({ scrollToTea }) {
  const navigate = useNavigate()

  function handleHome() {
    // If already on /main, scroll to top; otherwise navigate there
    navigate('/main')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleTea() {
    if (scrollToTea) {
      scrollToTea()
    } else {
      // Navigate to main page and signal to scroll to tea section
      navigate('/main?section=tea')
    }
  }

  function handleAbout() {
    navigate('/about')
  }

  return (
    <nav className="navbar">
      {/* Home — left */}
      <button className="nav-btn" onClick={handleHome}>Home</button>
      {/* Tea — center */}
      <button className="nav-btn" onClick={handleTea}>Tea</button>
      {/* About — right */}
      <button className="nav-btn" onClick={handleAbout}>About</button>
    </nav>
  )
}
