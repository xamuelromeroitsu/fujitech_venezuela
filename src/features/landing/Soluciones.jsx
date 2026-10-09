import SectionHeading from '../../components/ui/SectionHeading'
import Card from '../../components/ui/Card'
import { IconCog6, IconCpu, IconBuilding2 } from '../../components/icons'
import { useLanguage } from '../../i18n/LanguageContext'
import './Soluciones.css'

export default function Soluciones() {
  const { t } = useLanguage()
  const solutions = [
    { key: 'maintenance', icon: <IconCog6 size={32} strokeWidth={1.5} /> },
    { key: 'modernization', icon: <IconCpu size={32} strokeWidth={1.5} /> },
    { key: 'newConstruction', icon: <IconBuilding2 size={32} strokeWidth={1.5} /> },
  ]

  return (
    <section className="soluciones" id="soluciones" data-reveal>
      <div className="container">
        <SectionHeading
          eyebrow={t('landing.solutions.eyebrow')}
          title={t('landing.solutions.title')}
          description={t('landing.solutions.description')}
        />
        <div className="soluciones__grid">
          {solutions.map(({ key, icon }) => (
            <Card
              key={key}
              variant="lined-bottom"
              icon={icon}
              title={t(`landing.solutions.items.${key}.title`)}
              subtitle={t(`landing.solutions.items.${key}.text`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}