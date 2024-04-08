import { Button } from '../../Button/Button'
import { Typography } from '../../Typography/Typography'
import { ReserveABayObject } from './types/BookNowTypes'
import dayjs from 'dayjs'

export const BookNowForm = ({
  handleBookNowButtonLink,
  handleReserveFormOnChange,
  //   handleDateTimePickerChange,
  reserveABayObject,
}: {
  handleBookNowButtonLink: () => string
  //   handleDateTimePickerChange: (
  //     value: string,
  //     option: keyof typeof reserveABayObject
  //   ) => void
  handleReserveFormOnChange: (
    value: string,
    option: keyof typeof reserveABayObject
  ) => void
  reserveABayObject: ReserveABayObject
  isWide: boolean
  isLanding?: boolean
}) => {
  const { date, duration, guests } = reserveABayObject

  const RoundReserveTime = () => {
    const date = dayjs(reserveABayObject.time)

    const m = date.minute()
    const h = date.hour()

    if (m > 30) {
      return [h + 1, '00'].join(':')
    } else {
      return [h, '30'].join(':')
    }
  }

  // console.log(RoundReserveTime())

  const handleTimePickerOnChange = (newValue: string) => {
    const [h, m] = newValue.split(':').map((v) => Number(v))

    const date = dayjs(new Date()).set('hour', h).set('minute', m)

    handleReserveFormOnChange(date.format(), 'time')
  }

  return (
    <form
      className="w-full"
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault()

        // window.location.href = handleBookNowButtonLink()
        // console.log(handleBookNowButtonLink())
      }}
    >
      <div className="-mx-3 mb-2 flex flex-wrap items-center justify-center md:flex-nowrap">
        <div className="mb-6 w-full px-3 md:mb-0">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-black"
            htmlFor="guest-select"
          >
            Guests
          </label>
          <div className="relative">
            <select
              className="block w-full appearance-none rounded-xl border  bg-white px-4 py-3 pr-8 font-HNMedium leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="guest-select"
              onChange={(e) =>
                handleReserveFormOnChange(e.currentTarget.value, 'guests')
              }
              value={guests}
            >
              {[...Array(6)].map((_, index) => (
                <option value={index} key={`guest_option_${index}`}>
                  {[index, index !== 1 ? 'Guests' : 'Guest'].join(' ')}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mb-6 w-full px-3 md:mb-0">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-black"
            htmlFor="guest-select"
          >
            Duration
          </label>
          <div className="relative">
            <select
              className="block w-full appearance-none rounded-xl border  bg-white px-4 py-3 pr-8 font-HNMedium leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="duration-select"
              onChange={(e) =>
                handleReserveFormOnChange(e.currentTarget.value, 'duration')
              }
              value={duration}
            >
              {[...Array(5)].map((_, index) => (
                <option value={index + 1} key={`duration_option_${index + 1}`}>
                  {[index + 1, index !== 0 ? 'Hours' : 'Hour'].join(' ')}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mb-6 w-full px-3 md:mb-0">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-black"
            htmlFor="date-input"
          >
            Date
          </label>
          <div className="relative">
            <input
              className="block w-full appearance-none rounded-xl border  bg-white px-4 py-3 pr-8 font-HNMedium leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="date-input"
              onChange={(e) =>
                handleReserveFormOnChange(e.currentTarget.value, 'date')
              }
              value={date}
              type="date"
              required
            />

            {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div> */}
          </div>
        </div>
        <div className="mb-6 w-full px-3 md:mb-0">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-black"
            htmlFor="time-input"
          >
            Time
          </label>
          <div className="relative">
            <input
              className="block w-full appearance-none rounded-xl border  bg-white px-4 py-3 pr-8 font-HNMedium leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="time-input"
              onChange={(e) => {
                handleTimePickerOnChange(e.currentTarget.value)
              }}
              value={RoundReserveTime()}
              type="time"
              required
              min="09:00"
              max="23:00"
            />

            {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div> */}
          </div>
        </div>
        {/* <Datepicker
          useRange={false}
          asSingle
          value={{ startDate: date, endDate: null }}
          onChange={(e) =>
            handleDatePickerOnChange({
              endDate: e?.endDate?.toString(),
              startDate: e?.startDate?.toString(),
            })
          }
        /> */}
      </div>
      <Button buttonVariant="secondary">
        <Typography fontVariant="large" fontWeight="400">
          Reserve A Bay &#8599;
        </Typography>
      </Button>
    </form>
  )
}
