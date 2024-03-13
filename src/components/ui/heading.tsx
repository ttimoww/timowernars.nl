import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export function Heading({ as, className, children, ...props }: HeadingProps) {
	const Comp = as;
	const parsedClassName = cn(
		'font-semibold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent py-4',
		className
	);

	return (
		<Comp className={parsedClassName} {...props}>
			{children}
		</Comp>
	);
}
