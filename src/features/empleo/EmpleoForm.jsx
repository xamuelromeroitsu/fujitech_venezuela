import { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { insertRow } from '../../lib/supabaseClient'
// Reglas de validación centralizadas — editar en validators.js
import { rules } from '../../lib/validators'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import FormSuccess from '../../components/form/FormSuccess'
import ChipGroup from '../../components/form/ChipGroup'
import PersonalDataFields from '../../components/form/PersonalDataFields'
import FormError from '../../components/form/FormError'
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

  if (enviado) {
    return (
      <FormSuccess
        nombre={values.nombre}
        titulo="Postulación recibida"
        mensaje="Tu CV quedó en nuestro banco de talento."
        textoBoton="Nueva postulación"
        onReset={() => { setEnviado(false) }}
      />
    )
  }

  return (
    <form className="empleo" onSubmit={(e) => handleSubmit(e).then((r) => { if (r.ok) setEnviado(true) })}>
      <div className="empleo__grid">
        <PersonalDataFields values={values} errors={errors} onChange={handleChange} />
        <Input label="Ciudad" name="ciudad" value={values.ciudad} onChange={handleChange} />
        <Input label="Años de experiencia" name="anios" type="number" min="0" max="60" value={values.anios} onChange={handleChange} error={errors.anios} />
      </div>

      <ChipGroup label="Maniobras que dominas" options={MANIOBRAS} value={values.maniobras} onChange={(v) => setValue('maniobras', v)} multi error={errors.maniobras} />

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

      <FormError error={errors._form} />
      <Button type="submit" disabled={isSubmitting} size="lg">
        {isSubmitting ? 'Enviando...' : 'Postularme en menos de un minuto'}
      </Button>
    </form>
  )
}
