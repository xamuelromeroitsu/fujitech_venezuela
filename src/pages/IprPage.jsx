import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import IprChecker from '../features/ipr/IprChecker'
import { useLanguage } from '../i18n/LanguageContext'
import './Pages.css'

export default function IprPage() {
  const { t } = useLanguage()
  return (
    <main className="page">
      <div className="container">
        <SectionHeading
          className="page__header"
          eyebrow={t('ipr.pageEyebrow')}
          title={t('ipr.pageTitle')}
          description={t('ipr.pageDescription')}
        />
        <Card variant="lined-top" className="ipr-page__card">
          <IprChecker />
        </Card>
      </div>
    </main>
  )
}