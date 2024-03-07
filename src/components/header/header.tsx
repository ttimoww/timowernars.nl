import { GetInTouch } from '@/components/header/get-in-touch';
import { Navigation } from '@/components/header/navigation';

export function Header() {
	return (
		<header className="container border py-5 fixed left-1/2 -translate-x-1/2 z-10">
			<Navigation />
			<GetInTouch />
		</header>
	);
}
