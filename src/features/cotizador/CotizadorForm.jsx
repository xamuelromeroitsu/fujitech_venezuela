import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { insertRow } from '../../lib/supabaseClient'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import './CotizadorForm.css'

const PASOS = [
  { key: 'datos', label: '1. Tus datos' },
  { key: 'equipo', label: '2. El equipo' },
  { key: 'cobertura', label: '3. Cobertura' },
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
  if (!values.nombre.trim()) errors.nombre = 'Ingresa tu nombre'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Email inválido'
  if (!values.telefono.trim()) errors.telefono = 'Ingresa un teléfono'
  if (values.paradas && Number(values.paradas) < 1) errors.paradas = 'Mínimo 1 parada'
  return errors
}

export default function CotizadorForm() {
  const [paso, setPaso] = useState(0)
  const [enviado, setEnviado] = useState(false)
  const { values, errors, handleChange, handleSubmit, isSubmitting, setValue } = useForm({
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
      ? ['nombre', 'email', 'telefono']
      : paso === 1 ? ['tipoInmueble', 'servicio'] : []
    const next = {}
    relevant.forEach((k) => { if (errs[k]) next[k] = errs[k] })
    if (Object.keys(next).length > 0) return
    setPaso((p) => Math.min(p + 1, PASOS.length - 1))
  }

  if (enviado) {
    return (
      <div className="cotizador__success" role="status">
        <p className="cotizador__success-icon">✓</p>
        <h3>Solicitud recibida</h3>
        <p>Gracias, {values.nombre}. Un asesor Fujitec te contactará en menos de 24 horas hábiles.</p>
        <Button variant="secondary" onClick={() => { setEnviado(false); setPaso(0) }}>
          Nueva solicitud
        </Button>
      </div>
    )
  }

  return (
    <form className="cotizador" onSubmit={(e) => handleSubmit(e).then((r) => { if (r.ok) setEnviado(true) })}>
      <ol className="cotizador__pasos">
        {PASOS.map((p, i) => (
          <li key={p.key} className={`cotizador__paso ${i === paso ? 'cotizador__paso--active' : ''} ${i < paso ? 'cotizador__paso--done' : ''}`}>
            {p.label}
          </li>
        ))}
      </ol>

      {paso === 0 && (
        <div className="cotizador__step">
          <Input label="Nombre completo" name="nombre" value={values.nombre} onChange={handleChange} error={errors.nombre} required />
          <Input label="Email" name="email" type="email" value={values.email} onChange={handleChange} error={errors.email} required />
          <Input label="Teléfono / WhatsApp" name="telefono" type="tel" value={values.telefono} onChange={handleChange} error={errors.telefono} required />
          <Input label="Nombre del edificio o comunidad" name="edificio" value={values.edificio} onChange={handleChange} />
        </div>
      )}

      {paso === 1 && (
        <div className="cotizador__step">
          <div className="field">
            <span className="field__label">Tipo de inmueble</span>
            <div className="cotizador__chips">
              {TIPOS_INMUEBLE.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`cotizador__chip ${values.tipoInmueble === t ? 'cotizador__chip--active' : ''}`}
                  onClick={() => setValue('tipoInmueble', t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="field">
            <span className="field__label">Servicio que necesitas</span>
            <div className="cotizador__chips">
              {SERVICIOS.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`cotizador__chip ${values.servicio === s ? 'cotizador__chip--active' : ''}`}
                  onClick={() => setValue('servicio', s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <Input
            label="Número de paradas / pisos"
            name="paradas"
            type="number"
            min="1"
            max="99"
            value={values.paradas}
            onChange={handleChange}
            error={errors.paradas}
          />
        </div>
      )}

      {paso === 2 && (
        <div className="cotizador__step">
          <div className="cotizador__coberturas">
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
                <strong>{c.label}</strong>
                <span>{c.text}</span>
              </label>
            ))}
          </div>
          <Input
            label="Cuéntanos más (opcional)"
            name="mensaje"
            type="textarea"
            value={values.mensaje}
            onChange={handleChange}
            hint="Ej.: cuántos ascensores tiene el edificio, antigüedad, marca actual..."
          />
          {errors._form && <p className="field__error">{errors._form}</p>}
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
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Solicitar propuesta'}
          </Button>
        )}
      </div>
    </form>
  )
}
