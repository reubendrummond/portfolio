export type MathFunction = (x: number) => number;
type Point = { x: number; y: number };

// const map = (val: number, b1: number, b2: number, t1: number, t2: number) => {
//   return t1 + ((t2 - t1) / (b2 - b1)) * (val - b1);
// };

export const linspace = (t1: number, t2: number, noPoints: number) => {
  const step = (t2 - t1) / (noPoints - 1);
  const ts = Array(noPoints)
    .fill(0)
    .map((_, index) => {
      return t1 + index * step;
    });
  return { ts, step };
};

const appendChildren = (
  parent: HTMLElement | SVGElement,
  children: (HTMLElement | SVGElement)[]
) => {
  children.forEach((child) => {
    parent.appendChild(child);
  });
};

const createNameSpaceElement = (tagName: string) => {
  const element = document.createElementNS(
    "http://www.w3.org/2000/svg",
    tagName
  );
  return element;
};

const createNameSpaceElementWithAttributes = (
  tagName: string,
  attributes: object
) => {
  const element = createNameSpaceElement(tagName);
  setAttributes(element, attributes);
  return element;
};

const setAttributes = (element: SVGElement, attributes: object = {}) => {
  for (const [attribute, value] of Object.entries(attributes)) {
    element.setAttribute(attribute, value);
  }
};

export class PlotterSVG {
  x1: number;
  x2: number;
  y1: number;
  y2: number;

  width: number;
  height: number;

  svgEl?: SVGElement;
  plotsEl?: SVGElement;

  constructor(x1: number, x2: number, y1: number, y2: number) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;

    this.width = Math.abs(x2 - x1);
    this.height = Math.abs(y2 - y1);
  }

  _getMathFunctionPoints(mathFunction: MathFunction, noPoints: number) {
    // const [xs, step] = linspace(this.x1, this.x2, noPoints);
    const { ts: xs } = linspace(this.x1, this.x2, noPoints);
    const points = xs
      .map((x) => {
        return {
          x: x,
          y: mathFunction(x),
        };
      })
      .filter(({ x, y }) => {
        return !(y < this.y1 || y > this.y2);
      });

    return points;
  }

  _getTangents(points: Point[], tangentLength: number) {
    const tangentPoints = [];
    for (var i = 1; i < points.length - 1; i++) {
      const prevPoint = points[i - 1];
      const thisPoint = points[i];
      const nextPoint = points[i + 1];

      const dy1 = (thisPoint.y - prevPoint.y) / (thisPoint.x - prevPoint.x);
      const dy2 = (nextPoint.y - thisPoint.y) / (nextPoint.x - thisPoint.x);
      const avTangent = (dy1 + dy2) / 2;

      const dxTangent =
        tangentLength / (2 * Math.pow(1 + Math.pow(avTangent, 2), 0.5));
      const dyTangent = dxTangent * avTangent;

      const tangentPoint1 = {
        x: thisPoint.x + dxTangent,
        y: thisPoint.y + dyTangent,
      };
      const tangentPoint2 = {
        x: thisPoint.x - dxTangent,
        y: thisPoint.y - dyTangent,
      };

      tangentPoints.push([tangentPoint1, tangentPoint2]);
    }
    return tangentPoints;
  }

  _getMajorAxis() {
    const xAxis = [
      { x: this.x1, y: 0 },
      { x: this.x2, y: 0 },
    ];
    const yAxis = [
      { x: 0, y: this.y1 },
      { x: 0, y: this.y2 },
    ];
    return [xAxis, yAxis];
  }

  _getMinorAxis(xMultiple: number, yMultiple: number) {
    var xPoints = [];
    for (let x = xMultiple; x < this.x2; x += xMultiple) {
      xPoints.push(x);
    }
    for (let x = -xMultiple; x > this.x1; x -= xMultiple) {
      xPoints.push(x);
    }
    xPoints.sort((a, b) => a - b);

    var yPoints = [];
    for (let y = yMultiple; y < this.y2; y += yMultiple) {
      yPoints.push(y);
    }
    for (let y = -yMultiple; y > this.y1; y -= yMultiple) {
      yPoints.push(y);
    }
    yPoints.sort((a, b) => a - b);

    const horizontalMinorAxisPoints = yPoints.map((y) => [
      { x: this.x1, y },
      { x: this.x2, y },
    ]);
    const verticalMinorAxisPoints = xPoints.map((x) => [
      { x, y: this.y1 },
      { x, y: this.y2 },
    ]);

    return [...horizontalMinorAxisPoints, ...verticalMinorAxisPoints];
  }

  _mapPoints(points: Point[]) {
    return points.map(({ x, y }) => {
      return {
        x: x - this.x1,
        y: this.y2 - y,
      };
    });
  }

  _mapPointsArray(pointsArray: Point[][]) {
    return pointsArray.map((points) => {
      return this._mapPoints(points);
    });
  }

  _getPath(points: Point[]) {
    const path = this._getLinePath(points);
    const pathEl = createNameSpaceElementWithAttributes("path", {
      d: path,
    });
    return pathEl;
  }

  _getPaths(pointsArray: Point[][]) {
    return pointsArray.map((points) => {
      return this._getPath(points);
    });
  }

  _getTangentPaths(pointsArray: Point[][]) {
    return pointsArray.map((points) => {
      return this._getLinePath(points);
    });
  }

  _addPath(parent: SVGElement, points: Point[]) {
    const pathEl = this._getPath(points);
    parent.appendChild(pathEl);
  }

  _addPaths(parent: SVGElement, pointsArray: Point[][]) {
    pointsArray.forEach((points) => {
      this._addPath(parent, points);
    });
  }

  generateSVG() {
    const minorAxisMultiple = 1;

    const majorAxis = this._getMajorAxis();
    const minorAxis = this._getMinorAxis(minorAxisMultiple, minorAxisMultiple);

    const majorAxisMapped = this._mapPointsArray(majorAxis);
    const minorAxisMapped = this._mapPointsArray(minorAxis);

    const { svgEl, plotGroupEl, majorAxisGroupEl, minorAxisGroupEl } =
      this._getSVG();
    this.svgEl = svgEl;
    this.plotsEl = plotGroupEl;
    this._addPaths(majorAxisGroupEl, majorAxisMapped);
    this._addPaths(minorAxisGroupEl, minorAxisMapped);

    return svgEl;
  }

  _returnUpdateTangentFunction(
    pathElement: SVGElement,
    tangentPaths: string[]
  ) {
    const maxIndex = tangentPaths.length - 1;
    const updateTangent = (index: number) => {
      pathElement.setAttribute("d", tangentPaths[index]);
    };

    return {
      updateTangent,
      maxIndex,
    };
  }

  plotWithTangents(
    mathFunction: MathFunction,
    noPoints: number = 101,
    xBuffer: number = 0
  ) {
    const functionPoints = this._getMathFunctionPoints(mathFunction, noPoints);

    const xMax = functionPoints[functionPoints.length - 1].x;
    const xMin = functionPoints[0].x;
    const tangentPoints = xBuffer
      ? functionPoints.filter(({ x }) => {
          return x >= xMin + xBuffer && x < xMax - xBuffer;
        })
      : functionPoints;

    const tangents = this._getTangents(tangentPoints, 1.5);

    const functionMappedPoints = this._mapPoints(functionPoints);
    const tangentsMapped = this._mapPointsArray(tangents);

    const functionGroupAttributes = {
      id: "plots",
      stroke: "#AC57F2",
      fill: "none",
      "stroke-width": "0.9%", // percentage depends on the diagonal length of viewbox
      "stroke-opacity": 0.9,
      "stroke-linecap": "round",
    };
    const tangentPlotAttributes = {
      id: "tangent",
      stroke: "#818CF8",
      fill: "none",
      "stroke-width": "0.7%",
      "stroke-opacity": 0.9,
      "stroke-linecap": "round",
    };

    const functionGroupEl = createNameSpaceElementWithAttributes(
      "g",
      functionGroupAttributes
    );
    this._addPath(functionGroupEl, functionMappedPoints);
    const tangentPathEl = createNameSpaceElementWithAttributes(
      "path",
      tangentPlotAttributes
    );

    const tangentPaths = this._getTangentPaths(tangentsMapped);
    functionGroupEl.appendChild(tangentPathEl);
    const tangentUpdater = this._returnUpdateTangentFunction(
      tangentPathEl,
      tangentPaths
    );

    this.plotsEl?.appendChild(functionGroupEl);

    return tangentUpdater;
  }

  _getLinePath(points: Point[]) {
    const path =
      "M " +
      points
        .map(({ x, y }) => {
          return `${x} ${y}`;
        })
        .join(" L ");

    return path;
  }

  _getSVG() {
    const svgAttributes = {
      viewBox: `0 0 ${this.width} ${this.height}`,
      width: "400",
      preserveAspectRatio: "xMidYMid meet",
    };

    // const mainPathAttributes = {
    //   id: "plots",
    //   stroke: "#c74440",
    //   fill: "none",
    //   "stroke-width": "0.7%", // percentage depends on the diagonal length of viewbox
    //   "stroke-opacity": 0.9,
    //   "stroke-linecap": "round",
    // };

    const axisGroupAttributes = {
      id: "axis",
    };
    const majorAxisAttributes = {
      id: "major",
      stroke: "black",
      fill: "none",
      "stroke-width": "0.4%",
      "stroke-opacity": 1,
    };
    const minorAxisAttributes = {
      id: "minor",
      stroke: "gray",
      fill: "none",
      "stroke-width": "0.2%",
      "stroke-opacity": 1,
    };

    const svgEl = createNameSpaceElementWithAttributes("svg", svgAttributes);

    const plotGroupEl = createNameSpaceElementWithAttributes("g", {});

    // const mainPathEl = createNameSpaceElementWithAttributes(
    //   "path",
    //   mainPathAttributes
    // );
    // const mainPlotsEl = createNameSpaceElementWithAttributes(
    //   "path",
    //   mainPathAttributes
    // );
    // const tangentPlotsEl = createNameSpaceElementWithAttributes(
    //   "path",
    //   tangentPathAttributes
    // );
    // appendChildren(plotGroupEl, [mainPathEl, tangentPathEl]);

    const axisGroupEl = createNameSpaceElementWithAttributes(
      "g",
      axisGroupAttributes
    );
    const majorAxisGroupEl = createNameSpaceElementWithAttributes(
      "g",
      majorAxisAttributes
    );
    const minorAxisGroupEl = createNameSpaceElementWithAttributes(
      "g",
      minorAxisAttributes
    );
    appendChildren(axisGroupEl, [majorAxisGroupEl, minorAxisGroupEl]);
    appendChildren(svgEl, [axisGroupEl, plotGroupEl]);

    return { svgEl, plotGroupEl, majorAxisGroupEl, minorAxisGroupEl };
  }
}
