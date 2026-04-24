import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SpotlightPage from './pages/SpotlightPage'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SpotlightPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
