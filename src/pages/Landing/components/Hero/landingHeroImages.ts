
import LandingImage1URL from '../../../../assets/landingHero/Friends-golfing.webp'
import LandingImage2URL from '../../../../assets/landingHero/night-golfing.webp'
import LandingImage3URL from '../../../../assets/landingHero/girl-golfing.webp'
import LandingImageAceLogoURL from '../../../../assets/landingHero/ace-ball.webp'
import LandingImage4URL from '../../../../assets/landingHero/bigbites-place-holder.webp'

export const landingHeroImages = [
    {
      src: LandingImage1URL,
      aspectRatio: '0.77',
      backCutOut: true,
      backCutOutColor: 'var(--color-sharpTeal)',
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
      backCutOutColor: 'var(--color-sharpTeal)',
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
      backCutOutColor: 'var(--color-sharpTeal)',
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
      backCutOutColor: 'var(--color-sharpTeal)',
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
      backCutOutColor: 'var(--color-sharpTeal)',
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