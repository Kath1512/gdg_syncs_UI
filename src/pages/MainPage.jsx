import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import GooglyEyes from '../components/GooglyEyes'
import DraggableEnvelope from '../components/DraggableEnvelope'
import Marquee from '../components/Marquee'
import './MainPage.css'

/* Gossip content for each envelope paper */
const GOSSIP_ITEMS = [
  { id: 1, gossip: "Spotted: B sneaking out of the Plaza at midnight... who was she with? 👀", style: { top: '30px',  left: '8%'   } },
  { id: 2, gossip: "S was seen buying a one-way ticket to Paris. Running from something? 💌", style: { top: '20px',  left: '38%'  } },
  { id: 3, gossip: "Chuck Bass donated anonymously to the MET. Or did he? 🎭",               style: { top: '40px',  right: '8%'  } },
  { id: 4, gossip: "N has been calling an unknown number every night at 11pm... 🌙",         style: { top: '180px', left: '20%'  } },
  { id: 5, gossip: "Who wore it better? The answer might surprise you. xoxo 💅",            style: { top: '200px', left: '52%'  } },
  { id: 6, gossip: "A new face was spotted at the Empire rooftop party last night... 🥂",    style: { top: '320px', left: '33%'  } },
]

export default function MainPage() {
  const teaSectionRef = useRef(null)
  const location = useLocation()

  /* Scroll to tea section if navigated here with ?section=tea (from About navbar) */
  useEffect(() => {
    if (location.search.includes('section=tea')) {
      teaSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.search])

  function scrollToTea() {
    teaSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="main-page">
      <Navbar scrollToTea={scrollToTea} />

      {/* ── Page 2: Landing ──────────────────────────── */}
      <section id="landing-section" className="landing-section">
        <div className="landing-text">
          {/* XOXO at full opacity */}
          <h1 className="landing-xoxo">XOXO</h1>
          {/* gossip girl at 20% opacity */}
          <p className="landing-gossip-girl">gossip girl</p>
        </div>

        {/* Envelope: wiggles on hover, clicking scrolls to tea section */}
        <button
          className="landing-envelope-btn"
          onClick={scrollToTea}
          aria-label="Scroll to tea section"
        >
          <img
            src="/assets/-3S.png"
            alt="envelope"
            className="landing-envelope-img"
          />
        </button>
      </section>

      {/* ── Page 3: Tea / Gossip ─────────────────────── */}
      <section id="tea-section" className="tea-section" ref={teaSectionRef}>
        {/* Sticky googly eyes fixed in the center of the viewport */}
        <GooglyEyes />

        {/* Scattered draggable envelopes */}
        <div className="tea-envelopes-container">
          {GOSSIP_ITEMS.map((item) => (
            <DraggableEnvelope
              key={item.id}
              gossip={item.gossip}
              style={item.style}
            />
          ))}
        </div>

        {/* Marquee sits after the envelopes container — at the very bottom of the section */}
        <Marquee />
      </section>
    </div>
  )
}
