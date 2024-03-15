import * as React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';

const components = {
	h2: ({ ...props }) => <h2 className="text-2xl font-bold text-slate-200 mb-2">{props.children}</h2>,
	h3: ({ ...props }) => <h3 className="text-xl font-bold text-slate-200 mb-2">{props.children}</h3>,
	h4: ({ ...props }) => <h3 className="text-lg font-bold text-slate-200 mb-2">{props.children}</h3>,
	p: ({ ...props }) => <p className="leading-7 mb-4">{props.children}</p>,
	a: ({ ...props }) => <p className="font-medium text-slate-200 hover:text-teal-300">{props.children}</p>,
	strong: ({ ...props }) => <p className="font-medium text-slate-200 inline">{props.children}</p>,
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
