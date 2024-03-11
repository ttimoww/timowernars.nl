import Link from 'next/link';
import { ExternalLinkIcon, MenuIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Navigation() {
	return (
		<>
			<MobileNavigation className="md:hidden" />
			<DesktopNavigation className="hidden md:block" />
		</>
	);
}

interface MobileNavigationProps extends React.HTMLAttributes<HTMLDivElement> {}
function MobileNavigation({ className, ...props }: MobileNavigationProps) {
	return (
		<div className={cn(className)} {...props}>
			<Sheet>
				<SheetTrigger className="bg-zinc-600/50 backdrop-blur-lg px-6 rounded-full h-[50px]">
					<MenuIcon />
				</SheetTrigger>
				<SheetContent side="left" className="bg-black-600/80 backdrop-blur-lg">
					<nav>TODO</nav>
				</SheetContent>
			</Sheet>
		</div>
	);
}

interface DesktopNavigationProps extends React.HTMLAttributes<HTMLDivElement> {}
function DesktopNavigation({ className, ...props }: DesktopNavigationProps) {
	return (
		<nav
			className={cn(
				'bg-zinc-600/50 backdrop-blur-lg px-8 py-4 rounded-full text-sm w-fit tracking-wide h-[50px]',
				className
			)}
			{...props}
		>
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
