import SectionHeading from '../../components/ui/SectionHeading'
import Card from '../../components/ui/Card'
import { IconQuoteLeft } from '../../components/icons'
import { useLanguage } from '../../i18n/LanguageContext'
import './Testimonios.css'

export default function Testimonios() {
  const { t } = useLanguage()
  const testimonials = ['condominiumBoard', 'propertyManager', 'constructionManager']

  return (
    <section className="testimonios" id="testimonios" data-reveal>
      <div className="container">
        <SectionHeading
          eyebrow={t('landing.testimonials.eyebrow')}
          title={t('landing.testimonials.title')}
          description={t('landing.testimonials.description')}
        />
        <div className="testimonios__grid">
          {testimonials.map((key) => (
            <Card
              key={key}
              variant="bare"
              className="testimonio"
            >
              <div className="testimonio__quote-wrapper">
                <IconQuoteLeft className="testimonio__quote-icon" size={28} strokeWidth={1.5} color="var(--color-line)" />
                <blockquote className="testimonio__quote">
                  “{t(`landing.testimonials.items.${key}.quote`)}”
                </blockquote>
              </div>
              <div className="testimonio__divider" aria-hidden="true" />
              <footer className="testimonio__footer">
                <p className="testimonio__author">
                  {t(`landing.testimonials.items.${key}.author`)}
                </p>
                <p className="testimonio__role">
                  {t(`landing.testimonials.items.${key}.role`)}
                </p>
              </footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}