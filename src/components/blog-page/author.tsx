import Image from 'next/image';
import Link from 'next/link';

export function Author() {
	return (
		<div className="flex gap-3 items-center">
			<Image className="rounded-full border" src="/timo.png" alt="Avatar Timo" width={42} height={42} />
			<div className="leading-tight">
				<p className="font-medium">Timo</p>
				<p>
					<Link className="text-xs text-secundary" target="_blank" href="https://twitter.com/tymo_so">
						@tymo_so
					</Link>
				</p>
			</div>
		</div>
	);
}
