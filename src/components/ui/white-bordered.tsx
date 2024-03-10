import { cn } from '@/lib/utils';

interface WhiteBoarderedProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}
export function WhiteBordered({ className, children, ...props }: WhiteBoarderedProps) {
	return (
		<div className={cn('border-l-[12px] pl-4 md:pl-8 border-white', className)} {...props}>
			{children}
		</div>
	);
}
