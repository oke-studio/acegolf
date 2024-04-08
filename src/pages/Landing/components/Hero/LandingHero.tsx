import { Section } from '../../../../components/Section/Section'
import { Typography } from '../../../../components/Typography/Typography'
import { Button } from '../../../../components/Button/Button'
import { MotionValue, motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

import PoweredByTrackman from '../../../../assets/logos/powered-by-trackman-black-web.webp'
// import { LandingHeroImageGrid } from './LandingHeroImageGrid'

export const LandingHero = ({
  scrollYProgress,
}: {
  scrollYProgress?: MotionValue<number>
}) => {
  console.log(scrollYProgress)
  // const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0])

  // const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.7])

  const isMobile = useMediaQuery({ maxWidth: '640px' })

  return (
    // <div className="m-auto">
    <motion.div>
      <Section borderRadiusVariant="pill" style={{ position: 'relative' }}>
        <div className="flex flex-col gap-4">
          <div>
            <img
              src={PoweredByTrackman}
              alt="Powered By Trackman"
              className="aspect-auto"
              width={219}
              height={73}
            />
          </div>
          <Typography
            fontVariant={isMobile ? 'headingTwo' : 'poster'}
            fontWeight="900"
            T={'h1'}
            style={{ overflowWrap: 'break-word' }}
          >
            TORONTO'S COOLEST INDOOR GOLF LOUNGE!
          </Typography>
          <Typography
            fontVariant={isMobile ? 'headingFour' : 'headingTwo'}
            fontWeight="500"
            T="h2"
            style={{
              color: 'rgb(var(--color-orange))',
            }}
          >
            588 Eastern Ave, Toronto
          </Typography>
          {!isMobile && (
            <Button
              buttonVariant="primary"
              buttonStyle={{ width: 'max-content' }}
            >
              <Link to="/book-now">Reserve a Bay &rarr;</Link>
            </Button>
          )}
        </div>

        {/* <LandingHeroImageGrid /> */}
      </Section>
    </motion.div>
    // </div>
  )
}
