import { Container } from '../../components/Container/Container'
import { Section } from '../../components/Section/Section'
import { Typography } from '../../components/Typography/Typography'
import { FAQSection } from './components/FAQSection/FAQSection'

export const FAQ = () => {
  return (
    <Container>
      <Section
        borderRadiusVariant="corner"
        style={{
          color: 'white',
          backgroundColor: 'transparent',
          border: 0,
          padding: 0,
        }}
      >
        <div className="flex flex-wrap items-center text-center *:grow *:basis-64">
          <Typography
            fontVariant="largeH1"
            fontWeight="900"
            fontStyle="italic"
            tailwindStyle="uppercase mb-3 text-center"
          >
            FAQS
          </Typography>
          <Typography fontVariant="base" fontWeight="500">
            Questions you wanted to ask but couldn&apos;t
          </Typography>
        </div>
      </Section>
      <FAQSection />
    </Container>
  )
}
