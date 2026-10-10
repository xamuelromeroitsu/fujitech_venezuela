import { Link } from 'react-router-dom'
import { WHATSAPP_CONFIG, buildWhatsAppLink } from '../../features/whatsapp/whatsapp.config'
import { useLanguage } from '../../i18n/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()
  const waLink = buildWhatsAppLink(
    WHATSAPP_CONFIG.phone,
    WHATSAPP_CONFIG.countryCode,
    t('whatsapp.defaultMessage'),
  )
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img
            src="/images/company/fujitec_now_logo.png"
            alt={t('footer.logoAlt')}
            className="footer__logo"
          />
          <p className="footer__tagline">
            {t('footer.tagline')}
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">{t('footer.products')}</h4>
          <ul className="footer__list">
            <li><Link to="/cotizar">{t('footer.maintenance')}</Link></li>
            <li><Link to="/cotizar">{t('footer.modernization')}</Link></li>
            <li><Link to="/cotizar">{t('footer.newConstruction')}</Link></li>
            <li><Link to="/ipr">{t('footer.iprInspections')}</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">{t('footer.company')}</h4>
          <ul className="footer__list">
            <li><Link to="/empleo">{t('footer.jobs')}</Link></li>
            <li><Link to="/#servicio-fujitec">{t('footer.factoryService')}</Link></li>
            <li><Link to="/">{t('footer.privacy')}</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">{t('footer.contact')}</h4>
          <ul className="footer__list">
            <li className="footer__address">
              {t('footer.address')}
            </li>
            <li>
              <a href={waLink} target="_blank" rel="noopener noreferrer">+58 414-3254458</a>
            </li>
            <li>ventas@fujitec.com.ve</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>{t('footer.copyright', { year })}</p>
          <p className="footer__since">{t('footer.since')}</p>
        </div>
      </div>
    </footer>
  )
}