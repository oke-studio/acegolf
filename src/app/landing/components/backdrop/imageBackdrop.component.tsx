import * as React from 'react'
import { SxProps, Box } from '@mui/material'

export const ImageWithBackdrop = ({
	img,
	color,
	height,
	xOffset,
	yOffset,
	width,

	children,
	css,
}: {
	img?: string
	color: string
	height: string | number
	width: string | number
	xOffset: number
	yOffset: number
	children?: React.ReactNode
	css?: SxProps
}) => {
	return (
		<Box
			sx={{
				...css,
				width: width,
				height: height,
				backgroundColor: color,
				position: 'relative',
				'::after': {
					content: '""',
					width: '100%',
					height: '100%',
					display: 'inline-flex',
					top: `${yOffset}px`,
					left: `${xOffset}px`,
					position: 'absolute',
					background: img ? `url(${img})` : 'blue',
					borderRadius: 'inherit',
				},
			}}
		>
			{/* <Box
          sx={{
            backgroundColor: 'orange',
            position: 'relative',
            height: 'inherit',
            width: 'inherit',
            top: '10px',
            left: '15px',
          }}
        > */}
			{children}
			{/* </Box> */}
		</Box>
	)
}
