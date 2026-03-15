"use client";
import { useEffect, useRef } from "react";

interface Petal {
	x: number;
	y: number;
	radius: number;
	speedX: number;
	speedY: number;
	angle: number;
	rotationSpeed: number;
	chips: { x: number; y: number }[];
}

const Sakura = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const petalsRef = useRef<Petal[]>([]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resize();
		window.addEventListener("resize", resize);

		// Init petals
		const createPetals = (count: number) => {
			const petals = petalsRef.current;
			petals.length = 0;

			for (let i = 0; i < count; i++) {
				const radius = 5 + Math.random() * 5;

				petals.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					radius,
					speedX: (-0.2 + Math.random() * 0.4) * 0.5,
					speedY: (0.3 + Math.random() * 0.8) * 0.6,
					angle: Math.random() * 360,
					rotationSpeed: (-0.003 + Math.random() * 0.006),
					chips: Array.from({ length: 4 }, () => ({
						x: (Math.random() - 0.5) * radius,
						y: (Math.random() - 0.5) * radius,
					})),
				});
			}
		};

		createPetals(40);

		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (const petal of petalsRef.current) {
				ctx.save();
				ctx.translate(petal.x, petal.y);
				ctx.rotate((petal.angle * Math.PI) / 180);

				ctx.beginPath();
				ctx.arc(0, 0, petal.radius, 0, Math.PI * 2);
				ctx.fillStyle = "#d2a679";
				ctx.fill();

				ctx.fillStyle = "#5c4033";
				for (const chip of petal.chips) {
					ctx.beginPath();
					ctx.arc(chip.x, chip.y, petal.radius * 0.15, 0, Math.PI * 2);
					ctx.fill();
				}

				ctx.restore();

				petal.x += petal.speedX;
				petal.y += petal.speedY;
				petal.angle += petal.rotationSpeed;

				if (
					petal.y > canvas.height + 10 ||
					petal.x < -10 ||
					petal.x > canvas.width + 10
				) {
					petal.x = Math.random() * canvas.width;
					petal.y = -10;
				}
			}

			requestAnimationFrame(draw);
		};

		const animationId = requestAnimationFrame(draw);

		return () => {
			window.removeEventListener("resize", resize);
			cancelAnimationFrame(animationId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
		/>
	);
};

export default Sakura;
