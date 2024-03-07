import { Icons } from '@/components/ui/icons';

export function Introduction() {
	return (
		<section className="relative container">
			<div className="text-5xl font-antonio md:text-[5rem] leading-[54px] md:leading-[96px] ">
				<p>FREELANCE</p>
				<p>WEB DEVELOPER</p>
				<p>SPECIALIZING IN</p>
				<p>REACT & NEXT JS</p>
			</div>
			<div className="absolute top-0 right-0">
				<Icons.nextjs className="w-16 h-16" />
			</div>

			<div className="w-4 h-[2000px] bg-white"></div>
		</section>
	);
}
