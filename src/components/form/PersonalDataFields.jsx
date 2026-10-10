import Input from '../ui/Input'
import { useLanguage } from '../../i18n/LanguageContext'

/**
 * PersonalDataFields — Campos de datos personales reutilizables.
 * Se usa en CotizadorForm, EmpleoForm y cualquier futuro formulario.
 *
 * Props:
 *   values  — Objeto con los valores del formulario
 *   errors  — Objeto con los errores de validación
 *   onChange — Handler de cambios (handleChange de useForm)
 */
export default function PersonalDataFields({ values, errors, onChange }) {
  const { t } = useLanguage()
  return (
    <>
      <Input label={t('forms.personal.fullName')} name="nombre" value={values.nombre} onChange={onChange} error={errors.nombre} pattern="[^\d]*" required />
      <Input label={t('forms.personal.email')} name="email" type="email" value={values.email} onChange={onChange} error={errors.email} required />
      <Input label={t('forms.personal.phone')} name="telefono" type="tel" maxLength={16} inputMode="numeric" pattern="[+\d\s-]*" value={values.telefono} onChange={onChange} error={errors.telefono} required />
    </>
  )
}
