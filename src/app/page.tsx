import { BlogPosts } from '@/components/landing/blog-posts';
import { Introduction } from '@/components/landing/introduction';
import { Stack } from '@/components/landing/stack';
import { WavyBackground } from '@/components/ui/wavy-background';

export default function Home() {
	return (
		<main className="pb-20">
			<WavyBackground>
				<Introduction />
			</WavyBackground>
			<Stack />
			<BlogPosts />
		</main>
	);
}
