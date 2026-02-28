import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
	const cursorRef = useRef<HTMLDivElement>(null);
	const cursorDotRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!cursorRef.current || !cursorDotRef.current) return;

		// Create quick setters for performance
		const xTo = gsap.quickTo(cursorRef.current, 'x', {
			duration: 0.8,
			ease: 'power3',
		});
		const yTo = gsap.quickTo(cursorRef.current, 'y', {
			duration: 0.8,
			ease: 'power3',
		});

		const xDotTo = gsap.quickTo(cursorDotRef.current, 'x', {
			duration: 0.1,
			ease: 'power3',
		});
		const yDotTo = gsap.quickTo(cursorDotRef.current, 'y', {
			duration: 0.1,
			ease: 'power3',
		});

		const onMouseMove = (e: MouseEvent) => {
			xTo(e.clientX);
			yTo(e.clientY);
			xDotTo(e.clientX);
			yDotTo(e.clientY);
		};

		// Add hover effects for interactive elements
		const addHoverListeners = () => {
			const interactables = document.querySelectorAll(
				'a, button, input, textarea, select',
			);

			interactables.forEach((el) => {
				el.addEventListener('mouseenter', onMouseEnterInteractable);
				el.addEventListener('mouseleave', onMouseLeaveInteractable);
			});
		};

		const onMouseEnterInteractable = () => {
			gsap.to(cursorRef.current, {
				scale: 1.5,
				backgroundColor: 'rgba(255, 183, 0, 0.1)',
				borderColor: 'rgba(255, 183, 0, 0)',
				duration: 0.3,
			});
			gsap.to(cursorDotRef.current, {
				scale: 0,
				duration: 0.3,
			});
		};

		const onMouseLeaveInteractable = () => {
			gsap.to(cursorRef.current, {
				scale: 1,
				backgroundColor: 'transparent',
				borderColor: 'rgba(255, 255, 255, 0.3)',
				duration: 0.3,
			});
			gsap.to(cursorDotRef.current, {
				scale: 1,
				duration: 0.3,
			});
		};

		window.addEventListener('mousemove', onMouseMove);

		// Initial setup for existing elements and observer for future elements
		addHoverListeners();

		const observer = new MutationObserver((mutations) => {
			let shouldAddListeners = false;
			mutations.forEach((mutation) => {
				if (mutation.addedNodes.length > 0) {
					shouldAddListeners = true;
				}
			});
			if (shouldAddListeners) {
				addHoverListeners();
			}
		});

		observer.observe(document.body, { childList: true, subtree: true });

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			observer.disconnect();
			const interactables = document.querySelectorAll(
				'a, button, input, textarea, select',
			);
			interactables.forEach((el) => {
				el.removeEventListener('mouseenter', onMouseEnterInteractable);
				el.removeEventListener('mouseleave', onMouseLeaveInteractable);
			});
		};
	}, []);

	return (
		<>
			{/* Main outer ring */}
			<div
				ref={cursorRef}
				className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[9999] mix-blend-exclusion -translate-x-1/2 -translate-y-1/2 hidden md:block"
				style={{
					transformOrigin: 'center center',
					willChange:
						'transform, width, height, background-color, border-color',
				}}
			/>
			{/* Inner dot */}
			<div
				ref={cursorDotRef}
				className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#ffb700] rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_8px_#ffb700]"
				style={{
					transformOrigin: 'center center',
					willChange: 'transform',
				}}
			/>
		</>
	);
};

export default CustomCursor;
