export interface Bounds {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export type MathFunction = (x: number) => number;
interface Point {
  y: number;
  x: number;
}

const linspace = (lower: number, upper: number, noPoints: number = 101) => {
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

export class FunctionPlotter {
  fcn: MathFunction;
  bounds: Bounds;

  constructor(bounds: Bounds, fcn: MathFunction) {
    this.fcn = fcn;
    this.bounds = bounds;
  }

  _getDims() {
    const width = this.bounds.x2 - this.bounds.x1;
    const height = this.bounds.y2 - this.bounds.y1;
    return {
      width,
      height,
    };
  }

  _isWithinBounds({ x, y }: Point) {
    const { x1, x2, y1, y2 } = this.bounds;
    return !(x < x1 || x > x2 || y < y1 || y > y2);
  }

  _getPoints(noPoints: number = 101): Point[] {
    const { xs } = linspace(this.bounds.x1, this.bounds.x2, noPoints);
    return xs
      .map((x) => {
        return {
          x,
          y: this.fcn(x),
        };
      })
      .filter((point) => {
        return this._isWithinBounds(point);
      });
  }
}

export class TangentAnimator {
  fcn: MathFunction;
  duration: number;
  easingFunction: typeof Easing.Cubic;
  FPS = 60;

  constructor(
    fcn: MathFunction,
    duration: number,
    easingFunction = Easing.Cubic
  ) {
    this.fcn = fcn;
    this.duration = duration;
    this.easingFunction = easingFunction;
  }

  _getXs(x1: number, x2: number, noPoints: number) {
    const { xs, delta } = linspace(0, 1, noPoints);
    const xTangents = xs
      .map((x) => this.easingFunction(x))
      .map((x) => map(x, 0, 1, x1, x2));

    const dt = delta * this.duration;

    return {
      xTangents,
      dt,
    };
  }

  _getGrad(x: number) {
    const dx = 0.01;

    const xLower = x - dx;
    const xUpper = x + dx;

    const yLower = this.fcn(xLower);
    const y = this.fcn(x);
    const yUpper = this.fcn(xUpper);

    const gradLower = (y - yLower) / dx;
    const gradUpper = (yUpper - y) / dx;
    const gradAv = (gradLower + gradUpper) / 2;

    return gradAv;
  }

  getTangentCoordinates(x1: number, x2: number, tangentLength: number = 3) {
    const noPoints = (this.duration / 1000) * this.FPS;

    const { xTangents } = this._getXs(x1, x2, noPoints);
    return xTangents.map((x) => {
      const gradAv = this._getGrad(x);
      const y = this.fcn(x);

      const dxTangent =
        tangentLength / (2 * Math.pow(1 + Math.pow(gradAv, 2), 0.5));
      const dyTangent = dxTangent * gradAv;

      const p1: Point = {
        x: x + dxTangent,
        y: y + dyTangent,
      };
      const p2: Point = {
        x: x - dxTangent,
        y: y - dyTangent,
      };

      return [p1, p2];
    });
  }
}

interface AxisFreq {
  major: number;
  minor: number;
}

interface DrawOptions {
  strokeStyle?: string | CanvasGradient | CanvasPattern;
  lineWidth?: number;
  lineCap?: "butt" | "round" | "square";
}

export class CartesianCanvas {
  canvasRef: HTMLCanvasElement;
  ctx?: CanvasRenderingContext2D;
  bounds: Bounds;
  pixelsPerUnit: number;
  axisFreq: AxisFreq;
  plotFunctions: (() => void)[] = [];

  defaultDrawOptions = {
    lineWidth: 1,
    strokeStyle: "black",
    lineCap: "round" as const,
  };

  constructor(
    canvasRef: HTMLCanvasElement,
    bounds: Bounds,
    pixelsPerUnit: number = 100,
    axisFreq: AxisFreq = {
      minor: 1,
      major: 5,
    }
  ) {
    this.canvasRef = canvasRef;
    this.bounds = bounds;
    this.axisFreq = axisFreq;
    this.pixelsPerUnit = pixelsPerUnit;

    this.canvasRef.width = this._getWidth();
    this.canvasRef.height = this._getHeight();

    const ctx = this.canvasRef.getContext("2d");
    if (ctx) this.ctx = ctx;
  }

  _applyDrawOptions(options: DrawOptions = {}) {
    if (!this.ctx) return;
    const { lineWidth, strokeStyle, lineCap } = options;
    this.ctx.lineWidth = lineWidth ?? this.defaultDrawOptions.lineWidth;
    this.ctx.strokeStyle = strokeStyle ?? this.defaultDrawOptions.strokeStyle;
    this.ctx.lineCap = lineCap ?? this.defaultDrawOptions.lineCap;
  }

  _getWidth() {
    return (this.bounds.x2 - this.bounds.x1) * this.pixelsPerUnit;
  }

  _getHeight() {
    return (this.bounds.y2 - this.bounds.y1) * this.pixelsPerUnit;
  }

  _mapPoint(point: Point) {
    const { x, y } = point;
    return {
      x: map(x, this.bounds.x1, this.bounds.x2, 0, this._getWidth()),
      y: map(y, this.bounds.y1, this.bounds.y2, 0, this._getHeight()),
    };
  }

  _mapPoints(points: Point[]) {
    return points.map((p) => this._mapPoint(p));
  }

  _plotLine(points: Point[], options: DrawOptions) {
    this._applyDrawOptions(options);
    this.ctx?.beginPath();
    const { x, y } = points[0];
    this.ctx?.moveTo(x, y);
    points.slice(1).forEach(({ x, y }) => {
      this.ctx?.lineTo(x, y);
    });
    this.ctx?.stroke();
  }

  plotMajorAxis(options: DrawOptions = {}) {
    this._applyDrawOptions(options);
    const vertical = [
      {
        x: 0,
        y: this.bounds.y1,
      },
      {
        x: 0,
        y: this.bounds.y2,
      },
    ];
    const horizontal = [
      {
        x: this.bounds.x1,
        y: 0,
      },
      {
        x: this.bounds.x2,
        y: 0,
      },
    ];

    const plotPoints = [vertical, horizontal].map((l) => this._mapPoints(l));

    return () => plotPoints.forEach((l) => this._plotLine(l, options));
  }

  plotMinorAxis(options: DrawOptions) {
    let xPoints: number[] = [];
    const xMultiple = this.axisFreq.minor;
    const yMultiple = this.axisFreq.minor;

    for (let x = xMultiple; x < this.bounds.x2; x += xMultiple) {
      xPoints.push(x);
    }
    for (let x = -xMultiple; x > this.bounds.x1; x -= xMultiple) {
      xPoints.push(x);
    }
    xPoints.sort((a, b) => a - b);

    let yPoints: number[] = [];
    for (let y = yMultiple; y < this.bounds.y2; y += yMultiple) {
      yPoints.push(y);
    }
    for (let y = -yMultiple; y > this.bounds.y1; y -= yMultiple) {
      yPoints.push(y);
    }
    yPoints.sort((a, b) => a - b);

    const horizontalMinorAxisPoints = yPoints.map((y) => [
      { x: this.bounds.x1, y },
      { x: this.bounds.x2, y },
    ]);
    const verticalMinorAxisPoints = xPoints.map((x) => [
      { x, y: this.bounds.y1 },
      { x, y: this.bounds.y2 },
    ]);

    const lines = [...horizontalMinorAxisPoints, ...verticalMinorAxisPoints];

    const plotLines = lines.map((l) => this._mapPoints(l));

    return () => plotLines.forEach((l) => this._plotLine(l, options));
  }

  plotFunction(fcn: MathFunction, options: DrawOptions = {}) {
    const mathFunct = new FunctionPlotter(this.bounds, fcn);
    const points = mathFunct._getPoints();
    const mappedPoints = this._mapPoints(points);
    return () => this._plotLine(mappedPoints, options);
  }

  plotFunctionTangents(
    x1: number,
    x2: number,
    duration: number,
    tangentLength: number,
    fcn: MathFunction,
    options: DrawOptions = {}
  ) {
    const t = new TangentAnimator(fcn, duration);
    const lines = t.getTangentCoordinates(x1, x2, tangentLength);
    const mappedLines = lines.map((line) => this._mapPoints(line));

    let i = 0;
    let iChange = () => i++;
    return () => {
      if (i === 0) iChange = () => i++;
      if (i === mappedLines.length - 1) iChange = () => i--;
      iChange();

      this._plotLine(mappedLines[i], options);
    };
  }

  private _resetCanvas() {
    this.ctx?.clearRect(0, 0, this.canvasRef.width, this.canvasRef.height);
  }

  draw() {
    this._resetCanvas();
    this.plotFunctions.forEach((p) => p());
  }
}
