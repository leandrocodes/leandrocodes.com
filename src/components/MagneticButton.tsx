import { useEffect, useRef, cloneElement, Children } from 'react';
import type { ReactElement } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
	children: ReactElement;
	pullFactor?: number;
}

const MagneticButton = ({
	children,
	pullFactor = 0.5,
}: MagneticButtonProps) => {
	const magneticRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = magneticRef.current;
		if (!element) return;

		const xTo = gsap.quickTo(element, 'x', {
			duration: 1,
			ease: 'elastic.out(1, 0.3)',
		});
		const yTo = gsap.quickTo(element, 'y', {
			duration: 1,
			ease: 'elastic.out(1, 0.3)',
		});

		const handleMouseMove = (e: MouseEvent) => {
			const { clientX, clientY } = e;
			const { height, width, left, top } = element.getBoundingClientRect();

			const x = (clientX - (left + width / 2)) * pullFactor;
			const y = (clientY - (top + height / 2)) * pullFactor;

			xTo(x);
			yTo(y);
		};

		const handleMouseLeave = () => {
			xTo(0);
			yTo(0);
		};

		element.addEventListener('mousemove', handleMouseMove);
		element.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			element.removeEventListener('mousemove', handleMouseMove);
			element.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, [pullFactor]);

	return cloneElement(Children.only(children), {
		ref: magneticRef,
	});
};

export default MagneticButton;
