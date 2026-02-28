import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
	children: React.ReactNode;
	className?: string;
}

const TextReveal = ({ children, className = '' }: TextRevealProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current || !textRef.current) return;

		const element = textRef.current;

		// Initial state: translated down
		gsap.set(element, { y: '100%' });

		const animation = gsap.to(element, {
			y: '0%',
			duration: 1.2,
			ease: 'power4.out',
			scrollTrigger: {
				trigger: containerRef.current,
				start: 'top 90%', // Trigger when the top of the element hits 90% of viewport height
				toggleActions: 'play none none reverse', // Play on enter, reverse on leave back
			},
		});

		return () => {
			animation.kill();
			ScrollTrigger.getAll().forEach((t) => {
				if (t.trigger === containerRef.current) {
					t.kill();
				}
			});
		};
	}, []);

	return (
		<div ref={containerRef} className={`overflow-hidden ${className}`}>
			<div ref={textRef} className="will-change-transform">
				{children}
			</div>
		</div>
	);
};

export default TextReveal;
