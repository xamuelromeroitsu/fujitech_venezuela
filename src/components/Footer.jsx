import { Link } from 'react-router-dom'
import fujitecLogo from '../assets/logos/fujitec-logo-hd.png'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={fujitecLogo} alt="Fujitec Venezuela" className="footer__logo" />
          <p className="footer__tagline">
            Soluciones de transporte vertical en Venezuela desde 1968.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Productos</h4>
          <ul className="footer__list">
            <li><Link to="/cotizar">Mantenimiento</Link></li>
            <li><Link to="/cotizar">Modernización</Link></li>
            <li><Link to="/cotizar">Obra nueva</Link></li>
            <li><Link to="/ipr">Inspecciones IPR</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Empresa</h4>
          <ul className="footer__list">
            <li><Link to="/empleo">Trabaja con nosotros</Link></li>
            <li><Link to="/#servicio-fujitec">Servicio de fábrica</Link></li>
            <li><Link to="/">Privacidad</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Contacto</h4>
          <ul className="footer__list">
            <li>Caracas, Venezuela</li>
            <li>+58 (212) 000-0000</li>
            <li>ventas@fujitec.com.ve</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Fujitec Venezuela. Todos los derechos reservados.</p>
          <p className="footer__since">En el país desde 1968 · Movemos el futuro</p>
        </div>
      </div>
    </footer>
  )
}
