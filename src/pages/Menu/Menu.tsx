import * as React from 'react'
import { Container } from '../../components/Container/Container'
import { Section } from '../../components/Section/Section'
import { Typography } from '../../components/Typography/Typography'
import { motion } from 'framer-motion'
import { MenuSection } from './components/MenuSection/MenuSection'
// import { useMediaQuery } from 'react-responsive'
export const Menu = () => {
  // const isMobile = useMediaQuery({ maxWidth: '640px' })

  React.useEffect(() => {
    const rootEl = document.getElementById('root')

    if (rootEl) {
      rootEl.setAttribute('class', '!bg-orange')

      return () => {
        rootEl.setAttribute('class', '')
      }
    }
  }, [])
  return (
    <>
      <Container>
        <Section
          borderRadiusVariant="corner"
          sectionWidth="normal"
          style={{
            color: 'white',
            backgroundColor: 'transparent',
            padding: 0,
            paddingBottom: '50px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Typography
            fontVariant="largeH1"
            fontStyle="italic"
            fontWeight="900"
            tailwindStyle="flex flex-col items-center justify-center gap-6 text-5xl text-white md:gap-4"
          >
            GOLF &{' '}
            <Box front="DRINKS" bottom="BITES" back="GOURMET" top="DESSERTS" />
          </Typography>
        </Section>
        <MenuSection />
      </Container>
    </>
  )
}

const Box = ({
  front,
  bottom,
  back,
  top,
}: {
  front: string
  bottom: string
  back: string
  top: string
}) => {
  return (
    <motion.span
      className="relative h-20 w-96 font-black uppercase"
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center -40px',
      }}
      initial={{ rotateX: '0deg' }}
      animate={{
        rotateX: [
          '0deg',
          '90deg',
          '90deg',
          '180deg',
          '180deg',
          '270deg',
          '270deg',
          '360deg',
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: 'backInOut',
        times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 1],
      }}
    >
      {/* FRONT */}
      <span className="absolute flex h-full w-full items-center justify-center bg-orange text-black">
        {front}
      </span>

      {/* BOTTOM */}
      <span
        style={{ transform: 'translateY(5rem) rotateX(-90deg)' }}
        className="absolute flex h-full w-full origin-top items-center justify-center bg-orange text-black"
      >
        {bottom}
      </span>

      {/* TOP */}
      <span
        style={{ transform: 'translateY(-5rem) rotateX(90deg)' }}
        className="absolute flex h-full w-full origin-bottom items-center justify-center bg-orange text-black"
      >
        {top}
      </span>

      {/* BACK */}
      <span
        style={{
          transform: 'translateZ(-5rem) rotateZ(-180deg) rotateY(180deg)',
        }}
        className="absolute flex h-full w-full origin-center items-center justify-center bg-orange text-black"
      >
        {back}
      </span>
    </motion.span>
  )
}
