import classNames from 'classnames'

// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

// Image imports
// import LandingImage1URL from '../../../../assets/landingHero/Friends-golfing.webp'
// import LandingImage2URL from '../../../../assets/landingHero/night-golfing.webp'
// import LandingImage3URL from '../../../../assets/landingHero/girl-golfing.webp'
// import LandingImageAceLogoURL from '../../../../assets/landingHero/ace-ball.webp'
// import LandingImage4URL from '../../../../assets/landingHero/bigbites-place-holder.webp'

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

// type ImageDataTypes = {
//   src: string
//   aspectRatio: string
//   backCutOut: boolean
//   backCutOutColor: string
//   imageNameAltText: string
//   opacity: number // default 1 for visible
//   scale: number // scale transform for aceImage
//   rotation: number // rotation
//   zIndex: number // zindex for image container. 1= below section content
//   gridPosXColumn: string //enter the grid COLOMN start position. ex: 3 (start at grid line 3)
//   gridPosYRow: string //enter the grid ROW start position. ex: 5 (start at grid line 5)
//   relPosX: string //relative position to grid position
//   relPosY: string
//   paralax: number
//   unoptimized?: boolean

//   mobile: {
//     aspectRatio: string
//     opacity: number
//     scale: number
//     rotation: number
//     zIndex: number
//     gridPosXColumn: string
//     gridPosYRow: string
//     relPosX: string
//     relPosY: string
//   }
// }

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
            // opacity,
            scale,
            // rotation,
            // zIndex,
            // gridPosXColumn,
            // gridPosYRow,
            // relPosX,
            // relPosY,
            mobile,
            paralax,
            // unoptimized,
            tailwindStyle,
            tailwindGridStyle,
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
                isMobile ? mobile.tailwindGridStyle : tailwindGridStyle
              )}
              //   sx={{
              //     position: 'relative',
              //     gridColumn: `${gridPosXColumn} / span 1`,
              //     gridRow: `${gridPosYRow}  / span 1`,
              //     ...(isMobile && {
              //       gridColumn: `${mobile.gridPosXColumn} / span 1`,
              //       gridRow: `${mobile.gridPosYRow}  / span 1`,
              //     }),
              //   }}
            >
              <AceImage
                AceImageName={src}
                AceImageSrc={src}
                AceImageAspectRatio={aspectRatio}
                BackCutout={backCutOut}
                BackCutoutColor={backCutOutColor}
              />
              {/* <div
                className={classNames(
                  tailwindStyle,
                  'relative',
                  backCutOut && 'rotate-[-1.5deg] bg-sharpTeal'
                  // ...(BackCutout && {
                  //   backgroundColor: `${BackCutoutColor}`,
                  //   transform: `rotate(${randomizer(-3, 3)}deg)`,
                  //   aspectRatio: `${AceImageAspectRatio}`,
                  // }),
                )}
              >
                <img
                  src={src}
                  alt={imageNameAltText}
                  className="block aspect-[1] h-auto w-full rounded-[1px] object-cover"
                  style={
                    {
                      // objectFit: 'cover',
                      // display: 'block',
                      // width: '100%',
                      // height: 'auto',
                      // scale: scale,
                      // aspectRatio: `${AceImageAspectRatio}`,
                      // scale: `${randomizer(0.96, 0.98)}`,
                      // transform: `rotate(${randomizer(3, -3)}deg)`,
                      // borderRadius: '1px',
                    }
                  }
                />
              </div> */}
            </motion.div>
          )
        }
      )}
    </div>
  )
}
