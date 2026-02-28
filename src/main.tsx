import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis } from 'lenis/react';

gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ReactLenis root>
			<App />
		</ReactLenis>
	</StrictMode>,
);
