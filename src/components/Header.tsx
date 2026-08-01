import { Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import { useState } from 'react';
import MagneticButton from './MagneticButton';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Skills', href: '#skills' },
		{ name: 'Experience', href: '#experience' },
	];

	const socialLinks = [
		{
			icon: LinkedinLogo,
			href: 'https://linkedin.com/in/leandrovianam',
			label: 'LinkedIn',
		},
		{
			icon: GithubLogo,
			href: 'https://github.com/leandrocodes',
			label: 'GitHub',
		},
		{
			icon: Envelope,
			href: 'mailto:leandrovianacodes@gmail.com',
			label: 'Email',
		},
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-[#262626]/95 backdrop-blur-lg border-b border-[#F2F2F2]/10 shadow-lg">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					<div className="flex items-center gap-12">
						<div className="flex-shrink-0">
							<a
								href="#home"
								onClick={() => setIsMenuOpen(false)}
								className="flex items-center gap-3 group active:opacity-80 transition-opacity"
							>
								<div className="w-10 h-10 rounded-full bg-[#56BF99] flex items-center justify-center text-[#262626] font-mono font-bold text-xl shadow-md border-2 border-[#262626] group-hover:bg-[#F2F2F2] transition-colors duration-300">
									L
								</div>
								<div className="hidden sm:block">
									<h1 className="text-xs font-mono font-bold text-[#F2F2F2] uppercase tracking-[0.3em] opacity-90 group-hover:text-[#56BF99] transition-colors">
										LEANDRO<span className="text-[#56BF99]">.V</span>
									</h1>
								</div>
							</a>
						</div>

						<div className="hidden md:block">
							<div className="flex items-center space-x-6">
								{navItems.map((item) => (
									<MagneticButton key={item.name} pullFactor={0.3}>
										<a
											href={item.href}
											className="text-[#F2F2F2]/60 hover:text-[#56BF99] text-[11px] font-mono font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group/nav inline-block py-1 px-2 rounded-md hover:bg-[#F2F2F2]/5"
										>
											{item.name}
											<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#56BF99] rounded-full transition-all duration-300 group-hover/nav:w-3/4" />
										</a>
									</MagneticButton>
								))}
							</div>
						</div>
					</div>

					<div className="flex items-center gap-6">
						<div className="hidden sm:flex items-center space-x-3">
							{socialLinks.map((social) => (
								<MagneticButton key={social.label} pullFactor={0.5}>
									<a
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-[#F2F2F2]/60 hover:text-[#56BF99] p-2 transition-all duration-300 inline-block bg-[#F2F2F2]/5 rounded-lg border border-[#F2F2F2]/10 hover:border-[#56BF99]/50"
										aria-label={social.label}
									>
										<social.icon size={18} weight="bold" />
									</a>
								</MagneticButton>
							))}
						</div>

						<div className="md:hidden">
							<button
								type="button"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="text-[#F2F2F2]/80 hover:text-[#56BF99] p-3 -mr-2 transition-all duration-200 focus:outline-none"
								aria-label="Toggle menu"
							>
								<div className="relative w-6 h-6">
									<div
										className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
											isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
										}`}
									/>
									<div
										className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
											isMenuOpen ? 'opacity-0' : ''
										}`}
									/>
									<div
										className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
											isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
										}`}
									/>
								</div>
							</button>
						</div>
					</div>
				</div>

				{/* Mobile menu */}
				<div
					className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
						isMenuOpen ? 'max-h-screen opacity-100 py-6 border-t border-[#F2F2F2]/10 bg-[#262626]/95 backdrop-blur-xl' : 'max-h-0 opacity-0 py-0'
					}`}
				>
					<div className="space-y-2 px-4">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-[#F2F2F2]/80 hover:text-[#56BF99] active:text-[#56BF99] active:bg-[#F2F2F2]/5 block py-3 px-4 rounded-xl text-lg font-mono font-bold uppercase tracking-wider transition-all"
								onClick={() => setIsMenuOpen(false)}
							>
								{item.name}
							</a>
						))}
					</div>
					<div className="flex items-center gap-4 border-t border-[#F2F2F2]/10 mt-6 pt-6 px-4 text-[#F2F2F2]/70">
						{socialLinks.map((social) => (
							<a
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 bg-[#F2F2F2]/5 rounded-xl border border-[#F2F2F2]/10 active:border-[#56BF99] hover:text-[#56BF99] transition-all duration-300 flex items-center justify-center"
								aria-label={social.label}
								onClick={() => setIsMenuOpen(false)}
							>
								<social.icon size={20} weight="bold" />
							</a>
						))}
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
