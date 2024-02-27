import * as React from 'react'
import { fontUses, fontWeight } from '../../utils/fontValues'
import classNames from 'classnames'

interface TypographyProps {
  fontWeight: keyof typeof fontWeight
  T?: React.ElementType
  fontVariant: keyof typeof fontUses
  fontStyle?: 'normal' | 'italic'
  children: React.ReactNode
  style?: React.CSSProperties
  tailwindStyle?: string
}

const SemanticComponentMapping: {
  [key in keyof typeof fontUses]: React.ElementType<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'
  >
} = {
  headingOne: 'h1',
  headingTwo: 'h2',
  headingThree: 'h3',
  headingFour: 'h4',
  base: 'p',
  miniscule: 'p',
  extralarge: 'h4',
  large: 'h5',
  largeH1: 'h1',
  poster: 'h1',
  small: 'p',
}

const FontSizeMapping: { [key in keyof typeof fontUses]: string } = {
  miniscule: 'text-xs',
  base: 'text-base',
  small: 'text-small',
  large: 'text-lg',
  extralarge: 'text-xl',
  headingFour: 'text-2xl',
  headingThree: 'text-3xl',
  headingTwo: 'text-4xl',
  headingOne: 'text-5xl',
  largeH1: 'text-6xl',
  poster: 'text-7xl',
}

const FontWeightMapping: { [key in keyof typeof fontWeight]: string } = {
  '100': 'font-HNHairline font-thin',
  '200': 'font-HNUltraLight font-extralight',
  '300': 'font-HNLight font-light',
  '400': 'font-HNRegular font-normal',
  '500': 'font-HNMedium font-medium',
  '600': 'font-HNSemiBold font-semibold',
  '700': 'font-HNBold font-bold',
  '800': 'font-HNExtraBold font-extrabold',
  '900': 'font-HNSuper font-black',
}

const FontStyleMapping: { [key in 'italic' | 'normal']: string } = {
  normal: 'not-italic',
  italic: 'italic',
}

export const Typography = ({
  T,
  fontWeight = '300',
  fontStyle = 'normal',
  fontVariant,
  style,
  tailwindStyle,
  children,
}: TypographyProps) => {
  const C = T ?? SemanticComponentMapping[fontVariant]
  const fontFamily = FontWeightMapping[fontWeight]
  const fontSize = FontSizeMapping[fontVariant]
  return (
    <C
      className={classNames(
        tailwindStyle,
        fontFamily,
        FontStyleMapping[fontStyle],
        fontSize
      )}
      style={{ ...style }}
    >
      {children}
    </C>
  )
}
