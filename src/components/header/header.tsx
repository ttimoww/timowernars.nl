import { GetInTouch } from '@/components/header/get-in-touch';
import { Navigation } from '@/components/header/navigation';

export function Header() {
	return (
		<header className="py-5 fixed w-full left-1/2 -translate-x-1/2 z-20">
			<div className="container">
				<Navigation />
			</div>
			<GetInTouch className="absolute right-4 top-1/2 -translate-y-1/2" />
		</header>
	);
}
