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
        <div className="flex flex-col gap-3 lg:gap-5" style={{}}>
          <div className=" w-[40%] lg:w-[100%]">
            <img
              src={PoweredByTrackman}
              alt="Powered By Trackman"
              className="ld aspect-auto"
              width={219}
              height={73}
            />
          </div>
          <div>
            <Typography
              fontVariant={isMobile ? 'headingThree' : 'poster'}
              fontWeight="900"
              T={'h1'}
              style={{
                overflowWrap: 'break-word',
                //  lineHeight: '4.5rem'
              }}
              tailwindStyle=" "
            >
              TORONTO'S
            </Typography>

            <Typography
              fontVariant={isMobile ? 'headingThree' : 'poster'}
              fontWeight="900"
              T={'h1'}
              style={{}}
              tailwindStyle=" whitespace-nowrap"
            >
              <span
                style={{
                  background: '#36DAD5',
                  color: '#FFF',
                  padding: '4px 4px',
                  borderRadius: '4px',
                  display: 'inline-block',
                  top: '-10px',
                  transform: 'rotate(3deg)',
                  marginTop: '5px',
                  marginBottom: '5px',
                  marginRight: '10px',
                }}
              >
                COOLEST
              </span>
              INDOOR
            </Typography>

            <Typography
              fontVariant={isMobile ? 'headingThree' : 'poster'}
              fontWeight="900"
              T={'h1'}
              style={{
                overflowWrap: 'break-word',
                //  lineHeight: '4.5rem'
              }}
              tailwindStyle=" "
            >
              GOLF LOUNGE!
            </Typography>
          </div>
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
          {/* {!isMobile && ( */}
          <div className="flex flex-col gap-4 md:flex-row" style={{}}>
            <Button
              buttonVariant="secondary"
              // buttonStyle={{ width: 'max-content' }}
            >
              <Link to="/book-now">
                <Typography
                  fontVariant={isMobile ? 'extralarge' : 'headingFour'}
                  fontWeight="500"
                  T="h3"
                >
                  Hours & Pricing
                </Typography>
              </Link>
            </Button>

            <Button
              buttonVariant="primary"
              // buttonStyle={{ width: 'max-content' }}
            >
              <Typography
                fontVariant={isMobile ? 'extralarge' : 'headingFour'}
                fontWeight="500"
                T="h3"
              >
                Reserve a Bay &rarr;
              </Typography>
            </Button>
          </div>
          {/* )} */}
        </div>

        {/* <LandingHeroImageGrid /> */}
      </Section>
    </motion.div>
    // </div>
  )
}
