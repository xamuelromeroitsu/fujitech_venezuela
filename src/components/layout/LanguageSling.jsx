import SlingButton from '../ui/SlingButton'
import { useLanguage } from '../../i18n/LanguageContext'
import './LanguageSling.css'

const LANGUAGES = ['es', 'en', 'pt']

export default function LanguageSling() {
  const { language, setLanguage, t } = useLanguage()
  // The same order controls the Sling Button cycle. Add languages here only
  // after providing their text and accessible labels in translations.js.
  const currentLanguageIndex = LANGUAGES.indexOf(language)
  const nextLanguage = LANGUAGES[(currentLanguageIndex + 1) % LANGUAGES.length]

  const cycleLanguage = () => {
    setLanguage(nextLanguage)
  }

  return (
    <SlingButton
      className="language-sling"
      size={42}
      strokeWidth={2}
      padColor="var(--color-surface)"
      iconColor="var(--color-ink)"
      accentColor="var(--color-primary)"
      wellColor="var(--color-primary-tint)"
      bandColor="var(--color-line-strong)"
      onSend={cycleLanguage}
      ariaLabel={`${t('language.change')}. ${t(`language.names.${language}`)}. ${t('language.next')}: ${t(`language.names.${nextLanguage}`)}`}
      hintText={t('language.dragHint')}
    >
      {language.toUpperCase()}
    </SlingButton>
  )
}
