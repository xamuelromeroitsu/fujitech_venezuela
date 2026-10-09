import SectionHeading from '../../components/ui/SectionHeading'
import Card from '../../components/ui/Card'
import { IconWrench, IconShieldCheck, IconDatabase, IconUserCog } from '../../components/icons'
import { useLanguage } from '../../i18n/LanguageContext'
import './PropuestaValor.css'

export default function PropuestaValor() {
  const { t } = useLanguage()
  const pillars = [
    { key: 'maintenance', icon: <IconWrench size={32} strokeWidth={1.5} /> },
    { key: 'openTechnology', icon: <IconShieldCheck size={32} strokeWidth={1.5} /> },
    { key: 'transparentBudgets', icon: <IconDatabase size={32} strokeWidth={1.5} /> },
    { key: 'certifiedTalent', icon: <IconUserCog size={32} strokeWidth={1.5} /> },
  ]

  return (
    <section className="propuesta" id="propuesta" data-reveal>
      <div className="container">
        <SectionHeading
          eyebrow={t('landing.value.eyebrow')}
          title={t('landing.value.title')}
          description={t('landing.value.description')}
        />
        <div className="propuesta__grid">
          {pillars.map(({ key, icon }) => (
            <Card
              key={key}
              variant="lined-top"
              icon={icon}
              title={t(`landing.value.pillars.${key}.title`)}
              subtitle={t(`landing.value.pillars.${key}.text`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}