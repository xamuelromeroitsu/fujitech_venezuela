import { useState } from 'react'
import { insertRow } from '../../lib/supabaseClient'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import SkeletonCard from '../../components/ui/SkeletonCard'
import { IconShieldCheck, IconAlertTriangle, IconClock } from '../../components/icons'
import './IprChecker.css'

function diasRestantes(fecha) {
  const hoy = new Date()
  const target = new Date(fecha)
  return Math.ceil((target - hoy) / (1000 * 60 * 60 * 24))
}

function evaluar(dias) {
  if (dias < 0) return { estado: 'rojo', icon: <IconAlertTriangle size={24} strokeWidth={2} color="var(--color-danger)" />, titulo: 'Inspección vencida', texto: 'Tu equipo tiene la IPR vencida. Solicita una inspección asistida lo antes posible.' }
  if (dias <= 90) return { estado: 'amarillo', icon: <IconClock size={24} strokeWidth={2} color="var(--color-warning)" />, titulo: 'Próximo a vencer', texto: `La inspección vence en ${dias} días. Agenda la revisión con tiempo.` }
  return { estado: 'verde', icon: <IconShieldCheck size={24} strokeWidth={2} color="var(--color-success)" />, titulo: 'Inspección al día', texto: `La IPR está vigente. Vence en ${dias} días.` }
}

export default function IprChecker() {
  const [rae, setRae] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [requestError, setRequestError] = useState('')

  async function handleCheck(e) {
    e.preventDefault()
    const raeLimpio = rae.trim()
    if (raeLimpio.length < 4) {
      setError('Ingresa un RAE válido (mínimo 4 caracteres)')
      setResultado(null)
      return
    }
    setError('')
    setRequestError('')
    setResultado(null)
    // El skeleton representa el resultado mientras responde la escritura remota.
    setLoading(true)
    try {
      await insertRow('solicitudes_ipr', { rae: raeLimpio, estado: 'consultado' })
      const dias = diasRestantes(Date.now() + 45 * 24 * 60 * 60 * 1000)
      setResultado(evaluar(dias))
    } catch {
      setRequestError('No se pudo completar la consulta. Inténtalo de nuevo.')
    } finally {
      // Garantiza que la espera termine tanto en exito como en error.
      setLoading(false)
    }
  }

  return (
    <div className="ipr">
      <form className="ipr__form" onSubmit={handleCheck}>
        <Input
          label="Número de Registro del Ascensor (RAE) o dirección del edificio"
          name="rae"
          value={rae}
          onChange={(e) => { setRae(e.target.value); setError(''); setRequestError('') }}
          error={error}
          hint="Ej.: RAE-000123 o Av. Principal, Torre Central"
          required
        />
        {loading && <SkeletonCard label="Consultando estado IPR" />}
        {requestError && <p className="field__error" role="alert">{requestError}</p>}
        <Button type="submit" disabled={loading}>
          {loading ? 'Consultando...' : 'Consultar estado'}
        </Button>
      </form>

      {resultado && (
        <div className={`ipr__resultado ipr__resultado--${resultado.estado}`} role="status" data-reveal>
          <div className="ipr__resultado-icon">{resultado.icon}</div>
          <div className="ipr__resultado-content">
            <p className="ipr__titulo">{resultado.titulo}</p>
            <p className="ipr__texto">{resultado.texto}</p>
            <Button as="a" href="/cotizar" variant="outline" className="ipr__cta">
              Solicitar inspección técnica asistida
            </Button>
          </div>
        </div>
      )}

      <p className="ipr__nota">
        Resultado orientativo basado en la Inspección Periódica Reglamentaria (IPR).
        La confirmación oficial requiere verificación con los organismos competentes.
      </p>
    </div>
  )
}