import { Typography } from '../Typography/Typography'

const EmailForm = () => {
  return (
    <div className="flex max-w-[100%] flex-col items-center gap-2 md:max-w-[60%]">
      <form className="w-full">
        <label
          htmlFor="email"
          className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          {/* <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
        <svg
          className="h-4 w-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div> */}
          <input
            type="email"
            id="email"
            className="block w-full rounded-lg border-2 border-black bg-white p-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
            placeholder="yourname@email.com"
            required
          />
          <button
            type="submit"
            className="dark:hover:orange absolute bottom-2.5 end-2.5 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-orange focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-black dark:focus:ring-blue-800"
          >
            <Typography fontVariant="small" fontWeight="500">
              SUBSCRIBE
            </Typography>
          </button>
        </div>
      </form>
      <Typography
        fontVariant="miniscule"
        fontWeight="300"
        style={{ color: 'black' }}
      >
        *BY CLICKING THE BUTTON BELOW YOU ARE AGREEING ACEGOLF’S TERMS OF
        SERVICES AND TO RECEIVING MARKETING EMAILS FROM ACEGOLF. YOU ARE ABLE TO
        UNSUBSCRIBE AT ANY TIME BY CLICKING UNSUBSCRBE FROM ANY FUTURE MARKETING
        EMAILS.{' '}
      </Typography>
    </div>
  )
}

export const Email = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-center text-white">
      <Typography fontVariant="headingOne" fontWeight="900">
        JOIN THE MAILING LIST
      </Typography>
      <Typography fontVariant="headingFour" fontWeight="500">
        Be the first to know about the latest ACE Golf promos and events
      </Typography>
      <EmailForm />
    </div>
  )
}
