import * as React from 'react';
import { keyframes, styled } from '@mui/material';
import { BannerText } from './components/bannerText.component';

interface TopBannerProps {
  text: string;
  textCount?: number;
  textPath: string;
}

const animationDuration = '20s';
const initialStartOffset = '-50%';

const TopBannerText = ({ text, textCount = 1, textPath }: TopBannerProps) => {
  return (
    <>
      {Array(textCount)
        .fill('')
        .map((_, index) => (
          <BannerText
            key={index}
            animationDelay={`${index * 5}s`}
            animationDuration={animationDuration}
            pathId={`#${textPath}`}
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

interface TopBannerSVGWrapperProps {
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

export const TopBanner = ({
  width,
  height,
  pathProps,
  strokeWidth = '96',
  strokeColor = 'white',
  text,
  textCount,
  textPath = 'MyPath',
  viewBox = `0 0 ${width} ${height}`,
}: TopBannerSVGWrapperProps) => {
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
        {...pathProps}
        id={textPath}
        strokeWidth={strokeWidth}
        stroke={strokeColor}
        fill="none"
        pathLength="100"
      />
      <TopBannerText text={text} textCount={textCount} textPath={textPath} />
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
