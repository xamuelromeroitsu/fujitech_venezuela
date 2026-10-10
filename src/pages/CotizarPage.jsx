import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import CotizadorForm from '../features/cotizador/CotizadorForm'
import { useLanguage } from '../i18n/LanguageContext'
import './Pages.css'

export default function CotizarPage() {
  const { t } = useLanguage()
  return (
    <main className="page">
      <div className="container">
        <SectionHeading
          className="page__header"
          eyebrow={t('forms.pages.quoteEyebrow')}
          title={t('forms.pages.quoteTitle')}
          description={t('forms.pages.quoteDescription')}
        />
        <Card variant="lined-top" className="cotizador-page__card">
          <CotizadorForm />
        </Card>
      </div>
    </main>
  )
}