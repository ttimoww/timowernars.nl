import * as React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Heading } from '@/components/ui/heading';

const components = {
	h2: ({ ...props }) => (
		<Heading as="h2" className="text-4xl">
			{props.children}
		</Heading>
	),
	h3: ({ ...props }) => (
		<Heading as="h3" className="text-2xl">
			{props.children}
		</Heading>
	),
	h4: ({ ...props }) => (
		<Heading as="h4" className="text-xl">
			{props.children}
		</Heading>
	),
	h5: ({ ...props }) => (
		<Heading as="h5" className="text-xl">
			{props.children}
		</Heading>
	),
	h6: ({ ...props }) => (
		<Heading as="h6" className="text-xl">
			{props.children}
		</Heading>
	),
	p: ({ ...props }) => <p className="leading-8 mb-2 ">{props.children}</p>,
	code: ({ ...props }) => <code className="text-sm">{props.children}</code>,
	ul: ({ ...props }) => (
		<ul {...props} className="my-6 ml-6 list-disc [&>li]:mt-2">
			{props.children}
		</ul>
	),
	ol: ({ ...props }) => <ol {...props}>{props.children}</ol>,
	li: ({ ...props }) => <li {...props}>{props.children}</li>,
	img: ({ ...props }) => <img className="mx-auto" {...props} />
};

interface MdxProps {
	code: string;
}
export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return (
		<div className="mdx">
			<Component components={components} />
		</div>
	);
}
