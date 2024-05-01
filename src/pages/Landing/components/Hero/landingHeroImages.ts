
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
        'aspect-square opacity-[1] scale-[0.8] rotate-[12deg] translate-x-[20px] translate-y-[-30px] z-[2] md:opacity-[1] md:scale-[0.7] md:rotate-[-5deg] md:translate-x-[35px] md:translate-y-[80px] md:z-[2] lg:scale-[1.3] lg:rotate-[-5deg] lg:translate-x-[80px] lg:translate-y-[150px] lg:z-[2] xl:opacity-[1] xl:scale-[1.2] xl:rotate-[9deg] xl:translate-x-[-20px] xl:translate-y-[20px] xl:z-[2]',
     tailwindGridPosXY: 'col-[4/_span_1] row-[2/_span_1] md:col-[4/_span_1] md:row-[2/_span_1] lg:col-[2/_span_1] lg:row-[2/_span_1]',
  
    },
    {
      src: LandingImage2URL,
      aspectRatio: '1.130',
      backCutOut: true,
      backCutOutColor: 'var(--color-sharpTeal)',
      imageNameAltText: 'friends playing in the simulator',
      paralax: 1,
      tailwindStyle:
        'opacity-[0] scale-[1] rotate-[-11deg] translate-x-[20px] translate-y-[60px] z-[1] md:opacity-[0] md:scale-[1] md:rotate-[-11deg] md:translate-x-[20px] md:translate-y-[60px] md:z-[1] lg:opacity-[1] lg:scale-[1] lg:rotate-[-5deg] lg:translate-x-[20px] lg:translate-y-[25px] lg:z-[1] xl:opacity-[1] xl:scale-[1.3] xl:rotate-[-5deg] xl:translate-x-[0px] xl:translate-y-[180px] xl:z-[1]',
        // aspect-[4/3]
  
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
        'opacity-[0] scale-[1] rotate-[8deg] translate-x-[10px] translate-y-[100px] z-[1] md:opacity-[0] md:scale-[1] md:rotate-[8deg] md:translate-x-[10px] md:translate-y-[100px] md:z-[1] lg:opacity-[1] lg:scale-[1] lg:rotate-[8deg] lg:translate-x-[10px] lg:translate-y-[100px] lg:z-[1] xl:scale-[1.3] xl:rotate-[-8deg] xl:translate-x-[0px] xl:translate-y-[0px] xl:z-[1]',
  
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
        'opacity-[1] scale-[.8] rotate-[4deg] translate-x-[0px] translate-y-[0px] z-[1] md:opacity-[1] md:scale-[.5] md:rotate-[4deg] md:translate-x-[50px] md:translate-y-[50px] z-[3] lg:opacity-[1] lg:scale-[1.3] lg:rotate-[4deg] lg:translate-x-[-30px] lg:translate-y-[10px] z-[1] xl:opacity-[1] xl:scale-[1.2] xl:rotate-[10deg] xl:translate-x-[30px] xl:translate-y-[10px] z-[1]',
  
      tailwindGridPosXY: 'col-[4/_span_1] row-[1/_span_1] md:col-[4/_span_1] md:row-[1/_span_1] xl:col-[3/_span_1]',

    },
  
    {
      src: LandingImageAceLogoURL,
      aspectRatio: '1/1',
      backCutOut: false,
      backCutOutColor: 'var(--color-sharpTeal)',
      imageNameAltText: 'ace golf ball with logo',
      paralax: 2,
      tailwindStyle: 'opacity-[1] scale-[.8] rotate-[-9deg] translate-x-[40px] translate-y-[30px] z-[3] md:opacity-[1] md:scale-[.70] md:rotate-[-10deg] md:translate-x-[-40px] md:translate-y-[10px] md:z-[3]  lg:opacity-[1] lg:scale-[1.2] lg:rotate-[10deg] lg:translate-x-[-10px] lg:translate-y-[80px] z-[1] xl:opacity-[1] xl:scale-[1.4] xl:rotate-[10deg] xl:translate-x-[90px] xl:translate-y-[200px] z-[1]',

      tailwindGridPosXY: 'col-[3/_span_1] row-[1/_span_1] md:col-[4/_span_1] md:row-[1/_span_1] lg:col-[3/_span_1] lg:row-[1/_span_1] xl:col-[2/_span_1] lg:row-[1/_span_1]',

    },
  ]