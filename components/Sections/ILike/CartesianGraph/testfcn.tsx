import React, { useEffect, useRef } from "react";
import {
  Bounds,
  CartesianCanvas,
  FunctionPlotter,
  MathFunction,
  TangentAnimator,
} from "./FunctionPlotter";

export const TestGraph = ({ className }: { className: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const fcn: MathFunction = (x) => x * (x - 1) * (x + 1);
    const bounds: Bounds = {
      x1: -1.5,
      x2: 1.5,
      y1: -1.5,
      y2: 1.5,
    };
    const cc = new CartesianCanvas(canvasRef.current, bounds, 200);
    cc.plotFunctions.push(
      cc.plotAxis({
        lineWidth: 2,
        strokeStyle: "black",
      })
    );
    cc.plotFunctions.push(
      cc.plotFunction(fcn, {
        lineWidth: 6,
        strokeStyle: "#AC57F2",
        lineCap: "round",
      })
    );
    cc.plotFunctions.push(
      cc.plotFunctionTangents(-1.2, 1.2, 3000, 1.7, fcn, {})
    );

    requestAnimationFrame(function loop() {
      cc.draw();
      requestAnimationFrame(loop);
    });
  }, [canvasRef]);

  return <canvas ref={canvasRef} className={className}></canvas>;
};
