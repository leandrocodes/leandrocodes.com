import Header from './components/Header';
import Home from './components/Home';
import ScrollReveal from './components/ScrollReveal';
import TextReveal from './components/TextReveal';

function App() {
	return (
		<div className="min-h-screen bg-canvas-default text-fg-default font-inter selection:bg-orange-500/30 overflow-hidden">
			{/* Header */}
			<Header />

			<main className="pb-24">
				{/* Home Section (Hero) */}
				<Home />

				{/* Architectural Protocol (About) - Mid-Century Analog Cabinet Drawer */}
				<section
					id="about"
					className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-[#F2F2F2]/10"
				>
					<div className="flex flex-col md:flex-row gap-12">
						<div className="md:w-1/4">
							<TextReveal>
								<div className="sticky top-24 space-y-4">
									<h2 className="text-xl font-mono font-bold text-[#F2F2F2] uppercase tracking-[0.25em] leading-tight">
										Protocol
										<br />
										<span className="text-[#56BF99] text-xs font-mono tracking-widest opacity-90">
											[ 01:SUMMARY ]
										</span>
									</h2>
								</div>
							</TextReveal>
						</div>

						{/* Cabinet Frame 01 */}
						<div className="md:w-3/4 bg-[#1e1e1e] p-4 sm:p-6 rounded-3xl border-4 border-[#262626] shadow-[inset_0_4px_20px_rgba(0,0,0,0.8),0_12px_40px_rgba(0,0,0,0.5)] relative space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{[
									{
										tag: 'Core Foundation',
										file: 'FOUNDATION.SYS',
										text: 'Operating at the intersection of logic and aesthetics since 2018. Specialized in building resilient frontend architectures using React and TypeScript as primary delivery vectors.',
										accent: '#56BF99',
									},
									{
										tag: 'Global Operation',
										file: 'GLOBAL_OPS.SYS',
										text: 'Consulting for market leaders across four continents. Navigating complex micro-frontend clusters and delivering high-scale solutions for millions of concurrent users.',
										accent: '#EBCA5E',
									},
									{
										tag: 'Technical Bridge',
										file: 'TECH_BRIDGE.SYS',
										text: 'Transforming high-fidelity design visions into performant technical reality. Focusing on Server-Driven UI (SDUI) to normalize complex enterprise ecosystems.',
										accent: '#D96459',
									},
									{
										tag: 'Current Vector',
										file: 'VECTOR_LOC.SYS',
										text: 'Based in Brazil, collaborating with Tier-1 global teams to architect the future of web-based enterprise platforms.',
										accent: '#56BF99',
									},
								].map((card) => (
									<ScrollReveal key={card.tag} baseOpacity={0} baseRotation={0} enableBlur={false} className="h-full">
										<div className="group h-full flex flex-col">
											<div className="flex items-center shrink-0">
												<div className="bg-[#262626] border-t-2 border-l-2 border-r-2 border-[#F2F2F2]/15 rounded-t-xl px-3 py-1 font-mono text-[9px] font-bold text-[#F2F2F2]/60 group-hover:text-[#56BF99] group-hover:border-[#56BF99]/50 transition-all flex items-center gap-2">
													<span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: card.accent }} />
													{card.file}
												</div>
											</div>
											<div className="bg-[#262626] p-6 rounded-b-xl rounded-tr-xl border-2 border-[#F2F2F2]/10 group-hover:border-[#56BF99]/50 transition-all shadow-md flex-1 flex flex-col justify-start space-y-3">
												<div className="text-[11px] font-mono uppercase tracking-[0.25em] flex items-center gap-2 font-bold shrink-0" style={{ color: card.accent }}>
													<span className="w-2 h-2 rounded-full" style={{ backgroundColor: card.accent }} />
													{card.tag}
												</div>
												<p className="text-xs sm:text-sm text-[#F2F2F2]/80 leading-relaxed font-sans flex-1">
													{card.text}
												</p>
											</div>
										</div>
									</ScrollReveal>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Technical Manifest (Skills) - Mid-Century Analog Cabinet Drawer */}
				<section
					id="skills"
					className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-[#F2F2F2]/10"
				>
					<div className="flex flex-col md:flex-row gap-12">
						<div className="md:w-1/4">
							<TextReveal>
								<div className="sticky top-24 space-y-4">
									<h2 className="text-xl font-mono font-bold text-[#F2F2F2] uppercase tracking-[0.25em] leading-tight">
										Manifest
										<br />
										<span className="text-[#56BF99] text-xs font-mono tracking-widest opacity-90">
											[ 02:EXPERTISE ]
										</span>
									</h2>
								</div>
							</TextReveal>
						</div>

						{/* Cabinet Frame 02 */}
						<div className="md:w-3/4 bg-[#1e1e1e] p-4 sm:p-6 rounded-3xl border-4 border-[#262626] shadow-[inset_0_4px_20px_rgba(0,0,0,0.8),0_12px_40px_rgba(0,0,0,0.5)] relative space-y-6">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								{/* Folder 1: Architecture */}
								<div className="group">
									<div className="flex items-center">
										<div className="bg-[#262626] border-t-2 border-l-2 border-r-2 border-[#F2F2F2]/15 rounded-t-xl px-4 py-1 font-mono text-[10px] font-bold text-[#F2F2F2]/70 group-hover:text-[#56BF99] group-hover:border-[#56BF99]/50 transition-all flex items-center gap-2">
											<span className="w-1.5 h-1.5 rounded-full bg-[#56BF99]" />
											SYSTEM_ARCH.CATALOG
										</div>
									</div>
									<div className="bg-[#262626] p-6 rounded-b-2xl rounded-tr-2xl border-2 border-[#F2F2F2]/12 group-hover:border-[#56BF99]/60 transition-all shadow-xl space-y-4">
										<h3 className="text-xs font-mono font-bold text-[#56BF99] uppercase tracking-[0.3em] flex items-center gap-3">
											<div className="w-2 h-2 rounded-full bg-[#56BF99]" />
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
													className="px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider bg-[#F2F2F2]/5 border border-[#F2F2F2]/15 rounded-lg text-[#F2F2F2]/80 hover:text-[#56BF99] hover:border-[#56BF99]/50 transition-colors"
												>
													{s}
												</span>
											))}
										</div>
									</div>
								</div>

								{/* Folder 2: Engineering */}
								<div className="group">
									<div className="flex items-center">
										<div className="bg-[#262626] border-t-2 border-l-2 border-r-2 border-[#F2F2F2]/15 rounded-t-xl px-4 py-1 font-mono text-[10px] font-bold text-[#F2F2F2]/70 group-hover:text-[#56BF99] group-hover:border-[#56BF99]/50 transition-all flex items-center gap-2">
											<span className="w-1.5 h-1.5 rounded-full bg-[#EBCA5E]" />
											ENGINEERING.CATALOG
										</div>
									</div>
									<div className="bg-[#262626] p-6 rounded-b-2xl rounded-tr-2xl border-2 border-[#F2F2F2]/12 group-hover:border-[#56BF99]/60 transition-all shadow-xl space-y-4">
										<h3 className="text-xs font-mono font-bold text-[#EBCA5E] uppercase tracking-[0.3em] flex items-center gap-3">
											<div className="w-2 h-2 rounded-full bg-[#EBCA5E]" />
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
													className="px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider bg-[#F2F2F2]/5 border border-[#F2F2F2]/15 rounded-lg text-[#F2F2F2]/80 hover:text-[#EBCA5E] hover:border-[#EBCA5E]/50 transition-colors"
												>
													{s}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Career Chronology - Mid-Century Analog Cabinet Archive */}
				<section
					id="experience"
					className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-[#F2F2F2]/10"
				>
					<div className="flex flex-col md:flex-row gap-12">
						<div className="md:w-1/4">
							<TextReveal>
								<div className="sticky top-24 space-y-4">
									<h2 className="text-xl font-mono font-bold text-[#F2F2F2] uppercase tracking-[0.25em] leading-tight">
										Archive
										<br />
										<span className="text-[#56BF99] text-xs font-mono tracking-widest opacity-90">
											[ 03:CHRONOLOGY ]
										</span>
									</h2>
								</div>
							</TextReveal>
						</div>

						{/* Analog Cabinet Main Frame */}
						<div className="md:w-3/4 bg-[#1e1e1e] p-4 sm:p-6 rounded-3xl border-4 border-[#262626] shadow-[inset_0_4px_20px_rgba(0,0,0,0.8),0_12px_40px_rgba(0,0,0,0.5)] relative space-y-6">
							{/* Folder Stack / Cabinet Drawers */}
							{[
								{
									company: 'CI&T',
									role: 'Senior Frontend Engineer',
									period: '2023 - PRESENT',
									id: 'LOG-883',
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
									id: 'LOG-742',
									tasks: [
										'Delivered micro-frontend solutions for logistics tech',
										'Optimized build performance and developer experience',
									],
								},
								{
									company: 'THOUGHTWORKS',
									role: 'Frontend Engineer',
									period: '2021 - 2023',
									id: 'LOG-619',
									tasks: [
										'Global consulting for Tier-1 technology companies',
										'Championed accessibility and TDD best practices in micro-frontend architectures',
									],
								},
								{
									company: 'BEFORE',
									role: 'Frontend Software Engineer',
									period: '2020 - 2021',
									id: 'LOG-490',
									tasks: [
										'Architeting new projects with Vue.js, Next.js, and React Native',
										'Engineered critical integrations for major telecommunications leaders',
									],
								},
								{
									company: 'XEKOUT GROUP',
									role: 'Front End Developer',
									period: '2020',
									id: 'LOG-308',
									tasks: [
										'Engineered e-commerce solutions and custom checkout experiences',
										'Specialized in Vue.js, Vuetify and Nuxt ecosystems',
									],
								},
								{
									company: 'AGÊNCIA VMAIS',
									role: 'Front End Developer',
									period: '2018 - 2019',
									id: 'LOG-112',
									tasks: [
										'Crafted high-fidelity web experiences and interactive platforms',
										'Bridge between design concepts and technical implementation',
									],
								},
							].map((job, index) => (
								<div key={job.company} className="relative group">
									{/* Folder Tab (Mid-Century File Folder Ear) */}
									<div className="flex items-center">
										<div className="bg-[#262626] border-t-2 border-l-2 border-r-2 border-[#F2F2F2]/15 rounded-t-xl px-4 py-1 font-mono text-[10px] font-bold text-[#F2F2F2]/70 group-hover:text-[#56BF99] group-hover:border-[#56BF99]/50 transition-all flex items-center gap-3">
											<span className="w-1.5 h-1.5 rounded-full bg-[#56BF99]" />
											FILE://{job.company.replace(/\s+/g, '_')}
											<span className="text-[#F2F2F2]/30">[{job.id}]</span>
										</div>
									</div>

									{/* Physical Cabinet Card Body */}
									<div className="bg-[#262626] p-6 md:p-8 rounded-b-2xl rounded-tr-2xl border-2 border-[#F2F2F2]/12 group-hover:border-[#56BF99]/60 transition-all shadow-xl relative overflow-hidden">
										<div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
											<h3 className="text-2xl font-mono font-bold text-[#F2F2F2] tracking-tight">
												{job.company}
											</h3>
											<span className="text-[10px] font-mono font-bold text-[#EBCA5E] bg-[#EBCA5E]/10 px-3.5 py-1 rounded-full border border-[#EBCA5E]/20 tracking-[0.15em] self-start sm:self-auto">
												{job.period}
											</span>
										</div>

										<p className="text-[#56BF99] text-xs font-mono font-bold uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
											<span className="w-1.5 h-1.5 bg-[#56BF99] rounded-full" />
											{job.role}
										</p>

										<ul className="space-y-3 border-t border-[#F2F2F2]/5 pt-4">
											{job.tasks.map((task) => (
												<li
													key={task}
													className="text-sm text-[#F2F2F2]/80 flex items-start gap-4 font-sans leading-relaxed"
												>
													<span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D96459] shrink-0" />
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
					className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-[#F2F2F2]/10"
				>
					<div className="bg-[#262626] p-8 md:p-16 rounded-3xl text-center border-2 border-[#F2F2F2]/15 shadow-2xl relative overflow-hidden">
						<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#56BF99]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
						<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EBCA5E]/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

						<h2 className="text-3xl md:text-5xl font-mono font-bold text-[#F2F2F2] mb-6 tracking-tight uppercase leading-tight max-w-2xl mx-auto">
							INITIATE DIGITAL <br />{' '}
							<span className="text-[#56BF99]">
								COLLABORATION
							</span>
						</h2>
						<p className="text-base text-[#F2F2F2]/70 max-w-xl mx-auto mb-10 font-sans leading-relaxed">
							Open for high-impact architectural challenges and global digital
							delivery. If you are building complex, multi-user ecosystems,
							let's engineer the foundation together.
						</p>
						<a
							href="mailto:leandrovianacodes@gmail.com"
							className="bg-[#56BF99] text-[#262626] border-2 border-[#262626] px-10 py-4 rounded-full font-mono font-bold transition-all hover:bg-[#F2F2F2] hover:scale-105 active:scale-95 shadow-xl uppercase tracking-[0.2em] text-xs inline-block"
						>
							Synchronize Now
						</a>
					</div>
				</section>
			</main>

			<footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[#F2F2F2]/10 text-center text-xs font-mono text-[#F2F2F2]/50">
				<p>
					© {new Date().getFullYear()} leandrocodes. Mid-Century Braun T3 Industrial Design System.
				</p>
			</footer>
		</div>
	);
}

export default App;
