import Navbar from '../components/Navbar'
import PhoneScreen from '../components/PhoneScreen'
import './AboutPage.css'

/* Page 4 — About page with same navbar and phone typing effect */
export default function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />

      <main className="about-main">
        <PhoneScreen />
      </main>
    </div>
  )
}
