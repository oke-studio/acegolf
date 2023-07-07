import * as React from 'react';
import { keyframes, styled } from '@mui/material';
import { BannerText } from './components/bannerText.component';

interface TopBannerProps {
  text: string;
}

const animationDuration = '20s';
const initialStartOffset = '-105%';

export const TopBanner = ({ text }: TopBannerProps) => {
  return (
    // <svg width="1458" height="250" viewBox="0 0 1458 250">
    <svg width="1458" height="304" viewBox="0 0 1458 304">
      <path
        id="MyPath"
        d="M-203 263.241C127 -52.7594 304 42.2406 203.5 152.741C103 263.241 328 231.24 561.5 152.741C795 74.2407 1189.32 77.8108 972 218.741C807 325.741 1465 164.241 1543.5 142.241"
        stroke="white"
        stroke-width="96"
        fill="none"
      />
      <BannerText
        animationDelay="0s"
        animationDuration="20s"
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
      </BannerText>
      {/* <BannerText
        animationDelay="20s"
        animationDuration="20s"
        pathId="#MyPath"
        // fill="black"
        // startOffsetPosition="-100%"
        startOffsetPosition={initialStartOffset}
      >
        {text}
      </BannerText> */}
    </svg>
  );
  //   return (
  //     <Box
  //       sx={{
  //         width: '100%',
  //         height: '100px',
  //         background: 'white',
  //         borderRadius: '4px',
  //         // FONT
  //         fontFamily: 'new-hero',
  //         fontSize: '32px',
  //         fontWeight: '700',
  //       }}
  //     >
  //       {text}
  //     </Box>
  //   );
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
