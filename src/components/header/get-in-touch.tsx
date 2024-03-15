import * as React from 'react';
import { cn } from '@/lib/utils';
import { ContactInfo } from '@/components/header/contact-info';

interface GetInTouchProps extends React.HTMLAttributes<HTMLDivElement> {}
export function GetInTouch({ className, ...props }: GetInTouchProps) {
	return (
		<div
			className={cn(
				'flex items-center gap-3 bg-black/60 backdrop-blur-lg p-1.5 pl-6 rounded-full w-fit border border-border',
				className
			)}
			{...props}
		>
			<div className="w-4 h-4 rounded-full bg-emerald-300 flex items-center justify-center animate-pulse ">
				<div className="w-1 h-1 rounded-full bg-black" />
			</div>
			<span className="text-sm text-white mr-3 hidden md:block">Lets get in touch</span>
			<span className="text-sm text-white md:hidden">Get in touch</span>
			<ContactInfo />
		</div>
	);
}
