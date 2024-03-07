import { Button } from '@/components/ui/button';

export function GetInTouch() {
	return (
		<div className="flex">
			<div className="w-4 h-4 rounded-full bg-emerald-400"></div>
			<span>Lets get in touch.</span>
			<Button>Contact</Button>
		</div>
	);
}
