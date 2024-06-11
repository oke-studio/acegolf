import { useState } from 'react'
import { Typography } from '../../../Typography/Typography'
import cn from 'classnames'
import { motion } from 'framer-motion'

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

const ToggleChip = ({
  selected,
  setSelected,
  index,
  label,
}: {
  selected: boolean
  setSelected: (i: number) => void
  label: string
  index: number
}) => {
  return (
    <button
      onClick={() => setSelected(index)}
      className={`relative rounded-md px-2.5 py-0.5`}
    >
      <Typography
        tailwindStyle="relative z-10 uppercase"
        fontVariant="base"
        fontWeight="500"
      >
        {label}
      </Typography>
      {selected && (
        <motion.div
          layoutId="pill-tab"
          transition={{ type: 'spring', duration: 0.5 }}
          className="absolute inset-0 z-0 rounded-xl bg-orange"
        ></motion.div>
      )}
    </button>
  )
}

export const PricesContentSkeleton = ({
  // title,
  description,
  priceContainer,
  privatePriceContainer,
}: PricesContentSkeletonProps) => {
  const [toggle, setToggle] = useState(0)
  const priceContainers = [
    { price: priceContainer.priceContainerOne, info: 'Open: Bay Rental, Cafe' },
    {
      price: priceContainer.priceContainerTwo,
      info: 'Open: Kitchen, Bar Lounge',
    },
  ]
  const privatePriceContainers = [
    {
      price: privatePriceContainer.privatePriceContainerOne,
      info: 'Open: Bay Rental, Cafe',
    },
    {
      price: privatePriceContainer.privatePriceContainerTwo,
      info: 'Open: Kitchen, Bar Lounge',
    },
  ]
  const priceContainerServices = [
    priceContainer.priceContainerOne.service,
    priceContainer.priceContainerTwo.service,
  ]
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col flex-wrap ">
        <div className="mt-3 flex flex-wrap items-center gap-3 *:grow *:basis-64">
          <div className="flex items-center gap-2 rounded-xl bg-grey p-2 *:grow *:basis-24">
            {priceContainerServices.map((p, index) => (
              <ToggleChip
                selected={index === toggle}
                setSelected={setToggle}
                label={p}
                index={index}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <Typography fontVariant="large" fontWeight="600">
              {`${priceContainers[toggle].price.timeFrom} - ${priceContainers[toggle].price.timeTo}`}
            </Typography>
            <Typography fontVariant="base" fontWeight="300">
              {priceContainers[toggle].info}
            </Typography>
          </div>
        </div>
      </div>
      <PriceInfoBox priceInfoBox={priceContainers[toggle].price} />
      <PriceInfoBox
        priceInfoBox={privatePriceContainers[toggle].price}
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
  priceInfoBox,
  isPrivate,
}: {
  priceInfoBox: PriceContainer
  backgroundColor?: string
  isPrivate?: boolean
  color?: string
}) => {
  const PrivateStyle = isPrivate
    ? 'bg-black text-white'
    : 'text-black bg-white border-2 border-black border-solid'
  return (
    <div className={cn(PrivateStyle, 'flex w-full flex-col rounded-xl')}>
      <div className="flex w-full flex-row flex-nowrap items-center justify-between rounded-[inherit] p-4 *:grow *:basis-64">
        <div className=" flex flex-col items-start ">
          <Typography fontVariant="large" fontWeight="700" tailwindStyle="mb-1">
            {isPrivate ? 'Private Bay' : 'General Bay'}
          </Typography>

          {isPrivate ? (
            <Typography
              fontVariant="miniscule"
              fontWeight="300"
              tailwindStyle="mb-1 text-left break-normal "
            >
              Comfortably holds 16 people
              <br /> Performance Trackman Bay
            </Typography>
          ) : (
            <Typography
              fontVariant="miniscule"
              fontWeight="300"
              tailwindStyle="mb-1 text-left break-normal"
            >
              Comfortably holds 6 people
              <br /> Performance Trackman Bay
            </Typography>
          )}
        </div>

        <div className="flex flex-col gap-3 text-center">
          <Typography fontVariant="headingTwo" fontWeight="800">
            ${priceInfoBox.price}
            <Typography
              fontVariant="base"
              fontWeight="400"
              style={{ display: 'inline' }}
            >
              /hr
            </Typography>
          </Typography>

          <ServicePill
            variant="light"
            color="black"
            label={priceInfoBox.service}
          />
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
      tailwindStyle=" w-content rounded-3xl"
    >
      {label}
    </Typography>
  )
}
