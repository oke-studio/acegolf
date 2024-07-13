import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
//import { Typography } from '../../Typography/Typography'
import { RNG } from '../../../utils/RNG'

interface HeaderNavLink {
  to: string
  label: string
  baseColor?: string
  hoverColor?: string
}

const EVEN_ANIMATION = (baseColor?: string, hoverColor?: string) => {
  return {
    hover: {
      top: '5px',
      color: hoverColor ?? '#EB8B32',
      rotate: RNG(9, 12),
      transition: {
        duration: 0.5,
        type: 'spring',
      },
    },
    rest: {
      top: '0px',
      color: baseColor ?? '#FFFFFF',
      rotate: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
      },
    },
  }
}

const ODD_ANIMATION = (baseColor?: string, hoverColor?: string) => {
  return {
    hover: {
      top: '-5px',
      color: hoverColor ?? '#EB8B32',
      rotate: RNG(-9, -12),
      transition: {
        duration: 0.5,
        type: 'spring',
      },
    },
    rest: {
      top: '0px',
      color: baseColor ?? '#FFFFFF',
      rotate: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
      },
    },
  }
}

export const HeaderNavLink = ({
  to,
  label,
  baseColor,
  hoverColor,
}: HeaderNavLink) => {
  return (
    <Link to={to}>
      <p
        // fontVariant="base"
        // fontWeight="400"
        // style={{ color: 'white' }}
        className={
          'font-HNSemiBold text-3xl font-semibold md:font-HNRegular md:text-base md:font-normal'
        }
      >
        <motion.span initial="rest" whileHover="hover">
          {label.split('').map((text, index) => {
            return (
              <motion.span
                key={`${text}_${index}`}
                className="relative"
                variants={
                  index % 2 === 0
                    ? EVEN_ANIMATION(baseColor, hoverColor)
                    : ODD_ANIMATION(baseColor, hoverColor)
                }
              >
                {text}
              </motion.span>
            )
          })}
        </motion.span>
      </p>
    </Link>
  )
}
