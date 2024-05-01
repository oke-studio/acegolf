import { Button } from '../Button/Button'
import { Typography } from '../Typography/Typography'

export const NintendoSwitch = () => {
  return (
    <div className=" m-[8px_0rem_8px] mt-8 flex h-max flex-wrap *:grow *:basis-96 lg:m-[8px_1rem_8px] ">
      <div className="flex h-auto gap-6 rounded-[2rem] bg-coolBlue px-[6%] py-[5%] *:grow *:basis-96 md:rounded-none md:rounded-tl-[2rem] md:px-[6%] md:py-[5%]">
        <div className="flex flex-col justify-between gap-3">
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
            Book Your Event &rarr;
          </Button>
        </div>
        <div className="h-full w-full rounded-lg bg-grey" />
      </div>
      <div className="-mt-3 flex h-auto gap-6  rounded-[2rem] bg-orange px-[6%] py-[5%] *:grow *:basis-96 md:mt-0 md:rounded-none md:rounded-tr-[2rem] md:px-[6%] md:py-[5%]">
        <div className="flex flex-col justify-between gap-3">
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
            //href="mailto:events@acegolfbar.ca"
          >
            Contact Us
          </Button>
        </div>
        <div className="h-full w-full rounded-lg bg-grey" />
      </div>
    </div>
  )
}
