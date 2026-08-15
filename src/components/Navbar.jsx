import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useHideOnScroll from '../hooks/useHideOnScroll'
import './Navbar.css'

const LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/cotizar', label: 'Cotizar' },
  { to: '/ipr', label: 'Semáforo IPR' },
  { to: '/empleo', label: 'Trabaja con nosotros' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const hidden = useHideOnScroll()

  return (
    <header className={`navbar ${hidden ? 'navbar--hidden' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <img
            src="/logo_trasparente.com.png"
            alt="Fujitec Venezuela"
            className="navbar__logo"
          />
        </Link>

        <button
          type="button"
          className={`navbar__toggle ${open ? 'navbar__toggle--active' : ''}`}
          aria-expanded={open}
          aria-controls="navbar-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
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
        </nav>
      </div>
    </header>
  )
}
