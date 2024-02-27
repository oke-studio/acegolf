import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Typography } from '../../Typography/Typography'
import { RNG } from '../../../utils/RNG'

interface HeaderNavLink {
  to: string
  label: string
}

const EVEN_ANIMATION = {
  hover: {
    top: '5px',
    color: '#EB8B32',
    rotate: RNG(9, 12),
    transition: {
      duration: 0.5,
      type: 'spring',
    },
  },
  rest: {
    top: '0px',
    color: '#FFFFFF',
    rotate: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
    },
  },
}

const ODD_ANIMATION = {
  hover: {
    top: '-5px',
    color: '#EB8B32',
    rotate: RNG(-9, -12),
    transition: {
      duration: 0.5,
      type: 'spring',
    },
  },
  rest: {
    top: '0px',
    color: '#FFFFFF',
    rotate: 0,
    transition: {
      duration: 0.5,
      type: 'spring',
    },
  },
}

export const HeaderNavLink = ({ to, label }: HeaderNavLink) => {
  return (
    <Link to={to}>
      <Typography
        fontVariant="base"
        fontWeight="500"
        style={{ color: 'white' }}
      >
        <motion.span initial="rest" whileHover="hover">
          {label.split('').map((text, index) => {
            return (
              <motion.span
                key={`${text}_${index}`}
                className="relative"
                variants={index % 2 === 0 ? EVEN_ANIMATION : ODD_ANIMATION}
              >
                {text}
              </motion.span>
            )
          })}
        </motion.span>
      </Typography>
    </Link>
  )
}
