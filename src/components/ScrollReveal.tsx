import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, {
	type JSX,
	type ReactNode,
	type RefObject,
	useEffect,
	useMemo,
	useRef,
} from 'react';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
	children: ReactNode;
	scrollContainerRef?: RefObject<HTMLElement>;
	enableBlur?: boolean;
	baseOpacity?: number;
	baseRotation?: number;
	blurStrength?: number;
	containerClassName?: string;
	textClassName?: string;
	rotationEnd?: string;
	wordAnimationEnd?: string;
	as?: keyof JSX.IntrinsicElements;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
	children,
	scrollContainerRef,
	enableBlur = true,
	baseOpacity = 0.1,
	baseRotation = 3,
	blurStrength = 4,
	containerClassName = '',
	textClassName = '',
	rotationEnd = 'bottom bottom',
	wordAnimationEnd = 'bottom bottom',
	as: Component = 'div',
}) => {
	const containerRef = useRef<HTMLElement>(null);

	const content = useMemo(() => {
		if (typeof children === 'string') {
			return (
				<span
					className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
				>
					{children.split(/(\s+)/).map((word, index) => {
						if (word.match(/^\s+$/)) return word;
						return (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<span className="inline-block word" key={index}>
								{word}
							</span>
						);
					})}
				</span>
			);
		}

		return (
			<span
				className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
			>
				{children}
			</span>
		);
	}, [children, textClassName]);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const scroller =
			scrollContainerRef && scrollContainerRef.current
				? scrollContainerRef.current
				: window;

		gsap.fromTo(
			el,
			{ transformOrigin: '0% 50%', rotate: baseRotation },
			{
				ease: 'power1.out',
				rotate: 0,
				scrollTrigger: {
					trigger: el,
					scroller,
					start: 'top bottom',
					end: rotationEnd,
					scrub: 1,
				},
			},
		);

		const wordElements = el.querySelectorAll<HTMLElement>('.word');

		if (wordElements.length > 0) {
			gsap.fromTo(
				wordElements,
				{ opacity: baseOpacity, willChange: 'opacity' },
				{
					ease: 'expo.out',
					opacity: 1,
					stagger: {
						each: 0.03,
						from: 'start',
						ease: 'power1.in',
					},
					scrollTrigger: {
						trigger: el,
						scroller,
						start: 'top bottom-=15%',
						end: wordAnimationEnd,
						scrub: 0.8,
					},
				},
			);

			if (enableBlur) {
				gsap.fromTo(
					wordElements,
					{ filter: `blur(${blurStrength}px)` },
					{
						ease: 'expo.out',
						filter: 'blur(0px)',
						stagger: {
							each: 0.03,
							from: 'start',
							ease: 'power1.in',
						},
						scrollTrigger: {
							trigger: el,
							scroller,
							start: 'top bottom-=15%',
							end: wordAnimationEnd,
							scrub: 0.8,
						},
					},
				);
			}
		} else {
			gsap.fromTo(
				el,
				{
					opacity: baseOpacity,
					filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
				},
				{
					ease: 'expo.out',
					opacity: 1,
					filter: 'blur(0px)',
					scrollTrigger: {
						trigger: el,
						scroller,
						start: 'top bottom-=15%',
						end: wordAnimationEnd,
						scrub: 0.8,
					},
				},
			);
		}

		return () => {
			// biome-ignore lint/suspicious/useIterableCallbackReturn: <explanation>
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, [
		scrollContainerRef,
		enableBlur,
		baseRotation,
		baseOpacity,
		rotationEnd,
		wordAnimationEnd,
		blurStrength,
	]);

	return React.createElement(
		Component,
		{
			ref: containerRef,
			className: `my-5 ${containerClassName}`,
		},
		content,
	);
};

export default ScrollReveal;
