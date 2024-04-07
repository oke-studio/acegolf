import * as React from 'react'
import { HeaderLogo } from './components/HeaderLogo'
import { HeaderNavLink } from './components/HeaderNavLink'
import { Link } from 'react-router-dom'
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
  { label: 'How it Works', to: '/how-it-works' },
  // { label: 'About', to: '/about' },
  { label: 'Menu', to: '/menu' },
  // { label: 'Events', to: '/events' },
]

const DropDownNav = ({ isOpen }: { isOpen: boolean }) => {
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
      className="z-99 absolute left-0 right-0 top-full z-10 h-screen bg-white"
      variants={navVariants}
      animate={isOpen ? 'open' : 'closed'}
      initial="closed"
    >
      <ul className="flex flex-col items-center gap-3">
        {NavOptions.map((opt, index) => {
          return (
            <li key={`nav_${opt.label}_${index}`}>
              <HeaderNavLink to={opt.to} label={opt.label} />
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
      <div className="sticky top-0 z-50">
        <HeaderBanner />
        <div
          className={classNames(
            isOpen ? 'bg-white' : 'bg-transparent',
            'flex w-full items-center justify-between p-3 backdrop-blur-lg'
          )}
        >
          <HeaderLogo color={isOpen ? 'black' : 'white'} />
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl"
            whileHover={{ scale: 1.75 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 1 }}
          >
            {isOpen ? (
              <IoClose fontSize="large" color="black" />
            ) : (
              <TbMenu2 fontSize="large" color="white" />
            )}
          </motion.button>
          <DropDownNav isOpen={isOpen} />
        </div>
      </div>
    )
  }

  return (
    <div className="sticky top-0 z-50">
      <HeaderBanner />
      <nav className="flex w-full items-center justify-center gap-6 p-3">
        <ul className="flex items-center gap-6 rounded-3xl p-4 backdrop-blur-lg">
          <li key={'nav_logo_landing'}>
            <HeaderLogo />
          </li>
          {NavOptions.map((opt, index) => {
            return (
              <li key={`nav_${opt.label}_${index}`}>
                <HeaderNavLink to={opt.to} label={opt.label} />
              </li>
            )
          })}
          <li key={'nav_button_book_now'}>
            <Button buttonVariant="nav">
              <Link to="/book-now">
                <Typography fontVariant="base" fontWeight="500">
                  Book Now
                </Typography>
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}