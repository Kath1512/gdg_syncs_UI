import './Marquee.css'

/* Continuously scrolling text strip — right to left, infinite loop */
export default function Marquee() {
  /* Duplicate text so the scroll feels seamless */
  const text = 'you know you love me, xoxo gossip girl  •  '

  return (
    <div className="marquee-strip" aria-label="you know you love me, xoxo gossip girl">
      <div className="marquee-track">
        {/* Render twice so the gap is never visible during the loop */}
        <span className="marquee-text">{text.repeat(6)}</span>
        <span className="marquee-text" aria-hidden="true">{text.repeat(6)}</span>
      </div>
    </div>
  )
}
