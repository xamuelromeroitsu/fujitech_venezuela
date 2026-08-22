import Hero from '../features/landing/Hero'
import PropuestaValor from '../features/landing/PropuestaValor'
import Soluciones from '../features/landing/Soluciones'
import SoloFujitec from '../features/landing/SoloFujitec'
import Testimonios from '../features/landing/Testimonios'
import ContactCta from '../features/landing/ContactCta'
import WhatsAppWidget from '../features/whatsapp/WhatsAppWidget'

/**
 * Home — Página principal (landing).
 * El widget de WhatsApp solo está aquí (no en App.jsx) para que solo
 * aparezca en la página de inicio, no en /cotizar, /ipr, etc.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <PropuestaValor />
      <Soluciones />
      <SoloFujitec />
      <Testimonios />
      <ContactCta />
      <WhatsAppWidget />
    </>
  )
}
