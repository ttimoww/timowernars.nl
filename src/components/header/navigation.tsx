import Link from 'next/link';
import { ExternalLinkIcon } from 'lucide-react';

export function Navigation() {
	return (
		<nav className="bg-zinc-600/50 backdrop-blur-lg px-8 py-4 rounded-full text-sm w-fit tracking-wide h-[50px]">
			<ul className="flex gap-8">
				<Link href="#" className="font-semibold hover:text-white transition-colors">
					Home
				</Link>
				<Link href="#" className="text-zinc-300 hover:text-white transition-colors">
					Blog
				</Link>
				<Link
					href="https://cv.timowernars.nl"
					target="_blank"
					className="text-zinc-300 hover:text-white transition-colors"
				>
					CV <ExternalLinkIcon className="inline w-3 h-3 -translate-y-0.5" />
				</Link>
			</ul>
		</nav>
	);
}
