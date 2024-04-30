import classNames from 'classnames'

// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion'
// import { useMediaQuery } from 'react-responsive'

import { AceImage } from '../../../../components/ImageGrids/aceImage'
import { landingHeroImages } from './landingHeroImages'

const LayoutWidthOptions = {
  center: {
    _: 'w-full h-full left-0 lg:grid-cols-[repeat(8,_1fr)] grid-cols-[repeat(4,_1fr)] ',
  },

  start: {
    _: 'lg:w-[50%] w-[100%] h-full left-0 grid-cols-[repeat(4,_1fr)]w-full grid-cols-[repeat(4,_1fr)] grid-rows-[1fr_1fr_1fr]',
  },
  end: {
    _: 'lg:w-[50%] w-[100%] h-full right-0 lg:grid-cols-[repeat(4,_1fr)]  grid-cols-[repeat(4,_1fr)] grid-rows-[1fr_1fr]',
  },
}

interface LandingHeroImageGridProps {
  SectionImageGridWidth?: keyof typeof LayoutWidthOptions
  SectionImageGridHeight?: string
  ScrollAnimations?: boolean
}

export const LandingHeroImageGrid = ({
  SectionImageGridWidth = 'end',
  //   SectionImageGridHeight = '100%',
  //   ScrollAnimations = true,
}: LandingHeroImageGridProps) => {
  const HeroImageGrid = LayoutWidthOptions[SectionImageGridWidth]

  //Animation

  // const SectionAsReference = useRef(null);
  const { scrollYProgress } = useScroll()
  //   const rotateVal = useTransform(scrollYProgress, [0, 0.1], [1, 10])
  //mapping screen scroll of 10% to 1-2 factor to use in values
  //   const scaleVal = useTransform(scrollYProgress, [0, 0.1], [1, 1.1])
  //   const yVal = useTransform(scrollYProgress, [0, 0.1], [1, 60])
  const smValY = useTransform(scrollYProgress, [0, 0.1], [0, 30])
  const mdValY = useTransform(scrollYProgress, [0, 0.1], [0, 70])
  const lgValY = useTransform(scrollYProgress, [0, 0.1], [0, 120])
  const xlgValY = useTransform(scrollYProgress, [0, 0.1], [0, 160])
  const paralaxYvalue = [
    {
      val: smValY,
    },
    {
      val: mdValY,
    },
    {
      val: lgValY,
    },
    {
      val: xlgValY,
    },
  ]

  //Responsive Code
  //const isMobile = useMediaQuery({ maxWidth: '640px' })

  return (
    <div
      className={classNames(
        'absolute top-0 grid h-full ',
        HeroImageGrid._
        // isMobile && HeroImageGrid.mobile
      )}
    >
      {landingHeroImages.map(
        (
          {
            src,
            //aspectRatio,
            backCutOut,
            backCutOutColor,
            imageNameAltText,
            paralax,
            tailwindStyle,
            tailwindGridPosXY,
          },
          i
        ) => {
          return (
            <motion.div
              key={`landing_hero_image_${i}`}
              style={{
                y: paralaxYvalue[paralax].val,
              }}
              className={classNames(
                'relative',
                // isMobile ? mobile.tailwindGridPosXY : tailwindGridPosXY
                tailwindGridPosXY
              )}
            >
              <AceImage
                AceImageName={imageNameAltText}
                AceImageSrc={src}
                // AceImageAspectRatio={aspectRatio}
                BackCutout={backCutOut}
                BackCutoutColor={backCutOutColor}
                ClassNamesUsed={tailwindStyle}
              />
            </motion.div>
          )
        }
      )}
    </div>
  )
}
