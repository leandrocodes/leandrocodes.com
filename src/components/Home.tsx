import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DownloadIcon, Cpu, Globe, ChartBar } from '@phosphor-icons/react';
import pixelImage from '../assets/pixel.jpeg';
import resumePDF from '../assets/Leandro Viana - Resume CV.pdf';
import TextType from './TextType';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	useEffect(() => {
		// Simple Parallax Effect on the portrait
		const image = document.querySelector('.parallax-image');
		if (image) {
			gsap.to(image, {
				yPercent: 20, // Move image down slightly as we scroll down
				ease: 'none',
				scrollTrigger: {
					trigger: image,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				},
			});
		}
	}, []);

	return (
		<section
			id="home"
			className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-16"
		>
			<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12 sm:mb-16">
				{/* Portrait Frame - Physical Braun T3 Transistor Radio Aesthetic */}
				<div className="relative shrink-0">
					{/* Braun T3 Cabinet Shell */}
					<div className="w-64 sm:w-72 bg-[#2a2a2a] rounded-3xl p-5 border-4 border-[#1e1e1e] shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.1)] relative overflow-hidden group">
						{/* Photo Container */}
						<div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-[#1e1e1e] bg-[#1e1e1e]">
							<img
								src={pixelImage}
								alt="Leandro Viana"
								className="w-full h-full object-cover scale-100 grayscale-0 sm:grayscale sm:group-hover:grayscale-0 transition-all duration-700 opacity-100 sm:opacity-90 sm:group-hover:opacity-100"
							/>
						</div>

						{/* Braun T3 Rotary Tuning Knob & Speaker Hole Array at Bottom */}
						<div className="mt-5 flex items-center justify-between px-1 gap-2">
							{/* Speaker Hole Array Accent */}
							<div className="grid grid-cols-4 gap-1.5 shrink-0">
								{Array.from({ length: 12 }).map((_, i) => (
									<div
										key={i}
										className="w-1.5 h-1.5 rounded-full bg-[#1e1e1e] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] border border-[#F2F2F2]/5"
									/>
								))}
							</div>

							{/* Braun T3 Mechanical Tuning Dial Assembly */}
							<div className="relative flex items-center justify-center pt-2 pb-1">
								{/* Outer Circular Scale Ring Area */}
								<div className="relative w-28 sm:w-32 h-24 sm:h-28 flex items-center justify-center">
									{/* Scale Numbers printed around the dial ring */}
									<span className="absolute left-0 top-1/2 -translate-y-1/2 font-mono text-[9px] sm:text-[10px] text-[#F2F2F2]/60">
										0%
									</span>
									<span className="absolute top-0 left-1/2 -translate-x-1/2 font-mono text-[9px] sm:text-[10px] text-[#56BF99] font-bold">
										100%
									</span>

									{/* Physical Rotating Wheel Chassis */}
									<div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-[#2a2a2a] border-2 border-[#F2F2F2]/20 shadow-[0_6px_16px_rgba(0,0,0,0.6),inset_0_1px_3px_rgba(255,255,255,0.2)] flex items-center justify-center rotate-0 sm:-rotate-90 sm:group-hover:rotate-0 transition-transform duration-700 relative">
										{/* Tuning Needle Pointer Arrow */}
										<div className="absolute top-1 left-1/2 -translate-x-1/2 z-20">
											<div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[7px] border-b-[#D96459]" />
										</div>

										{/* Center Dimple Cap with Two Dots */}
										<div className="w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-[#202020] border border-[#F2F2F2]/20 flex items-center justify-center gap-1 shadow-inner">
											<div className="w-1 h-1 rounded-full bg-[#F2F2F2]/60" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Hero Text */}
				<div className="flex-1 text-center lg:text-left space-y-5 sm:space-y-6">
					<div>
						<h1 className="text-3xl sm:text-6xl lg:text-7xl font-mono font-black text-[#F2F2F2] tracking-tight mb-3 leading-none">
							LEANDRO{' '}
							<span className="text-[#56BF99]">
								VIANA
							</span>
						</h1>
						<div className="text-base sm:text-2xl font-mono font-bold text-[#EBCA5E] uppercase tracking-[0.15em] sm:tracking-[0.2em] bg-[#F2F2F2]/5 px-3 py-1.5 rounded-lg inline-block border border-[#F2F2F2]/10 max-w-full">
							<TextType
								text={[
									'Senior Software Engineer',
									'Frontend Architect',
									'Lead Frontend Developer',
								]}
								typingSpeed={60}
								pauseDuration={3000}
								deletingSpeed={40}
							/>
						</div>
					</div>
					<p className="text-sm sm:text-lg text-[#F2F2F2]/80 max-w-2xl leading-relaxed font-sans px-1 sm:px-0">
						Architecting resilient digital ecosystems powered by
						<span className="text-[#56BF99] font-semibold"> microfrontends</span> and
						<span className="text-[#EBCA5E] font-semibold"> server driven ui</span>.
						Engineering high-scale, modular platforms from Brazil for a
						global-first technical landscape.
					</p>
					<div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3.5 pt-2">
						<MagneticButton>
							<a
								href="mailto:leandrovianacodes@gmail.com"
								className="bg-[#56BF99] text-[#262626] border-2 border-[#262626] px-6 sm:px-8 py-3.5 rounded-full font-mono font-bold transition-all hover:bg-[#F2F2F2] active:scale-95 shadow-lg inline-block uppercase text-xs tracking-wider text-center min-h-[44px] flex items-center justify-center"
							>
								start a new project
							</a>
						</MagneticButton>
						<MagneticButton>
							<a
								href={resumePDF}
								download="Leandro-Viana-Resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-[#262626] border border-[#F2F2F2]/20 px-6 sm:px-8 py-3.5 rounded-full font-mono font-bold hover:border-[#56BF99] active:scale-95 transition-all text-[#F2F2F2] flex items-center justify-center gap-2 cursor-pointer inline-flex uppercase text-xs tracking-wider min-h-[44px]"
							>
								<DownloadIcon
									size={18}
									weight="bold"
									className="text-[#56BF99]"
								/>
								Download CV
							</a>
						</MagneticButton>
					</div>
				</div>
			</div>

			{/* Braun T3 Radio Tuning Panel / Bento Cards */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-[#F2F2F2]/10">
				{/* Main Architectural Highlight */}
				<div className="md:col-span-2 bg-[#262626] p-5 sm:p-8 rounded-2xl border-2 border-[#F2F2F2]/10 hover:border-[#56BF99] active:border-[#56BF99]/80 transition-all relative overflow-hidden shadow-lg group">
					<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
						<Cpu size={80} weight="duotone" className="text-[#56BF99]" />
					</div>
					<h3 className="text-[10px] sm:text-[11px] font-mono font-bold text-[#56BF99] uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-3 sm:mb-4">
						Current Stack Focus
					</h3>
					<p className="text-xl sm:text-3xl font-mono font-bold text-[#F2F2F2] leading-tight mb-5 sm:mb-6">
						ORCHESTRATING <br />
						<span className="text-[#EBCA5E] break-words">SDUI & MICROFRONTENDS</span>
					</p>
					<div className="flex flex-wrap gap-2">
						<span className="px-3 py-1 bg-[#F2F2F2]/10 rounded-full text-[10px] font-mono font-bold text-[#F2F2F2]/80 border border-[#F2F2F2]/15 uppercase tracking-wider">
							Enterprise Scale
						</span>
						<span className="px-3 py-1 bg-[#F2F2F2]/10 rounded-full text-[10px] font-mono font-bold text-[#F2F2F2]/80 border border-[#F2F2F2]/15 uppercase tracking-wider">
							Modular Core
						</span>
					</div>
				</div>

				{/* Global Reach */}
				<a
					href={resumePDF}
					download="Leandro-Viana-Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="bg-[#262626] p-5 sm:p-8 rounded-2xl border border-[#F2F2F2]/10 hover:border-[#EBCA5E] active:border-[#EBCA5E] transition-all relative overflow-hidden shadow-lg flex flex-col justify-between group cursor-pointer"
				>
					<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
						<Globe size={50} weight="duotone" className="text-[#EBCA5E]" />
					</div>
					<h3 className="text-[10px] sm:text-[11px] font-mono font-bold text-[#F2F2F2]/40 uppercase tracking-[0.2em] relative z-10">
						Reach
					</h3>
					<div className="relative z-10 mt-4 sm:mt-6">
						<p className="text-2xl sm:text-3xl font-mono font-black text-[#F2F2F2] mb-1.5">GLOBAL</p>
						<div className="flex items-center gap-2">
							<div className="p-1 rounded-full bg-[#56BF99]/20 text-[#56BF99]">
								<DownloadIcon size={12} weight="bold" />
							</div>
							<p className="text-[10px] font-mono font-bold text-[#F2F2F2]/60 uppercase tracking-widest">
								Worldwide Teams
							</p>
						</div>
					</div>
				</a>

				<div className="bg-[#262626] p-5 sm:p-8 rounded-2xl border border-[#F2F2F2]/10 hover:border-[#D96459] active:border-[#D96459] transition-all relative overflow-hidden shadow-lg flex flex-col justify-between group">
					<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
						<ChartBar size={50} weight="duotone" className="text-[#D96459]" />
					</div>
					<h3 className="text-[10px] sm:text-[11px] font-mono font-bold text-[#F2F2F2]/40 uppercase tracking-[0.2em] relative z-10">
						Impact
					</h3>
					<div className="relative z-10 mt-4 sm:mt-6">
						<p className="text-xl sm:text-2xl font-mono font-black text-[#F2F2F2] mb-1">LARGESCALE</p>
						<p className="text-[10px] font-mono font-bold text-[#D96459] uppercase tracking-widest flex items-center gap-2">
							<span className="w-2 h-2 rounded-full bg-[#D96459] animate-pulse" />
							High-Traffic Systems
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
