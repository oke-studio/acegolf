import * as React from 'react';

interface BannerTextProps {
	fill?: string;
	pathId: string;
	animationDuration: string;
	animationDelay: string;
	startOffsetPosition: string;
	children: React.ReactNode;
}

const START_OFFSET = '-20%';

export const BannerText = ({
	children,
	fill = 'black',
	pathId = '',
	animationDuration,
	animationDelay,
	startOffsetPosition = START_OFFSET,
}: BannerTextProps) => {
	const endOffsetPosition =
		eval(`${Number(startOffsetPosition.replace(/[^0-9]/g, ''))} + ${100}`) +
		'%';
	console.log(endOffsetPosition);

	return (
		<text
			style={{
				fontWeight: '800',
				fontSize: '46px',
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
