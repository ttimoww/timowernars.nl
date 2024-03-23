import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Post, allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export function BlogPosts() {
	return (
		<section className="container relative">
			<h2 className="text-[2rem] sm:text-[3rem] text-slate-200 py-5 font-bold tracking-tight">
				I like to write about cool stuff
			</h2>
			<div className="grid md:grid-cols-2 gap-6">
				{allPosts.map((post, i) => (
					<BlogPost
						key={i}
						post={post}
						// orientation={i === 0 ? 'horizontal' : 'vertical'}
						// className={cn({
						// 	'md:row-span-2 md:col-span-1': i === 0,
						// 	'md:col-span-2': i !== 0
						// })}
					/>
				))}
			</div>
		</section>
	);
}

interface PostProps extends React.HTMLProps<HTMLDivElement> {
	orientation?: 'horizontal' | 'vertical';
	post: Post;
}
function BlogPost({ post, orientation = 'vertical', className, ...props }: PostProps) {
	return (
		<article className={cn('rounded-2xl overflow-hidden bg-slate-800/60 grid grid-cols-1', className)} {...props}>
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
						<span className="text-slate-500">{format(post.date, 'MMMM d, yyyy')}</span>
					</div>

					<h2 className="text-xl font-medium mb-auto text-slate-200">{post.title}</h2>

					<div className="space-y-3">
						<Separator orientation="horizontal" />
						<p className="text-slate-500 text-sm">{post.description}</p>
						{/* <div className="flex gap-4">
							<Image src="/timo.png" alt="" width={35} height={35} className="rounded-full" />
							<div>
								<p className="text-sm text-slate-200">Timo Wernars</p>
								<p className="text-xs text-slate-500">Frontend Developer</p>
							</div>
						</div> */}
					</div>
				</div>
			</Link>
		</article>
	);
}
