import Image from 'next/image';

export function Introduction() {
	return (
		<section className="relative container">
			<div className="text-white text-5xl font-antonio md:text-[5rem] leading-[54px] md:leading-[96px]">
				<h1>
					<span className="block">FREELANCE</span>
					<span className="block">WEB DEVELOPER</span>
					<span className="block">SPECIALIZING IN</span>
					<span className="block ">REACT & NEXT JS</span>
				</h1>
			</div>
			<div className="absolute left-1/4 -bottom-[150px] md:right-8 md:top-0 md:left-auto md:bottom-auto">
				<Image
					src="/picofme.png"
					alt="Tim Wernars"
					width={100}
					height={100}
					className="rounded-full border-[3px] border-white"
				/>
				<div className="bg-white rounded-full p-3 absolute -top-[10px] -right-[90px] -rotate-[10deg] shadow-sm">
					<span className="text-black text-[12px] font-thin tracking-wide">Timo Wernars 👋🏼</span>
				</div>
			</div>
		</section>
	);
}
