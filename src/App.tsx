import Header from './components/Header';
import Home from './components/Home';
import ScrollReveal from './components/ScrollReveal';

function App() {
	return (
		<div className="min-h-screen bg-gradient-glass-primary relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-glass-cool opacity-20 animate-pulse"></div>
			<div className="absolute inset-0 bg-gradient-glass-warm opacity-15"></div>

			{/* Header */}
			<Header />

			{/* Home Section */}
			<Home />

			{/* About Section with ScrollReveal */}
			<section
				id="about"
				className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
			>
				<div className="max-w-3/4 mx-auto text-center space-y-16">
					<ScrollReveal
						as="h2"
						containerClassName="text-center"
						textClassName="text-orange-500 font-bold"
						baseOpacity={0.2}
						baseRotation={2}
						enableBlur={true}
						blurStrength={3}
					>
						About Me
					</ScrollReveal>

					<ScrollReveal
						containerClassName="max-w-full mx-auto text-left px-4 "
						textClassName="text-gray-300 font-normal text-[clamp(1.2rem,2.5vw,1.8rem)] leading-relaxed [text-wrap:balance]"
						baseOpacity={0.1}
						baseRotation={1}
						enableBlur={true}
						blurStrength={2}
					>
						Creating engaging, high-quality frontend applications since 2018.
						<br />
						<br />
						Experienced in Vue and, for the past five years, specializing in
						React and TypeScript I am skilled at collaborating with global teams
						across Latam, Asia, EU, USA, and Canada in fast-paced consultancy
						environments.
						<br />
						Very passionate about crafting visually appealing, user-focused
						solutions. Love working with designers to turn ideas into
						pixel-perfect interfaces, experimenting with colors, borders,
						curves, and animations.
						<br />
						<br />
						Team-oriented, creative, and adaptable—if it's collaborative, I'm
						all in.
					</ScrollReveal>
				</div>
			</section>

			{/* Skills Section */}
			<section
				id="skills"
				className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
			>
				<div className="max-w-6xl mx-auto space-y-20">
					<ScrollReveal
						as="h2"
						containerClassName="text-center"
						textClassName="text-orange-500 font-bold"
						baseOpacity={0.2}
						baseRotation={-2}
						enableBlur={true}
						blurStrength={4}
					>
						My Skills & Expertise
					</ScrollReveal>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
						<div>
							<ScrollReveal
								as="h3"
								containerClassName="mb-8"
								textClassName="text-white font-semibold text-[clamp(1.4rem,3vw,2.2rem)]"
								baseOpacity={0.15}
								baseRotation={1.5}
								enableBlur={true}
							>
								Frontend Technologies
							</ScrollReveal>

							<ScrollReveal
								containerClassName="space-y-4"
								textClassName="text-gray-300 font-normal text-[clamp(1rem,2vw,1.4rem)]"
								baseOpacity={0.1}
								baseRotation={0.5}
								enableBlur={true}
								blurStrength={2}
							>
								React, TypeScript, Next.js, Tailwind CSS, GSAP, Three.js, and
								modern JavaScript frameworks that bring ideas to life. Quality
								assurance with Jest, Vitest and Playwright.
							</ScrollReveal>
						</div>

						<div>
							<ScrollReveal
								as="h3"
								containerClassName="mb-8"
								textClassName="text-white font-semibold text-[clamp(1.4rem,3vw,2.2rem)]"
								baseOpacity={0.15}
								baseRotation={-1.5}
								enableBlur={true}
							>
								Design & Animation
							</ScrollReveal>

							<ScrollReveal
								containerClassName="space-y-4"
								textClassName="text-gray-300 font-normal text-[clamp(1rem,2vw,1.4rem)]"
								baseOpacity={0.1}
								baseRotation={-0.5}
								enableBlur={true}
								blurStrength={2}
							>
								Creating smooth animations, responsive designs, and intuitive
								user interfaces that engage and delight users with Figma &
								Storybook.
							</ScrollReveal>
						</div>
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section
				id="experience"
				className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-10 pt-16"
			>
				<div className="max-w-4xl mx-auto text-center space-y-16">
					<ScrollReveal
						as="h2"
						containerClassName="text-center"
						textClassName="text-orange-500 font-bold"
						baseOpacity={0.2}
						baseRotation={3}
						enableBlur={true}
						blurStrength={5}
					>
						Professional Experience
					</ScrollReveal>

					<ScrollReveal
						containerClassName="text-center"
						textClassName="text-gray-300 font-normal text-[clamp(1.2rem,2.5vw,1.8rem)]"
						baseOpacity={0.1}
						baseRotation={-1}
						enableBlur={true}
						blurStrength={3}
					>
						My journey through companies where I've contributed my frontend
						expertise.
					</ScrollReveal>

					<div className="grid grid-cols-1 gap-8 mt-12">
						<ScrollReveal
							containerClassName="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-lg p-6 text-left border-l-4 border-[#fab9ff]"
							textClassName="text-gray-300 font-normal"
							baseOpacity={0.1}
							baseRotation={1}
							enableBlur={true}
							blurStrength={2}
						>
							<h3 className="text-white text-xl font-semibold mb-2 word">
								CI&T
							</h3>
							<p className="text-[#fab9ff] mb-4 word">
								Senior Frontend Software Engineer
							</p>
							<p className="text-gray-400 text-sm mb-4 word">
								October 2023 - Present (2 years)
							</p>
							<p className="word">
								Leading frontend development with React and TypeScript for
								top-notch enterprise clients.
							</p>
						</ScrollReveal>

						<ScrollReveal
							containerClassName="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-lg p-6 text-left border-l-4 border-[#ff3d03]"
							textClassName="text-gray-300 font-normal"
							baseOpacity={0.1}
							baseRotation={1}
							enableBlur={true}
							blurStrength={2}
						>
							<h3 className="text-white text-xl font-semibold mb-2 word">
								nstech
							</h3>
							<p className="text-[#ff3d03] mb-4 word">
								Senior Frontend Software Engineer
							</p>
							<p className="text-gray-400 text-sm mb-4 word">
								April 2023 - September 2023 (6 months)
							</p>
							<p className="word">
								Specialized in insurance market solutions using modern
								micro-frontend technologies.
							</p>
						</ScrollReveal>

						<ScrollReveal
							containerClassName="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-lg p-6 text-left border-l-4 border-[#bd4257]"
							textClassName="text-gray-300 font-normal"
							baseOpacity={0.1}
							baseRotation={1}
							enableBlur={true}
							blurStrength={2}
						>
							<h3 className="text-white text-xl font-semibold mb-2 word">
								Thoughtworks
							</h3>
							<p className="text-[#bd4257] mb-4 word">
								Frontend Software Engineer
							</p>
							<p className="text-gray-400 text-sm mb-4 word">
								December 2021 - February 2023 (1 year 3 months)
							</p>
							<p className="word">
								Worked as a consultant with leading companies around the world.
								We delivered not only code, but amazing experiences and products
								built with React in a microfrontends architecture.
							</p>
						</ScrollReveal>

						<ScrollReveal
							containerClassName="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-lg p-6 text-left border-l-4 border-orange-700"
							textClassName="text-gray-300 font-normal"
							baseOpacity={0.1}
							baseRotation={1}
							enableBlur={true}
							blurStrength={2}
						>
							<h3 className="text-white text-xl font-semibold mb-2 word">
								Before
							</h3>
							<p className="text-orange-700 mb-4 word">
								Frontend Software Engineer
							</p>
							<p className="text-gray-400 text-sm mb-4 word">
								June 2020 - December 2021 (1 year 7 months)
							</p>
							<p className="word">
								Development and architecture of new projects, using Vue.js (v3),
								Next.js and React Native. Integrations with major
								telecommunication companies.
							</p>
						</ScrollReveal>

						<ScrollReveal
							containerClassName="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-lg p-6 text-left border-l-4 border-green-500"
							textClassName="text-gray-300 font-normal"
							baseOpacity={0.1}
							baseRotation={1}
							enableBlur={true}
							blurStrength={2}
						>
							<h3 className="text-white text-xl font-semibold mb-2 word">
								Xekout Group
							</h3>
							<p className="text-green-400 mb-4 word">Front End Developer</p>
							<p className="text-gray-400 text-sm mb-4 word">
								January 2020 - June 2020 (6 months)
							</p>
							<p className="word">
								Built e-commerce solutions and custom shopping experiences with
								Vuex, Vuetify and Nuxt.
							</p>
						</ScrollReveal>

						<ScrollReveal
							containerClassName="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-lg p-6 text-left border-l-4 border-purple-600"
							textClassName="text-gray-300 font-normal"
							baseOpacity={0.1}
							baseRotation={1}
							enableBlur={true}
							blurStrength={2}
						>
							<h3 className="text-white text-xl font-semibold mb-2 word">
								Agência Vmais
							</h3>
							<p className="text-purple-600 mb-4 word">Front End Developer</p>
							<p className="text-gray-400 text-sm mb-4 word">
								January 2018 - January 2020 (3 years)
							</p>
							<p className="word">
								Created engaging web experiences and interactive websites for
								various clients.
							</p>
						</ScrollReveal>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
			>
				<div className="max-w-4xl mx-auto text-center space-y-16">
					<ScrollReveal
						as="h2"
						containerClassName="text-center"
						textClassName="text-white font-bold"
						baseOpacity={0.2}
						baseRotation={-2}
						enableBlur={true}
						blurStrength={4}
					>
						Let's Work Together
					</ScrollReveal>

					<ScrollReveal
						containerClassName="text-center"
						textClassName="text-gray-300 font-normal text-[clamp(1.2rem,2.5vw,1.8rem)]"
						baseOpacity={0.1}
						baseRotation={1}
						enableBlur={true}
						blurStrength={2}
					>
						Ready to bring your ideas to life? Let's create something amazing
						together.
					</ScrollReveal>

					<div className="pt-8">
						<button
							type="button"
							className="cursor-pointer inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
						>
							Get In Touch
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
