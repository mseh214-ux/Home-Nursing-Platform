import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Booking from './components/Booking'
import Emergency from './components/Emergency'
import Footer from './components/Footer'

function App() {

  return (
    <div className="app" dir="rtl">

      <Navbar />
      <Hero />
      <Services />
      <About />
      <Booking />
      <Emergency />
      <Footer />

    </div>
  )
}

export default App