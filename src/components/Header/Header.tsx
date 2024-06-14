import * as React from 'react'
import { HeaderLogo } from './components/HeaderLogo'
import { HeaderNavLink } from './components/HeaderNavLink'
// import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import { Typography } from '../Typography/Typography'
import { useMediaQuery } from 'react-responsive'
import { TbMenu2 } from 'react-icons/tb'
import { IoClose } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { HeaderBanner } from './components/HeaderBanner'
import classNames from 'classnames'

interface NavOptions {
  label: string
  to: string
}

// interface HeaderProps {}

const NavOptions = [
  { label: 'Menu', to: '/menu' },
  { label: 'How it Works', to: '/how-it-works' },
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'Coaching', to: '/coaching' },
  { label: 'Summer Camp', to: '/ace-summer-camp' },
]

const handleBookLink = () => {
  return 'https://yourgolfbooking.com/venues/ace-golf-bar-and-lounge/booking/bays'
}

const DropDownNav = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean
  setOpen: (choice: boolean) => void
}) => {
  const navVariants = {
    open: {
      y: '0%',
      // borderTopLeftRadius: '0vw',
      // borderBottomLeftRadius: '0vw',
      opacity: 1,
    },
    closed: {
      y: '-120%',
      // borderTopLeftRadius: '50vw',
      // borderBottomLeftRadius: '50vw',
      opacity: 0,
    },
  }
  return (
    <motion.nav
      className="z-99 absolute left-0 right-0 top-full z-10 h-screen bg-white "
      variants={navVariants}
      animate={isOpen ? 'open' : 'closed'}
      initial="closed"
    >
      <ul className="mt-[1rem] flex flex-col items-center gap-16 md:mt-10 md:gap-8">
        <li
          className=" flex flex-col gap-6 md:gap-2"
          key={'nav_button_book_now'}
        >
          <Button buttonVariant="navSecondary">
            <a href={'/ace-summer-camp-sign-up'} target="__blank">
              <Typography fontVariant="headingThree" fontWeight="500">
                Camp Registration
              </Typography>
            </a>
          </Button>
          <Button buttonVariant="nav">
            <a href={handleBookLink()} target="__blank">
              <Typography fontVariant="headingThree" fontWeight="500">
                Book Now
              </Typography>
            </a>
          </Button>
        </li>

        {NavOptions.map((opt, index) => {
          return (
            <li
              key={`nav_${opt.label}_${index}`}
              onClick={() => setOpen(!isOpen)}
            >
              <HeaderNavLink
                to={opt.to}
                label={opt.label}
                baseColor="#000000"
              />
            </li>
          )
        })}
      </ul>
    </motion.nav>
  )
}

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: '640px' })
  const [isOpen, setIsOpen] = React.useState(false)
  if (isMobile) {
    return (
      <div className="sticky top-0 z-50 mb-3 flex flex-col">
        <div
          className={classNames(
            isOpen ? 'bg-white' : 'bg-[#17171780] backdrop-blur-lg',
            'flex w-full items-center justify-between  p-[5%]  md:p-3'
          )}
        >
          <div onClick={() => setIsOpen((ev) => !ev)}>
            <HeaderLogo color={isOpen ? 'black' : 'white'} />
          </div>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl"
            whileHover={{ scale: 2 }}
            whileTap={{ scale: 1.2 }}
            initial={{ scale: 1.75 }}
          >
            {isOpen ? (
              <IoClose fontSize="large" color="black" />
            ) : (
              <TbMenu2 fontSize="large" color="white" />
            )}
          </motion.button>
          <DropDownNav isOpen={isOpen} setOpen={setIsOpen} />
        </div>
        {!isOpen && <HeaderBanner />}
      </div>
    )
  }

  return (
    <div className="sticky top-0 z-50 mb-8 flex flex-col">
      <nav className="flex w-full items-center justify-center gap-6  p-3">
        <ul className="flex items-center gap-8 rounded-3xl bg-[#17171780] p-1 backdrop-blur-lg">
          <li className="px-4" key={'nav_logo_landing'}>
            <HeaderLogo />
          </li>
          {NavOptions.map((opt, index) => {
            return (
              <li key={`nav_${opt.label}_${index}`}>
                <HeaderNavLink to={opt.to} label={opt.label} />
              </li>
            )
          })}
          <li className=" flex gap-2" key={'nav_button_book_now'}>
            <Button buttonVariant="navSecondary">
              <a href={'/ace-summer-camp-sign-up'} target="__blank">
                <Typography fontVariant="base" fontWeight="500">
                  Camp Registration
                </Typography>
              </a>
            </Button>
            <Button buttonVariant="nav">
              <a href={handleBookLink()} target="__blank">
                <Typography fontVariant="base" fontWeight="500">
                  Book Now
                </Typography>
              </a>
            </Button>
          </li>
        </ul>
      </nav>
      <HeaderBanner />
    </div>
  )
}
