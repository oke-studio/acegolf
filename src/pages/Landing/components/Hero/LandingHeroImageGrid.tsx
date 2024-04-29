import classNames from 'classnames'

// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

import { AceImage } from '../../../../components/ImageGrids/aceImage'
import { landingHeroImages } from './landingHeroImages'

const LayoutWidthOptions = {
  center: {
    _: 'w-full left-0 grid-col-[repeat(8,_1fr)]',
    mobile: 'grid-col-[repeat(4,_1fr)] ',
  },

  start: {
    _: 'w-[50%] left-0 grid-col-[repeat(4,_1fr)]',
    mobile: 'w-full grid-col-[repeat(4,_1fr)] grid-row-[1fr_1fr_1fr]',
  },
  end: {
    _: 'w-[50%] right-0 grid-col-[repeat(4,_1fr)]',
    mobile: 'w-full grid-col-[repeat(4,_1fr)] grid-row-[1fr_1fr_1fr]',
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
  const isMobile = useMediaQuery({ maxWidth: '640px' })

  return (
    <div
      className={classNames(
        'absolute top-0 grid h-full grid-rows-[1fr_1fr]',
        HeroImageGrid._,
        isMobile && HeroImageGrid.mobile
      )}
    >
      {landingHeroImages.map(
        (
          {
            src,
            aspectRatio,
            backCutOut,
            backCutOutColor,
            imageNameAltText,
            mobile,
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
                isMobile ? mobile.tailwindGridPosXY : tailwindGridPosXY
              )}
            >
              <AceImage
                AceImageName={imageNameAltText}
                AceImageSrc={src}
                AceImageAspectRatio={aspectRatio}
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
