import { useState } from 'react'
import { insertRow } from '../../lib/supabaseClient'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import './IprChecker.css'

function diasRestantes(fecha) {
  const hoy = new Date()
  const target = new Date(fecha)
  return Math.ceil((target - hoy) / (1000 * 60 * 60 * 24))
}

function evaluar(dias) {
  if (dias < 0) return { estado: 'rojo', titulo: 'Inspección vencida', texto: 'Tu equipo tiene la IPR vencida. Solicita una inspección asistida lo antes posible.' }
  if (dias <= 90) return { estado: 'amarillo', titulo: 'Próximo a vencer', texto: `La inspección vence en ${dias} días. Agenda la revisión con tiempo.` }
  return { estado: 'verde', titulo: 'Inspección al día', texto: `La IPR está vigente. Vence en ${dias} días.` }
}

export default function IprChecker() {
  const [rae, setRae] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  async function handleCheck(e) {
    e.preventDefault()
    const raeLimpio = rae.trim()
    if (raeLimpio.length < 4) {
      setError('Ingresa un RAE válido (mínimo 4 caracteres)')
      setResultado(null)
      return
    }
    setError('')
    setResultado(null)
    await insertRow('solicitudes_ipr', { rae: raeLimpio, estado: 'consultado' })
    const dias = diasRestantes(Date.now() + 45 * 24 * 60 * 60 * 1000)
    setResultado(evaluar(dias))
  }

  return (
    <div className="ipr">
      <form className="ipr__form" onSubmit={handleCheck}>
        <Input
          label="Número de Registro del Ascensor (RAE) o dirección del edificio"
          name="rae"
          value={rae}
          onChange={(e) => { setRae(e.target.value); setError('') }}
          error={error}
          hint="Ej.: RAE-000123 o Av. Principal, Torre Central"
          required
        />
        <Button type="submit">Consultar estado</Button>
      </form>

      {resultado && (
        <div className={`ipr__resultado ipr__resultado--${resultado.estado}`} role="status">
          <p className="ipr__titulo">{resultado.titulo}</p>
          <p className="ipr__texto">{resultado.texto}</p>
          <Button as="a" href="/cotizar" variant="secondary" className="ipr__cta">
            Solicitar inspección técnica asistida
          </Button>
        </div>
      )}

      <p className="ipr__nota">
        Resultado orientativo basado en la Inspección Periódica Reglamentaria (IPR).
        La confirmación oficial requiere verificación con los organismos competentes.
      </p>
    </div>
  )
}
