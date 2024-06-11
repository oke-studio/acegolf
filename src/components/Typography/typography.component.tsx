'use client';
import * as React from 'react';
import {
	Typography as T,
	TypographyProps as TypograhpyOriginalProps,
} from '@mui/material';
import { fontUses, fontWeight } from '@/components/Theme-Context/fontValues';

const SemanticComponentMapping: {
	[key in keyof typeof fontUses]: React.ElementType<any>;
} = {
	headingOne: 'h1',
	headingTwo: 'h2',
	headingThree: 'h3',
	headingFour: 'h4',
	base: 'p',
	miniscule: 'p',
	extralarge: 'h4',
	large: 'h5',
	largeH1: 'h1',
	poster: 'h1',
	small: 'p',
};

interface TypographyProps extends Omit<TypograhpyOriginalProps, 'variant'> {
	weight?: keyof typeof fontWeight;
	fontStyle?: 'normal' | 'italic';
	variant: keyof typeof fontUses;
	as?: React.ElementType<any>;
}

export const Typography = ({
	variant,
	weight = '400',
	fontStyle = 'normal',
	sx,
	children,
	as,
	...props
}: TypographyProps) => (
	<T
		{...props}
		component={as ? as : SemanticComponentMapping[variant]}
		variant={variant}
		sx={{ fontWeight: weight, fontStyle: fontStyle, ...sx }}
	>
		{children}
	</T>
);
