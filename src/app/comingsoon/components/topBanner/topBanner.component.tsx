import { Box } from '@mui/material';
import * as React from 'react';
import { keyframes, styled } from '@mui/material';

const slidingAnimation = keyframes`
    0% {transform: translateZ(0);}
    100% {transform: translate3d(-100%, 0, 0)}
`;

const TextWrapper = styled('textPath')({
  animation: `${slidingAnimation} 25s linear infinite;`,
});

interface TopBannerProps {
  text: string;
}

export const TopBanner = ({ text }: TopBannerProps) => {
  return (
    // <svg width="1458" height="250" viewBox="0 0 1458 250">
    <svg width="1458" height="304" viewBox="0 0 1458 304">
      {/* <path
          id="MyPath"
          style={{
            fill: 'none',
            strokeWidth: 96,
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            stroke: 'white',
            strokeOpacity: 1,
            strokeMiterlimit: 4,
          }}
          d="M -203 263.24025 C 127 -52.75825 304 42.24175 203.5 152.741 C 103 263.24025 328 231.2395 561.5 152.741 C 795 74.2425 1189.320312 77.80975 972 218.74225 C 807 325.74075 1465 164.24075 1543.5 142.23875 "
          transform="matrix(1,0,0,0.822368,0,0)"
        /> */}
      <path
        id="MyPath"
        d="M-203 263.241C127 -52.7594 304 42.2406 203.5 152.741C103 263.241 328 231.24 561.5 152.741C795 74.2407 1189.32 77.8108 972 218.741C807 325.741 1465 164.241 1543.5 142.241"
        stroke="white"
        stroke-width="96"
        fill="none"
      />
      <text
        style={{
          fontFamily: 'new-hero',
          fontWeight: '800',
          fontSize: '48px',
          color: 'black',
        }}
        width="100%"
        text-anchor="middle"
      >
        <textPath
          href="#MyPath"
          textLength="100%"
          startOffset="50%"
          //   side="right"
          alignmentBaseline="central"
        >
          <animate
            attributeName="startOffset"
            from="-10%"
            to="150%"
            begin="0s"
            dur="20s"
            repeatCount="indefinite"
          ></animate>
          {text}
        </textPath>
        {/* <textPath href="#MyPath" textLength="100%" startOffset="50%">
          {text}
        </textPath>
        <textPath href="#MyPath" textLength="100%" startOffset="50%">
          {text}
        </textPath> */}
      </text>
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
