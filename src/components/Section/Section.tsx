import * as React from 'react'
import classNames from 'classnames'
import { motion, MotionStyle } from 'framer-motion'

type BorderRadiusVariantsType = 'pill' | 'corner'

const BorderRadiusMapping: { [key in BorderRadiusVariantsType]: string } = {
  pill: 'rounded-[2rem]',
  corner: 'rounded-none',
}

type SectionWidthOptionsTypes = 'fullViewport' | 'normal' | 'small';
const SectionWidthOptions: { [key in SectionWidthOptionsTypes]: string } = {
	fullViewport: 'm-[8px_0_8px]',
	normal: 'm-[8px_2.25rem_8px]',
	small: 'section-small',
};

interface SectionProps {
  borderRadiusVariant?: BorderRadiusVariantsType
  sectionWidth?: SectionWidthOptionsTypes;
  style?: MotionStyle
  children: React.ReactNode
  tailWindStyle?: string
}

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ sectionWidth = 'normal', borderRadiusVariant = 'pill', style, children, tailWindStyle }, ref) => {
    const borderRadius = BorderRadiusMapping[borderRadiusVariant]
    const SECTION = SectionWidthOptions[sectionWidth];

    return (
      <motion.section
        className={classNames(
          borderRadius,
          SECTION,
          tailWindStyle,
          'h-max bg-white p-6 py-20'
        )}
        ref={ref}
        style={style}
      >
        {children}
      </motion.section>
    )
  }
)