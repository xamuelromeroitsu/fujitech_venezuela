import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useEffect } from 'react'
import L from 'leaflet'
import { IconBuilding2, IconPhone, IconMail, IconMapPin } from '../../components/icons'
import { useLanguage } from '../../i18n/LanguageContext'
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
  const { t } = useLanguage()

  return (
    <section className="location" id="ubicacion" aria-labelledby="location-title" data-reveal>
      <div className="container">
        <div className="location__grid">
          <div className="location__info">
            <h2 id="location-title" className="location__title">
              {t('landing.location.title')}
            </h2>
            <p className="location__subtitle">
              {t('landing.location.subtitle')}
            </p>

            <div className="location__details">
              <address className="location__address-item location__address location__detail">
                <IconMapPin size={20} strokeWidth={1.8} aria-hidden="true" />
                <div>
                  <strong>{t('landing.location.address')}</strong>
                  <span>{t('landing.location.addressLines')}</span>
                </div>
              </address>

              <div className="location__address-item location__detail">
                <IconPhone size={20} strokeWidth={1.8} aria-hidden="true" />
                <div>
                  <strong>{t('landing.location.phones')}</strong>
                  <a href="tel:+582122410311">{t('landing.location.phone')}</a>
                </div>
              </div>

              <div className="location__address-item location__detail">
                <IconMail size={20} strokeWidth={1.8} aria-hidden="true" />
                <div>
                  <strong>{t('landing.location.email')}</strong>
                  <a href="mailto:info@fujitec.com.ve">{t('landing.location.emailAddress')}</a>
                </div>
              </div>

              <div className="location__hours location__detail">
                <IconBuilding2 size={20} strokeWidth={1.8} aria-hidden="true" />
                <div>
                  <strong>{t('landing.location.hours')}</strong>
                  <span>{t('landing.location.weekdayHours')}</span>
                  <span>{t('landing.location.emergencyHours')}</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="location__map-wrapper"
            role="application"
            aria-label={t('landing.location.mapLabel')}
            tabIndex={0}
          >
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
                  {t('landing.location.mapAddress')}<br />
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  )
}