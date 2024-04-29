import { Button } from '../Button/Button'
import { Typography } from '../Typography/Typography'

export const NintendoSwitch = () => {
  return (
    <div className="mt-8 flex h-max w-full flex-wrap *:grow *:basis-96">
      <div className="flex h-auto gap-6 rounded-xl bg-coolBlue p-12 *:grow *:basis-96 md:rounded-none md:rounded-tl-xl">
        <div className="flex flex-col justify-between gap-3">
          <Typography fontVariant="headingFour" fontWeight="600">
            Talk to us about your party
          </Typography>
          <Typography fontVariant="base" fontWeight="300">
            We offer a wide selection of games that utilize the advanced
            tracking in Trackman technology
          </Typography>
          <Button
            buttonVariant="secondary"
            buttonStyle={{ textWrap: 'nowrap' }}
          >
            Learn More &rarr;
          </Button>
        </div>
        <div className="bg-grey h-full w-full rounded-lg" />
      </div>
      <div className="-mt-3 flex h-auto gap-6 rounded-xl bg-orange p-12 *:grow *:basis-96 md:mt-0 md:rounded-none md:rounded-tr-xl">
        <div className="flex flex-col justify-between gap-3">
          <Typography fontVariant="headingFour" fontWeight="600">
            Talk to us about your party
          </Typography>
          <Typography fontVariant="base" fontWeight="300">
            We offer a wide selection of games that utilize the advanced
            tracking in Trackman technology
          </Typography>
          <Button
            buttonVariant="secondary"
            buttonStyle={{ textWrap: 'nowrap' }}
          >
            Learn More &rarr;
          </Button>
        </div>
        <div className="bg-grey h-full w-full rounded-lg" />
      </div>
    </div>
  )
}
