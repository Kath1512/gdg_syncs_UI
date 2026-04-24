import { useEffect, useState } from 'react'
import './PhoneScreen.css'

const TYPING_TEXT = "hey, did u hear\nthe latest gossip?\n\nxoxo gossip girl"
const TYPING_SPEED_MS = 70 /* ms per character */

/* Nokia phone image with a blue grainy screen overlay and typing effect */
export default function PhoneScreen() {
  const [displayedText, setDisplayedText] = useState('')
  const [charIndex, setCharIndex] = useState(0)

  /* Advance one character at a time */
  useEffect(() => {
    if (charIndex >= TYPING_TEXT.length) return
    const timer = setTimeout(() => {
      setDisplayedText((prev) => prev + TYPING_TEXT[charIndex])
      setCharIndex((prev) => prev + 1)
    }, TYPING_SPEED_MS)
    return () => clearTimeout(timer)
  }, [charIndex])

  return (
    <div className="phone-wrapper">
      {/* SVG grain filter definition — hidden from layout */}
      <svg className="phone-grain-filter" aria-hidden="true">
        <defs>
          <filter id="screen-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="multiply" result="blended" />
          </filter>
        </defs>
      </svg>

      <div className="phone-container">
        {/* Actual Nokia phone image */}
        <img src="/assets/-5.jpg" alt="Nokia phone" className="phone-image" />

        {/* Screen overlay — sits exactly over the white screen area of the image */}
        <div className="phone-screen-overlay">
          {/* Blue grainy background for the screen */}
          <div className="phone-screen-grain" />

          {/* Typing text rendered in Nokia font */}
          <pre className="phone-typing-text">
            {displayedText}
            {charIndex < TYPING_TEXT.length && (
              <span className="typing-cursor">_</span>
            )}
          </pre>
        </div>
      </div>
    </div>
  )
}
