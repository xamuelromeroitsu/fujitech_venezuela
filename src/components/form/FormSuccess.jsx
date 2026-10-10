import Button from '../ui/Button'
import { IconShieldCheck } from '../icons'
import { useLanguage } from '../../i18n/LanguageContext'
import './FormSuccess.css'

export default function FormSuccess({ nombre, titulo, mensaje, textoBoton, onReset }) {
  const { t } = useLanguage()
  return (
    <div className="form-success" role="status">
      <div className="form-success__icon">
        <IconShieldCheck size={48} strokeWidth={2} color="var(--color-success)" />
      </div>
      <h3 className="form-success__title">{titulo}</h3>
      <p className="form-success__message">{t('forms.success.thanks', { name: nombre })} {mensaje}</p>
      {onReset && textoBoton && (
        <Button variant="outline" onClick={onReset}>{textoBoton}</Button>
      )}
    </div>
  )
}