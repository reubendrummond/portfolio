import { Point } from "./CartesianGraph/FunctionPlotter";
import { linspace } from "./CartesianGraph/FunctionPlotter";

interface ComplexNumber {
  re: number;
  im: number;
  k: number;
}

export class Fourier {
  points: Point[];

  constructor(points: Point[]) {
    this.points = points;
  }

  private getComplexNumbers() {
    const N = this.points.length;
    const complexNumbers: ComplexNumber[] = [];

    const bound = Math.round(N / 2);
    for (let k = -bound; k < bound; k++) {
      let re = 0;
      let im = 0;
      for (let n = 0; n < N; n++) {
        const theta = (-(2 * Math.PI) / N) * k * n;
        const { x, y } = this.points[n];
        re += x * Math.cos(theta) + y * Math.sin(theta);
        im += y * Math.cos(theta) - x * Math.sin(theta);
      }
      re *= Math.pow(N, -1);
      im *= Math.pow(N, -1);

      complexNumbers.push({
        re,
        im,
        k,
      });
    }
    return complexNumbers;
  }

  private getMagFreqs(complexNumbers: ComplexNumber[]) {
    return complexNumbers.map(({ re, im, k }) => {
      const mag = Math.sqrt(re ** 2 + im ** 2);
      const theta = Math.atan2(im, re);
      return {
        mag,
        theta,
        k,
      };
    });
  }

  getFunctions(noFcns: number) {
    const complexNumbers = this.getComplexNumbers();
    const magFreqs = this.getMagFreqs(complexNumbers);

    magFreqs.sort((a, b) => {
      return b.mag - a.mag;
    });

    const functions = magFreqs.map(({ mag, theta, k }, index) => {
      return {
        xFunct: (t: number) => mag * Math.cos(k * t + theta),
        yFunct: (t: number) => mag * Math.sin(k * t + theta),
      };
    });

    const fcn = (t: number) => {
      let x = 0;
      let y = 0;

      const maxIndex = noFcns < functions.length ? noFcns : functions.length;

      for (let i = 0; i < maxIndex; i++) {
        const { xFunct, yFunct } = functions[i];
        x += xFunct(t);
        y += yFunct(t);
      }

      return {
        x,
        y,
      };
    };

    return fcn;
  }

  getPoints(noFcns: number, noPoints: number) {
    const fcn = this.getFunctions(noFcns);
    const { xs: ts } = linspace(0, 2 * Math.PI, noPoints);

    const fcnPoints = ts.map((t: number) => {
      return fcn(t);
    });

    return fcnPoints;
  }

  //   smoothPoints(nFourierPoints, maxDistance) {
  //     let arr = [];

  //     for (let n = 0; n < nFourierPoints.length - 1; n++) {
  //       const fourierPoints1 = nFourierPoints[n];
  //       const fourierPoints2 = nFourierPoints[n + 1];

  //       let noPointsCurrent = 1;
  //       for (let i = 0; i < fourierPoints1.length - 1; i++) {
  //         const p1 = fourierPoints1[i];
  //         const p2 = fourierPoints2[i + 1];
  //         const noPoints = Math.ceil(dist(p1, p2) / maxDistance);
  //         if (noPoints > noPointsCurrent) noPointsCurrent = noPoints;
  //       }

  //       const newPoints = Array(noPointsCurrent)
  //         .fill()
  //         .map((el) => new Array());
  //       for (let i = 0; i < fourierPoints1.length; i++) {
  //         const p1 = fourierPoints1[i];
  //         const p2 = fourierPoints2[i];

  //         const newPointsOfEach = linspacePoints(p1, p2, noPointsCurrent);
  //         newPointsOfEach.forEach((point, index) => newPoints[index].push(point));
  //       }
  //       arr = [...arr, ...newPoints];
  //     }

  //     return arr;
  //   }
}
