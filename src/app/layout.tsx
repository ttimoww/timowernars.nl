import { Metadata } from 'next';
import { Antonio, Inter, Roboto } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { TracingBlob } from '@/components/ui/tracing-blob';
import '@/styles/globals.css';
import '@/styles/mdx.css';

const antonio = Antonio({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-antonio'
});

const roboto = Roboto({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto',
	weight: ['300', '400', '500', '700']
});

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter'
});

export const metadata: Metadata = {
	title: {
		default: 'Freelance Frontend Developer | Timo Wernars',
		template: '%s | Timo Wernars'
	},
	creator: 'Timo Wernars',
	description:
		'As a freelance Frontend Developer, I specialize in creating fast, accessible, and user-friendly websites using React, Next.js, and Tailwind CSS.',
	authors: [
		{
			name: 'Timo',
			url: 'https://twitter.com/tymo_so'
		}
	]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={cn(antonio.variable, roboto.variable, inter.variable, 'font-inter antialiased')}>
			<body>
				<Header />
				{children}
				<Footer />
				<TracingBlob />
				<div className="fixed inset-0 backdrop-blur-[10px] -z-10" />
			</body>
		</html>
	);
}
