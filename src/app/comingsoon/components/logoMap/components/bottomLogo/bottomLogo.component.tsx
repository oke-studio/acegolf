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
			width="150"
			height="57"
			// fill={fillAnimtaion}
			// stroke={strokeAnimation}
			// fill="white"
		>
			{/* <svg width="365" height="139" viewBox="0 0 365 139" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
			{/* <motion.path d="M43.3872 76.5781C46.8005 77.4998 50.0885 77.5072 52.8826 76.9984L59.5176 52.4971L82.718 58.7791L72.0651 98.1228C61.8104 101.92 50.0959 103.173 36.6637 99.5384C11.3401 92.6813 -5.63072 68.991 2.05114 40.604C9.73299 12.217 36.6121 0.279746 61.6998 7.07051C73.4806 10.2631 81.9881 15.7267 88.0555 21.7949L81.3615 46.5321C75.449 38.4805 66.4549 33.8944 59.031 31.8889C43.2471 27.6124 31.223 35.6124 27.8097 48.2132C24.3374 61.0501 30.7881 73.1717 43.3872 76.5781Z" /> */}
			{/* <motion.path d="M144.578 42.6982C171.907 42.6982 193.021 62.3479 193.021 90.5359C193.021 118.724 171.915 138.499 144.578 138.499C117.242 138.499 96.1356 118.731 96.1356 90.5359C96.1356 62.3406 117.486 42.6982 144.578 42.6982ZM166.172 90.5359C166.172 75.406 155.556 66.8604 144.578 66.8604C133.601 66.8604 122.978 75.406 122.978 90.5359C122.978 105.666 133.468 114.329 144.578 114.329C155.688 114.329 166.172 105.784 166.172 90.5359Z" /> */}
			{/* <motion.path d="M200.718 5.72113L226.874 0.884277L239.083 66.8822L274.241 60.379L278.612 84.0177L217.298 95.3577L200.718 5.72113Z" /> */}
			{/* <motion.path d="M304.172 25.5254L364.344 32.0212L361.764 55.9253L328.036 52.2829L326.318 68.1796L357.495 71.5418L355.084 93.868L323.907 90.5058L320.833 119.018L294.382 116.165L304.164 25.5254H304.172Z" /> */}
			{/* <motion.path
        style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
        d="M 23.773438 41.871094 C 25.644531 42.375 27.445312 42.378906 28.976562 42.101562 L 32.613281 28.703125 L 45.324219 32.136719 L 39.488281 53.648438 C 33.867188 55.726562 27.449219 56.410156 20.089844 54.425781 C 6.214844 50.675781 -3.085938 37.722656 1.125 22.199219 C 5.332031 6.679688 20.0625 0.152344 33.808594 3.867188 C 40.261719 5.613281 44.925781 8.597656 48.25 11.917969 L 44.582031 25.441406 C 41.34375 21.039062 36.414062 18.53125 32.347656 17.4375 C 23.695312 15.097656 17.109375 19.472656 15.238281 26.359375 C 13.335938 33.378906 16.871094 40.007812 23.773438 41.871094 Z M 23.773438 41.871094 "
      />
      <motion.path
        style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
        d="M 79.222656 23.347656 C 94.195312 23.347656 105.765625 34.089844 105.765625 49.5 C 105.765625 64.914062 94.199219 75.726562 79.222656 75.726562 C 64.242188 75.726562 52.675781 64.917969 52.675781 49.5 C 52.675781 34.085938 64.375 23.347656 79.222656 23.347656 Z M 91.054688 49.5 C 91.054688 41.230469 85.234375 36.558594 79.222656 36.558594 C 73.207031 36.558594 67.386719 41.230469 67.386719 49.5 C 67.386719 57.773438 73.132812 62.511719 79.222656 62.511719 C 85.308594 62.511719 91.054688 57.839844 91.054688 49.5 Z M 91.054688 49.5 "
      />
      <motion.path
        style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
        d="M 109.984375 3.128906 L 124.316406 0.484375 L 131.003906 36.570312 L 150.269531 33.011719 L 152.664062 45.9375 L 119.066406 52.136719 Z M 109.984375 3.128906 "
      />
      <motion.path
        style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
        d="M 166.667969 13.957031 L 199.640625 17.507812 L 198.226562 30.578125 L 179.746094 28.585938 L 178.804688 37.277344 L 195.886719 39.117188 L 194.566406 51.324219 L 177.484375 49.484375 L 175.800781 65.074219 L 161.304688 63.515625 L 166.664062 13.957031 Z M 166.667969 13.957031 "
      /> */}
			{/* <motion.path
        style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
        d="M 14.265625 25.34375 C 15.386719 25.648438 16.46875 25.648438 17.386719 25.480469 L 19.566406 17.375 L 27.195312 19.453125 L 23.691406 32.472656 C 20.320312 33.730469 16.46875 34.144531 12.054688 32.941406 C 3.726562 30.671875 -1.851562 22.832031 0.675781 13.4375 C 3.199219 4.042969 12.035156 0.09375 20.285156 2.339844 C 24.15625 3.394531 26.953125 5.203125 28.949219 7.210938 L 26.75 15.398438 C 24.804688 12.734375 21.847656 11.21875 19.40625 10.554688 C 14.21875 9.136719 10.265625 11.785156 9.144531 15.957031 C 8 20.203125 10.121094 24.214844 14.265625 25.34375 Z M 14.265625 25.34375 "
      />
      <motion.path
        style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
        d="M 47.53125 14.128906 C 56.515625 14.128906 63.457031 20.632812 63.457031 29.960938 C 63.457031 39.289062 56.519531 45.835938 47.53125 45.835938 C 38.546875 45.835938 31.605469 39.292969 31.605469 29.960938 C 31.605469 20.628906 38.625 14.128906 47.53125 14.128906 Z M 54.632812 29.960938 C 54.632812 24.953125 51.140625 22.125 47.53125 22.125 C 43.921875 22.125 40.429688 24.953125 40.429688 29.960938 C 40.429688 34.96875 43.878906 37.835938 47.53125 37.835938 C 51.183594 37.835938 54.632812 35.007812 54.632812 29.960938 Z M 54.632812 29.960938 "
      />
      <motion.path
        style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
        d="M 65.988281 1.894531 L 74.589844 0.292969 L 78.601562 22.132812 L 90.160156 19.980469 L 91.597656 27.804688 L 71.441406 31.558594 Z M 65.988281 1.894531 "
      />
      <motion.path
        style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
        d="M 100 8.445312 L 119.785156 10.597656 L 118.9375 18.507812 L 107.847656 17.300781 L 107.28125 22.5625 L 117.53125 23.675781 L 116.738281 31.0625 L 106.488281 29.953125 L 105.480469 39.386719 L 96.78125 38.441406 Z M 100 8.445312 "
      /> */}
			<motion.path d="M 17.832031 31.402344 C 19.234375 31.78125 20.585938 31.785156 21.734375 31.574219 L 24.460938 21.527344 L 33.992188 24.105469 L 29.617188 40.238281 C 25.402344 41.792969 20.585938 42.308594 15.066406 40.816406 C 4.660156 38.007812 -2.3125 28.292969 0.84375 16.652344 C 4 5.011719 15.046875 0.113281 25.355469 2.898438 C 30.199219 4.207031 33.695312 6.449219 36.1875 8.9375 L 33.4375 19.082031 C 31.007812 15.78125 27.308594 13.898438 24.257812 13.078125 C 17.773438 11.324219 12.832031 14.605469 11.429688 19.769531 C 10 25.035156 12.652344 30.003906 17.832031 31.402344 Z M 17.832031 31.402344 " />
			<motion.path d="M 59.414062 17.507812 C 70.648438 17.507812 79.324219 25.566406 79.324219 37.125 C 79.324219 48.683594 70.648438 56.792969 59.414062 56.792969 C 48.183594 56.792969 39.507812 48.6875 39.507812 37.125 C 39.507812 25.5625 48.28125 17.507812 59.414062 17.507812 Z M 68.289062 37.125 C 68.289062 30.921875 63.925781 27.417969 59.414062 27.417969 C 54.90625 27.417969 50.539062 30.921875 50.539062 37.125 C 50.539062 43.332031 54.851562 46.882812 59.414062 46.882812 C 63.980469 46.882812 68.289062 43.378906 68.289062 37.125 Z M 68.289062 37.125 " />
			<motion.path d="M 82.488281 2.347656 L 93.234375 0.363281 L 98.253906 27.425781 L 112.703125 24.757812 L 114.5 34.453125 L 89.300781 39.105469 Z M 82.488281 2.347656 " />
			<motion.path d="M 125.003906 10.46875 L 149.730469 13.132812 L 148.671875 22.933594 L 134.808594 21.441406 L 134.101562 27.957031 L 146.914062 29.335938 L 145.925781 38.492188 L 133.113281 37.113281 L 131.847656 48.804688 L 120.980469 47.636719 L 125 10.46875 Z M 125.003906 10.46875 " />
		</motion.svg>
	);
};
