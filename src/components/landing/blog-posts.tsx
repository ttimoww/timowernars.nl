import Image from 'next/image';
import Link from 'next/link';
import { Post, allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { TextReveal } from '@/components/ui/text-reveal';

export function BlogPosts() {
	return (
		<section className="container relative">
			<Gradients />
			<TextReveal
				className="w-full md:w-fit"
				text="I like writing about cool stuff"
				revealText="(But I prefer writing code)"
			/>
			<div className="grid md:grid-cols-3 gap-6">
				{allPosts.map((post, i) => (
					<BlogPost
						key={i}
						post={post}
						orientation={i === 0 ? 'horizontal' : 'vertical'}
						className={cn({
							'md:row-span-2 md:col-span-1': i === 0,
							'md:col-span-2': i !== 0
						})}
					/>
				))}
			</div>
		</section>
	);
}

function Gradients() {
	return (
		<div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 opacity-40 ">
			<div className="blur-[100px] h-[15rem] aspect-square bg-gradient-to-br from-blue-400 to-purple-400 absolute top-0 right-0"></div>
			<div className="blur-[70px] h-[10rem] aspect-square bg-gradient-to-r from-cyan-400 to-sky-300 absolute -bottom-10 -left-5"></div>
		</div>
	);
}

interface PostProps extends React.HTMLProps<HTMLDivElement> {
	orientation?: 'horizontal' | 'vertical';
	post: Post;
}
function BlogPost({ post, orientation = 'vertical', className, ...props }: PostProps) {
	return (
		<article
			className={cn(
				'border rounded-2xl overflow-hidden bg-zinc-900/50 backdrop-blur-lg grid grid-cols-1',
				className
			)}
			{...props}
		>
			<Link href={`/blog/${post.slug}`}>
				<div
					className={cn('bg-green-100 relative overflow-hidden h-44  hidden md:block', {
						'md:h-auto': orientation === 'vertical'
					})}
				>
					<Image src="/post.jpg" alt="" fill className="object-cover" />
				</div>

				<div className="p-6 gap-3 flex flex-col">
					<div className="flex gap-4 h-5 text-sm">
						<Badge variant="secondary">Next.js</Badge>
						<Separator orientation="vertical" />
						<span className="text-zinc-500">{format(post.date, 'MMMM d, yyyy')}</span>
					</div>

					<h2 className="text-xl font-medium mb-auto">{post.title}</h2>

					<div className="space-y-3">
						<Separator orientation="horizontal" />
						<div className="flex gap-4">
							<Image src="/timo.png" alt="" width={35} height={35} className="rounded-full" />
							<div>
								<p className="text-sm">Timo Wernars</p>
								<p className="text-xs text-zinc-500">Frontend Developer</p>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</article>
	);
}
