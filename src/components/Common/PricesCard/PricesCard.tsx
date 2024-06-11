import * as React from 'react'
// import classNames from 'classnames'
import { Typography } from '../../Typography/Typography'
import { useGetPriceCard } from './hooks/useGetPriceCard.hook'
import { Spinner } from '../../LoadingStates/Spinner'
import { TypeServiceTimeFields } from '../../../types/contentful'
import { PricesContentSkeleton } from './components/PricesContentSkeleton'

interface PricesTabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export const PricesTabPanel = ({
  index,
  value,
  children,
}: PricesTabPanelProps) => {
  const isHidden = value !== index
  return (
    <div
      id={`tabpanel_${index}`}
      hidden={isHidden}
      role="tabpanel"
      aria-labelledby={`tab_${index}`}
    >
      {!isHidden && <div className=" ">{children}</div>}
    </div>
  )
}

// interface PricesTabProps {
//   label: string
//   value: number
//   handleClick: (value: number) => void
//   isActive: boolean
// }
// const PricesTab = ({ label, value, handleClick, isActive }: PricesTabProps) => {
//   const activeStyles = 'bg-lightBlack text-white'
//   return (
//     <button
//       type="button"
//       className={classNames(
//         'hover:orange -mb-px inline-flex grow basis-0 items-center justify-center gap-x-2 border-r-2 border-r-lightBlack px-4 py-3 text-center text-sm font-medium first-of-type:rounded-l-lg last-of-type:rounded-r-lg last-of-type:border-r-0 disabled:pointer-events-none disabled:opacity-50',
//         isActive ? activeStyles : 'bg-transparent text-gray-500 '
//       )}
//       id={value.toString()}
//       onClick={() => handleClick(value)}
//       aria-controls="hs-tab-to-select-2"
//       role="tab"
//     >
//       <Typography fontVariant="small" fontWeight="500">
//         {label}
//       </Typography>
//     </button>
//   )
// }

const TabValues = [
  { label: 'Sun', value: 0, fullLabel: 'Sunday' },
  { label: 'Mon', value: 1, fullLabel: 'Monday' },
  { label: 'Tue', value: 2, fullLabel: 'Tuesday' },
  { label: 'Wed', value: 3, fullLabel: 'Wednesday' },
  { label: 'Thu', value: 4, fullLabel: 'Thursday' },
  { label: 'Fri', value: 5, fullLabel: 'Friday' },
  { label: 'Sat', value: 6, fullLabel: 'Saturday' },
]

type DayOfWeek =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'

const TabValuesMapping: { [key in DayOfWeek]: number } = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
}

export const PricesCard = () => {
  const [value, setValue] = React.useState(new Date().getDay())
  const { priceData, isLoading } = useGetPriceCard()

  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center">
        <Spinner />
      </div>
    )
  }

  if (!priceData) {
    return (
      <div className="flex w-full items-center justify-center">
        Pricing and Rates is unavailable at this time - Please check back later
      </div>
    )
  }

  const GeneralBay = priceData.generalBayScheduleCollection.items
  const PrivateBay = priceData.privateBayScheduleCollection.items

  const baysPricingReduced = GeneralBay.reduce(
    (acc, curr, index) => {
      const generalBays = curr
      const privateBays = PrivateBay[index]
      const bayObject = {
        day: generalBays.dayOfWeek,
        generalBayTimeOne: generalBays.serviceTime1,
        generalBayPriceOne: generalBays.serviceTime1Price,
        generalBayTimeTwo: generalBays.serviceTime2,
        generalBayPriceTwo: generalBays.serviceTime2Price,
        privateBayTimeOne: privateBays.serviceTime1,
        privateBayPriceOne: privateBays.serviceTime1Price,
        privateBayTimeTwo: privateBays.serviceTime2,
        privateBayPriceTwo: privateBays.serviceTime2Price,
      }

      acc.push(bayObject)

      return acc
    },
    [] as {
      day: DayOfWeek
      generalBayTimeOne: TypeServiceTimeFields
      generalBayPriceOne: number
      generalBayTimeTwo: TypeServiceTimeFields
      generalBayPriceTwo: number
      privateBayTimeOne: TypeServiceTimeFields
      privateBayPriceOne: number
      privateBayTimeTwo: TypeServiceTimeFields
      privateBayPriceTwo: number
    }[]
  ).sort((d1, d2) => TabValuesMapping[d1.day] - TabValuesMapping[d2.day])

  return (
    <div className="flex w-full flex-col" id="prices-hours">
      <div className="flex flex-wrap items-center gap-3 *:grow *:basis-64">
        <Typography fontVariant="headingThree" fontWeight="600">
          Prices & Hours
        </Typography>
        <select
          id="tab-select"
          className="block w-full rounded-lg border-4 border-black bg-gray-400 bg-opacity-50 px-4 py-3 font-HNMedium text-3xl font-medium  focus:border-orange focus:ring-orange"
          aria-label="Tabs"
          role="tablist"
          value={value}
          onChange={(v) => setValue(Number(v.currentTarget.value))}
        >
          {TabValues.map((v, i) => (
            <option key={`option_${i}`} value={v.value}>
              {v.fullLabel}
            </option>
          ))}
        </select>
      </div>

      {/* <div className="hidden border-b border-gray-200 sm:block">
        <nav
          className="flex snap-x overflow-scroll rounded-lg border-2 border-lightBlack"
          aria-label="Tabs"
          role="tablist"
          data-tab-select="#tab-select"
        >
          {TabValues.map((v, i) => (
            <PricesTab
              key={`tab_${i}`}
              label={v.label}
              value={v.value}
              handleClick={(newValue) => setValue(newValue)}
              isActive={v.value === value}
            />
          ))}
        </nav>
      </div> */}

      <div className="mt-3">
        {baysPricingReduced.map((bay, index) => (
          <PricesTabPanel
            index={index}
            value={value}
            key={`bay_${index}_${bay.day}`}
          >
            <PricesContentSkeleton
              title={bay.day}
              description="Cancellation Policy: 48 hours notice. Log in to YourGolfBookings and select 'My Account' to make modifications/cancellations to your bookings."
              priceContainer={{
                priceContainerOne: {
                  price: bay.generalBayPriceOne,
                  timeFrom: bay.generalBayTimeOne.beginningTime,
                  timeTo: bay.generalBayTimeOne.endTime,
                  service: bay.generalBayTimeOne.nameOfServiceTime,
                },
                priceContainerTwo: {
                  price: bay.generalBayPriceTwo,
                  timeFrom: bay.generalBayTimeTwo.beginningTime,
                  timeTo: bay.generalBayTimeTwo.endTime,
                  service: bay.generalBayTimeTwo.nameOfServiceTime,
                },
              }}
              privatePriceContainer={{
                privatePriceContainerOne: {
                  price: bay.privateBayPriceOne,
                  timeFrom: bay.privateBayTimeOne.beginningTime,
                  timeTo: bay.privateBayTimeOne.endTime,
                  service: bay.privateBayTimeOne.nameOfServiceTime,
                },
                privatePriceContainerTwo: {
                  price: bay.privateBayPriceTwo,
                  timeFrom: bay.privateBayTimeTwo.beginningTime,
                  timeTo: bay.privateBayTimeTwo.endTime,
                  service: bay.privateBayTimeTwo.nameOfServiceTime,
                },
              }}
            />
          </PricesTabPanel>
        ))}
      </div>
    </div>
  )
}
