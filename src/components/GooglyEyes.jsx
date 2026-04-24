import { useEffect, useRef } from 'react'
import './GooglyEyes.css'

/* Fixed sticky eyes that track the cursor position.
   Each pupil rotates toward the cursor using trigonometry. */
export default function GooglyEyes() {
  const leftPupilRef = useRef(null)
  const rightPupilRef = useRef(null)

  useEffect(() => {
    function trackCursor(e) {
      rotatePupil(leftPupilRef.current, e.clientX, e.clientY)
      rotatePupil(rightPupilRef.current, e.clientX, e.clientY)
    }

    window.addEventListener('mousemove', trackCursor)
    return () => window.removeEventListener('mousemove', trackCursor)
  }, [])

  /* Calculate angle from the eye's center to the cursor and rotate the pupil */
  function rotatePupil(pupilEl, cursorX, cursorY) {
    if (!pupilEl) return
    const eyeEl = pupilEl.parentElement
    const rect = eyeEl.getBoundingClientRect()
    const eyeCenterX = rect.left + rect.width / 2
    const eyeCenterY = rect.top + rect.height / 2

    /* atan2 gives the angle in radians; convert to degrees */
    const angle = Math.atan2(cursorY - eyeCenterY, cursorX - eyeCenterX) * (180 / Math.PI)
    pupilEl.style.transform = `rotate(${angle}deg)`
  }

  return (
    <div className="googly-eyes" aria-hidden="true">
      <div className="googly-eye" id="googly-eye-left">
        <div className="googly-pupil" ref={leftPupilRef} />
      </div>
      <div className="googly-eye" id="googly-eye-right">
        <div className="googly-pupil" ref={rightPupilRef} />
      </div>
    </div>
  )
}
