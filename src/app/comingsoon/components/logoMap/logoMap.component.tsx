'use client';

import * as React from 'react';
import { styled, Box } from '@mui/material';
import GolfLogo from '../../../../../public/images/ace-golf-golf-logo2.svg';

import { AnimatedLogo } from './components/bottomLogo/bottomLogo.component';

const RelativePositionWrapper = styled(Box)({
	position: 'relative',
});

export const LogoMap = () => {
	let logoStack = [];

	// Array.from(
	//     Array(4).map((_, index) => {
	//         console.log(index);
	//         logoStack.push(<img src={GolfLogo} alt="temp" key={index} />);
	//     })
	// );

	// for (let index = 0; index < 4; index++) {
	//   logoStack.push(
	//     // <Image
	//     //     src={golfLogo}
	//     //     width={width}
	//     //     height={height}
	//     //     alt="temp alt"
	//     //     key={index}
	//     // />

	//     <RelativePositionWrapper key={index}>
	//       {/* <GolfLogo
	//         key={index}
	//         position="absolute"
	//         height="100%"
	//         fill="red"
	//         //   style={{ transform: 'scale(0.2)' }}
	//       /> */}

	//       <AnimatedLogo />
	//     </RelativePositionWrapper>,
	//   );
	// }

	// return (
	//     <div
	//         style={{
	//             display: "flex",
	//             // gridTemplateColumns: "repeat(4, 1fr)",
	//             width: "100%",
	//         }}
	//     >
	//         <RelativePositionWrapper>
	//             <GolfLogoLeft
	//                 position="absolute"
	//                 height="100%"
	//                 // viewBox={viewBox}
	//             />
	//         </RelativePositionWrapper>
	//         <RelativePositionWrapper>
	//             <GolfLogoCentre
	//                 position="absolute"
	//                 height="100%"
	//                 // viewBox={viewBox}
	//             />
	//         </RelativePositionWrapper>
	//         <RelativePositionWrapper>
	//             <GolfLogoCentre
	//                 position="absolute"
	//                 height="100%"
	//                 // viewBox={viewBox}
	//             />
	//         </RelativePositionWrapper>
	//         <RelativePositionWrapper>
	//             <GolfLogoRight
	//                 position="absolute"
	//                 height="100%"
	//                 // viewBox={viewBox}
	//             />
	//         </RelativePositionWrapper>
	//     </div>
	// );

	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateRows: 'repeat(2, 1fr)',
				height: 'max-content',
			}}
		>
			{[...Array(10)].map((_, index) => (
				<RelativePositionWrapper key={index}>
					<AnimatedLogo />
				</RelativePositionWrapper>
			))}
		</Box>
	);
};
