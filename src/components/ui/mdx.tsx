import * as React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';

const components = {
	code: ({ ...props }) => <code className="text-sm">{props.children}</code>,
	p: ({ ...props }) => <p className="leading-8 mb-2">{props.children}</p>,
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
export default function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return (
		<div className="mdx">
			<Component components={components} />
		</div>
	);
}
