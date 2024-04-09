import * as React from 'react'
import classNames from 'classnames'
import { motion, MotionStyle } from 'framer-motion'

type BorderRadiusVariantsType = 'pill' | 'corner'

const BorderRadiusMapping: { [key in BorderRadiusVariantsType]: string } = {
  pill: 'rounded-2xl',
  corner: 'rounded-none',
}

interface SectionProps {
  borderRadiusVariant?: BorderRadiusVariantsType
  style?: MotionStyle
  children: React.ReactNode
  tailWindStyle?: string
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ borderRadiusVariant = 'pill', style, children, tailWindStyle }, ref) => {
    const borderRadius = BorderRadiusMapping[borderRadiusVariant]

    return (
      <motion.section
        className={classNames(
          borderRadius,
          tailWindStyle,
          'h-max w-full border-2 border-black bg-white p-6 py-20'
        )}
        ref={ref}
        style={style}
      >
        {children}
      </motion.section>
    )
  }
)
