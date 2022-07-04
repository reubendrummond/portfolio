import React, { useEffect, useRef } from "react";
import { Bounds, CartesianCanvas, MathFunction } from "./FunctionPlotter";

export const GraphAnimation = ({ className }: { className: string }) => {
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
      cc.plotMajorAxis({
        lineWidth: 2,
        strokeStyle: "black",
      })
    );
    cc.plotFunctions.push(
      cc.plotMinorAxis({
        lineWidth: 1,
        strokeStyle: "grey",
      })
    );

    const toHex = (cssVarName: string) => {
      const val = getComputedStyle(document.documentElement).getPropertyValue(
        cssVarName
      );
      console.log(val.split(" ").filter((s) => Boolean(s)));
      return val
        .split(" ")
        .filter((s) => Boolean(s))
        .map((rgb) => parseInt(rgb).toString(16))
        .reduce((accumulator, current) => accumulator + current, "#");
    };
    console.log(toHex("--primary"));

    cc.plotFunctions.push(
      cc.plotFunction(fcn, {
        lineWidth: 6,
        strokeStyle: toHex("--primary"),
        // strokeStyle: "#AC57F2",
        lineCap: "round",
      })
    );
    console.log(
      getComputedStyle(document.documentElement).getPropertyValue("--primary")
    );
    cc.plotFunctions.push(
      cc.plotFunctionTangents(-1.1, 1.1, 2500, 1.5, fcn, {
        lineWidth: 4,
        strokeStyle: toHex("--primary-light"),
      })
    );

    const animationFrameId = requestAnimationFrame(function loop() {
      cc.draw();
      requestAnimationFrame(loop);
    });

    return () => cancelAnimationFrame(animationFrameId);
  }, [canvasRef]);

  return <canvas ref={canvasRef} className={className}></canvas>;
};
