import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">

      <a href="#home" className="logo" onClick={closeMenu}>
        <span>✚</span> Home Nursing
      </a>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
        <a href="#home" onClick={closeMenu}>الرئيسية</a>
        <a href="#services" onClick={closeMenu}>خدماتنا</a>
        <a href="#about" onClick={closeMenu}>من نحن</a>
        <a href="#contact" onClick={closeMenu}>تواصل معنا</a>
      </nav>

      <a
        href="#booking"
        className="nav-button"
        onClick={closeMenu}
      >
        احجز الآن
      </a>

    </header>
  )
}

export default Navbar