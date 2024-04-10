import * as React from 'react'
import classNames from 'classnames'

type ButtonVariantType = 'primary' | 'secondary' | 'simple' | 'nav'

interface ButtonProps {
  buttonVariant?: ButtonVariantType
  buttonStyle?: React.CSSProperties
  children: React.ReactNode
}

const ButtonVariantMapping: { [key in ButtonVariantType]: string } = {
  primary:
    'rounded-full bg-orange py-1 px-4 border-solid border-2 border-orange text-white hover:text-black transition-[color]  hover:border-black duration-300 ease-in-out',
  secondary:
    'rounded-full bg-white py-1 px-4 border-solid border-2 border-black text-black hover:text-orange hover:border-orange',
  simple: '',
  nav: 'rounded-full bg-orange py-1 px-4 border-solid border-2 border-orange text-white hover:text-black transition-[color] duration-400 ease-in-out hover:bg-white hover:border-black',
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
