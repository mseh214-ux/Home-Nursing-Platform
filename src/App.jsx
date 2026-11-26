import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Booking from './components/Booking'
import Emergency from './components/Emergency'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import Admin from './components/Admin'

function App() {
 const isAdminPage = window.location.pathname.replace(/\/+$/, '') === '/admin'

  if (isAdminPage) {
    return <Admin />
  }

  return (
    <div className="app" dir="rtl">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Booking />
      <Reviews />
      <Emergency />
      <Footer />
    </div>
  )
}

export default App