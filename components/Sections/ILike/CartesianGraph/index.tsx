import React, { createRef, useCallback, useEffect, useState } from "react";
import { PlotterSVG, MathFunction, linspace } from "./PlotterSVG";

export const CartesianGraph = ({ className }: { className?: string }) => {
  const divRef = createRef<HTMLDivElement>();

  const getIndexes = (timeEachWay: number, maxIndex: number) => {
    // timing function: https://www.desmos.com/calculator/x8dg36u9kq
    const fcn = (t: number) =>
      (maxIndex / timeEachWay) * t -
      (maxIndex / (2 * Math.PI)) * Math.sin(((2 * Math.PI) / timeEachWay) * t);

    const { ts, step } = linspace(0, timeEachWay, 500);
    const indexes = ts.map((t) => Math.round(fcn(t)));
    return { indexes, step };
  };

  const loop = useCallback(
    async (
      times: number[],
      step: number,
      updateTangent: (index: number) => void
    ) => {
      await go("forward", times, step, updateTangent);
      await go("back", times, step, updateTangent);
      loop(times, step, updateTangent);
    },
    []
  );

  const go = async (
    direction: "forward" | "back",
    indexes: number[],
    step: number,
    updateTangent: (index: number) => void
  ) => {
    for (let i = 0; i < indexes.length; i++) {
      switch (direction) {
        case "forward":
          updateTangent(indexes[i]);
          break;
        case "back":
          updateTangent(indexes[indexes.length - 1 - i]);
          break;
      }
      await new Promise((res) => setTimeout(res, step));
    }
    return;
  };

  useEffect(() => {
    let fcn: MathFunction = (x) => -x * (x - 1) * (x + 1);
    const P = new PlotterSVG(-1.5, 1.5, -1, 1);
    const svgEl = P.generateSVG();
    svgEl.style.width = "100%";
    svgEl.style.height = "100%";

    const { updateTangent, maxIndex } = P.plotWithTangents(fcn, 500, 0.3);

    // add DOM element to wrapper div
    while (divRef.current?.firstChild)
      divRef.current.removeChild(divRef.current.firstChild);
    divRef.current?.appendChild(svgEl);

    // for tangent animation
    const { indexes, step } = getIndexes(2000, maxIndex);
    loop(indexes, step, updateTangent);
  }, [divRef, loop]);

  return (
    <>
      <div ref={divRef} className={className}></div>
    </>
  );
};
