import * as React from 'react';
import { motion, Transition, useAnimation, Variants } from 'framer-motion';
import { useTheme } from '@mui/material';

function RNG(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

interface MotionVariantsProps<K> {
  to: K;
  from: K;
}

interface NavOptionsProps {
  top: MotionVariantsProps<string | number>;
  color: MotionVariantsProps<string>;
  rotate: MotionVariantsProps<number>;
  fontWeight: MotionVariantsProps<string>;
  transition: MotionVariantsProps<Transition>;
}

const DEFAULT_HOVER_ANIMATION_PROFILE = (
  variant: 'book' | 'default',
): NavOptionsProps => {
  const { typography, palette } = useTheme();

  return {
    top: { to: '5px', from: '0px' },
    color: {
      to: variant === 'default' ? palette.primary.main : '#FFFFFF',
      from: '#000000',
    },
    rotate: { to: RNG(9, 21), from: 0 },
    fontWeight: {
      to: typography.hero_bold.fontWeight as string,
      from: typography.hero_semibold.fontWeight as string,
    },
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
  const { typography, palette } = useTheme();

  return {
    top: { to: '-5px', from: '0px' },
    color: {
      to: variant === 'default' ? palette.primary.main : '#FFFFFF',
      from: '#000000',
    },
    rotate: { to: RNG(-9, -21), from: 0 },
    fontWeight: {
      to: typography.hero_bold.fontWeight as string,
      from: typography.hero_semibold.fontWeight as string,
    },
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
  const { top, color, transition, fontWeight, rotate } = animationProfile;
  return {
    hovered: {
      top: top.to,
      color: color.to as string,
      transition: transition.to,
      fontWeight: fontWeight.to,
      rotate: rotate.to,
    },

    rest: {
      top: top.from,
      color: color.from as string,
      transition: transition.from,
      fontWeight: fontWeight.from,
      rotate: rotate.from,
    },
  };
};

export const MotionSpanAnimated = ({
  label,
  variant = 'default',
  restAnimation = DEFAULT_REST_ANIMATION_PROFILE(variant),
  hoverAnimation = DEFAULT_HOVER_ANIMATION_PROFILE(variant),
}: {
  label: string;
  restAnimation?: NavOptionsProps;
  hoverAnimation?: NavOptionsProps;
  variant?: 'book' | 'default';
}) => {
  return (
    <motion.span
      initial="rest"
      whileHover="hovered"
      animate="rest"
      whileFocus="hovered"
    >
      {label.split(/(?:)/).map((word, index) => {
        if (word === ' ') {
          return <motion.span key={index}>&nbsp;</motion.span>;
        }

        return (
          <motion.span
            key={index}
            style={{
              position: 'relative',
              display: 'inline-block',
              fontSize: '15px',
            }}
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
  );
};