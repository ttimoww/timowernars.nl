import React from 'react';
import Link from 'next/link';
import { Post, allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Underline } from '@/components/ui/underline';

export function BlogPosts() {
	return (
		<section className="container">
			<h2 className="text-slate-200 text-4xl md:text-6xl font-bold relative w-fit mb-8">
				I write, <Underline className="pb-4">sometimes</Underline>
			</h2>
			<div className="grid md:grid-cols-2 gap-8">
				{allPosts.map((post, i) => (
					<BlogPost key={i} post={post} />
				))}
			</div>
		</section>
	);
}

interface PostProps extends React.HTMLProps<HTMLDivElement> {
	post: Post;
}
function BlogPost({ post, className, ...props }: PostProps) {
	return (
		<article>
			<h2 className="text-xl font-medium mb-auto text-slate-200">{post.title}</h2>
			<p className="p text-sm mb-2 leading-7">
				<span className="text-[#FAA1D0] font-medium">Next.js</span> - {format(post.date, 'MMMM d, yyyy')}
			</p>
			<p>{post.description}</p>
			<Link className="text-[#FAA1D0] text-sm" href={`/blog/${post.slug}`}>
				Read more <ChevronRight className="inline size-3" />
			</Link>
		</article>
	);

	return (
		<article className={cn('rounded-lg overflow-hidden bg-slate-800/60 grid grid-cols-1', className)} {...props}>
			<Link href={`/blog/${post.slug}`}>
				<div className="p-6 gap-3 flex flex-col h-full">
					<div className="flex gap-4 h-5 text-sm">
						<Badge variant="secondary">Next.js</Badge>
						<Separator orientation="vertical" />
						<span className="text-slate-500">{format(post.date, 'MMMM d, yyyy')}</span>
					</div>

					<h2 className="text-xl font-medium mb-auto text-slate-200">{post.title}</h2>

					<div className="flex-1 flex flex-col gap-3">
						<Separator orientation="horizontal" />
						<p className="text-slate-500 text-sm">{post.description}</p>
						{/* <div className="flex gap-4">
							<Image src="/timo.png" alt="" width={35} height={35} className="rounded-full" />
							<div>
							<p className="text-sm text-slate-200">Timo Wernars</p>
							<p className="text-xs text-slate-500">Frontend Developer</p>
							</div>
						</div> */}
						<Button variant="outline" className="ml-auto mt-auto block">
							Read more
						</Button>
					</div>
				</div>
			</Link>
		</article>
	);
}
