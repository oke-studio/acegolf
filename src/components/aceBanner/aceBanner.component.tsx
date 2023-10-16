import * as React from 'react';
import { BannerText } from './components/aceBannerText.component';

interface AceBannerProps {
  text: string;
  textCount?: number;
  textPath: string;
}

const animationDuration = '30s';
const initialStartOffset = '-60%';

const AceBannerText = ({ text, textCount = 1, textPath }: AceBannerProps) => {
  return (
    <>
      {Array(textCount)
        .fill('')
        .map((_, index) => (
          <BannerText
            key={index}
            animationDelay={`${index * 10}s`}
            animationDuration={animationDuration}
            pathId={`#${textPath}`}
            fill={index % 2 === 0 ? 'white' : 'black'}
            startOffsetPosition={initialStartOffset}
          >
            {text}
          </BannerText>
        ))}
      {/* <BannerText
        animationDelay="0s"
        animationDuration={animationDuration}
        pathId="#MyPath"
        startOffsetPosition={initialStartOffset}
      >
        {text}
      </BannerText>
      <BannerText
        animationDelay="5s"
        animationDuration={animationDuration}
        pathId="#MyPath"
        // fill="blue"
        // startOffsetPosition="-100%"
        startOffsetPosition={initialStartOffset}
      >
        {text}
      </BannerText>
      <BannerText
        animationDelay="10s"
        animationDuration={animationDuration}
        pathId="#MyPath"
        startOffsetPosition={initialStartOffset}
      >
        {text}
      </BannerText>
      <BannerText
        animationDelay="15s"
        animationDuration={animationDuration}
        pathId="#MyPath"
        // fill="red"
        // startOffsetPosition="-100%"
        startOffsetPosition={initialStartOffset}
      >
        {text}
      </BannerText> */}
    </>
  );
};

interface AceBannerSVGWrapperProps {
  width: string;
  height: string;
  pathProps: React.SVGProps<SVGPathElement>;
  // children: React.ReactNode;
  text: string;
  strokeWidth?: string;
  strokeColor?: string;
  textCount?: number;
  textPath?: string;
  viewBox: string;
}

export const AceBanner = ({
  width,
  height,
  pathProps,
  strokeWidth = '116',
  strokeColor = '#171717',
  text,
  textCount,
  textPath = 'MyPath',
  viewBox = `0 0 ${width} ${height}`,
}: AceBannerSVGWrapperProps) => {
  return (
    <svg
      width={width}
      height={height}
      // viewBox={`0 0 ${width} ${height}`}
      viewBox={viewBox}
      fill="none"
      // preserveAspectRatio="xMidYMid meet"
    >
      <path
        id={textPath}
        strokeWidth={strokeWidth}
        stroke={strokeColor}
        fill="none"
        pathLength="100"
        {...pathProps}
      />
      <AceBannerText text={text} textCount={textCount} textPath={textPath} />
    </svg>
  );
};

// <text
//         style={{
//           fontFamily: 'new-hero',
//           fontWeight: '800',
//           fontSize: '48px',
//           color: 'black',
//         }}
//         width="100%"
//         // text-anchor="middle"
//       >
//         <textPath
//           href="#MyPath"
//           //   textLength="100%"
//           startOffset="-60%"
//           //   side="right"
//           dominantBaseline="middle"
//         >
//           <animate
//             attributeName="startOffset"
//             from="-60%"
//             to="130%"
//             dur="24s"
//             begin="5s"
//             repeatCount="indefinite"
//           ></animate>
//           {text}
//         </textPath>
//       </text>

//       <text
//         style={{
//           fontFamily: 'new-hero',
//           fontWeight: '800',
//           fontSize: '48px',
//           color: 'black',
//         }}
//         width="100%"
//       >
//         <textPath href="#MyPath" startOffset="-50%" dominantBaseline="middle">
//           <animate
//             attributeName="startOffset"
//             from="-50%"
//             to="130%"
//             dur="20s"
//             begin="10s"
//             repeatCount="indefinite"
//           />
//           {text}
//         </textPath>
//       </text>
