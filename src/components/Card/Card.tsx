import { Typography } from '../Typography/Typography'
import { Button } from '../Button/Button'
import classNames from 'classnames'

type ButtonType = {
  children: React.ReactNode
}

type ThemeType = 'light' | 'dark'
type TiltType = 'left' | 'center' | 'right'

const ThemeMapping: { [key in ThemeType]: string } = {
  light: 'bg-white text-black',
  dark: 'bg-black text-white',
}

const TiltMapping: { [key in TiltType]: string } = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

interface CardProps {
  buttonOne?: ButtonType
  buttonTwo?: ButtonType
  title?: string
  description?: string
  theme?: ThemeType
  tilt?: TiltType
  imgSrc?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export const Card = ({
  title,
  description,
  buttonOne,
  buttonTwo,
  theme = 'light',
  tilt = 'center',
  imgSrc,
  style,
  children,
}: CardProps) => {
  const finalTheme = ThemeMapping[theme]
  const finalTilt = TiltMapping[tilt]
  return (
    <div
      className={classNames(
        finalTheme,
        finalTilt,
        'flex min-h-48 w-full flex-col items-center rounded-3xl bg-center p-6 md:min-h-64'
      )}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderColor: '#E9E3DC',
        borderWidth: '3px',
        ...style,
      }}
    >
      <div className="relative flex w-full flex-col gap-6">
        {title && (
          <Typography fontVariant="headingThree" fontWeight="600">
            {title}
          </Typography>
        )}
        {description && (
          <Typography fontVariant="base" fontWeight="400">
            {description}
          </Typography>
        )}
      </div>
      <div className="flex w-full grow-[2]">{children}</div>
      <div className="mt-5 flex flex-wrap justify-center gap-4">
        {buttonOne && (
          <Button buttonVariant="secondary">{buttonOne.children}</Button>
        )}
        {buttonTwo && (
          <Button buttonVariant="primary">{buttonTwo.children}</Button>
        )}
      </div>
    </div>
  )
}
