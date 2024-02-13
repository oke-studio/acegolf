'use client';

import React from 'react';
import { useEffect, useRef } from 'react';
import {
	Box,
	styled,
	Tab,
	Tabs,
	useTheme,
	Button,
	useMediaQuery,
} from '@mui/material';

import { Typography } from '@/components/Typography/typography.component';
import { PageTitleSection } from '@/components/layout/pageTitleSection.component';

export const EventPageTitle = React.forwardRef(
	function EventPageTitleContainer(props, ref) {
		const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

		return (
			
		);
	},
);
