import React, { useState } from "react";
import { x, signatureCubicBezier } from "../constant";

const letterWidth = 100; // desired width of 'N' and 'W'

const viewBox = `${0.25 * letterWidth} ${0.25 * letterWidth} ${
  2.25 * letterWidth
} ${letterWidth}`;

const bevel = (base: number, height: number, width: number) => {
  const bSqu = Math.pow(base, 2);
  const hSqu = Math.pow(height, 2);
  const wSqu = Math.pow(width, 2);
  return (
    (base * width * Math.sqrt(bSqu + hSqu - wSqu) - wSqu * height) /
    (bSqu - wSqu)
  );
};

const beta = bevel(letterWidth, letterWidth, 0.5 * letterWidth);

const Northwest = () => {
  const [revealed, setRevealed] = useState(false);
  const [deltas, setDeltas] = useState({
    n: 0,
    w: 0,
  });

  const handleClick = () => {
    revealed
      ? setDeltas({
          n: 0,
          w: 0,
        })
      : setDeltas({
          n: 0.5 * (letterWidth - beta),
          w: 0.25 * letterWidth,
        });
    setRevealed(!revealed);
  };

  const nPath = `
  M 
    ${0.25 * letterWidth},${0.25 * letterWidth} 
  v
    ${letterWidth} 
  h
    ${0.5 * letterWidth}
  v
    ${-deltas.n}
  L
    ${1.25 * letterWidth}, ${1.25 * letterWidth}
  v
    ${-letterWidth}
  h
    ${-0.5 * letterWidth}
  v
    ${deltas.n}
  z
`;

  const wPath = `
  M
    ${1.5 * letterWidth},${0.25 * letterWidth}
  v
    ${letterWidth} 
  h
    ${letterWidth}
  v
    ${-letterWidth}
  l
    ${-0.25 * letterWidth},${deltas.w}
  L
    ${2 * letterWidth} ${0.25 * letterWidth}
  l
    ${-0.25 * letterWidth},${deltas.w}
  z
`;

  return (
    <div className="flex flex-col justify-center content-center">
      <button
        onClick={handleClick}
        className="p-2 mx-auto mb-4 max-w-xs text-2xl font-semibold text-theme-light bg-theme-dark border-4 border-theme-dark rounded-full hover:bg-theme-light hover:text-theme-dark in-expo duration-150"
      >
        {!revealed ? "Where do I call home?" : "The Pacific Northwest!"}
      </button>
      <div className="flex justify-center">
        <svg viewBox={viewBox} width={x}>
          <path
            d={nPath}
            className="fill-theme-dark"
            style={{
              transition: signatureCubicBezier,
              transitionDuration: "500ms",
            }}
          />
          <path
            d={wPath}
            className="fill-theme-dark"
            style={{
              transition: signatureCubicBezier,
              transitionDuration: "500ms",
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Northwest;
