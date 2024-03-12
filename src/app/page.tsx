import { cn } from '@/lib/utils';
import { BlogPosts } from '@/components/landing/blog-posts';
import { Introduction } from '@/components/landing/introduction';
import { Icons } from '@/components/ui/icons';
import { WavyBackground } from '@/components/ui/wavy-background';

export default function Home() {
	return (
		<main className="pb-20">
			<WavyBackground>
				<Introduction />
			</WavyBackground>
			<BlogPosts />
		</main>
	);
}

function Technologies() {
	const iconCn = 'inline w-[30px] h-[30px]';
	return (
		<section className="border container">
			<p className="text-[2rem] sm:text-[2.5rem]">
				My expertises are <Icons.nextjs className={cn(iconCn, '')} />{' '}
				<Icons.reactjs className={cn(iconCn, '')} /> <Icons.typescript className={cn(iconCn)} />
				<br />
				But I&apos;m also a big fan of <Icons.tailwindcss className={cn(iconCn)} />{' '}
				<Icons.nestjs className={cn(iconCn)} /> <Icons.postgress className={cn(iconCn)} />
			</p>
		</section>
	);
}
