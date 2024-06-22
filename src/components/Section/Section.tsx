import * as React from 'react'
import classNames from 'classnames'
import { motion, MotionStyle } from 'framer-motion'

type BorderRadiusVariantsType = 'pill' | 'corner'

const BorderRadiusMapping: { [key in BorderRadiusVariantsType]: string } = {
  pill: 'rounded-[2rem]',
  corner: 'rounded-none',
}

type SectionWidthOptionsTypes = 'fullViewport' | 'normal' | 'small'
const SectionWidthOptions: { [key in SectionWidthOptionsTypes]: string } = {
  fullViewport: 'lg:m-[8px_1rem_8px] px-[5%] py-[4%] m-[8px_0rem_8px] ',
  normal: 'lg:m-[8px_4rem_8px] px-[5%] py-[4%] m-[8px_1rem_8px] ',
  small: 'section-small',
}

interface SectionProps {
  borderRadiusVariant?: BorderRadiusVariantsType
  sectionWidth?: SectionWidthOptionsTypes
  style?: MotionStyle
  children: React.ReactNode
  tailWindStyle?: string
  id?: string
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      sectionWidth = 'normal',
      borderRadiusVariant = 'pill',
      style,
      children,
      tailWindStyle,
      id,
    },
    ref
  ) => {
    const borderRadius = BorderRadiusMapping[borderRadiusVariant]
    const SECTION = SectionWidthOptions[sectionWidth]

    return (
      <motion.section
        className={classNames(
          'h-max p-6 py-20',
          borderRadius,
          SECTION,
          tailWindStyle
        )}
        ref={ref}
        style={style}
        id={id}
      >
        {children}
      </motion.section>
    )
  }
)
