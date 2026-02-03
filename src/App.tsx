import Header from './components/Header';
import Home from './components/Home';
import ScrollReveal from './components/ScrollReveal';

function App() {
	return (
		<div className="min-h-screen bg-canvas-default text-fg-default font-inter selection:bg-orange-500/30">
			{/* Header */}
			<Header />

			<main className="pb-24">
				{/* Home Section (Hero) */}
				<Home />

				{/* Architectural Protocol (About) */}
				<section
					id="about"
					className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5"
				>
					<div className="flex flex-col md:flex-row gap-16">
						<div className="md:w-1/4">
							<h2 className="text-xl font-black text-white sticky top-24 uppercase tracking-[0.3em] leading-tight">
								Protocol<br />
								<span className="text-[#ffb700] text-sm font-mono tracking-widest opacity-80">
									[ 01:SUMMARY ]
								</span>
							</h2>
						</div>
						<div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8">
							<ScrollReveal baseOpacity={0} baseRotation={0} enableBlur={false}>
								<div className="space-y-4">
									<div className="text-[10px] font-mono text-[#ffb700] uppercase tracking-[0.4em] mb-2 flex items-center gap-2">
										<span className="w-1 h-1 bg-[#ffb700] rounded-full" />
										Core Foundation
									</div>
									<p className="text-sm text-white/50 leading-relaxed font-light">
										Operating at the intersection of logic and aesthetics since 2018. 
										Specialized in building <span className="text-white">resilient frontend architectures</span> 
										using React and TypeScript as primary delivery vectors.
									</p>
								</div>
							</ScrollReveal>

							<ScrollReveal baseOpacity={0} baseRotation={0} enableBlur={false}>
								<div className="space-y-4">
									<div className="text-[10px] font-mono text-[#ffb700] uppercase tracking-[0.4em] mb-2 flex items-center gap-2">
										<span className="w-1 h-1 bg-[#ffb700] rounded-full" />
										Global Operation
									</div>
									<p className="text-sm text-white/50 leading-relaxed font-light">
										Consulting for market leaders across <span className="text-white">four continents</span>. 
										Navigating complex micro-frontend clusters and delivering high-scale 
										solutions for millions of concurrent users.
									</p>
								</div>
							</ScrollReveal>

							<ScrollReveal baseOpacity={0} baseRotation={0} enableBlur={false}>
								<div className="space-y-4">
									<div className="text-[10px] font-mono text-[#ffb700] uppercase tracking-[0.4em] mb-2 flex items-center gap-2">
										<span className="w-1 h-1 bg-[#ffb700] rounded-full" />
										Technical Bridge
									</div>
									<p className="text-sm text-white/50 leading-relaxed font-light">
										Transforming high-fidelity design visions into 
										<span className="text-white"> performant technical reality</span>. 
										Focusing on Server-Driven UI (SDUI) to normalize complex 
										enterprise ecosystems.
									</p>
								</div>
							</ScrollReveal>

							<ScrollReveal baseOpacity={0} baseRotation={0} enableBlur={false}>
								<div className="space-y-4">
									<div className="text-[10px] font-mono text-[#ffb700] uppercase tracking-[0.4em] mb-2 flex items-center gap-2">
										<span className="w-1 h-1 bg-[#ffb700] rounded-full" />
										Current Vector
									</div>
									<p className="text-sm text-white/50 leading-relaxed font-light">
										Based in Brazil, collaborating with Tier-1 global teams to architect 
										the future of web-based <span className="text-white">enterprise platforms</span>.
									</p>
								</div>
							</ScrollReveal>
						</div>
					</div>
				</section>

				{/* Technical Manifest (Skills) */}
				<section
					id="skills"
					className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5"
				>
					<div className="flex flex-col md:flex-row gap-16">
						<div className="md:w-1/4">
							<h2 className="text-xl font-black text-white sticky top-24 uppercase tracking-[0.3em] leading-tight">
								Manifest<br />
								<span className="text-[#ffb700] text-sm font-mono tracking-widest opacity-80">
									[ 02:EXPERTISE ]
								</span>
							</h2>
						</div>
						<div className="md:w-3/4">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
								<div className="glass-card p-10 border-[#ffb700]/10 hover:border-[#ffb700]/30 transition-all group snake-border-container">
									<svg className="snake-border-svg"><title>Border Trail</title><rect x="0" y="0" width="100%" height="100%" rx="16" fill="none" pathLength="1" className="snake-path" /></svg>
									<h3 className="text-[10px] font-mono font-bold text-[#ffb700] mb-8 uppercase tracking-[0.4em] flex items-center gap-3">
										<div className="w-1.5 h-1.5 rounded-full bg-[#ffb700] shadow-[0_0_8px_#ffb700]" />
										Architecture
									</h3>
									<div className="flex flex-wrap gap-2">
										{[
											'Micro-frontends',
											'Server-Driven UI',
											'FSD Pattern',
											'Design Systems',
											'Clean Architecture',
											'DDD Foundations',
										].map((s) => (
											<span
												key={s}
												className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/5 rounded-lg text-white/50 group-hover:text-white/80 transition-colors"
											>
												{s}
											</span>
										))}
									</div>
								</div>
								<div className="glass-card p-10 border-[#bc42f5]/10 hover:border-[#bc42f5]/30 transition-all group snake-border-container">
									<svg className="snake-border-svg"><title>Border Trail</title><rect x="0" y="0" width="100%" height="100%" rx="16" fill="none" pathLength="1" className="snake-path violet-snake" /></svg>
									<h3 className="text-[10px] font-mono font-bold text-[#bc42f5] mb-8 uppercase tracking-[0.4em] flex items-center gap-3">
										<div className="w-1.5 h-1.5 rounded-full bg-[#bc42f5] shadow-[0_0_8px_#bc42f5]" />
										Engineering
									</h3>
									<div className="flex flex-wrap gap-2">
										{[
											'React',
											'TypeScript',
											'Next.js',
											'Performance Opt.',
											'Unit/E2E Testing',
											'CI/CD Pipelines',
										].map((s) => (
											<span
												key={s}
												className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/5 rounded-lg text-white/40 group-hover:text-[#bc42f5] group-hover:border-[#bc42f5]/30 transition-all duration-300"
											>
												{s}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Career Chronology */}
				<section
					id="experience"
					className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5"
				>
					<div className="flex flex-col md:flex-row gap-16">
						<div className="md:w-1/4">
							<h2 className="text-xl font-black text-white sticky top-24 uppercase tracking-[0.3em] leading-tight">
								Archive<br />
								<span className="text-[#ffb700] text-sm font-mono tracking-widest opacity-80">
									[ 03:CHRONOLOGY ]
								</span>
							</h2>
						</div>
						<div className="md:w-3/4 space-y-12">
							{[
								{
									company: 'CI&T',
									role: 'Senior Frontend Engineer',
									period: '2023 - PRESENT',
									tasks: [
										'Leading development for large-scale enterprise React apps',
										'Architecting and implementing Server-Driven UI (SDUI) solutions for cross-platform consistency',
										'Architecting design systems for cross-team consistency',
									],
								},
								{
									company: 'NSTECH',
									role: 'Senior Frontend Engineer',
									period: '2023',
									tasks: [
										'Delivered micro-frontend solutions for logistics tech',
										'Optimized build performance and developer experience',
									],
								},
								{
									company: 'THOUGHTWORKS',
									role: 'Frontend Engineer',
									period: '2021 - 2023',
									tasks: [
										'Global consulting for Tier-1 technology companies',
										'Championed accessibility and TDD best practices in micro-frontend architectures',
									],
								},
								{
									company: 'BEFORE',
									role: 'Frontend Software Engineer',
									period: '2020 - 2021',
									tasks: [
										'Architeting new projects with Vue.js, Next.js, and React Native',
										'Engineered critical integrations for major telecommunications leaders',
									],
								},
								{
									company: 'XEKOUT GROUP',
									role: 'Front End Developer',
									period: '2020',
									tasks: [
										'Engineered e-commerce solutions and custom checkout experiences',
										'Specialized in Vue.js, Vuetify and Nuxt ecosystems',
									],
								},
								{
									company: 'AGÊNCIA VMAIS',
									role: 'Front End Developer',
									period: '2018 - 2019',
									tasks: [
										'Crafted high-fidelity web experiences and interactive platforms',
										'Bridge between design concepts and technical implementation',
									],
								},
							].map((job) => (
								<div key={job.company} className="relative pl-12 group">
									<div className="absolute left-[11px] top-[14px] bottom-0 w-px bg-white/5 group-last:hidden" />
									<div className="absolute left-0 top-[6px] w-6 h-6 rounded-full border border-white/10 bg-black group-hover:border-[#ffb700] group-hover:shadow-[0_0_12px_rgba(255,183,0,0.4)] transition-all flex items-center justify-center">
										<div className="w-1 h-1 bg-white opacity-20 group-hover:opacity-100 transition-opacity" />
									</div>

									<div className="glass-card p-10 group-hover:bg-white/[0.04] transition-all border-white/5 snake-border-container">
										<svg className="snake-border-svg"><title>Border Trail</title><rect x="0" y="0" width="100%" height="100%" rx="16" fill="none" pathLength="1" className="snake-path" /></svg>
										<div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4">
											<h3 className="text-3xl font-black text-white tracking-tight">
												{job.company}
											</h3>
											<span className="text-[10px] font-mono font-bold text-white/30 bg-white/5 px-3 py-1 rounded-md border border-white/10 tracking-[0.2em]">
												{job.period}
											</span>
										</div>
										<p className="text-[#ffb700] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
											{job.role}
										</p>
										<ul className="space-y-4">
											{job.tasks.map((task) => (
												<li
													key={task}
													className="text-sm text-white/50 flex items-start gap-5 font-light leading-relaxed"
												>
													<span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ffb700] shrink-0 shadow-[0_0_8px_#ffb700]" />
													{task}
												</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Final Call to Action */}
				<section
					id="contact"
					className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5"
				>
					<div className="glass-card p-20 text-center overflow-hidden relative shadow-2xl snake-border-container">
						<svg className="snake-border-svg"><title>Border Trail</title><rect x="0" y="0" width="100%" height="100%" rx="16" fill="none" pathLength="1" className="snake-path" /></svg>
						<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffb700]/10 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/2" />
						<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/[0.03] blur-[140px] rounded-full translate-y-1/2 -translate-x-1/2" />
						
						<h2 className="text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9] max-w-2xl mx-auto">
							INITIATE DIGITAL <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb700] to-white/60">COLLABORATION</span>
						</h2>
						<p className="text-lg text-white/40 max-w-xl mx-auto mb-12 font-light leading-relaxed">
							Open for high-impact architectural challenges and global digital delivery. 
							If you are building complex, multi-user ecosystems, let's engineer the foundation together.
						</p>
						<a
							href="mailto:leandrovianacodes@gmail.com"
							className="bg-white text-black px-12 py-5 rounded-2xl font-black transition-all hover:bg-[#ffb700] hover:scale-105 active:scale-95 shadow-2xl uppercase tracking-[0.2em] text-[11px] inline-block"
						>
							Synchronize Now
						</a>
					</div>
				</section>
			</main>

			<footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border-default text-center text-xs text-fg-subtle">
				<p>© {new Date().getFullYear()} leandrocodes. Built with React & Tailwind.</p>
			</footer>
		</div>
	);
}


export default App;
