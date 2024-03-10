import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface GetInTouchProps extends React.HTMLAttributes<HTMLDivElement> {}
export function GetInTouch({ className, ...props }: GetInTouchProps) {
	return (
		<div
			className={cn(
				'flex items-center gap-3 text-sm bg-black/60 backdrop-blur-lg p-1.5 pl-6 rounded-full w-fit border border-slate-500 ',
				className
			)}
			{...props}
		>
			<div className="w-4 h-4 rounded-full bg-emerald-300 flex items-center justify-center animate-pulse ">
				<div className="w-1 h-1 rounded-full bg-black" />
			</div>
			<span className="mr-3">Lets get in touch.</span>
			<Button className="px-7" size="sm">
				Contact
			</Button>
		</div>
	);
}
