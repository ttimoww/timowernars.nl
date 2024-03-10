import { Introduction } from '@/components/landing/introduction';
import { Button } from '@/components/ui/button';
import { WavyBackground } from '@/components/ui/wavy-background';
import { WhiteBordered } from '@/components/ui/white-bordered';

export default function Home() {
	return (
		<main>
			<WavyBackground>
				<Introduction />
			</WavyBackground>
			<BlogPosts />
		</main>
	);
}

function BlogPosts() {
	return (
		<section className="container">
			<WhiteBordered>
				<h2 className="font-antonio text-4xl md:text-5xl leading-[54px] md:leading-[96px] mb-6 md:mb-10">
					I WROTE SOME BLOG POSTS
				</h2>
				<div className="space-y-8">
					<X />
					<X />
					<X />
				</div>
			</WhiteBordered>
		</section>
	);
}

const X = () => (
	<div className="bg-black/60 backdrop-blur-lg border border-zinc-600/40 p-5 md:p-12 flex flex-col md:flex-row gap-6 md:items-end md:justify-between group hover:bg-white hover:text-black transition-colors">
		<div className="md:w-[500px] space-y-4">
			<h2 className="font-medium text-[20px] md:text-3xl leading-7 md:leading-10">
				Component Composition in React.js
			</h2>
			<p className="font-thin text-sm text-zinc-300 group-hover:text-zinc-500">
				A quick look at how we can use component composition to create more flexible and maintainable components
				in React.js.
			</p>
		</div>
		<Button className="px-7 w-fit group-hover:bg-black group-hover:text-white" size="sm">
			Read
		</Button>
	</div>
);
