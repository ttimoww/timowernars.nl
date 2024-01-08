import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<main className="p-4 text-slate-800">
			<h1 className="font-bold text-4xl">NextJS Starter using:</h1>
			<ul>
				<li>ESLint</li>
				<li>Prettier</li>
				<li>Tailwind</li>
			</ul>
			<Button>Shadcn button</Button>
		</main>
	);
}
