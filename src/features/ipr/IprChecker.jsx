import { useState } from 'react'
import { insertRow } from '../../lib/supabaseClient'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import SkeletonCard from '../../components/ui/SkeletonCard'
import { IconShieldCheck, IconAlertTriangle, IconClock } from '../../components/icons'
import { useLanguage } from '../../i18n/LanguageContext'
import './IprChecker.css'

function diasRestantes(fecha) {
  const hoy = new Date()
  const target = new Date(fecha)
  return Math.ceil((target - hoy) / (1000 * 60 * 60 * 24))
}

function evaluar(dias, t) {
  if (dias < 0) return { estado: 'rojo', icon: <IconAlertTriangle size={24} strokeWidth={2} color="var(--color-danger)" />, titulo: t('ipr.expiredTitle'), texto: t('ipr.expiredText') }
  if (dias <= 90) return { estado: 'amarillo', icon: <IconClock size={24} strokeWidth={2} color="var(--color-warning)" />, titulo: t('ipr.expiringTitle'), texto: t('ipr.expiringText', { days: dias }) }
  return { estado: 'verde', icon: <IconShieldCheck size={24} strokeWidth={2} color="var(--color-success)" />, titulo: t('ipr.currentTitle'), texto: t('ipr.currentText', { days: dias }) }
}

export default function IprChecker() {
  const { t } = useLanguage()
  const [rae, setRae] = useState('')
  const [diasResultado, setDiasResultado] = useState(null)
  const [hasValidationError, setHasValidationError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [hasRequestError, setHasRequestError] = useState(false)
  const resultado = diasResultado === null ? null : evaluar(diasResultado, t)

  async function handleCheck(e) {
    e.preventDefault()
    const raeLimpio = rae.trim()
    if (raeLimpio.length < 4) {
      setHasValidationError(true)
      setDiasResultado(null)
      return
    }
    setHasValidationError(false)
    setHasRequestError(false)
    setDiasResultado(null)
    // El skeleton representa el resultado mientras responde la escritura remota.
    setLoading(true)
    try {
      await insertRow('solicitudes_ipr', { rae: raeLimpio, estado: 'consultado' })
      const dias = diasRestantes(Date.now() + 45 * 24 * 60 * 60 * 1000)
      setDiasResultado(dias)
    } catch {
      setHasRequestError(true)
    } finally {
      // Garantiza que la espera termine tanto en exito como en error.
      setLoading(false)
    }
  }

  return (
    <div className="ipr">
      <form className="ipr__form" onSubmit={handleCheck}>
        <Input
          label={t('ipr.label')}
          name="rae"
          value={rae}
          onChange={(e) => { setRae(e.target.value); setHasValidationError(false); setHasRequestError(false) }}
          error={hasValidationError ? t('ipr.invalid') : ''}
          hint={t('ipr.hint')}
          required
        />
        {loading && <SkeletonCard label={t('ipr.loading')} />}
        {hasRequestError && <p className="field__error" role="alert">{t('ipr.requestError')}</p>}
        <Button type="submit" disabled={loading}>
          {loading ? t('ipr.checking') : t('ipr.submit')}
        </Button>
      </form>

      {resultado && (
        <div className={`ipr__resultado ipr__resultado--${resultado.estado}`} role="status" data-reveal>
          <div className="ipr__resultado-icon">{resultado.icon}</div>
          <div className="ipr__resultado-content">
            <p className="ipr__titulo">{resultado.titulo}</p>
            <p className="ipr__texto">{resultado.texto}</p>
            <Button as="a" href="/cotizar" variant="outline" className="ipr__cta">
              {t('ipr.cta')}
            </Button>
          </div>
        </div>
      )}

      <p className="ipr__nota">{t('ipr.note')}</p>
    </div>
  )
}