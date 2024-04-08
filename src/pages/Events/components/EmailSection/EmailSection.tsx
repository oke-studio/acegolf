import { Email } from '../../../../components/Email/Email'
import { Section } from '../../../../components/Section/Section'
import { Container } from '../../../../components/Container/Container'

export const EmailSection = () => {
  return (
    <Section
      borderRadiusVariant="pill"
      style={{
        backgroundColor: 'rgb(var(--color-black))',
        padding: '3rem',
        border: 0,
      }}
    >
      <Container>
        <Email />
      </Container>
    </Section>
  )
}
