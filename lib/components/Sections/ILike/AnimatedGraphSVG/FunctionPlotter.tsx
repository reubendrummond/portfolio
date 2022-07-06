import { useEffect, useRef } from "react";
import { FC } from "react";

export interface Bounds {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export type MathFunction = (x: number) => number;
export interface Point {
  y: number;
  x: number;
}

export const linspace = (
  lower: number,
  upper: number,
  noPoints: number = 101
) => {
  const delta = (upper - lower) / (Math.round(noPoints) - 1);
  const xs = Array(noPoints)
    .fill(0)
    .map((_, index) => {
      return lower + index * delta;
    });
  return {
    xs,
    delta,
  };
};

const map = (val: number, b1: number, b2: number, t1: number, t2: number) => {
  return t1 + ((t2 - t1) / (b2 - b1)) * (val - b1);
};

export class Easing {
  // https://easings.net/#easeInOutCubic
  static Cubic(x: number) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }
}

export class TangentAnimator {
  easingFunction: typeof Easing.Cubic;
  FPS: number;

  constructor(easingFunction = Easing.Cubic, FPS: number = 60) {
    this.easingFunction = easingFunction;
    this.FPS = FPS;
  }

  _getXs(x1: number, x2: number, noPoints: number, duration: number) {
    const { xs, delta } = linspace(0, 1, noPoints);
    const xTangents = xs
      .map((x) => this.easingFunction(x))
      .map((x) => map(x, 0, 1, x1, x2));

    const dt = delta * duration;

    return {
      xTangents,
      dt,
    };
  }

  _getGrad(x: number, fcn: MathFunction) {
    const dx = 0.01;

    const xLower = x - dx;
    const xUpper = x + dx;

    const yLower = fcn(xLower);
    const y = fcn(x);
    const yUpper = fcn(xUpper);

    const gradLower = (y - yLower) / dx;
    const gradUpper = (yUpper - y) / dx;
    const gradAv = (gradLower + gradUpper) / 2;

    return { gradAv, y };
  }

  getTangentCoordinates(
    x1: number,
    x2: number,
    fcn: MathFunction,
    duration: number,
    tangentLength: number = 3
  ) {
    const noPoints = (duration / 1000) * this.FPS;

    const { xTangents, dt } = this._getXs(x1, x2, noPoints, duration);
    const points = xTangents.map((x) => {
      const { gradAv, y } = this._getGrad(x, fcn);

      const dxTangent =
        tangentLength / (2 * Math.pow(1 + Math.pow(gradAv, 2), 0.5));
      const dyTangent = dxTangent * gradAv;

      const dps = 5;
      const p1: Point = {
        x: +(x + dxTangent).toFixed(dps),
        y: +(y + dyTangent).toFixed(dps),
      };
      const p2: Point = {
        x: +(x - dxTangent).toFixed(dps),
        y: +(y - dyTangent).toFixed(dps),
      };

      return [p1, p2];
    });
    return {
      points,
      dt,
    };
  }
}

interface AxisFreq {
  major: number;
  minor: number;
}

interface AnimatedTangentPlot {
  mathFunction: MathFunction;
  tangentBounds?: {
    x1: number;
    x2: number;
  };
  plotClass: string;
  tangentClass: string;
}

interface CartesianGraphProps {
  axisFreq: AxisFreq;
  bounds: Bounds;
  plots?: AnimatedTangentPlot[];
  className?: string;
}

export const CartesianGraph: FC<CartesianGraphProps> = ({
  axisFreq,
  bounds,
  className,
  plots,
}) => {
  const width = bounds.x2 - bounds.x1;
  const height = bounds.y2 - bounds.y1;

  // const mapPoint = (point: Point) => {
  //   const { x, y } = point;
  //   return {
  //     x: map(x, bounds.x1, bounds.x2, 0, width),
  //     y: map(y, bounds.y1, bounds.y2, 0, height),
  //   };
  // };

  // const mapPoints = (points: Point[]) => {
  //   return points.map((p) => mapPoint(p));
  // };

  // general
  const pointsToSVGLine = (points: Point[]) => {
    if (!points.length) throw Error("Points array must have points in it");
    // const mappedPoints = mapPoints(points);
    let svgLineString = `M ${points[0].x} ${points[0].y}`;
    return points.slice(1).reduce((prev, { x, y }) => {
      return prev + ` L ${x} ${y}`;
    }, svgLineString);
  };

  // axis
  const getAxisPoints = (
    freqency: number,
    axisType: "minor" | "major"
  ): Point[][] => {
    let xs: number[] = [];
    let ys: number[] = [];
    for (let x = -freqency; x > bounds.x1; x -= freqency) {
      xs.push(x);
    }
    for (let x = freqency; x < bounds.x2; x += freqency) {
      xs.push(x);
    }
    for (let y = -freqency; y > bounds.y1; y -= freqency) {
      ys.push(y);
    }
    for (let y = freqency; y < bounds.y2; y += freqency) {
      ys.push(y);
    }
    if (axisType === "major") {
      xs.push(0);
      ys.push(0);
    }
    const verticalPoints: Point[][] = xs.map((x) => {
      return [
        {
          x,
          y: bounds.y1,
        },
        {
          x,
          y: bounds.y2,
        },
      ];
    });
    const horizontalPoints: Point[][] = ys.map((y) => {
      return [
        {
          x: bounds.x1,
          y,
        },
        {
          x: bounds.x2,
          y,
        },
      ];
    });
    return [...horizontalPoints, ...verticalPoints];
  };

  const getAxisPaths = (axisPoints: Point[][]) => {
    return axisPoints.map((points) => pointsToSVGLine(points));
  };

  // function
  const getFunctionPoints = (mathFunction: MathFunction) => {
    const { xs, delta } = linspace(bounds.x1, bounds.x2, 101);
    let points: Point[] = xs.map((x) => {
      return { x, y: mathFunction(x) };
    });
    points = points.filter(({ x, y }) => y <= bounds.y2 || y >= bounds.y1);
    return points;
  };

  const majorAxisPoints = getAxisPoints(axisFreq.major, "major");
  const minorAxisPoints = getAxisPoints(axisFreq.minor, "minor");
  const majorAxisPaths = getAxisPaths(majorAxisPoints);
  const minorAxisPaths = getAxisPaths(minorAxisPoints);

  const plotsPoints = (plots || []).map(({ mathFunction }) => {
    return getFunctionPoints(mathFunction);
  });
  const plotPaths = plotsPoints.map((points) => pointsToSVGLine(points));

  const ta = new TangentAnimator(Easing.Cubic, 120);
  const tangentPaths = (plots || []).map(({ tangentBounds, mathFunction }) => {
    const duration = 3000;
    const { points: tangentPoints, dt } = ta.getTangentCoordinates(
      tangentBounds?.x1 || bounds.x1,
      tangentBounds?.x2 || bounds.x2,
      mathFunction,
      duration,
      1.5
    );
    const tangentPaths = tangentPoints.map((ps) => {
      return pointsToSVGLine(ps);
    });
    return {
      dt,
      paths: tangentPaths,
    };
  });

  return (
    <svg
      className={className}
      viewBox={`${bounds.x1} ${bounds.y1} ${width} ${height}`}
    >
      <g className="stroke-gray-300 dark:stroke-gray-700" strokeWidth={"0.3%"}>
        {minorAxisPaths.map((path, index) => (
          <path key={index} d={path} />
        ))}
      </g>
      <g className="stroke-gray-700 dark:stroke-gray-300" strokeWidth={"0.4%"}>
        {majorAxisPaths.map((path, index) => (
          <path key={index} d={path} />
        ))}
      </g>
      {tangentPaths.map((tangentPath, index) => {
        return (
          <g key={index}>
            <Tangent tangentPath={tangentPath} />
          </g>
        );
      })}
      {plotPaths.map((plotPath, index) => (
        <g key={index} fill="none">
          <path d={plotPath} className="stroke-primary" strokeWidth={"0.7%"} />
        </g>
      ))}
    </svg>
  );
};

const Tangent = ({
  tangentPath,
}: {
  tangentPath: { dt: number; paths: string[] };
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const { paths, dt } = tangentPath;
  const i = useRef(0);
  const incRef = useRef(1);
  const max = paths.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      i.current += incRef.current;
      if (i.current === max) incRef.current = -1;
      if (i.current === 0) incRef.current = 1;

      pathRef.current?.setAttribute("d", paths[i.current]);
    }, dt);

    return () => clearInterval(interval);
  }, [paths, dt, max]);

  return (
    <path
      className="stroke-primary-light"
      fill="none"
      strokeWidth={"0.4%"}
      ref={pathRef}
    />
  );
};
