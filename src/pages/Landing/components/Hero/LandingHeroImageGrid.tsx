import classNames from 'classnames'

// Animation dependencies
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

// Image imports
import LandingImage1URL from '../../../../assets/landingHero/Spin-photo1.webp'
import LandingImage2URL from '../../../../assets/landingHero/Spin-photo2.webp'
import LandingImage3URL from '../../../../assets/landingHero/Spin-photo3.webp'
import LandingImageAceLogoURL from '../../../../assets/landingHero/ace-sticker-1.webp'
import LandingImage4URL from '../../../../assets/landingHero/friends-photos.webp'

const LayoutWidthOptions = {
  //   center: {
  //     width: '100%',
  //     left: '0px',
  //     gridTemplateColumns: 'repeat(8, 1fr)',
  //     mobile: {
  //       gridTemplateColumns: 'repeat(4, 1fr)',
  //     },
  //   },
  center: {
    _: 'w-full left-0 grid-col-[repeat(8,_1fr)]',
    mobile: 'grid-col-[repeat(4,_1fr)] ',
  },
  //   start: {
  //     width: '50%',
  //     left: '0px',
  //     gridTemplateColumns: 'repeat(4, 1fr)',

  //     mobile: {
  //       gridTemplateColumns: 'repeat(4, 1fr)',
  //       gridTemplateRows: ' 1fr 1fr 1fr',
  //       width: '100%',
  //     },
  //   },
  start: {
    _: 'w-[50%] left-0 grid-col-[repeat(4,_1fr)]',
    mobile: 'w-full grid-col-[repeat(4,_1fr)] grid-row-[1fr_1fr_1fr]',
  },
  end: {
    _: 'w-[50%] right-0 grid-col-[repeat(4,_1fr)]',
    mobile: 'w-full grid-col-[repeat(4,_1fr)] grid-row-[1fr_1fr_1fr]',
  },
  //   end: {
  //     width: '50%',
  //     right: '0px',
  //     gridTemplateColumns: 'repeat(4, 1fr)',

  //     mobile: {
  //       gridTemplateColumns: 'repeat(4, 1fr)',
  //       gridTemplateRows: ' 1fr 1fr 1fr',
  //       width: '100%',
  //     },
  //   },
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

  // const randomizer = (min, max) => {
  // 	min = Math.ceil(min);
  // 	max = Math.floor(max);
  // 	return Math.floor(Math.random() * (max - min) + min);
  // };

  //Responsive Code
  const isMobile = useMediaQuery({ maxWidth: '640px' })

  return (
    <div
      className={classNames(
        'absolute top-0 grid h-full grid-rows-[1fr_1fr]',
        HeroImageGrid._,
        isMobile && HeroImageGrid.mobile
      )}
      //   sx={{
      //     position: 'absolute',
      //     top: '0px',
      //     display: 'grid',
      //     gridTemplateRows: '1fr 1fr',
      //     height: `${SectionImageGridHeight}`,

      //     ...SECTIONImageGrid,
      //     ...(isMobile && SECTIONImageGrid.mobile),

      //     ...sx,
      //   }}
    >
      {landingHeroImages.map(
        (
          {
            src,
            // aspectRatio,
            backCutOut,
            // backCutOutColor,
            imageNameAltText,
            // opacity,
            // scale,
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
              <div
                className={classNames(
                  tailwindStyle,
                  'relative',
                  backCutOut && 'rotate-[-1.5deg] bg-sharpTeal'
                )}
              >
                <img
                  src={src}
                  alt={imageNameAltText}
                  className="block aspect-[1] h-auto w-full rounded-[1px] object-cover"
                  style={{
                    objectFit: 'cover',
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    // aspectRatio: `${AceImageAspectRatio}`,
                    // scale: `${randomizer(0.96, 0.98)}`,
                    // transform: `rotate(${randomizer(3, -3)}deg)`,
                    borderRadius: '1px',
                  }}
                />
              </div>

              {/* <AceImage
                AceImageName={imageNameAltText}
                AceImageSrc={src}
                AceImageAspectRatio={
                  isMobile ? mobile.aspectRatio : aspectRatio
                }
                BackCutout={backCutOut}
                BackCutoutColor={theme.palette.sharpTeal}
                Unoptimized={unoptimized}
                sx={{
                  position: 'relative',
                  opacity: `${opacity} `,
                  scale: `${scale} `,
                  transform: `rotate(${rotation}deg) translate(${relPosX}, ${relPosY})`,
                  zIndex: `${zIndex} `,

                  ...(isMobile && {
                    // aspectRatio: `${mobile.aspectRatio} `,
                    opacity: `${mobile.opacity} `,
                    scale: `${mobile.scale} `,
                    transform: `rotate(${mobile.rotation}deg) translate(${mobile.relPosX}, ${mobile.relPosY})`,
                    zIndex: `${mobile.zIndex} `,
                  }),
                }}
              ></AceImage> */}
            </motion.div>
          )
        }
      )}
    </div>
  )
}

const landingHeroImages = [
  {
    src: LandingImage1URL,
    aspectRatio: '0.77',
    backCutOut: true,
    backCutOutColor: 'orange',
    imageNameAltText: 'friends photos at ace',
    opacity: 1, // default 1 for visible
    scale: 1.4, // scale transform for aceImage
    rotation: -5, // rotation
    zIndex: 2, // zindex for image container. 1= below section content
    gridPosXColumn: '2', //enter the grid COLUMN start position. ex: 3 (start at grid line 3)
    gridPosYRow: '2', //enter the grid ROW start position. ex: 5 (start at grid line 5)
    relPosX: '-80px', //relative position to grid position
    relPosY: '70px',
    tailwindStyle:
      'aspect-[0.77] opacity-[1] scale-[1.4] rotate-[-5deg] translate-x-[-80px] translate-y-[70px] z-[2]',

    tailwindGridStyle: 'col-[2/_span_1] row-[2/_span_1]',
    paralax: 1,
    unoptimized: true,

    mobile: {
      aspectRatio: '1/1',
      opacity: 1,
      scale: 1.7,
      rotation: -4,
      zIndex: 1,
      gridPosXColumn: '2',
      gridPosYRow: '2',
      relPosX: '-30px',
      relPosY: '80px',
      tailwindStyle:
        'aspect-[1/1] opacity-[1] scale-[1.7] rotate-[-4deg] translate-x-[-30px] translate-y-[80px] z-[1]',
      tailwindGridStyle: 'col-[2/_span_1] row-[2/_span_1]',
    },
  },
  {
    src: LandingImage2URL,
    aspectRatio: '1.130',
    backCutOut: true,
    backCutOutColor: 'sharpTeal',
    imageNameAltText: 'the vibes seating area',
    opacity: 1,
    scale: 1.2, // scale transform for aceImage
    rotation: -11, // rotation
    zIndex: 1, // zindex for image container
    gridPosXColumn: '3', //enter the grid COLOMN start position. ex: 3 (start at grid line 3)
    gridPosYRow: '2', //enter the grid ROW start position. ex: 5 (start at grid line 5)
    relPosX: '-80px', //relative position to grid position
    relPosY: '30px',
    paralax: 2,
    tailwindStyle:
      'aspect-[1.130] opacity-[1] scale-[1.2] rotate-[-11deg] translate-x-[-80px] translate-y-[30px] z-[1]',

    tailwindGridStyle: 'col-[3/_span_1] row-[2/_span_1]',

    mobile: {
      aspectRatio: '1.130',
      opacity: 0,
      scale: 1.4,
      rotation: -10,
      zIndex: 1,
      gridPosXColumn: '2',
      gridPosYRow: '3',
      relPosX: '-40px',
      relPosY: '50px',
      tailwindStyle:
        'aspect-[1.130] opacity-[0] scale-[1.4] rotate-[-10deg] translate-x-[-40px] translate-y-[50px] z-[1]',
      tailwindGridStyle: 'col-[2/_span_1] row-[3/_span_1]',
    },
  },
  {
    src: LandingImage3URL,
    aspectRatio: '0.95',
    backCutOut: true,
    backCutOutColor: 'sharpTeal',
    imageNameAltText: 'pool bar',
    opacity: 1,
    scale: 1.4, // scale transform for aceImage
    rotation: 8, // rotation
    zIndex: 1, // zindex for image container
    gridPosXColumn: '4', //enter the grid COLOMN start position. ex: 3 (start at grid line 3)
    gridPosYRow: '2', //enter the grid ROW start position. ex: 5 (start at grid line 5)
    relPosX: '-20px', //relative position to grid position
    relPosY: '80px',
    paralax: 1,
    tailwindStyle:
      'aspect-[0.95] opacity-[1] scale-[1.4] rotate-[8deg] translate-x-[-20px] translate-y-[80px] z-[1]',

    tailwindGridStyle: 'col-[4/_span_1] row-[2/_span_1]',

    mobile: {
      aspectRatio: '0.95',
      opacity: 0,
      scale: 1.4,
      rotation: 10,
      zIndex: 3,
      gridPosXColumn: '4',
      gridPosYRow: '3',
      relPosX: '-40px',
      relPosY: '80px',
      tailwindStyle:
        'aspect-[0.95] opacity-[0] scale-[1.4] rotate-[10deg] translate-x-[-40px] translate-y-[80px] z-[1]',
      tailwindGridStyle: 'col-[4/_span_1] row-[3/_span_1]',
    },
  },
  {
    src: LandingImage4URL,
    aspectRatio: '0.91',
    backCutOut: true,
    backCutOutColor: 'sharpTeal',
    imageNameAltText: 'ping pong area',
    opacity: 1,
    scale: 1.4, // scale transform for aceImage
    rotation: -9, // rotation
    zIndex: 1, // zindex for image container
    gridPosXColumn: '4', //enter the grid COLOMN start position. ex: 3 (start at grid line 3)
    gridPosYRow: '1', //enter the grid ROW start position. ex: 5 (start at grid line 5)
    relPosX: '-40px', //relative position to grid position
    relPosY: '80px',
    paralax: 3,
    tailwindStyle:
      'aspect-[0.91] opacity-[1] scale-[1.4] rotate-[-9deg] translate-x-[-40px] translate-y-[80px] z-[1]',

    tailwindGridStyle: 'col-[4/_span_1] row-[1/_span_1]',

    mobile: {
      aspectRatio: '0.91',
      opacity: 1,
      scale: 1.4,
      rotation: 4,
      zIndex: 1,
      gridPosXColumn: '3',
      gridPosYRow: '2',
      relPosX: '45px',
      relPosY: '120px',
      tailwindStyle:
        'aspect-[0.91] opacity-[1] scale-[1.4] rotate-[4deg] translate-x-[450px] translate-y-[120px] z-[1]',
      tailwindGridStyle: 'col-[3/_span_1] row-[2/_span_1]',
    },
  },

  {
    src: LandingImageAceLogoURL,
    aspectRatio: '1/1',
    backCutOut: false,
    backCutOutColor: 'sharpTeal',
    imageNameAltText: 'ping pong area',
    opacity: 1,
    scale: 1.3, // scale transform for aceImage
    rotation: -9, // rotation
    zIndex: 3, // zindex for image container
    gridPosXColumn: '3', //enter the grid COLOMN start position. ex: 3 (start at grid line 3)
    gridPosYRow: '1', //enter the grid ROW start position. ex: 5 (start at grid line 5)
    relPosX: '0px', //relative position to grid position
    relPosY: '200px',
    paralax: 1,
    tailwindStyle:
      'aspect-[1/1] opacity-[1] scale-[1.3] rotate-[-9deg] translate-x-[0px] translate-y-[200px] z-[3]',

    tailwindGridStyle: 'col-[3/_span_1] row-[1/_span_1]',

    mobile: {
      aspectRatio: '1/1',
      opacity: 1,
      scale: 1.2,
      rotation: 10,
      zIndex: 1,
      gridPosXColumn: '3',
      gridPosYRow: '3',
      relPosX: '-30px',
      relPosY: '-10px',
      tailwindStyle:
        'aspect-[1/1] opacity-[1] scale-[1.2] rotate-[10deg] translate-x-[-30px] translate-y-[-10px] z-[1]',
      tailwindGridStyle: 'col-[3/_span_1] row-[3/_span_1]',
    },
  },
]
