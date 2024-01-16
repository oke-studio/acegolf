import * as React from 'react'
import { RoundedVideoText } from './components/roundedVideoText.component'
import {
	Box,
	styled,
	Button,
	ButtonProps,
	SxProps,
	Theme,
	useTheme,
	Typography,
} from '@mui/material'

interface VideoProps {
	text: string
	textCount?: number
	textPath: string
}

const animationDuration = '30s'
const initialStartOffset = '0%'

const VideoPathText = ({ text, textCount = 1, textPath }: VideoProps) => {
	return (
		<>
			{Array(textCount)
				.fill('')
				.map((_, index) => (
					<RoundedVideoText
						key={index}
						animationDelay={`${index * 10}s`}
						animationDuration={animationDuration}
						pathId={`#${textPath}`}
						fill={index % 2 === 0 ? '#36DAD5' : '#36DAD5'}
						startOffsetPosition={initialStartOffset}
					>
						{text}
					</RoundedVideoText>
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
	)
}

interface VideoSVGWrapperProps {
	width: string
	height: string
	pathProps: React.SVGProps<SVGPathElement>
	// children: React.ReactNode;
	text: string
	strokeWidth?: string
	strokeColor?: string
	textCount?: number
	textPath?: string
	viewBox: string
	sx?: SxProps
}

export const RoundedVideoPath = ({
	width,
	height,
	pathProps,
	strokeWidth = '0',
	strokeColor = '#000',
	text,
	textCount,
	textPath = 'MyPath',
	viewBox = `0 0 ${width} ${height}`,
	sx,
}: VideoSVGWrapperProps) => {
	return (
		<Box
			sx={{
				width: '100%',
				// height: '100%',
				...sx,
			}}
		>
			<svg
				width={width}
				height={height}
				// viewBox={`0 0 ${width} ${height}`}
				viewBox={viewBox}
				fill="none"
				// preserveAspectRatio="xMidYMid meet"
				style={{
					overflow: 'visible',
				}}
			>
				<path
					id={textPath}
					strokeWidth={strokeWidth}
					stroke={strokeColor}
					fill="none"
					pathLength="100"
					{...pathProps}
				/>
				<VideoPathText text={text} textCount={textCount} textPath={textPath} />
			</svg>
		</Box>
	)
}

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
