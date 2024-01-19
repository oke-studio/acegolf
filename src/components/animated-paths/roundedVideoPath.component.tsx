import * as React from 'react';
import { RoundedVideoText } from './components/roundedVideoText.component';
import { Box, SxProps } from '@mui/material';

interface VideoProps {
	text: string;
	textCount?: number;
	textPath: string;
}

const animationDuration = '30s';
const initialStartOffset = '0%';

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
		</>
	);
};

interface VideoSVGWrapperProps {
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
	sx?: SxProps;
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
	);
};
