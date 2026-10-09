import { Link } from 'react-router-dom'
import { IconArrowRight, IconExternalLink } from '../../components/icons'
import { useLanguage } from '../../i18n/LanguageContext'
import './ContactCta.css'

export default function ContactCta() {
  const { t } = useLanguage()

  return (
    <section className="cta" id="contacto" data-reveal>
      <div className="container cta__inner">
        <h2 className="cta__title">{t('landing.contactCta.title')}</h2>
        <p className="cta__text">
          {t('landing.contactCta.description')}
        </p>
        <div className="cta__actions">
          <Link to="/cotizar" className="btn btn--primary btn--lg">
            {t('landing.contactCta.quote')}
            <IconArrowRight size={20} strokeWidth={2} />
          </Link>
          <Link to="/empleo" className="btn btn--ghost btn--lg">
            {t('landing.contactCta.joinTeam')}
            <IconExternalLink size={18} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  )
}