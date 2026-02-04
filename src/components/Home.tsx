import { DownloadIcon, Cpu, Globe, ChartBar } from '@phosphor-icons/react';
import pixelImage from '../assets/pixel.jpg';
import resumePDF from '../assets/Leandro Viana - Resume CV.pdf';
import TextType from './TextType';

const Home = () => {
	return (
		<section
			id="home"
			className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16"
		>
			<div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
				{/* Portrait with Glass Depth */}
				<div className="relative shrink-0 animate-float">
					<div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border border-white/10 shadow-2xl glass-card p-1">
						<img
							src={pixelImage}
							alt="Leandro Viana"
							className="w-full h-full object-cover scale-150 rounded-full grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
						/>
					</div>
					<div className="absolute bottom-4 right-4 glass-card bg-white/10 px-3 py-1 flex items-center gap-2 shadow-lg">
						<div className="w-2 h-2 rounded-full bg-[#ffb700] animate-pulse-gold" />
						<span className="text-[10px] font-bold tracking-widest uppercase text-white/70">
							Online
						</span>
					</div>
				</div>

				{/* Hero Text */}
				<div className="flex-1 text-center lg:text-left space-y-6">
					<div>
						<h1 className="text-4xl sm:text-7xl font-black text-white tracking-tighter mb-2 leading-none">
							LEANDRO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb700] to-white/50">VIANA</span>
						</h1>
						<div className="text-xl sm:text-2xl font-mono text-[#ffb700] uppercase tracking-[0.25em]">
							<TextType
								text={['Senior Software Engineer', 'Frontend Architect', 'Lead Frontend Developer']}
								typingSpeed={60}
								pauseDuration={3000}
								deletingSpeed={40}
							/>
						</div>
					</div>
					<p className="text-lg text-white/60 max-w-2xl leading-relaxed font-light">
						Architecting resilient digital ecosystems powered by 
						<span className="text-white font-medium"> microfrontends</span> and 
						<span className="text-[#ffb700]"> server driven ui</span>. 
						Engineering high-scale, modular platforms from Brazil for a global-first technical landscape.
					</p>
					<div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
						<a
							href="mailto:leandrovianacodes@gmail.com"
							className="bg-white text-black px-8 py-3 rounded-xl font-bold transition-all hover:bg-[#ffb700] hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
						>
							start a new project
						</a>
						<a
							href={resumePDF}
							download="Leandro-Viana-Resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="glass-card px-8 py-3 rounded-xl font-bold hover:bg-white/5 transition-all text-white/90 flex items-center gap-2 group snake-border-container cursor-pointer"
						>
							<svg className="snake-border-svg"><title>Border Trail</title><rect x="0" y="0" width="100%" height="100%" rx="12" fill="none" pathLength="1" className="snake-path" /></svg>
							<DownloadIcon size={20} weight="bold" className="text-[#ffb700] group-hover:animate-bounce" />
							Download CV
						</a>
					</div>
				</div>
			</div>

			{/* 2026 Bento Diagnostics Panel */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-12 border-t border-white/5">
				{/* Main Architectural Highlight (Spans 2 columns) */}
				<div className="md:col-span-2 glass-card p-6 md:p-8 group relative overflow-hidden border border-white/5 hover:border-[#ffb700]/30 transition-all snake-border-container">
					<svg className="snake-border-svg"><title>Border Trail</title><rect x="0" y="0" width="100%" height="100%" rx="16" fill="none" pathLength="1" className="snake-path" /></svg>
					<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
						<Cpu size={120} weight="thin" />
					</div>
					<h3 className="text-[10px] font-bold text-[#ffb700] uppercase tracking-[0.4em] mb-6">Current Stack Focus</h3>
					<p className="text-3xl font-black text-white leading-tight mb-8">
						ORCHESTRATING <br /> 
						<span className="text-white/40">SDUI & MICROFRONTENDS</span>
					</p>
					<div className="flex gap-3">
						<span className="px-3 py-1.5 bg-white/5 rounded-lg text-[10px] font-bold text-white/40 border border-white/10 uppercase tracking-wider">Enterprise Scale</span>
						<span className="px-3 py-1.5 bg-white/5 rounded-lg text-[10px] font-bold text-white/40 border border-white/10 uppercase tracking-wider">Modular Core</span>
					</div>
				</div>

				{/* Global Reach (1 Column) */}
				<a 
					href={resumePDF}
					download="Leandro-Viana-Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="glass-card p-6 md:p-8 flex flex-col justify-between group text-left border border-white/5 hover:border-[#ffb700]/30 transition-all relative overflow-hidden snake-border-container cursor-pointer"
				>
					<svg className="snake-border-svg"><title>Border Trail</title><rect x="0" y="0" width="100%" height="100%" rx="16" fill="none" pathLength="1" className="snake-path" /></svg>
					<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
						<Globe size={60} weight="thin" />
					</div>
					<h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] relative z-10">Reach</h3>
					<div className="relative z-10">
						<p className="text-4xl font-black text-white mb-2">GLOBAL</p>
						<div className="flex items-center gap-2">
							<div className="p-1 rounded bg-[#ffb700]/10 text-[#ffb700]">
								<DownloadIcon size={12} weight="bold" />
							</div>
							<p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Worldwide Teams</p>
						</div>
					</div>
				</a>

				<div className="glass-card p-6 md:p-8 flex flex-col justify-between group bg-white/[0.01] border border-white/5 hover:border-[#ffb700]/30 transition-all relative overflow-hidden snake-border-container">
					<svg className="snake-border-svg"><title>Border Trail</title><rect x="0" y="0" width="100%" height="100%" rx="16" fill="none" pathLength="1" className="snake-path" /></svg>
					<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
						<ChartBar size={60} weight="thin" />
					</div>
					<h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] relative z-10">Impact</h3>
					<div className="relative z-10">
						<p className="text-2xl font-black text-white mb-1">LARGESCALE</p>
						<p className="text-[10px] font-bold text-[#ffb700] uppercase tracking-widest flex items-center gap-2">
							<span className="w-1.5 h-1.5 rounded-full bg-[#ffb700] animate-pulse-gold" />
							High-Traffic Systems
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
