import { cn } from '@/lib/utils';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
	type: 'success' | 'error';
	children: React.ReactNode;
}

export default function Alert({ type, children, className, ...props }: AlertProps) {
	return (
		<div
			className={cn(
				'relative w-full rounded-lg border-l-4 p-4 [&>svg~*]:pl-9 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:size-4',
				{
					'border-green-500 bg-green-800/40 text-green-50 [&>svg]:text-green-500': type === 'success',
					'border-red-500 bg-red-800/40 text-red-50 [&>svg]:text-red-400': type === 'error',
					className
				}
			)}
			{...props}
		>
			{children}
		</div>
	);
}

export interface AlertTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
	children: React.ReactNode;
}
export function AlertTitle({ children, className, ...props }: AlertTitleProps) {
	return (
		<p className={cn('mb-1 font-medium leading-none tracking-tight', className)} {...props}>
			{children}
		</p>
	);
}

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
	children: React.ReactNode;
}
export function AlertDescription({ children, className, ...props }: AlertDescriptionProps) {
	return (
		<p className={cn('text-sm [&_p]:leading-relaxed', className)} {...props}>
			{children}
		</p>
	);
}
