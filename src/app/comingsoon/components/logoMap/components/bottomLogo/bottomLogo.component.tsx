import * as React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

export const AnimatedLogo = () => {
  const [pathIndex, setPathIndex] = React.useState(0);
  const x = useMotionValue(pathIndex);
  const fillAnimtaion = useTransform(
    x,
    [0, 1, 2, 3],
    ['#ffffff', '#529DC8', '#EB8B32', '#ffffff'],
  );
  const strokeAnimation = useTransform(
    x,
    [0, 1, 2, 3],
    ['#ffffff', '#EB8B32', '#EB8B32', '#ffffff'],
  );

  React.useEffect(() => {
    const animation = animate(x, pathIndex, {
      duration: 1,
      ease: 'easeInOut',
      onComplete: () => {
        if (pathIndex === 3) {
          x.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });

    return () => animation.stop();
  }, [pathIndex, x]);

  return (
    <motion.svg
      width="365"
      height="139"
      fill={fillAnimtaion}
      stroke={strokeAnimation}
    >
      {/* <svg width="365" height="139" viewBox="0 0 365 139" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
      <motion.path d="M43.3872 76.5781C46.8005 77.4998 50.0885 77.5072 52.8826 76.9984L59.5176 52.4971L82.718 58.7791L72.0651 98.1228C61.8104 101.92 50.0959 103.173 36.6637 99.5384C11.3401 92.6813 -5.63072 68.991 2.05114 40.604C9.73299 12.217 36.6121 0.279746 61.6998 7.07051C73.4806 10.2631 81.9881 15.7267 88.0555 21.7949L81.3615 46.5321C75.449 38.4805 66.4549 33.8944 59.031 31.8889C43.2471 27.6124 31.223 35.6124 27.8097 48.2132C24.3374 61.0501 30.7881 73.1717 43.3872 76.5781Z" />
      <motion.path d="M144.578 42.6982C171.907 42.6982 193.021 62.3479 193.021 90.5359C193.021 118.724 171.915 138.499 144.578 138.499C117.242 138.499 96.1356 118.731 96.1356 90.5359C96.1356 62.3406 117.486 42.6982 144.578 42.6982ZM166.172 90.5359C166.172 75.406 155.556 66.8604 144.578 66.8604C133.601 66.8604 122.978 75.406 122.978 90.5359C122.978 105.666 133.468 114.329 144.578 114.329C155.688 114.329 166.172 105.784 166.172 90.5359Z" />
      <motion.path d="M200.718 5.72113L226.874 0.884277L239.083 66.8822L274.241 60.379L278.612 84.0177L217.298 95.3577L200.718 5.72113Z" />
      <motion.path d="M304.172 25.5254L364.344 32.0212L361.764 55.9253L328.036 52.2829L326.318 68.1796L357.495 71.5418L355.084 93.868L323.907 90.5058L320.833 119.018L294.382 116.165L304.164 25.5254H304.172Z" />
    </motion.svg>
  );
};
