import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Post, allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';
import { Author } from '@/components/blog-page/author';
import { Mdx } from '@/components/ui/mdx';
import { Separator } from '@/components/ui/separator';
import { Underline } from '@/components/ui/underline';
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

	const ogUrl =
		'https://timowernars.nl/api/og?title=' +
		encodeURI(post.title) +
		'&tag=' +
		encodeURI(post.tag) +
		'&date=' +
		encodeURI(format(post.date, 'MMMM d, yyyy'));
	const postUrl = 'https://timowernars.nl/blog/' + post.slug;

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
		<div className="pt-32">
			<main className="container max-w-3xl relative">
				<p className="text-sm text-slate-500">
					<span className="text-[#FAA1D0] font-medium">{post.tag}</span> - {format(post.date, 'MMMM d, yyyy')}
				</p>
				<h1 className="text-slate-200 font-bold mt-3 mb-6 text-5xl md:text-6xl lg:text-7xl ">
					<Underline className="pb-2">{post.title}</Underline>
				</h1>
				<div className="flex justify-between items-end">
					<Author />
					<p className="text-sm text-slate-500">5 minute read</p>
				</div>
				<Separator className="my-6" />
				<Mdx code={post.body.code} />
			</main>
		</div>
	);
}

function Gradients() {
	return (
		<div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 opacity-40 ">
			<div className="blur-[100px] h-[15rem] aspect-square bg-gradient-to-br from-blue-400 to-purple-400 absolute top-0 right-0"></div>
		</div>
	);
}
