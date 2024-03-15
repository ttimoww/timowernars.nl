'use client';

import { useEffect, useRef } from 'react';

export default function TracingBlob() {
	const blobRef = useRef<HTMLDivElement>(null);

	const handlePointerMove = (e: any) => {
		const { current: blob } = blobRef;
		if (!blob) return;

		const { clientX, clientY } = e;
		blob.animate({ left: `${clientX}px`, top: `${clientY}px` }, { duration: 100, fill: 'forwards' });
	};

	useEffect(() => {
		window.addEventListener('pointermove', handlePointerMove);
		return () => window.removeEventListener('pointermove', handlePointerMove);
	}, []);

	return (
		<div className="fixed inset-0 -z-10">
			<div
				ref={blobRef}
				className="blur-[80px] bg-[#1d4ed8] animate-spin-slow w-[600px] h-[600px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 rounded-full"
			/>
		</div>
	);
}
