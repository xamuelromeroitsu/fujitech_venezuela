import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { insertRow } from '../../lib/supabaseClient'
import { rules } from '../../lib/validators'
import Button from '../../components/ui/Button'
import SkeletonCard from '../../components/ui/SkeletonCard'
import Input from '../../components/ui/Input'
import FormSuccess from '../../components/form/FormSuccess'
import ChipGroup from '../../components/form/ChipGroup'
import PersonalDataFields from '../../components/form/PersonalDataFields'
import FormError from '../../components/form/FormError'
import { IconArrowUp } from '../../components/icons'
import { useLanguage } from '../../i18n/LanguageContext'
import './EmpleoForm.css'

const MANIOBRAS = [
  { value: 'Ajustes electromecánicos', key: 'adjustments' },
  { value: 'Controladores / tableros', key: 'controllers' },
  { value: 'Seguridad y paracaídas', key: 'safety' },
  { value: 'Hidráulicos', key: 'hydraulic' },
  { value: 'Escaleras mecánicas', key: 'escalators' },
  { value: 'Modernización de grupos', key: 'modernization' },
]

const INICIAL = {
  nombre: '',
  email: '',
  telefono: '',
  ciudad: '',
  anios: '',
  maniobras: [],
  cv: null,
}

function validate(v, t) {
  const errors = {}
  const nameError = rules.nombre(v.nombre, t); if (nameError) errors.nombre = nameError
  const emailError = rules.email(v.email, t); if (emailError) errors.email = emailError
  const phoneError = rules.telefono(v.telefono, t); if (phoneError) errors.telefono = phoneError
  if (v.anios && (Number(v.anios) < 0 || Number(v.anios) > 60)) errors.anios = t('forms.validation.years')
  if (v.maniobras.length === 0) errors.maniobras = t('forms.validation.maneuvers')
  const cvError = rules.archivoCV(v.cv, t); if (cvError) errors.cv = cvError
  return errors
}

export default function EmpleoForm() {
  const { t } = useLanguage()
  const [enviado, setEnviado] = useState(false)
  const { values, errors, handleChange, handleSubmit, isSubmitting, setValue, reset } = useForm({
    initialValues: INICIAL,
    validate: (formValues) => validate(formValues, t),
    getErrorMessage: (error) => t('forms.validation.submit', {
      details: error?.message || t('forms.validation.unexpected'),
    }),
    onSubmit: async (v) => {
      await insertRow('candidatos_empleo', {
        nombre: v.nombre,
        email: v.email,
        telefono: v.telefono,
        ciudad: v.ciudad,
        anios_experiencia: v.anios ? Number(v.anios) : null,
        maniobras: v.maniobras,
        cv_presentado: Boolean(v.cv),
      })
    },
  })

  if (enviado) {
    return (
      <FormSuccess
        nombre={values.nombre}
        titulo={t('forms.employment.successTitle')}
        mensaje={t('forms.employment.successMessage')}
        textoBoton={t('forms.employment.reset')}
        onReset={() => { reset(); setEnviado(false) }}
      />
    )
  }

  return (
    <form className="empleo" onSubmit={(e) => handleSubmit(e).then((r) => { if (r.ok) setEnviado(true) })}>
      <div className="empleo__grid">
        <PersonalDataFields values={values} errors={errors} onChange={handleChange} />
        <Input label={t('forms.employment.city')} name="ciudad" value={values.ciudad} onChange={handleChange} />
        <Input label={t('forms.employment.years')} name="anios" type="number" min="0" max="60" value={values.anios} onChange={handleChange} error={errors.anios} inputMode="numeric" />
      </div>

      <ChipGroup
        label={t('forms.employment.skills')}
        options={MANIOBRAS.map((option) => ({
          value: option.value,
          label: t(`forms.employment.maneuvers.${option.key}`),
        }))}
        value={values.maniobras}
        onChange={(v) => setValue('maniobras', v)}
        multi
        error={errors.maniobras}
      />

      <div className="empleo__file-upload" data-reveal>
        <label className="empleo__file-label" htmlFor="cv">
          <div className="empleo__file-dropzone" id="dropzone">
            <IconArrowUp size={32} strokeWidth={1.5} className="empleo__file-icon" />
            <p className="empleo__file-text">{t('forms.employment.upload')}</p>
            <p className="empleo__file-hint">{t('forms.employment.fileHint')}</p>
            <input
              id="cv"
              name="cv"
              type="file"
              accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="empleo__file-input"
              onChange={(e) => setValue('cv', e.target.files?.[0] || null)}
              onDragOver={(e) => { e.preventDefault(); e.currentTarget.closest('.empleo__file-dropzone').classList.add('empleo__file-dropzone--drag') }}
              onDragLeave={(e) => { e.currentTarget.closest('.empleo__file-dropzone').classList.remove('empleo__file-dropzone--drag') }}
              onDrop={(e) => {
                e.preventDefault()
                e.currentTarget.closest('.empleo__file-dropzone').classList.remove('empleo__file-dropzone--drag')
                if (e.dataTransfer.files[0]) setValue('cv', e.dataTransfer.files[0])
              }}
            />
          </div>
        </label>
        {values.cv && (
          <div className="empleo__file-selected">
            <span className="empleo__file-name">{values.cv.name}</span>
            <span className="empleo__file-size">{(values.cv.size / 1024 / 1024).toFixed(2)} MB</span>
            <button type="button" className="empleo__file-remove" onClick={() => setValue('cv', null)} aria-label={t('forms.employment.removeFile')}>×</button>
          </div>
        )}
        {errors.cv && <p className="field__error" role="alert">{errors.cv}</p>}
      </div>

      <FormError error={errors._form} />
  {/* El bloque acompana el envio; los datos y el boton deshabilitado siguen visibles. */}
      {isSubmitting && <SkeletonCard compact label={t('forms.employment.loading')} />}
      <Button type="submit" disabled={isSubmitting} size="lg">
        {isSubmitting ? t('forms.employment.submitting') : t('forms.employment.submit')}
      </Button>
    </form>
  )
}