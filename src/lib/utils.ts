import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function loadGoogleFont(font: string) {
	const url = `https://fonts.googleapis.com/css2?family=${font}`;
	const css = await (await fetch(url)).text();

	const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);

	if (resource) {
		const res = await fetch(resource[1]);
		if (res.status == 200) {
			return await res.arrayBuffer();
		}
	}

	throw new Error('failed to load Google font');
}
