import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Section } from '../../../../components/Section/Section'
import { RoundedVideoPath } from './components/RoundedTextPath/RoundedVideoPath.component'
import { useMediaQuery } from 'react-responsive'

import videoURL from '../../../../assets/landingVideo/ace-slideshow.webm'
import videoMobileURL from '../../../../assets/landingVideo/mobile-ace-slideshow.webm'

export const LandingVideo = () => {
  // const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0])
  const ref = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   if (!ref) {

  //   }
  // }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0.5 1', '0 0'],
  })
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 0.8])

  const isMobile = useMediaQuery({ maxWidth: '640px' })

  return (
    <Section
      borderRadiusVariant="pill"
      style={{ padding: 0 }}
      tailWindStyle="bg-transparent relative"
    >
      <motion.div
        className="grid"
        style={{
          scale /* centering video and path together  */,
          placeItems: 'center',
          gridTemplateAreas: 'videoWithPathArea',
          position: 'relative',
        }}
      >
        <div style={{ gridArea: 'videoWithPathArea' }} className="p-8">
          <video
            className="h-auto w-full rounded-lg"
            autoPlay
            loop
            preload="auto"
            muted
            playsInline
          >
            <source
              type="video/webm"
              src={isMobile ? videoMobileURL : videoURL}
            />
          </video>
        </div>
        <RoundedVideoPath
          width="100%"
          height="100%"
          viewBox={isMobile ? '0 0 400 600' : '0 0 1272.7 718.8'}
          pathProps={
            isMobile
              ? {
                  d: 'm380.36,600.38H20.39c-11.05,0-20.02-11.2-20.02-25V25.38C.38,11.57,9.34.38,20.39.38h359.97c11.05,0,20.02,11.2,20.02,25v550c0,13.8-8.97,25-20.02,25Z',
                }
              : {
                  d: 'M1219.1,718.8H53.6C24,718.8,0,694.8,0,665.2V53.6C0,24,24,0,53.6,0h1165.6c29.6,0,53.6,24,53.6,53.6v611.7 C1272.7,694.8,1248.7,718.8,1219.1,718.8z',
                }
          }
          text="GOLF IS FOR EVERYONE! ALL-YEAR ROUND GOLF WITH STATE OF THE ART FACILITIES. THE BEST DRINKS IN THE CITY AND A CURATED SELECTION OF BITES TO FUEL YOUR SWING. "
          textCount={1}
          strokeColor="#EB8B32"
        ></RoundedVideoPath>
      </motion.div>
    </Section>
  )
}
