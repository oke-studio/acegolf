
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
      paralax: 1,
      tailwindStyle:
        'opacity-[1] scale-[0.8] rotate-[-5deg] translate-x-[50px] translate-y-[100px] z-[2] xl:opacity-[1] xl:scale-[1.2] xl:rotate-[9deg] xl:translate-x-[-20px] xl:translate-y-[20px] xl:z-[2]',
     tailwindGridPosXY: 'col-[2/_span_1] row-[2/_span_1]',
  
    },
    {
      src: LandingImage2URL,
      aspectRatio: '1.130',
      backCutOut: true,
      backCutOutColor: 'var(--color-sharpTeal)',
      imageNameAltText: 'friends playing in the simulator',
      paralax: 1,
      tailwindStyle:
        'opacity-[1] scale-[1] rotate-[-11deg] translate-x-[20px] translate-y-[60px] z-[1] lg:opacity-[1] lg:scale-[1] lg:rotate-[-2deg] lg:translate-x-[0px] lg:translate-y-[10px] lg:z-[1] xl:opacity-[1] xl:scale-[1.3] xl:rotate-[-5deg] xl:translate-x-[0px] xl:translate-y-[180px] xl:z-[1]',
  
        tailwindGridPosXY: 'col-[3/_span_1] row-[2/_span_1] md:col-[3/_span_1] md:row-[2/_span_1]',
    },
    {
      src: LandingImage3URL,
      aspectRatio: '0.95',
      backCutOut: true,
      backCutOutColor: 'var(--color-sharpTeal)',
      imageNameAltText: 'Simulator Games at Ace',
      paralax: 1,
      tailwindStyle:
        'scale-[1] rotate-[8deg] translate-x-[10px] translate-y-[100px] z-[1] lg:scale-[1] lg:rotate-[8deg] lg:translate-x-[10px] lg:translate-y-[100px] lg:z-[1] xl:scale-[1.3] xl:rotate-[-8deg] xl:translate-x-[0px] xl:translate-y-[0px] xl:z-[1]',
  
        tailwindGridPosXY: 'col-[4/_span_1] row-[3/_span_1] md:col-[4/_span_1] md:row-[2/_span_1]',
    },
    {
      src: LandingImage4URL,
      aspectRatio: '0.91',
      backCutOut: true,
      backCutOutColor: 'var(--color-sharpTeal)',
      imageNameAltText: 'Beef Sliders',
      paralax: 3,
      tailwindStyle:
        'opacity-[0] scale-[1] rotate-[4deg] translate-x-[450px] translate-y-[120px] z-[1] md:opacity-[1] md:scale-[1] md:rotate-[4deg] md:translate-x-[450px] md:translate-y-[120px] z-[1] lg:opacity-[1] lg:scale-[1.3] lg:rotate-[4deg] lg:translate-x-[-30px] lg:translate-y-[10px] z-[1] xl:opacity-[1] xl:scale-[1.2] xl:rotate-[10deg] xl:translate-x-[30px] xl:translate-y-[10px] z-[1]',
  
      tailwindGridPosXY: 'col-[4/_span_1] row-[1/_span_1] xl:col-[3/_span_1]',

    },
  
    {
      src: LandingImageAceLogoURL,
      aspectRatio: '1/1',
      backCutOut: false,
      backCutOutColor: 'var(--color-sharpTeal)',
      imageNameAltText: 'ace golf ball with logo',
      paralax: 2,
      tailwindStyle: 'opacity-[1] scale-[1] rotate-[-9deg] translate-x-[-30px] translate-y-[10px] z-[3] md:opacity-[1] md:scale-[.90] md:rotate-[-10deg] md:translate-x-[-50px] md:translate-y-[10px] md:z-[3]  lg:opacity-[1] lg:scale-[1.2] lg:rotate-[10deg] lg:translate-x-[0px] lg:translate-y-[100px] z-[1] xl:opacity-[1] xl:scale-[1] xl:rotate-[10deg] xl:translate-x-[20px] xl:translate-y-[90px] z-[1]',

      tailwindGridPosXY: 'col-[4/_span_1] row-[1/_span_1] lg:col-[2/_span_1] lg:row-[1/_span_1]',

    },
  ]