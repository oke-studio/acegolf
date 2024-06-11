import { Button } from '../Button/Button'
import { Typography } from '../Typography/Typography'
import InfoImage from '../../assets/landingHero/night-golfing.webp'
import ContactImage from '../../assets/landingHero/Friends-golfing.webp'

export const NintendoSwitch = () => {
  return (
    <div className=" m-[8px_0rem_8px] mt-8 flex h-max flex-wrap *:grow *:basis-96 lg:m-[8px_1rem_8px] ">
      <div className="flex h-auto min-h-60 gap-6 rounded-[2rem] bg-coolBlue px-[6%] py-[5%] *:grow *:basis-96 md:rounded-none md:rounded-tl-[2rem] md:px-[6%] md:py-[5%]">
        <div className="gap-3v flex w-[50%] flex-col justify-between">
          <Typography fontVariant="headingFour" fontWeight="600">
            Looking to plan an event?
          </Typography>
          <Typography fontVariant="base" fontWeight="400">
            Talk to us about your party or event.
          </Typography>
          <Button
            buttonVariant="secondary"
            buttonStyle={{ textWrap: 'nowrap' }}
            //href="mailto:info@acegolfbar.ca"
          >
            <a href="mailto:events@acegolfbar.ca">
              <Typography fontVariant="base" fontWeight="500" T="h3">
                Book Your Event
              </Typography>
            </a>
          </Button>
        </div>
        <div
          className="h-full w-[50%] rounded-lg bg-grey"
          style={{
            backgroundImage: `url(${InfoImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      <div className="-mt-3 flex h-auto min-h-60 gap-6  rounded-[2rem] bg-orange px-[6%] py-[5%] *:grow *:basis-96 md:mt-0 md:rounded-none md:rounded-tr-[2rem] md:px-[6%] md:py-[5%]">
        <div className="flex w-[50%] flex-col justify-between gap-3">
          <Typography fontVariant="headingFour" fontWeight="600">
            Have Any Questions?
          </Typography>
          <Typography fontVariant="base" fontWeight="400">
            For all other questions please message our instagram @acegolfbar or
            email
          </Typography>
          <Button
            buttonVariant="secondary"
            buttonStyle={{ textWrap: 'nowrap' }}
          >
            <a href="mailto:info@acegolfbar.ca">
              <Typography fontVariant="base" fontWeight="500" T="h3">
                Contact Us
              </Typography>
            </a>
          </Button>
        </div>
        <div
          className="h-full w-[50%] rounded-lg bg-grey"
          style={{
            backgroundImage: `url(${ContactImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
    </div>
  )
}
