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
import { useLanguage } from '../../i18n/LanguageContext'
import './CotizadorForm.css'

const PASOS = [
  { key: 'data', value: 'datos' },
  { key: 'equipment', value: 'equipo' },
  { key: 'coverage', value: 'cobertura' },
]
const TIPOS_INMUEBLE = [
  { value: 'Residencial', key: 'residential' },
  { value: 'Comercial', key: 'commercial' },
  { value: 'Industrial', key: 'industrial' },
  { value: 'Edificio de oficinas', key: 'office' },
]
const SERVICIOS = [
  { value: 'Mantenimiento', key: 'maintenance' },
  { value: 'Modernización', key: 'modernization' },
  { value: 'Obra nueva', key: 'newConstruction' },
  { value: 'Salvaescaleras / Accesibilidad', key: 'accessibility' },
]
const COBERTURAS = [
  { id: 'basica', key: 'basic' },
  { id: 'repuestos', key: 'parts' },
  { id: '24-7', key: 'emergency' },
]

const INICIAL = {
  nombre: '',
  email: '',
  telefono: '',
  edificio: '',
  tipoInmueble: '',
  servicio: 'Mantenimiento',
  paradas: '1',
  cobertura: 'basica',
  mensaje: '',
}

function validate(values, t) {
  const errors = {}
  const nameError = rules.nombre(values.nombre, t); if (nameError) errors.nombre = nameError
  const emailError = rules.email(values.email, t); if (emailError) errors.email = emailError
  const phoneError = rules.telefono(values.telefono, t); if (phoneError) errors.telefono = phoneError
  const buildingError = rules.edificio(values.edificio, t); if (buildingError) errors.edificio = buildingError
  const propertyTypeError = rules.tipoInmueble(values.tipoInmueble, t); if (propertyTypeError) errors.tipoInmueble = propertyTypeError
  if (values.paradas && Number(values.paradas) < 1) errors.paradas = t('forms.validation.stops')
  return errors
}

export default function CotizadorForm() {
  const { t } = useLanguage()
  const [paso, setPaso] = useState(0)
  const [enviado, setEnviado] = useState(false)
  const { values, errors, setErrors, handleChange, handleSubmit, isSubmitting, setValue } = useForm({
    initialValues: INICIAL,
    validate: (formValues) => validate(formValues, t),
    getErrorMessage: (error) => t('forms.validation.submit', {
      details: error?.message || t('forms.validation.unexpected'),
    }),
    onSubmit: async (v) => {
      await insertRow('leads', {
        nombre: v.nombre,
        email: v.email,
        telefono: v.telefono,
        edificio: v.edificio,
        tipo_inmueble: v.tipoInmueble,
        servicio: v.servicio,
        paradas: Number(v.paradas),
        cobertura: v.cobertura,
        mensaje: v.mensaje,
        canal: 'cotizador',
      })
    },
  })

  async function handleNext() {
    const errs = validate(values, t)
    const relevant = paso === 0
      ? ['nombre', 'email', 'telefono', 'edificio']
      : paso === 1 ? ['tipoInmueble', 'servicio', 'paradas'] : []
    const next = {}
    relevant.forEach((k) => { if (errs[k]) next[k] = errs[k] })
    if (Object.keys(next).length > 0) { setErrors(errs); return }
    setPaso((p) => Math.min(p + 1, PASOS.length - 1))
  }

  if (enviado) {
    return (
      <FormSuccess
        nombre={values.nombre}
        titulo={t('forms.quote.successTitle')}
        mensaje={t('forms.quote.successMessage')}
      />
    )
  }

  return (
    <form className="cotizador" onSubmit={(e) => handleSubmit(e).then((r) => { if (r.ok) setEnviado(true) })}>
      <ol className="cotizador__rail" aria-label={t('forms.quote.stepsLabel')}>
        {PASOS.map((p, i) => (
          <li key={p.key} className={`cotizador__step-marker ${i === paso ? 'cotizador__step-marker--active' : ''} ${i < paso ? 'cotizador__step-marker--done' : ''}`}>
            <span className="cotizador__step-number">{i + 1}</span>
            <span className="cotizador__step-label">{t(`forms.quote.steps.${p.key}`)}</span>
          </li>
        ))}
      </ol>

      {paso === 0 && (
        <div className="cotizador__step" data-reveal>
          <PersonalDataFields values={values} errors={errors} onChange={handleChange} />
          <Input label={t('forms.quote.building')} name="edificio" maxLength={50} value={values.edificio} onChange={handleChange} error={errors.edificio} />
        </div>
      )}

      {paso === 1 && (
        <div className="cotizador__step">
          <ChipGroup label={t('forms.quote.propertyType')} options={TIPOS_INMUEBLE.map((option) => ({
            value: option.value,
            label: t(`forms.quote.propertyTypes.${option.key}`),
          }))} value={values.tipoInmueble} onChange={(v) => setValue('tipoInmueble', v)} error={errors.tipoInmueble} />
          <ChipGroup label={t('forms.quote.service')} options={SERVICIOS.map((option) => ({
            value: option.value,
            label: t(`forms.quote.services.${option.key}`),
          }))} value={values.servicio} onChange={(v) => setValue('servicio', v)} />
          <Input
            label={t('forms.quote.stops')}
            name="paradas"
            type="number"
            min="1"
            max="99"
            value={values.paradas}
            onChange={handleChange}
            error={errors.paradas}
            inputMode="numeric"
          />
        </div>
      )}

      {paso === 2 && (
        <div className="cotizador__step">
          <fieldset className="cotizador__coberturas" aria-label={t('forms.quote.coverageLabel')}>
            <legend className="visually-hidden">{t('forms.quote.selectCoverage')}</legend>
            {COBERTURAS.map((c) => (
              <label key={c.id} className={`cotizador__cobertura ${values.cobertura === c.id ? 'cotizador__cobertura--active' : ''}`}>
                <input
                  type="radio"
                  name="cobertura"
                  value={c.id}
                  checked={values.cobertura === c.id}
                  onChange={handleChange}
                  className="visually-hidden"
                />
                <div className="cotizador__cobertura-content">
                  <strong className="cotizador__cobertura-label">{t(`forms.quote.coverages.${c.key}.label`)}</strong>
                  <span className="cotizador__cobertura-text">{t(`forms.quote.coverages.${c.key}.text`)}</span>
                </div>
              </label>
            ))}
          </fieldset>
          <Input
            label={t('forms.quote.message')}
            name="mensaje"
            type="textarea"
            value={values.mensaje}
            onChange={handleChange}
            hint={t('forms.quote.messageHint')}
          />
          <FormError error={errors._form} />
        </div>
      )}

      <div className="cotizador__nav">
        {paso < PASOS.length - 1 ? (
          <Button type="button" onClick={handleNext}>{t('forms.quote.continue')}</Button>
        ) : (
          <Button type="submit" disabled={isSubmitting} size="lg">
            {isSubmitting ? t('forms.quote.submitting') : t('forms.quote.submit')}
          </Button>
        )}
      </div>
      {/* Se conserva el formulario visible y se indica la espera sin permitir otro envio. */}
      {isSubmitting && <SkeletonCard compact label={t('forms.quote.loading')} />}
    </form>
  )
}