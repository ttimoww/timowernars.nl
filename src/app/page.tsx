import Image from 'next/image';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Introduction } from '@/components/landing/introduction';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { WavyBackground } from '@/components/ui/wavy-background';

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
			<h2 className="font-antonio text-4xl md:text-5xl leading-[54px] md:leading-[96px] mb-6 md:mb-10">
				I WROTE SOME BLOG POSTS
			</h2>
			<div className="grid md:grid-cols-[33.3%_66.6%] gap-6">
				<Post orientation="horizontal" className="row-span-2 col-span-1" />
				<Post orientation="vertical" className="" />
				<Post orientation="vertical" className="" />
			</div>
		</section>
	);
}

interface PostProps extends React.HTMLProps<HTMLDivElement> {
	orientation?: 'horizontal' | 'vertical';
}
function Post({ orientation = 'vertical', className, ...props }: PostProps) {
	return (
		<article
			className={cn(
				'border rounded-2xl overflow-hidden text-zinc-500 bg-zinc-950 border-zinc-900 grid grid-cols-1',
				{
					'md:grid-cols-[33.3%_66.6%]': orientation === 'vertical'
				},
				className
			)}
			{...props}
		>
			<div
				className={cn('bg-green-100 relative overflow-hidden h-44 ', {
					'md:h-auto': orientation === 'vertical'
				})}
			>
				<Image src="/post.jpg" alt="" fill className="object-cover" />
			</div>

			<div className="p-6 gap-3 flex flex-col">
				<div className="flex gap-4 h-5 text-sm">
					<Badge variant="secondary">Next.js</Badge>
					<Separator orientation="vertical" className="bg-zinc-900" />
					<span> {format(new Date(), 'MMMM d, yyyy')}</span>
				</div>

				<h2 className="text-xl font-medium text-zinc-300 mb-auto">
					Create Better Components in React.js using Component Composition
				</h2>

				<div className="space-y-3">
					<Separator orientation="horizontal" className="bg-zinc-900" />
					<div className="flex gap-4">
						<Image src="/timo.png" alt="" width={35} height={35} className="rounded-full" />
						<div>
							<p className="text-sm text-zinc-300">Timo Wernars</p>
							<p className="text-xs">Frontend Developer</p>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
