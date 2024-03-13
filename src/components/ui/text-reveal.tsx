'use client';

import React, { useEffect, useRef, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextRevealProps extends React.HTMLProps<HTMLDivElement> {
	text: string;
	revealText: string;
}
export function TextReveal({ text, revealText, className, ...props }: TextRevealProps) {
	const containerRef = useRef<HTMLDivElement | any>(null);

	const [widthPercentage, setWidthPercentage] = useState(0);
	const [left, setLeft] = useState(0);
	const [localWidth, setLocalWidth] = useState(0);
	const [isMouseOver, setIsMouseOver] = useState(false);

	useEffect(() => {
		if (containerRef.current) {
			const { left, width: localWidth } = containerRef.current.getBoundingClientRect();
			setLeft(left);
			setLocalWidth(localWidth);
		}
	}, []);

	function mouseMoveHandler(event: any) {
		event.preventDefault();

		const { clientX } = event;
		if (containerRef.current) {
			const relativeX = clientX - left;
			setWidthPercentage((relativeX / localWidth) * 100);
		}
	}

	function mouseLeaveHandler() {
		setIsMouseOver(false);
		setWidthPercentage(0);
	}
	function mouseEnterHandler() {
		setIsMouseOver(true);
	}

	const rotateDeg = (widthPercentage - 50) * 0.1;

	return (
		<div
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
			onMouseMove={mouseMoveHandler}
			ref={containerRef}
			className={cn('w-fit pr-10 relative overflow-hidden', className)}
			{...props}
		>
			<div className="relative flex items-center overflow-hidden">
				<motion.div
					style={{ width: '100%' }}
					animate={
						isMouseOver
							? {
									opacity: widthPercentage > 0 ? 1 : 0,
									clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`
							  }
							: {
									clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`
							  }
					}
					transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
					className="absolute bg-[#070b17] z-20  will-change-transform"
				>
					<p
						style={{ textShadow: '4px 4px 15px rgba(0,0,0,0.5)' }}
						className="text-[2rem] sm:text-[3rem] py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300"
					>
						{revealText}
					</p>
				</motion.div>

				<motion.div
					animate={{
						left: `${widthPercentage}%`,
						rotate: `${rotateDeg}deg`,
						opacity: widthPercentage > 0 ? 1 : 0
					}}
					transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
					className="h-full w-[8px] bg-gradient-to-b from-transparent via-neutral-600 to-transparent absolute z-50 will-change-transform"
				/>

				<div className="overflow-hidden w-full [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
					<p className="text-[2rem] sm:text-[3rem] py-5 font-bold bg-clip-text text-transparent bg-[#7e7e89]">
						{text}
					</p>
					<MemoizedStars />
				</div>
			</div>
		</div>
	);
}

function Stars() {
	const randomMove = () => Math.random() * 4 - 2;
	const randomOpacity = () => Math.random();
	const random = () => Math.random();

	return (
		<div className="absolute inset-0">
			{[...Array(140)].map((_, i) => (
				<motion.span
					key={`star-${i}`}
					animate={{
						top: `calc(${random() * 100}% + ${randomMove()}px)`,
						left: `calc(${random() * 100}% + ${randomMove()}px)`,
						opacity: randomOpacity(),
						scale: [1, 1.2, 0]
					}}
					transition={{
						duration: random() * 10 + 20,
						repeat: Infinity,
						ease: 'linear'
					}}
					style={{
						position: 'absolute',
						top: `${random() * 100}%`,
						left: `${random() * 100}%`,
						width: `2px`,
						height: `2px`,
						backgroundColor: 'white',
						borderRadius: '50%',
						zIndex: 1
					}}
					className="inline-block"
				/>
			))}
		</div>
	);
}

export const MemoizedStars = memo(Stars);
