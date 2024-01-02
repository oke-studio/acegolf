import * as React from 'react';
import { Typography } from '@/components/Typography/typography.component';

interface RoundedVideoTextProps {
  fill?: string;
  pathId: string;
  animationDuration: string;
  animationDelay: string;
  startOffsetPosition: string;
  children: React.ReactNode;
}

const START_OFFSET = '-20%';

export const RoundedVideoText = ({
  children,
  fill = 'black',
  pathId = '',
  animationDuration,
  animationDelay,
  startOffsetPosition = START_OFFSET,
}: RoundedVideoTextProps) => {
  const endOffsetPosition =
    eval(`${Number(startOffsetPosition.replace(/[^0-9]/g, ''))} + ${100}`) +
    '%';

  return (
    <text
      style={{
        fontWeight: '600',
        fontStyle: 'italic',
        fontSize: '1.5rem',
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
          // to={endOffsetPosition}
          to="110%"
          dur={animationDuration}
          begin={animationDelay}
          repeatCount="indefinite"
        />
        {children}
      </textPath>
    </text>
  );
};
