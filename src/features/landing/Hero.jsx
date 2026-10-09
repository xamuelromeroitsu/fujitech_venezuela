import { Link } from 'react-router-dom'
import { IconArrowRight, IconGridPattern } from '../../components/icons'
import { useLanguage } from '../../i18n/LanguageContext'
import './Hero.css'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero">
      <div className="hero__bg-pattern" aria-hidden="true">
        <IconGridPattern width={120} height={120} spacing={24} dotSize={1} color={ '#0f1218' } opacity={0.04} />
      </div>
      <div className="container hero__inner">
        <div className="hero__badge-wrapper">
          <span className="hero__badge">{t('landing.hero.badge')}</span>
        </div>
        <h1 className="hero__title">
          {t('landing.hero.title.before')}{' '}
          <span className="hero__title-accent">{t('landing.hero.title.accent')}</span>{' '}
          {t('landing.hero.title.after')}
        </h1>
        <p className="hero__subtitle">
          {t('landing.hero.subtitle')}
        </p>
        <div className="hero__actions">
          <Link to="/cotizar" className="btn btn--primary btn--lg">
            {t('landing.hero.requestQuote')}
            <IconArrowRight size={20} strokeWidth={2} />
          </Link>
          <Link to="/ipr" className="btn btn--outline btn--lg">
            {t('landing.hero.checkIpr')}
          </Link>
        </div>
        <ul className="hero__trust" aria-label={t('landing.hero.trustLabel')}>
          <li>
            <svg className="hero__trust-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/><path d="M7 10l3 3 7-7"/></svg>
            {t('landing.hero.trust.originalParts')}
          </li>
          <li>
            <svg className="hero__trust-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/><path d="M7 10l3 3 7-7"/></svg>
            {t('landing.hero.trust.since1968')}
          </li>
          <li>
            <svg className="hero__trust-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/><path d="M7 10l3 3 7-7"/></svg>
            {t('landing.hero.trust.response247')}
          </li>
        </ul>
      </div>
    </section>
  )
}