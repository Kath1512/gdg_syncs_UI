import { useState, useRef } from 'react'
import Draggable from 'react-draggable'
import './DraggableEnvelope.css'

/* A draggable envelope card. Clicking (not dragging) reveals a gossip paper beside it.
   nodeRef is required by react-draggable v4+ to avoid the deprecated findDOMNode API. */
export default function DraggableEnvelope({ gossip, style }) {
  const [paperVisible, setPaperVisible] = useState(false)
  const [dragging, setDragging] = useState(false)

  /* Separate refs for the envelope and paper nodes */
  const envelopeRef = useRef(null)
  const paperRef = useRef(null)

  function handleDragStart() {
    setDragging(true)
  }

  function handleDragStop() {
    /* Let the click event fire first, then clear the dragging flag */
    setTimeout(() => setDragging(false), 0)
  }

  function handleEnvelopeClick() {
    if (!dragging) setPaperVisible((prev) => !prev)
  }

  return (
    <div className="envelope-group" style={style}>
      {/* Draggable envelope */}
      <Draggable nodeRef={envelopeRef} onStart={handleDragStart} onStop={handleDragStop}>
        <div
          ref={envelopeRef}
          className="draggable-envelope"
          onClick={handleEnvelopeClick}
          role="button"
          aria-label="Open envelope"
          tabIndex={0}
        >
          <img src="/assets/-3S.png" alt="envelope" className="envelope-img" />
        </div>
      </Draggable>

      {/* Gossip paper — appears next to envelope on click */}
      {paperVisible && (
        <Draggable nodeRef={paperRef}>
          <div ref={paperRef} className="gossip-paper" role="note">
            <p>{gossip}</p>
          </div>
        </Draggable>
      )}
    </div>
  )
}
