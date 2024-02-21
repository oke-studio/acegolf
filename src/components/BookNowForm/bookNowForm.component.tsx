'use client';

import * as React from 'react';
import {
	Box,
	FormControl,
	InputLabel,
	Select,
	styled,
	InputBase,
	SelectChangeEvent,
	SvgIcon,
	useMediaQuery,
	useTheme,
} from '@mui/material';

import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

export interface ReserveABayObject {
	guests: string;
	duration: string;
	date: string;
	time: string;
}

const CustomInput = styled(InputBase)(({ theme }) => ({
	'& .MuiInputBase-input': {
		borderRadius: '12px',
		position: 'relative',
		backgroundColor: theme.palette.background.paper,

		// fontSize: 16,
		padding: '12px 24px 12px 24px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),

		'&:focus': {
			borderRadius: 4,
			borderColor: '#80bdff',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
		},
	},
}));

export const BookNowForm = ({
	handleReserveFormOnChange,
	handleDateTimePickerChange,
	reserveABayObject,
	isLanding = false,
}: //   isWide,
{
	handleDateTimePickerChange: (
		value: string,
		option: keyof typeof reserveABayObject,
	) => void;
	handleReserveFormOnChange: (
		value: SelectChangeEvent,
		option: keyof typeof reserveABayObject,
	) => void;
	reserveABayObject: ReserveABayObject;
	isWide: boolean;
	isLanding?: boolean;
}) => {
	const { breakpoints } = useTheme();
	const isMobile = useMediaQuery(breakpoints.down('sm'));

	const RoundReserveTime = () => {
		const date = dayjs(reserveABayObject.time);

		const m = date.minute();
		const h = date.hour();

		if (m > 30) {
			return date.set('hour', h + 1).set('minute', 0);
		} else {
			return date.set('minute', 30);
		}
	};

	// console.log(RoundReserveTime());

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: isLanding ? 'row' : 'column',
				gap: '24px',
				justifyContent: isLanding ? 'center' : 'space-evenly',

				...(isMobile && {
					flexDirection: 'column',
					justifyContent: 'center',
				}),
			}}
		>
			<FormControl>
				<InputLabel
					id="reserve-a-bay-guest-label"
					sx={{ visibility: 'hidden' }}
				>
					Guests
				</InputLabel>
				<Select
					value={reserveABayObject.guests}
					native
					label="Guests"
					id="reserve-a-bay-guest"
					labelId="reserve-a-bay-guest-label"
					onChange={e => handleReserveFormOnChange(e, 'guests')}
					input={<CustomInput />}
					IconComponent={() => (
						<SvgIcon
							width="19"
							height="12"
							viewBox="0 0 19 12"
							xmlns="http://www.w3.org/2000/svg"
							focusable
							sx={{
								right: '10px',
								position: 'absolute',
								top: 'calc(50% - 0.5em)',
								fill: 'none',
								pointerEvents: 'none',
							}}
						>
							<path
								d="M2 1.75L9.5 9.25L17 1.75"
								stroke="black"
								strokeWidth="3"
							/>
						</SvgIcon>
					)}
				>
					{[...Array(15)].map((_, index) => (
						<option value={index} key={`guest_option_${index}`}>
							{[index, index !== 1 ? 'Guests' : 'Guest'].join(' ')}
						</option>
					))}
				</Select>
			</FormControl>

			<FormControl>
				<InputLabel
					id="reserve-a-bay-duration-label"
					sx={{ visibility: 'hidden' }}
				>
					Hours
				</InputLabel>
				<Select
					value={reserveABayObject.duration}
					native
					label="Hours"
					id="reserve-a-bay-duration"
					labelId="reserve-a-bay-duration-label"
					onChange={e => handleReserveFormOnChange(e, 'duration')}
					input={<CustomInput />}
					IconComponent={() => (
						<SvgIcon
							width="19"
							height="12"
							viewBox="0 0 19 12"
							xmlns="http://www.w3.org/2000/svg"
							focusable
							sx={{
								right: '10px',
								position: 'absolute',
								top: 'calc(50% - 0.5em)',
								fill: 'none',
								pointerEvents: 'none',
							}}
						>
							<path
								d="M2 1.75L9.5 9.25L17 1.75"
								stroke="black"
								strokeWidth="3"
							/>
						</SvgIcon>
					)}
				>
					{[...Array(5)].map((_, index) =>
						index === 0 ? (
							<></>
						) : (
							<option value={index} key={`duration_option_${index}`}>
								{[index, index !== 1 ? 'Hours' : 'Hour'].join(' ')}
							</option>
						),
					)}
				</Select>
			</FormControl>

			<DatePicker
				label="Date"
				// id="reserve-a-bay-date"
				// labelId="reserve-a-bay-date-label"
				slots={{
					openPickerIcon: () => (
						<svg
							width="19"
							height="12"
							viewBox="0 0 19 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2 1.75L9.5 9.25L17 1.75"
								stroke="black"
								strokeWidth="3"
							/>
						</svg>
					),
				}}
				slotProps={{
					textField: {
						sx: {
							color: 'black',
							backgroundColor: 'white',
							borderRadius: '12px',
							'.MuiFormLabel-root': {
								visibility: 'hidden',
							},
							'.MuiInputBase-root': {
								padding: '12px 24px',

								'.MuiInputBase-input': {
									padding: '0px',
								},
							},
							'.MuiOutlinedInput-notchedOutline': {
								visibility: 'hidden',
							},
						},
					},
					openPickerButton: {
						sx: {
							padding: '0px',
						},
					},
					inputAdornment: {
						sx: {
							marginLeft: '0px',
						},
					},
				}}
				value={dayjs(reserveABayObject.date)}
				onChange={newValue => {
					handleDateTimePickerChange(newValue?.toString()!, 'date');
				}}
			/>

			<TimePicker
				label="Time"
				// id="reserve-a-bay-date"
				// labelId="reserve-a-bay-date-label"
				slots={{
					openPickerIcon: () => (
						<svg
							width="19"
							height="12"
							viewBox="0 0 19 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M2 1.75L9.5 9.25L17 1.75"
								stroke="black"
								strokeWidth="3"
							/>
						</svg>
					),
				}}
				slotProps={{
					textField: {
						sx: {
							color: 'black',
							backgroundColor: 'white',
							borderRadius: '12px',
							'.MuiFormLabel-root': {
								visibility: 'hidden',
							},
							'.MuiInputBase-root': {
								padding: '12px 24px',

								'.MuiInputBase-input': {
									padding: '0px',
								},
							},
							'.MuiOutlinedInput-notchedOutline': {
								visibility: 'hidden',
							},
						},
					},
					openPickerButton: {
						sx: {
							padding: '0px',
						},
					},
					inputAdornment: {
						sx: {
							marginLeft: '0px',
						},
					},
				}}
				minutesStep={30}
				value={RoundReserveTime()}
				onChange={newValue => {
					handleDateTimePickerChange(newValue?.toString()!, 'date');
				}}
			/>
		</Box>
	);
};
