import Hero from '../features/landing/Hero'
import PropuestaValor from '../features/landing/PropuestaValor'
import Soluciones from '../features/landing/Soluciones'
import SoloFujitec from '../features/landing/SoloFujitec'
import Testimonios from '../features/landing/Testimonios'
import ContactCta from '../features/landing/ContactCta'
import WhatsAppWidget from '../features/whatsapp/WhatsAppWidget'

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
