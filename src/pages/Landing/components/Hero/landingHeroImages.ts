
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
      tailwindStyle:
        'opacity-[1] scale-[0.8] rotate-[-5deg] translate-x-[-10px] translate-y-[60px] z-[2]',
     tailwindGridPosXY: 'col-[2/_span_1] row-[2/_span_1]',
      paralax: 1,
      unoptimized: true,
  
      mobile: {
        aspectRatio: '1/1',
        tailwindStyle:
          'aspect-[1/1] opacity-[1] scale-[0.8] rotate-[-4deg] translate-x-[-30px] translate-y-[80px] z-[1]',
        tailwindGridPosXY: 'col-[2/_span_1] row-[2/_span_1]',
      },
    },
    {
      src: LandingImage2URL,
      aspectRatio: '1.130',
      backCutOut: true,
      backCutOutColor: 'var(--color-sharpTeal)',
      imageNameAltText: 'the vibes seating area',
      paralax: 2,
      tailwindStyle:
        'opacity-[1] scale-[1] rotate-[-11deg] translate-x-[-80px] translate-y-[30px] z-[1]',
  
        tailwindGridPosXY: 'col-[3/_span_1] row-[2/_span_1]',
  
      mobile: {
        aspectRatio: '1.130',
        tailwindStyle:
          'opacity-[0] scale-[1] rotate-[-10deg] translate-x-[-40px] translate-y-[50px] z-[1]',
          tailwindGridPosXY: 'col-[2/_span_1] row-[3/_span_1]',
      },
    },
    {
      src: LandingImage3URL,
      aspectRatio: '0.95',
      backCutOut: true,
      backCutOutColor: 'var(--color-sharpTeal)',
      imageNameAltText: 'pool bar',
      paralax: 1,
      tailwindStyle:
        'scale-[1] rotate-[8deg] translate-x-[-20px] translate-y-[80px] z-[1]',
  
        tailwindGridPosXY: 'col-[4/_span_1] row-[2/_span_1]',
  
      mobile: {
        aspectRatio: '0.95',
        tailwindStyle:
          'opacity-[0] scale-[1] rotate-[10deg] translate-x-[-40px] translate-y-[80px] z-[1]',
        tailwindGridPosXY: 'col-[4/_span_1] row-[3/_span_1]',
      },
    },
    {
      src: LandingImage4URL,
      aspectRatio: '0.91',
      backCutOut: true,
      backCutOutColor: 'var(--color-sharpTeal)',
      imageNameAltText: 'ping pong area',
      paralax: 3,
      tailwindStyle:
        'opacity-[1] scale-[1] rotate-[-9deg] translate-x-[-40px] translate-y-[80px] z-[1]',
  
      tailwindGridPosXY: 'col-[4/_span_1] row-[1/_span_1]',
  
      mobile: {
        aspectRatio: '0.91',
        tailwindStyle:
          'opacity-[1] scale-[1] rotate-[4deg] translate-x-[450px] translate-y-[120px] z-[1]',
        tailwindGridPosXY: 'col-[3/_span_1] row-[2/_span_1]',
      },
    },
  
    {
      src: LandingImageAceLogoURL,
      aspectRatio: '1/1',
      backCutOut: false,
      backCutOutColor: 'var(--color-sharpTeal)',
      imageNameAltText: 'ping pong area',
      paralax: 1,
      tailwindStyle:
        'opacity-[1] scale-[1] rotate-[-9deg] translate-x-[0px] translate-y-[200px] z-[3]',
  
        tailwindGridPosXY: 'col-[3/_span_1] row-[1/_span_1]',
  
      mobile: {
        aspectRatio: '1/1',
        tailwindStyle:
          ' opacity-[1] scale-[1] rotate-[10deg] translate-x-[-30px] translate-y-[-10px] z-[1]',
          tailwindGridPosXY: 'col-[3/_span_1] row-[3/_span_1]',
      },
    },
  ]