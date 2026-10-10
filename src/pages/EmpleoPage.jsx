import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import EmpleoForm from '../features/empleo/EmpleoForm'
import { useLanguage } from '../i18n/LanguageContext'
import './Pages.css'

export default function EmpleoPage() {
  const { t } = useLanguage()
  return (
    <main className="page">
      <div className="container">
        <SectionHeading
          className="page__header"
          eyebrow={t('forms.pages.employmentEyebrow')}
          title={t('forms.pages.employmentTitle')}
          description={t('forms.pages.employmentDescription')}
        />
        <Card variant="lined-top" className="empleo-page__card">
          <EmpleoForm />
        </Card>
      </div>
    </main>
  )
}