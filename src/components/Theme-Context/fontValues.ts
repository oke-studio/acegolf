import localfont from 'next/font/local';

// export const aceFont = localfont({
// 	src: [
// 		{
// 			path: '../../../public/fonts/Hero New Hairline.woff',
// 			weight: '100',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New Hairline Italic.woff',
// 			weight: '100',
// 			style: 'italic',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New Thin.woff',
// 			weight: '100',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New Thin Italic.woff',
// 			weight: '100',
// 			style: 'italic',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New UltraLight.woff',
// 			weight: '200',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New UltraLight Italic.woff',
// 			weight: '200',
// 			style: 'italic',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New Light.woff',
// 			weight: '300',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New Light Italic.woff',
// 			weight: '300',
// 			style: 'italic',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New Regular.woff',
// 			weight: '400',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New Regular Italic.woff',
// 			weight: '400',
// 			style: 'italic',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New Medium.woff',
// 			weight: '500',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New Medium Italic.woff',
// 			weight: '500',
// 			style: 'italic',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New SemiBold.woff',
// 			weight: '600',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New SemiBold Italic.woff',
// 			weight: '600',
// 			style: 'italic',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New Bold.woff',
// 			weight: '700',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New Bold Italic.woff',
// 			weight: '700',
// 			style: 'italic',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New ExtraBold.woff',
// 			weight: '800',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New ExtraBold Italic.woff',
// 			weight: '800',
// 			style: 'italic',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New Super.woff',
// 			weight: '900',
// 		},
// 		{
// 			path: '../../../public/fonts/Hero New Super Italic.woff',
// 			weight: '900',
// 			style: 'italic',
// 		},
// 	],
// });

const typeScale: { fontSize: string; lineHeight: string }[] = [
	{
		// #0 <-miniscule->
		fontSize: '0.75rem',
		lineHeight: '17px',
	},
	// #1 <-small->
	{
		fontSize: '0.875rem',
		lineHeight: '20px',
	},
	// #2 <-base->
	{
		fontSize: '1rem',
		lineHeight: '22px',
	},
	// #3 <-large->
	{
		fontSize: '1.125rem',
		lineHeight: '24px',
	},
	// #4 <-extralarge->
	{
		fontSize: '1.25rem',
		lineHeight: '28px',
	},
	// #5 <-headingFour->
	{
		fontSize: '1.5rem',
		lineHeight: '32px',
	},
	// #6 <-headingThree->
	{
		fontSize: '1.875rem',
		lineHeight: '1.875rem',
	},
	// #7 <-headingTwo->
	{
		fontSize: '2.5rem',
		lineHeight: '2.5rem',
	},
	// #8 <-headingOne->
	{
		fontSize: '3.5rem',
		lineHeight: '3.5rem',
	},
	// #9 <-largeH1->
	{
		fontSize: '4rem',
		lineHeight: '4rem',
	},
	// #10 <-poster->
	{
		fontSize: '5rem',
		lineHeight: '5rem',
	},
];

export const fontUses = {
	miniscule: {
		fontSize: typeScale[0].fontSize,
		lineHeight: typeScale[0].lineHeight,
	},

	small: {
		fontSize: typeScale[1].fontSize,
		lineHeight: typeScale[1].lineHeight,
	},

	base: {
		fontSize: typeScale[2].fontSize,
		lineHeight: typeScale[2].lineHeight,
	},

	large: {
		fontSize: typeScale[3].fontSize,
		lineHeight: typeScale[3].lineHeight,
	},

	extralarge: {
		fontSize: typeScale[4].fontSize,
		lineHeight: typeScale[4].lineHeight,
	},

	headingFour: {
		fontSize: typeScale[5].fontSize,
		lineHeight: typeScale[5].lineHeight,
	},

	headingThree: {
		fontSize: typeScale[6].fontSize,
		lineHeight: typeScale[6].lineHeight,
	},

	headingTwo: {
		fontSize: typeScale[7].fontSize,
		lineHeight: typeScale[7].lineHeight,
	},

	headingOne: {
		fontSize: typeScale[8].fontSize,
		lineHeight: typeScale[8].lineHeight,
	},

	largeH1: {
		fontSize: typeScale[9].fontSize,
		lineHeight: typeScale[9].lineHeight,
	},

	poster: {
		fontSize: typeScale[10].fontSize,
		lineHeight: typeScale[10].lineHeight,
	},
};

export const fontWeight = {
	'200': 200,
	'300': 300,
	'400': 400,
	'500': 500,
	'600': 600,
	'700': 700,
	'800': 800,
	'900': 900,
};
