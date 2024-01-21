import * as React from 'react';
import {
	Box,
	// useTheme,
	// useMediaQuery
} from '@mui/material';
import { AceBanner } from '../../../../components/aceBanner/aceBanner.component';

{
	/* Banner Iterlude */
}
<Box
	sx={{
		position: 'relative',
		//top: isMobile ? '-200px' : '-160px',
		//zIndex: '1',
	}}
>
	<Box
		sx={{
			height: '500px',
			width: '100vw',
			//...(isMobile && { scale: '2' }),
		}}
	>
		<AceBanner
			width="100%"
			height="100%"
			viewBox="0 0 1440 400"
			pathProps={{
				d:
					'M 0.3257 244.537 C 21 244.537 28.5 238.5 142.377 169.919 C 343 49.0589 549.615 31.5 474.992 123.111 C 380.659 238.919 596.811 193.13 832.992 123.11 C 1255 -1.9998 1630.81 38.1808 1413.49 179.111 C 1248.49 286.111 1913 102.502 1924 222',
				//fill: '#EB8B32',
			}}
			text=" "
			textCount={1}
			strokeColor="#36DAD5"
		/>
	</Box>

	<Box
		sx={{
			height: '500px',
			width: '100vw',
			position: 'relative',
			// top: isMobile ? '-515px' : '-530px',
			// ...(isMobile && { scale: '2' }),
		}}
	>
		<AceBanner
			width="100%"
			height="100%"
			viewBox="0 0 1440 400"
			pathProps={{
				d:
					'M 0.3257 244.537 C 21 244.537 28.5 238.5 142.377 169.919 C 343 49.0589 549.615 31.5 474.992 123.111 C 380.659 238.919 596.811 193.13 832.992 123.11 C 1255 -1.9998 1630.81 38.1808 1413.49 179.111 C 1248.49 286.111 1913 102.502 1924 222',
			}}
			text="FOOD  DRINKS FUN "
			textCount={5}
			strokeColor="#529DC8"
		/>
	</Box>
</Box>;
