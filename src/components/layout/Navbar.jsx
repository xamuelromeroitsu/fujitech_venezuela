import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import useHideOnScroll from '../../hooks/useHideOnScroll'
import { IconMapPin } from '../icons'
import LanguageSling from './LanguageSling'
import { useLanguage } from '../../i18n/LanguageContext'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const hidden = useHideOnScroll()
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useLanguage()
  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/cotizar', label: t('nav.quote') },
    { to: '/ipr', label: t('nav.ipr') },
    { to: '/empleo', label: t('nav.jobs') },
  ]

  const navigateToLocation = () => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'ubicacion' } })
    } else {
      document.getElementById('ubicacion')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (location.state?.scrollTo === 'ubicacion') {
      const timer = setTimeout(() => {
        document.getElementById('ubicacion')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [location])

  return (
    <header className={`navbar ${hidden ? 'navbar--hidden' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <img
            src="/images/company/logo_trasparente.com.png"
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
          {links.map((link) => (
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
          <button type="button" className="navbar__link navbar__location-link" onClick={navigateToLocation}>
            <IconMapPin size={16} strokeWidth={2} />
            {t('nav.location')}
          </button>
          <LanguageSling />
        </nav>
      </div>
    </header>
  )
}