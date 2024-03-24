import * as React from 'react';
import { AlertTriangleIcon, CakeIcon, InfoIcon } from 'lucide-react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Alert, {
	AlertProps,
	AlertTitleProps,
	AlertTitle,
	AlertDescriptionProps,
	AlertDescription
} from '@/components/blog/alert';

const components = {
	h2: ({ ...props }) => <h2 className="text-2xl font-bold text-slate-200 mb-2">{props.children}</h2>,
	h3: ({ ...props }) => <h3 className="text-xl font-bold text-slate-200 mb-2">{props.children}</h3>,
	h4: ({ ...props }) => <h3 className="text-lg font-bold text-slate-200 mb-2">{props.children}</h3>,
	p: ({ ...props }) => <p className="leading-8 mb-4">{props.children}</p>,
	a: ({ ...props }) => (
		<a href={props.href} className="text-[#FAA1D0] inline">
			{props.children}
		</a>
	),
	strong: ({ ...props }) => <p className="text-slate-200 inline">{props.children}</p>,
	code: ({ ...props }) => <code className="text-sm">{props.children}</code>,
	ul: ({ ...props }) => (
		<ul {...props} className="my-6 ml-6 list-disc [&>li]:mt-2">
			{props.children}
		</ul>
	),
	ol: ({ ...props }) => <ol {...props}>{props.children}</ol>,
	li: ({ ...props }) => <li {...props}>{props.children}</li>,
	img: ({ ...props }) => <img className="mx-auto" {...props} />,
	Alert: ({ ...props }: AlertProps) => <Alert {...props} />,
	AlertTitle: ({ ...props }: AlertTitleProps) => <AlertTitle {...props} />,
	AlertDescription: ({ ...props }: AlertDescriptionProps) => <AlertDescription {...props} />,
	InformationCircleIcon: ({ ...props }) => <InfoIcon className="w-5 h-5" {...props} />,
	ExclamationTriangleIcon: ({ ...props }) => <AlertTriangleIcon className="w-5 h-5" {...props} />,
	CakeIcon: ({ ...props }) => <CakeIcon className="w-5 h-5" {...props} />
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
