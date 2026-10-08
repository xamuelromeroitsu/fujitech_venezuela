import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useEffect } from 'react'
import L from 'leaflet'
import { IconBuilding2, IconPhone, IconMail, IconMapPin } from '../../components/icons'
import './LocationMap.css'

const FUJITEC_COORDS = [10.4932769, -66.8103574]
const ZOOM_LEVEL = 17

const redIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

function MapController() {
  const map = useMap()
  useEffect(() => {
    const t = setTimeout(() => map.invalidateSize(), 100)
    return () => clearTimeout(t)
  }, [map])
  return null
}

export default function LocationMap() {
  return (
    <section className="location" id="ubicacion" aria-labelledby="location-title" data-reveal>
      <div className="container">
        <div className="location__grid">
          <div className="location__info">
            <h2 id="location-title" className="location__title">
              ¿Dónde encontrarnos?
            </h2>
            <p className="location__subtitle">
              Nuestra sede en La Urbina, Caracas. Ven a visitarnos o contáctanos por teléfono y correo.
            </p>

            <address className="location__address">
              <div className="location__address-item">
                <IconMapPin size={20} strokeWidth={1.8} aria-hidden="true" />
                <div>
                  <strong>Dirección</strong>
                  <span>
                    Edificio Luindos, Planta Baja, Local 1<br />
                    Calle 8 con Calle 6, Urbanización La Urbina<br />
                    Caracas, Venezuela
                  </span>
                </div>
              </div>

              <div className="location__address-item">
                <IconPhone size={20} strokeWidth={1.8} aria-hidden="true" />
                <div>
                  <strong>Teléfonos</strong>
                  <a href="tel:+582122410311">+58 212 241 03 11</a>
                </div>
              </div>

              <div className="location__address-item">
                <IconMail size={20} strokeWidth={1.8} aria-hidden="true" />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:info@fujitec.com.ve">info@fujitec.com.ve</a>
                </div>
              </div>
            </address>

            <div className="location__hours">
              <IconBuilding2 size={20} strokeWidth={1.8} aria-hidden="true" />
              <div>
                <strong>Horario de atención</strong>
                <span>Lunes a Viernes: 8:00 AM – 5:00 PM</span>
                <span>Emergencias 24/7: Línea directa</span>
              </div>
            </div>
          </div>

          <div className="location__map-wrapper" role="application" aria-label="Mapa de ubicación Fujitec Venezuela en La Urbina, Caracas" tabIndex={0}>
            <MapContainer
              center={FUJITEC_COORDS}
              zoom={ZOOM_LEVEL}
              scrollWheelZoom={false}
              className="location__map"
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MapController />
              <Marker position={FUJITEC_COORDS} icon={redIcon}>
                <Popup>
                  <strong>Fujitec Venezuela</strong><br />
                  Edificio Luindos, Planta Baja, Local 1<br />
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  )
}