import * as React from 'react';

interface BannerTextProps {
  fill?: string;
  pathId: string;
  animationDuration: string;
  animationDelay: string;
  startOffsetPosition: string;
  children: React.ReactNode;
}

const START_OFFSET = '20%';

export const BannerText = ({
  children,
  fill = 'black',
  pathId = '',
  animationDuration,
  animationDelay,
  startOffsetPosition = START_OFFSET,
}: BannerTextProps) => {
  return (
    <text
      style={{
        fontFamily: 'new-hero',
        fontWeight: '800',
        fontSize: '48px',
      }}
      fill={fill}
    >
      <textPath
        href={pathId}
        startOffset={startOffsetPosition}
        dominantBaseline="middle"
        // style={{ paddingLeft: '12px' }}
      >
        <animate
          attributeName="startOffset"
          from={startOffsetPosition}
          to="100%"
          dur={animationDuration}
          begin={animationDelay}
          repeatCount="indefinite"
        />
        {children}
      </textPath>
    </text>
  );
};
