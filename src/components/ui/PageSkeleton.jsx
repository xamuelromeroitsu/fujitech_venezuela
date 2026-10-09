// Mantener estas siluetas alineadas con los campos reales de cada formulario.
const COTIZADOR_FIELDS = ['nombre', 'correo', 'telefono', 'edificio']
const EMPLEO_FIELDS = ['nombre', 'correo', 'telefono', 'ciudad', 'experiencia']
const MANIOBRAS = ['control', 'seguridad', 'ajustes', 'hidraulica', 'escaleras', 'modernizacion']

// Cada campo conserva la misma estructura para compartir dimensiones y espaciado.
function FieldSkeleton({ wide = false }) {
  return (
    <div className={`boot-loader__field ${wide ? 'boot-loader__field--wide' : ''}`}>
      <span className="boot-loader__shape boot-loader__label" />
      <span className="boot-loader__shape boot-loader__control" />
    </div>
  )
}

export default function PageSkeleton({ variant = 'cotizador' }) {
  const labels = {
    cotizador: 'Cargando estimador de cuotas',
    ipr: 'Cargando consulta IPR',
    empleo: 'Cargando formulario de empleo',
  }

  return (
    <div className={`boot-loader boot-loader--skeleton boot-loader--${variant}`} role="status" aria-live="polite">
      <span className="boot-loader__sr">{labels[variant]}</span>
      <div className="boot-loader__skeleton" aria-hidden="true">
        {/* El encabezado se repite en las tres paginas; cambia el numero de lineas por titulo. */}
        <div className="boot-loader__header">
          <div className="boot-loader__eyebrow" />
          <div className={`boot-loader__title boot-loader__title--${variant}`}>
            <span className="boot-loader__shape boot-loader__title-line" />
            {variant !== 'ipr' && <span className="boot-loader__shape boot-loader__title-line" />}
          </div>
          <div className="boot-loader__description" />
          <div className="boot-loader__description boot-loader__description--short" />
        </div>
        {/* Estas variantes reflejan la forma del contenido real, no su texto. */}
        {variant === 'cotizador' && (
          <div className="boot-loader__card boot-loader__card--cotizador">
            <div className="boot-loader__steps">
              <span /><span /><span />
            </div>
            <div className="boot-loader__fields boot-loader__fields--stacked">
              {COTIZADOR_FIELDS.map((field) => <FieldSkeleton key={field} />)}
            </div>
            <div className="boot-loader__actions"><span className="boot-loader__shape boot-loader__action" /></div>
          </div>
        )}
        {variant === 'ipr' && (
          <div className="boot-loader__card boot-loader__card--ipr">
            <div className="boot-loader__fields boot-loader__fields--stacked">
              <FieldSkeleton />
            </div>
            <div className="boot-loader__actions"><span className="boot-loader__shape boot-loader__action" /></div>
            <div className="boot-loader__note">
              <span className="boot-loader__shape boot-loader__note-line" />
              <span className="boot-loader__shape boot-loader__note-line boot-loader__note-line--short" />
            </div>
          </div>
        )}
        {variant === 'empleo' && (
          <div className="boot-loader__card boot-loader__card--empleo">
            <div className="boot-loader__fields boot-loader__fields--grid">
              {EMPLEO_FIELDS.map((field) => <FieldSkeleton key={field} />)}
            </div>
            <div className="boot-loader__chips">
              {MANIOBRAS.map((chip) => <span className="boot-loader__shape boot-loader__chip" key={chip} />)}
            </div>
            <div className="boot-loader__upload">
              <span className="boot-loader__shape boot-loader__upload-icon" />
              <span className="boot-loader__shape boot-loader__upload-line" />
              <span className="boot-loader__shape boot-loader__upload-line boot-loader__upload-line--short" />
            </div>
            <div className="boot-loader__actions"><span className="boot-loader__shape boot-loader__action" /></div>
          </div>
        )}
      </div>
    </div>
  )
}