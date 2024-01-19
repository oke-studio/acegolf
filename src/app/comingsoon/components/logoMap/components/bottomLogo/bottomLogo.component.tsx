import * as React from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

export const AnimatedLogo = () => {
	const [pathIndex, setPathIndex] = React.useState(0);
	const x = useMotionValue(pathIndex);

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
			<motion.path d="M 17.832031 31.402344 C 19.234375 31.78125 20.585938 31.785156 21.734375 31.574219 L 24.460938 21.527344 L 33.992188 24.105469 L 29.617188 40.238281 C 25.402344 41.792969 20.585938 42.308594 15.066406 40.816406 C 4.660156 38.007812 -2.3125 28.292969 0.84375 16.652344 C 4 5.011719 15.046875 0.113281 25.355469 2.898438 C 30.199219 4.207031 33.695312 6.449219 36.1875 8.9375 L 33.4375 19.082031 C 31.007812 15.78125 27.308594 13.898438 24.257812 13.078125 C 17.773438 11.324219 12.832031 14.605469 11.429688 19.769531 C 10 25.035156 12.652344 30.003906 17.832031 31.402344 Z M 17.832031 31.402344 " />
			<motion.path d="M 59.414062 17.507812 C 70.648438 17.507812 79.324219 25.566406 79.324219 37.125 C 79.324219 48.683594 70.648438 56.792969 59.414062 56.792969 C 48.183594 56.792969 39.507812 48.6875 39.507812 37.125 C 39.507812 25.5625 48.28125 17.507812 59.414062 17.507812 Z M 68.289062 37.125 C 68.289062 30.921875 63.925781 27.417969 59.414062 27.417969 C 54.90625 27.417969 50.539062 30.921875 50.539062 37.125 C 50.539062 43.332031 54.851562 46.882812 59.414062 46.882812 C 63.980469 46.882812 68.289062 43.378906 68.289062 37.125 Z M 68.289062 37.125 " />
			<motion.path d="M 82.488281 2.347656 L 93.234375 0.363281 L 98.253906 27.425781 L 112.703125 24.757812 L 114.5 34.453125 L 89.300781 39.105469 Z M 82.488281 2.347656 " />
			<motion.path d="M 125.003906 10.46875 L 149.730469 13.132812 L 148.671875 22.933594 L 134.808594 21.441406 L 134.101562 27.957031 L 146.914062 29.335938 L 145.925781 38.492188 L 133.113281 37.113281 L 131.847656 48.804688 L 120.980469 47.636719 L 125 10.46875 Z M 125.003906 10.46875 " />
		</motion.svg>
	);
};
