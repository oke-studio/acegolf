import * as React from 'react'
import classNames from 'classnames'

type ButtonVariantType = 'primary' | 'secondary' | 'simple' | 'nav' | 'parking'

interface ButtonProps {
  buttonVariant?: ButtonVariantType
  buttonStyle?: React.CSSProperties
  children: React.ReactNode
}

const ButtonVariantMapping: { [key in ButtonVariantType]: string } = {
  primary:
    'rounded-full bg-orange py-2 px-6 border-solid border-orange text-white hover:text-black transition-[color]   hover:bg-opacity-80 duration-300 ease-in-out',
  secondary:
    'rounded-full bg-white py-2 px-6 border-solid border-2 border-black text-black hover:text-black hover:border-black hover:bg-orange hover:bg-opacity-50 hover:border-opacity-50 duration-300 ease-in-out',
  simple: '',
  nav: 'rounded-full bg-orange py-1 px-4 border-solid border-2 border-orange text-white hover:text-black transition-[color] duration-400 ease-in-out hover:bg-white hover:border-black',

  parking:
    'rounded-full bg-green py-1 px-3 border-solid border-black text-white fill-white hover:text-black transition-[color]   hover:bg-opacity-80 duration-300 ease-in-out',
}

export const Button = ({
  buttonVariant = 'primary',
  buttonStyle,
  children,
}: ButtonProps) => {
  const buttonClassName = ButtonVariantMapping[buttonVariant]

  return (
    <button className={classNames(buttonClassName)} style={buttonStyle}>
      {children}
    </button>
  )
}
