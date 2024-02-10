import * as React from 'react';
import { motion, Transition, Variants } from 'framer-motion';
import { useTheme } from '@mui/material';
import { RNG } from '@/util/RNG';
import { Typography } from '../Typography/typography.component';
import { fontUses, fontWeight } from '../Theme-Context/fontValues';
interface MotionVariantsProps<K> {
	to: K;
	from: K;
}

interface NavOptionsProps {
	top: MotionVariantsProps<string | number>;
	color: MotionVariantsProps<string>;
	rotate: MotionVariantsProps<number>;
	transition: MotionVariantsProps<Transition>;
}

const DEFAULT_HOVER_ANIMATION_PROFILE = (
	variant: 'book' | 'default',
): NavOptionsProps => {
	const { palette } = useTheme();

	return {
		top: { to: '5px', from: '0px' },
		color: {
			to: variant === 'default' ? palette.primary.main : '#FFFFFF',
			from: '#000000',
		},
		rotate: { to: RNG(9, 21), from: 0 },

		transition: {
			to: {
				duration: 0.5,
				type: 'tween',
				ease: 'easeOut',
			},
			from: {
				duration: 0.5,
				type: 'tween',
				ease: 'easeIn',
			},
		},
	};
};

const DEFAULT_REST_ANIMATION_PROFILE = (
	variant: 'book' | 'default',
): NavOptionsProps => {
	const { palette } = useTheme();

	return {
		top: { to: '-5px', from: '0px' },
		color: {
			to: variant === 'default' ? palette.primary.main : '#FFFFFF',
			from: '#000000',
		},
		rotate: { to: RNG(-9, -21), from: 0 },
		// fontWeight: {
		//   to: typography.hero_bold.fontWeight as string,
		//   from: typography.hero_semibold.fontWeight as string,
		// },
		transition: {
			to: {
				duration: 0.5,
				type: 'tween',
				ease: 'easeOut',
			},
			from: {
				duration: 0.5,
				type: 'tween',
				ease: 'easeIn',
			},
		},
	};
};

const navOptionHoverAnimation = ({
	animationProfile,
}: {
	animationProfile: NavOptionsProps;
}): Variants => {
	const { top, color, transition, rotate } = animationProfile;
	return {
		hovered: {
			top: top.to,
			color: color.to as string,
			transition: transition.to,
			rotate: rotate.to,
		},

		rest: {
			top: top.from,
			color: color.from as string,
			transition: transition.from,
			rotate: rotate.from,
		},
	};
};

export const MotionSpanAnimated = ({
	label,
	variant = 'default',
	restAnimation = DEFAULT_REST_ANIMATION_PROFILE(variant),
	hoverAnimation = DEFAULT_HOVER_ANIMATION_PROFILE(variant),
	typographyVariant = 'base',
	typographyWeight = '300',
}: {
	label: string;
	restAnimation?: NavOptionsProps;
	hoverAnimation?: NavOptionsProps;
	variant?: 'book' | 'default';
	typographyVariant?: keyof typeof fontUses;
	typographyWeight?: keyof typeof fontWeight;
}) => {
	console.log(label);
	return (
		<Typography variant={typographyVariant} weight={typographyWeight}>
			<motion.span
				initial="rest"
				whileHover="hovered"
				animate="rest"
				whileFocus="hovered"
			>
				{label.split(/(?:)/).map((word, index) => {
					if (word === ' ') {
						return (
							<motion.span key={index} style={{ width: 'ch' }}>
								&nbsp;
							</motion.span>
						);
					}

					return (
						<motion.span
							// as={motion.span}
							key={index}
							style={{
								position: 'relative',
								display: 'inline-block',
							}}
							// variant="base"
							variants={
								index % 2 === 0
									? navOptionHoverAnimation({
											animationProfile: hoverAnimation,
										})
									: navOptionHoverAnimation({
											animationProfile: restAnimation,
										})
							}
						>
							{word}
						</motion.span>
					);
				})}
			</motion.span>
		</Typography>
	);
};
