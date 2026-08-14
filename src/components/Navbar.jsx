import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import fujitecLogo from '../assets/logos/fujitec-logo.png'
import './Navbar.css'

const LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/cotizar', label: 'Cotizar' },
  { to: '/ipr', label: 'Semáforo IPR' },
  { to: '/empleo', label: 'Trabaja con nosotros' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src={fujitecLogo} alt="Fujitec Venezuela" className="navbar__logo" />
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="navbar-menu"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        <nav id="navbar-menu" className={`navbar__menu ${open ? 'navbar__menu--open' : ''}`}>
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/cotizar" className="btn btn--primary btn--sm navbar__cta" onClick={() => setOpen(false)}>
            Solicitar cotización
          </Link>
        </nav>
      </div>
    </header>
  )
}
