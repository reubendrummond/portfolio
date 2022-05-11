import React, { createContext, FC, useEffect, useRef } from "react";

interface TimerProps {
  duration?: number;
  size?: number;
  fill?: string;
  onTimeout?: Function;
  className?: string;
}

export const Timer: FC<TimerProps> = ({
  duration = 5000,
  size = 64,
  fill,
  onTimeout,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawArc = (canvas: HTMLCanvasElement, t: number) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.strokeStyle = fill || "white";
    const lineWidth = size / 9;
    ctx.lineWidth = lineWidth;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(
      size / 2,
      size / 2,
      size / 2 - lineWidth / 2,
      -Math.PI / 2 + 2 * Math.PI * t,
      Math.PI * (3 / 2),
      false
    );
    ctx.stroke();
  };

  const update = async (
    canvas: HTMLCanvasElement,
    t: number,
    durationPerUpdate: number,
    dt: number
  ) => {
    if (!canvasRef.current) return; // if the timer is no longer rendered: stop
    await new Promise((res) => setTimeout(res, durationPerUpdate));
    if (t < 1) {
      drawArc(canvas, t);
      update(canvas, t + dt, durationPerUpdate, dt);
    } else {
      drawArc(canvas, 1);
      onTimeout && onTimeout();
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    let t = 0;
    const durationPerUpdate = 10;
    const dt = durationPerUpdate / duration;

    update(canvasRef.current, 0, durationPerUpdate, dt);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={className}
    ></canvas>
  );
};
