import * as React from 'react';
import { keyframes, styled } from '@mui/material';
import { BannerText } from './components/bannerText.component';
import { useTextWidth } from '@tag0/use-text-width';

interface TopBannerProps {
  text: string;
  textCount?: number;
}

const animationDuration = '20s';
const initialStartOffset = '-50%';

const TopBannerText = ({ text, textCount = 1 }: TopBannerProps) => {
  const textWidth = useTextWidth({ text: text, font: '48px new-hero' });
  console.log(textWidth);
  return (
    <>
      {Array(textCount)
        .fill('')
        .map((_, index) => (
          <BannerText
            key={index}
            animationDelay={`${index * 5}s`}
            animationDuration={animationDuration}
            pathId="#MyPath"
            startOffsetPosition={initialStartOffset}
            textWidth={Math.ceil(textWidth)}
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
}

export const TopBanner = ({
  width,
  height,
  pathProps,
  strokeWidth = '96',
  strokeColor = 'white',
  text,
  textCount,
}: TopBannerSVGWrapperProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      // preserveAspectRatio="xMidYMid meet"
    >
      <path
        {...pathProps}
        id="MyPath"
        strokeWidth={strokeWidth}
        stroke={strokeColor}
        fill="none"
        pathLength="100"
      />
      <TopBannerText text={text} textCount={textCount} />
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
