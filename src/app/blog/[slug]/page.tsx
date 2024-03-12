import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Post, allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';
import { Author } from '@/components/blog-page/author';
import Mdx from '@/components/ui/mdx';
import { Separator } from '@/components/ui/separator';
import '@/styles/mdx.css';

interface PostPageProps {
	params: {
		slug: string;
	};
}

/**
 * Finds a post by its slug
 * @param slug The slug of the post
 * @returns The post
 */
function findPostBySlug(slug: string): Post | undefined {
	return allPosts.find((post) => post.slug === slug);
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
	const post = findPostBySlug(params.slug);
	if (!post) return {};

	const ogUrl = 'https://tymo.so/api/og?title=' + encodeURI(post.title);
	const postUrl = 'https://tymo.so/blog/' + post.slug;

	return {
		title: post.title,
		twitter: {
			card: 'summary_large_image',
			description: post.description,
			creator: '@creator',
			images: ogUrl
		},
		openGraph: {
			title: post.title,
			description: post.description,
			type: 'article',
			url: postUrl,
			images: [
				{
					url: ogUrl,
					width: 1200,
					height: 630,
					alt: post.title
				}
			]
		}
	};
}

export async function generateStaticParams(): Promise<PostPageProps['params'][]> {
	return allPosts.map((post) => ({
		slug: post.slug
	}));
}

export default function PostPage({ params }: PostPageProps) {
	const post = findPostBySlug(params.slug);
	if (!post) notFound();

	return (
		<main className="container pt-32">
			<p className="text-sm text-zinc-500">Pusblished on {format(new Date(post.date), 'MMMM d, yyyy')}</p>
			<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent py-4">
				{post.title}
			</h1>
			<div className="flex justify-between items-end">
				<Author />
				<p className="text-sm text-zinc-500">5 minute read</p>
			</div>
			<Separator className="my-6" />
		</main>
	);

	return (
		<>
			<p className="text-sm text-secundary">Pusblished on {format(new Date(post.date), 'MMMM d, yyyy')}</p>
			{/* <Heading as="h1" className="text-5xl md:text-6xl lg:text-7xl">
				{post.title}
			</Heading> */}
			<div className="flex justify-between items-end">
				{/* <Author /> */}
				<p className="text-sm text-secundary">5 minute read</p>
			</div>
			<hr className="my-6 border-slate-200" />
			<Mdx code={post.body.code} />
		</>
	);
}
