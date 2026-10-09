import SectionHeading from '../../components/ui/SectionHeading'
import Card from '../../components/ui/Card'
import { IconShieldCheck, IconDatabase, IconCertifiedUser, IconWrench } from '../../components/icons'
import { useLanguage } from '../../i18n/LanguageContext'
import './SoloFujitec.css'

export default function SoloFujitec() {
  const { t } = useLanguage()
  const reasons = [
    { key: 'originalParts', icon: <IconWrench size={32} strokeWidth={1.5} /> },
    { key: 'factoryWarranty', icon: <IconShieldCheck size={32} strokeWidth={1.5} /> },
    { key: 'traceability', icon: <IconDatabase size={32} strokeWidth={1.5} /> },
    { key: 'certifiedTechnicians', icon: <IconCertifiedUser size={32} strokeWidth={1.5} /> },
  ]

  return (
    <section className="solo-fujitec" id="servicio-fujitec" data-reveal>
      <div className="container">
        <SectionHeading
          eyebrow={t('landing.factoryService.eyebrow')}
          title={t('landing.factoryService.title')}
          description={t('landing.factoryService.description')}
        />
        <div className="solo-fujitec__grid">
          {reasons.map(({ key, icon }) => (
            <Card
              key={key}
              variant="lined-top"
              icon={icon}
              title={t(`landing.factoryService.items.${key}.title`)}
              subtitle={t(`landing.factoryService.items.${key}.text`)}
            />
          ))}
        </div>
        <div className="solo-fujitec__aviso">
          <strong>{t('landing.factoryService.noticeTitle')}</strong>
          <span>{t('landing.factoryService.noticeText')}</span>
        </div>
      </div>
    </section>
  )
}