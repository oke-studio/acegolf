import { useRef } from 'react'
import { Email } from '../../../../components/Email/Email'
import { Section } from '../../../../components/Section/Section'
import { Container } from '../../../../components/Container/Container'
import { useScroll, useTransform } from 'framer-motion'

export const EmailSection = () => {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['0 1', '1 1'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1])
  return (
    <Section
      borderRadiusVariant="pill"
      style={{
        backgroundColor: 'rgb(var(--color-green))',
        padding: '3rem',
        scale,
      }}
      ref={targetRef}
    >
      <Container>
        <Email />
      </Container>
    </Section>
  )
}