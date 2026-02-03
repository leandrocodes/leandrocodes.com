import { Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import { useState } from 'react';

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
		<header className="fixed top-0 left-0 right-0 z-50 glass-header shadow-2xl">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					<div className="flex items-center gap-12">
						<div className="flex-shrink-0">
							<a href="#home" className="flex items-center gap-3 group">
								<div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black font-black text-xl shadow-xl group-hover:bg-[#ffb700] transition-all duration-500">
									L
								</div>
								<div className="hidden sm:block">
									<h1 className="text-xs font-black text-white uppercase tracking-[0.4em] opacity-80 group-hover:opacity-100 transition-opacity">
										LEANDRO<span className="text-[#ffb700]">V.</span>
									</h1>
								</div>
							</a>
						</div>

						<div className="hidden md:block">
							<div className="flex items-center space-x-6">
								{navItems.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="text-white/40 hover:text-[#ffb700] text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group/nav"
									>
										{item.name}
										<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffb700] transition-all duration-300 group-hover/nav:w-full shadow-[0_0_8px_#ffb700]" />
									</a>
								))}
							</div>
						</div>
					</div>

					<div className="flex items-center gap-6">
						<div className="hidden sm:flex items-center space-x-4">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-white/30 hover:text-[#ffb700] p-2 transition-all duration-300"
									aria-label={social.label}
								>
									<social.icon size={20} weight="light" />
								</a>
							))}
						</div>

						<div className="md:hidden">
							<button
								type="button"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="text-white/60 hover:text-[#ffb700] p-2 transition-all duration-200"
								aria-label="Toggle menu"
							>
								<div className="relative w-6 h-6">
									<div
										className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
											}`}
									/>
									<div
										className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
											}`}
									/>
									<div
										className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
											}`}
									/>
								</div>
							</button>
						</div>
					</div>
				</div>

				{/* Mobile menu */}
				<div
					className={`md:hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 py-8' : 'max-h-0 opacity-0'
						}`}
				>
					<div className="space-y-6 px-4">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-white/40 hover:text-[#ffb700] block text-2xl font-black uppercase tracking-tighter transition-all"
								onClick={() => setIsMenuOpen(false)}
							>
								{item.name}
							</a>
						))}
					</div>
					<div className="flex items-center gap-8 border-t border-white/5 mt-12 pt-12 px-4 text-white/30">
						{socialLinks.map((social) => (
							<a
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition-all duration-300"
								aria-label={social.label}
							>
								<social.icon size={28} weight="light" />
							</a>
						))}
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
