import { Badge } from '@/components/ui/badge';

type User = {
	type: 'user';
	email: string;
};

type Admin = {
	type: 'admin';
	permissions: string[];
};

export type UserProfileCardProps = {
	name: string;
} & (User | Admin);

export function UserProfileCard(props: UserProfileCardProps) {
	return (
		<div className="p-6 bg-slate-800 rounded-lg border mb-4 space-y-2 flex-1">
			<div className="flex justify-between items-center">
				<p className="text-slate-200 text-lg font-medium">{props.name}</p>
				<p className="block text-sm">{props.type}</p>
			</div>

			{props.type === 'user' && <p>{props.email}</p>}

			{props.type === 'admin' &&
				props.permissions.map((permission) => (
					<Badge key={permission} className="mr-2">
						{permission}
					</Badge>
				))}
		</div>
	);
}
