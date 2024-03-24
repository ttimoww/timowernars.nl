import Image from 'next/image';
import Link from 'next/link';

export function Author() {
	return (
		<div className="flex gap-3 items-center">
			<Image
				className="rounded-full border-2 border-white"
				src="/images/timo.png"
				alt="Avatar Timo"
				width={46}
				height={46}
			/>
			<div className="leading-tight">
				<p className="font-medium text-slate-200">Timo</p>
				<Link className="text-sm text-slate-500" target="_blank" href="https://twitter.com/tymo_so">
					@tymo_so
				</Link>
			</div>
		</div>
	);
}
