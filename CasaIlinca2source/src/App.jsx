import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Description from './pages/Description'
import Destinations from './pages/Destinations'
import Spaces from './pages/Spaces'
import Exterior from './pages/Exterior'
import InteriorSelection from './pages/InteriorSelection'
import CamereSelection from './pages/CamereSelection'
import Camera from './pages/Camera'
import Living from './pages/Living'
import Bai from './pages/Bai'
import Location from './pages/Location'
import Contact from './pages/Contact'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/spaces" element={<Spaces />} />
        <Route path="/exterior" element={<Exterior />} />
        <Route path="/interior" element={<InteriorSelection />} />
        <Route path="/camere" element={<CamereSelection />} />
        <Route path="/camera/:id" element={<Camera />} />
        <Route path="/living" element={<Living />} />
        <Route path="/bai" element={<Bai />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  )
}
