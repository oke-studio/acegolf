import * as React from 'react'
import classNames from 'classnames'

interface AceImageProps {
  AceImageName: string
  AceImageSrc: string
  AceImageAspectRatio: string
  BackCutout: boolean
  BackCutoutColor: string
  ClassNamesUsed?: string
  style?: React.CSSProperties
}

export const AceImage = ({
  AceImageName,
  AceImageSrc,
  AceImageAspectRatio = '1/1',
  BackCutout = true,
  BackCutoutColor = 'var(--color-sharpTeal)',
  ClassNamesUsed,
  style,
}: AceImageProps) => {
  const randomizer = (min: number, max: number) => {
    return Math.random() * (max - min) + min
  }

  return (
    <div
      className={classNames('relative', ClassNamesUsed)}
      style={{
        ...style,
        ...(BackCutout && {
          backgroundColor: `rgb(${BackCutoutColor})`,
          //transform: `rotate(${randomizer(-3, 3)}deg)`,
          //aspectRatio: `${AceImageAspectRatio}`,
        }),
      }}
    >
      <img
        src={AceImageSrc}
        alt={AceImageName}
        className="h-full w-full rounded-[1px] object-cover  "
        style={{
          aspectRatio: `${AceImageAspectRatio}`,
          scale: `${randomizer(0.97, 0.99)}`,
          transform: `rotate(${randomizer(3, -3)}deg)`,
        }}
      />
    </div>
  )
}