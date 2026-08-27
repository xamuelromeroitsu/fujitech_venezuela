import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { insertRow } from '../../lib/supabaseClient'
// Reglas de validación centralizadas — editar en validators.js
import { rules } from '../../lib/validators'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import './EmpleoForm.css'

const MANIOBRAS = [
  'Ajustes electromecánicos',
  'Controladores / tableros',
  'Seguridad y paracaídas',
  'Hidráulicos',
  'Escaleras mecánicas',
  'Modernización de grupos',
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

function validate(v) {
  const errors = {}
  const n = rules.nombre(v.nombre); if (n) errors.nombre = n
  const e = rules.email(v.email); if (e) errors.email = e
  const t = rules.telefono(v.telefono); if (t) errors.telefono = t
  if (v.anios && (Number(v.anios) < 0 || Number(v.anios) > 60)) errors.anios = 'Años inválidos'
  if (v.maniobras.length === 0) errors.maniobras = 'Selecciona al menos una maniobra'
  const cv = rules.archivoCV(v.cv); if (cv) errors.cv = cv
  return errors
}

export default function EmpleoForm() {
  const [enviado, setEnviado] = useState(false)
  const { values, errors, handleChange, handleSubmit, isSubmitting, setValue } = useForm({
    initialValues: INICIAL,
    validate,
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

  function toggleManiobra(m) {
    setValue(
      'maniobras',
      values.maniobras.includes(m)
        ? values.maniobras.filter((x) => x !== m)
        : [...values.maniobras, m],
    )
  }

  if (enviado) {
    return (
      <div className="empleo__success" role="status">
        <p className="empleo__success-icon">✓</p>
        <h3>Postulación recibida</h3>
        <p>Gracias, {values.nombre}. Tu CV quedó en nuestro banco de talento.</p>
        <Button variant="secondary" onClick={() => { setEnviado(false) }}>Nueva postulación</Button>
      </div>
    )
  }

  return (
    <form className="empleo" onSubmit={(e) => handleSubmit(e).then((r) => { if (r.ok) setEnviado(true) })}>
      <div className="empleo__grid">
        <Input label="Nombre completo" name="nombre" value={values.nombre} onChange={handleChange} error={errors.nombre} pattern="[^\d]*" required />
        <Input label="Email" name="email" type="email" value={values.email} onChange={handleChange} error={errors.email} required />
        <Input label="Teléfono" name="telefono" type="tel" maxLength={16} inputMode="numeric" pattern="[+\d\s-]*" value={values.telefono} onChange={handleChange} error={errors.telefono} required />
        <Input label="Ciudad" name="ciudad" value={values.ciudad} onChange={handleChange} />
        <Input label="Años de experiencia" name="anios" type="number" min="0" max="60" value={values.anios} onChange={handleChange} error={errors.anios} />
      </div>

      <div className="field">
        <span className="field__label">Maniobras que dominas</span>
        <div className="empleo__maniobras">
          {MANIOBRAS.map((m) => (
            <button
              key={m}
              type="button"
              className={`empleo__chip ${values.maniobras.includes(m) ? 'empleo__chip--active' : ''}`}
              onClick={() => toggleManiobra(m)}
            >
              {m}
            </button>
          ))}
        </div>
        {errors.maniobras && <p className="field__error">{errors.maniobras}</p>}
      </div>

      <div className="field">
        {/* MIME types: PDF (.pdf), Word 97-2003 (.doc), Word 2007+ (.docx) */}
        <label className="field__label" htmlFor="cv">
          Síntesis curricular (PDF o Word)
        </label>
        <input
          id="cv"
          name="cv"
          type="file"
          accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="empleo__file"
          onChange={(e) => setValue('cv', e.target.files?.[0] || null)}
        />
        <p className="field__hint">Archivos PDF o Word (.doc, .docx), máximo 5 MB.</p>
        {errors.cv && <p className="field__error" role="alert">{errors.cv}</p>}
      </div>

      {errors._form && <p className="field__error">{errors._form}</p>}
      <Button type="submit" disabled={isSubmitting} size="lg">
        {isSubmitting ? 'Enviando...' : 'Postularme en menos de un minuto'}
      </Button>
    </form>
  )
}
