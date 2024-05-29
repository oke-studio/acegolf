import * as React from 'react'

interface RoundedVideoTextProps {
  fill?: string
  pathId: string
  animationDuration: string
  animationDelay: string
  startOffsetPosition: string
  children: React.ReactNode
}

const START_OFFSET = '-20%'

export const RoundedVideoText = ({
  children,
  fill = 'black',
  pathId = '',
  animationDuration,
  animationDelay,
  startOffsetPosition = START_OFFSET,
}: RoundedVideoTextProps) => {
  return (
    <text
      style={{
        fontWeight: '800',
        fontStyle: 'italic',
        fontSize: '1.25rem',
      }}
      fill={fill}
    >
      <textPath
        href={pathId}
        startOffset={startOffsetPosition}
        dominantBaseline="middle"
      >
        <animate
          attributeName="startOffset"
          from={startOffsetPosition}
          to="110%"
          dur={animationDuration}
          begin={animationDelay}
          repeatCount="indefinite"
        />
        {children}
      </textPath>
    </text>
  )
}
