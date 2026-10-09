import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { insertRow } from '../../lib/supabaseClient'
import { rules } from '../../lib/validators'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import FormSuccess from '../../components/form/FormSuccess'
import ChipGroup from '../../components/form/ChipGroup'
import PersonalDataFields from '../../components/form/PersonalDataFields'
import FormError from '../../components/form/FormError'
import './CotizadorForm.css'

const PASOS = [
  { key: 'datos', label: 'Datos' },
  { key: 'equipo', label: 'Equipo' },
  { key: 'cobertura', label: 'Cobertura' },
]

const TIPOS_INMUEBLE = ['Residencial', 'Comercial', 'Industrial', 'Edificio de oficinas']
const SERVICIOS = ['Mantenimiento', 'Modernización', 'Obra nueva', 'Salvaescaleras / Accesibilidad']
const COBERTURAS = [
  { id: 'basica', label: 'Básica', text: 'Mano de obra programada y preventiva.' },
  { id: 'repuestos', label: 'Con Repuestos', text: 'Incluye repuestos menores y mayores homologados.' },
  { id: '24-7', label: 'Servicio 24/7', text: 'Atención de emergencias en cualquier hora.' },
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

function validate(values) {
  const errors = {}
  const n = rules.nombre(values.nombre); if (n) errors.nombre = n
  const e = rules.email(values.email); if (e) errors.email = e
  const t = rules.telefono(values.telefono); if (t) errors.telefono = t
  const ed = rules.edificio(values.edificio); if (ed) errors.edificio = ed
  const ti = rules.tipoInmueble(values.tipoInmueble); if (ti) errors.tipoInmueble = ti
  if (values.paradas && Number(values.paradas) < 1) errors.paradas = 'Mínimo 1 parada'
  return errors
}

export default function CotizadorForm() {
  const [paso, setPaso] = useState(0)
  const [enviado, setEnviado] = useState(false)
  const { values, errors, setErrors, handleChange, handleSubmit, isSubmitting, setValue } = useForm({
    initialValues: INICIAL,
    validate,
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
    const partial = { ...values }
    const errs = validate(partial)
    const relevant = paso === 0
      ? ['nombre', 'email', 'telefono', 'edificio']
      : paso === 1 ? ['tipoInmueble', 'servicio'] : []
    const next = {}
    relevant.forEach((k) => { if (errs[k]) next[k] = errs[k] })
    if (Object.keys(next).length > 0) { setErrors(next); return }
    setPaso((p) => Math.min(p + 1, PASOS.length - 1))
  }

  if (enviado) {
    return (
      <FormSuccess
        nombre={values.nombre}
        titulo="Solicitud recibida"
        mensaje="Un asesor Fujitec te contactará en menos de 24 horas hábiles."
        textoBoton="Nueva solicitud"
        onReset={() => { setEnviado(false); setPaso(0) }}
      />
    )
  }

  return (
    <form className="cotizador" onSubmit={(e) => handleSubmit(e).then((r) => { if (r.ok) setEnviado(true) })}>
      <ol className="cotizador__rail" aria-label="Pasos de cotización">
        {PASOS.map((p, i) => (
          <li key={p.key} className={`cotizador__step-marker ${i === paso ? 'cotizador__step-marker--active' : ''} ${i < paso ? 'cotizador__step-marker--done' : ''}`}>
            <span className="cotizador__step-number">{i + 1}</span>
            <span className="cotizador__step-label">{p.label}</span>
          </li>
        ))}
      </ol>

      {paso === 0 && (
        <div className="cotizador__step" data-reveal>
          <PersonalDataFields values={values} errors={errors} onChange={handleChange} />
          <Input label="Nombre del edificio o comunidad" name="edificio" maxLength={50} value={values.edificio} onChange={handleChange} error={errors.edificio} />
        </div>
      )}

      {paso === 1 && (
        <div className="cotizador__step">
          <ChipGroup label="Tipo de inmueble" options={TIPOS_INMUEBLE} value={values.tipoInmueble} onChange={(v) => setValue('tipoInmueble', v)} error={errors.tipoInmueble} />
          <ChipGroup label="Servicio que necesitas" options={SERVICIOS} value={values.servicio} onChange={(v) => setValue('servicio', v)} />
          <Input
            label="Número de paradas / pisos"
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
          <fieldset className="cotizador__coberturas" aria-label="Nivel de cobertura">
            <legend className="visually-hidden">Selecciona nivel de cobertura</legend>
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
                  <strong className="cotizador__cobertura-label">{c.label}</strong>
                  <span className="cotizador__cobertura-text">{c.text}</span>
                </div>
              </label>
            ))}
          </fieldset>
          <Input
            label="Cuéntanos más (opcional)"
            name="mensaje"
            type="textarea"
            value={values.mensaje}
            onChange={handleChange}
            hint="Ej.: cuántos ascensores tiene el edificio, antigüedad, marca actual..."
          />
          <FormError error={errors._form} />
        </div>
      )}

      <div className="cotizador__nav">
        {paso > 0 && (
          <Button type="button" variant="ghost" onClick={() => setPaso((p) => p - 1)}>
            ← Atrás
          </Button>
        )}
        {paso < PASOS.length - 1 ? (
          <Button type="button" onClick={handleNext}>Continuar →</Button>
        ) : (
          <Button type="submit" disabled={isSubmitting} size="lg">
            {isSubmitting ? 'Enviando...' : 'Solicitar propuesta'}
          </Button>
        )}
      </div>
    </form>
  )
}