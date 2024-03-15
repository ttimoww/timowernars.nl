'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createNoise3D } from 'simplex-noise';
import { cn } from '@/lib/utils';

interface WavyBackgroundProps extends React.HTMLProps<HTMLDivElement> {
	children: React.ReactNode;
}

export function WavyBackground({ children, className, ...props }: WavyBackgroundProps) {
	const noise = createNoise3D();
	let w: number, h: number, nt: number, i: number, x: number, ctx: any, canvas: any;
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const init = () => {
		canvas = canvasRef.current;
		ctx = canvas.getContext('2d');
		w = ctx.canvas.width = window.innerWidth;
		h = ctx.canvas.height = window.innerHeight;
		nt = 0;

		window.onresize = function () {
			w = ctx.canvas.width = window.innerWidth;
			h = ctx.canvas.height = window.innerHeight;
		};
		render();
	};

	const waveColors = ['#38bdf8', '#818cf8', '#c084fc', '#e879f9', '#22d3ee'];
	const drawWave = (n: number) => {
		nt += 0.001;
		for (i = 0; i < n; i++) {
			ctx.beginPath();
			ctx.lineWidth = 50;
			ctx.strokeStyle = waveColors[i % waveColors.length];
			for (x = 0; x < w; x += 5) {
				var y = noise(x / 800, 0.3 * i, nt) * 100;
				ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
			}
			ctx.stroke();
			ctx.closePath();
		}
	};

	let animationId: number;
	const render = () => {
		ctx.fillStyle = '#0f172a';
		ctx.globalAlpha = 0.5;
		ctx.fillRect(0, 0, w, h);
		drawWave(5);
		animationId = requestAnimationFrame(render);
	};

	useEffect(() => {
		init();
		return () => {
			cancelAnimationFrame(animationId);
		};
	}, []);

	const [isSafari, setIsSafari] = useState(false);
	useEffect(() => {
		setIsSafari(
			typeof window !== 'undefined' &&
				navigator.userAgent.includes('Safari') &&
				!navigator.userAgent.includes('Chrome')
		);
	}, []);

	return (
		<div className={cn('h-svh flex flex-col items-center justify-center')}>
			<canvas
				className="absolute inset-0 -z-10"
				ref={canvasRef}
				id="canvas"
				style={{
					...(isSafari ? { filter: `blur(${blur}px)` } : {})
				}}
			/>
			<div className={cn('relative z-10', className)} {...props}>
				{children}
			</div>
		</div>
	);
}
