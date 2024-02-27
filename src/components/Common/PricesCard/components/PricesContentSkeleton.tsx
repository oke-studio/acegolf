import { Typography } from '../../../Typography/Typography'
import cn from 'classnames'

interface PriceContainer {
  price: number
  color?: 'black' | 'white'
  timeFrom: string
  timeTo: string
  service: string
}

interface PricesContentSkeletonProps {
  title: string
  description: string
  priceContainer: {
    priceContainerOne: PriceContainer
    priceContainerTwo: PriceContainer
  }

  privatePriceContainer: {
    privatePriceContainerOne: PriceContainer
    privatePriceContainerTwo: PriceContainer
  }
}

export const PricesContentSkeleton = ({
  title,
  description,
  priceContainer,
  privatePriceContainer,
}: PricesContentSkeletonProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col flex-wrap gap-2">
        <Typography fontVariant="extralarge" fontWeight="600">
          {title} Pricing
        </Typography>
        <div className="mt-3 flex flex-nowrap justify-start gap-3">
          <div>
            <Typography fontVariant="large" fontWeight="600">
              {`${priceContainer.priceContainerOne.timeFrom} - ${priceContainer.priceContainerOne.timeTo}`}
            </Typography>
            <ServicePill
              variant="dark"
              color="black"
              label={priceContainer.priceContainerOne.service}
            />
            <Typography fontVariant="base" fontWeight="300">
              Open: Bay Rental, Cafe
            </Typography>
          </div>

          <div>
            <Typography fontVariant="large" fontWeight="600">
              {`${priceContainer.priceContainerTwo.timeFrom} - ${priceContainer.priceContainerTwo.timeTo}`}
            </Typography>
            <ServicePill
              variant="dark"
              color="black"
              label={priceContainer.priceContainerTwo.service}
            />
            <Typography fontVariant="base" fontWeight="300">
              Open: Kitchen, Bar Lounge
            </Typography>
          </div>
        </div>
      </div>
      <PriceInfoBox
        priceInfoBoxOne={priceContainer.priceContainerOne}
        priceInfoBoxTwo={priceContainer.priceContainerTwo}
      />
      <PriceInfoBox
        priceInfoBoxOne={privatePriceContainer.privatePriceContainerOne}
        priceInfoBoxTwo={privatePriceContainer.privatePriceContainerTwo}
        isPrivate={true}
      />

      <Typography
        fontVariant="base"
        fontWeight="300"
        tailwindStyle="text-center"
      >
        {description}
      </Typography>
    </div>
  )
}

const PriceInfoBox = ({
  priceInfoBoxOne,
  priceInfoBoxTwo,
  isPrivate,
  // backgroundColor,
  // color = 'black',
}: {
  priceInfoBoxOne: PriceContainer
  priceInfoBoxTwo: PriceContainer
  backgroundColor?: string
  isPrivate?: boolean
  color?: string
}) => {
  const PrivateStyle = isPrivate ? 'bg-sharpTeal' : ''
  return (
    <div className={cn(PrivateStyle, 'gao-4 flex w-full flex-col rounded-xl')}>
      <div className="flex w-full flex-row flex-wrap justify-between rounded-[inherit] p-4">
        <Typography
          fontVariant="large"
          fontWeight="700"
          style={{ display: 'flex', alignItems: 'center' }}
          tailwindStyle="mb-1"
        >
          {isPrivate ? 'Private Bay' : 'General Bay'}
        </Typography>

        <div className="flex gap-3">
          <div className="flex flex-col gap-3 text-center">
            <Typography fontVariant="headingThree" fontWeight="800">
              ${priceInfoBoxOne.price}
              <Typography
                fontVariant="base"
                fontWeight="400"
                style={{ display: 'inline' }}
              >
                /hr
              </Typography>
            </Typography>
            <ServicePill
              variant="dark"
              color="black"
              label={priceInfoBoxOne.service}
            />
          </div>

          <div className="flex flex-col gap-3 text-center">
            <Typography fontVariant="headingThree" fontWeight="800">
              ${priceInfoBoxTwo.price}
              <Typography fontVariant="base" fontWeight="400">
                /hr
              </Typography>
            </Typography>
            <ServicePill
              variant="dark"
              color="black"
              label={priceInfoBoxTwo.service}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

interface ServicePillProps {
  color: string
  label: string
  variant: 'light' | 'dark'
}

const ServicePillVariantMapping: { [key in 'light' | 'dark']: string } = {
  light: 'color-orange text-white',
  dark: 'color-purple text-black',
}

const ServicePill = ({ variant, label }: ServicePillProps) => {
  const BG = ServicePillVariantMapping[variant]

  return (
    <Typography
      fontVariant="miniscule"
      fontWeight="600"
      fontStyle="italic"
      style={{
        textTransform: 'uppercase',
        backgroundColor: BG,
      }}
      tailwindStyle="p-3 w-content rounded-3xl"
    >
      {label}
    </Typography>
  )
}
