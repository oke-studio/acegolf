'use client'

import * as React from 'react'
import { Button as MUIButton, useTheme, createTheme } from '@mui/material'

interface ButtonProps {
	variant?: 'primary' | 'secondary'
	onClick?: () => void
	label: string
}

export const Button = ({ variant = 'primary', label }: ButtonProps) => {
	const { typography, palette } = useTheme()

	return (
		<MUIButton
			disableElevation
			disableFocusRipple
			disableRipple
			disableTouchRipple
			sx={{}}
		>
			{label}
		</MUIButton>
	)
}
