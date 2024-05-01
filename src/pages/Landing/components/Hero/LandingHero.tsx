import { Section } from '../../../../components/Section/Section'
import { Typography } from '../../../../components/Typography/Typography'
import { Button } from '../../../../components/Button/Button'
import { MotionValue, motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

import PoweredByTrackman from '../../../../assets/logos/powered-by-trackman-black-web.webp'
import { LandingHeroImageGrid } from './LandingHeroImageGrid'

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
              T="h1"
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
            <Button
              buttonVariant="parking"
              buttonStyle={{
                width: 'max-content',
                borderRadius: '10px',
                marginLeft: '10px',
              }}
            >
              <Link to="/book-now">
                <svg
                  width="20"
                  height="30"
                  viewBox="0 0 78 131"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.320312 0V95.616H28.2243V72.832H34.1123C62.9123 72.832 77.2483 54.784 77.2483 35.584C77.2483 14.08 61.5043 0 32.1923 0H0.320312ZM35.3923 48.128H28.2243V25.216H35.1363C42.9443 25.216 49.0883 29.056 49.0883 36.608C49.0883 44.16 42.9443 48.128 35.3923 48.128ZM75 115.339L49.5 130.061V118.339H0V111.339H49.5V100.616L75 115.339Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </Button>
          </Typography>
          {/* {!isMobile && ( */}
          <div className="flex flex-col gap-4 md:flex-row">
            <div
              className="h-full w-max"
              onClick={(e) => {
                e.preventDefault()
                document?.getElementById('prices-hours')?.scrollIntoView()
              }}
            >
              <Button
                buttonVariant="secondary"
                // buttonStyle={{ width: 'max-content' }}
                //onClick={(e) => {e.preventDefault(); scrollTo(“id”)
              >
                <Typography
                  fontVariant={isMobile ? 'extralarge' : 'headingFour'}
                  fontWeight="500"
                  T="h3"
                >
                  Hours & Pricing
                </Typography>
              </Button>
            </div>

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

        <LandingHeroImageGrid />
      </Section>
    </motion.div>
    // </div>
  )
}
