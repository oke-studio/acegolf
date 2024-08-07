import { useRef } from 'react'
import { Email } from '../../../../components/Email/Email'
import { Section } from '../../../../components/Section/Section'
import { useScroll, useTransform } from 'framer-motion'
import { PromotionsSection } from '../../../Events/components/PromotionsSection/PromotionsSection'

export const EmailSection = () => {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'start start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1])
  return (
    <Section
      borderRadiusVariant="pill"
      sectionWidth="fullViewport"
      style={{
        backgroundColor: 'rgb(var(--color-green))',
        // padding: '3rem',
        scale,
      }}
      ref={targetRef}
    >
      <PromotionsSection />
      <Email />
      {/* <Container>
        
      </Container> */}
    </Section>
  )
}
