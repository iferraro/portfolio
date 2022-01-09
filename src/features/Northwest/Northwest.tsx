import { useState } from "react";
import { signatureCubicBezier } from "../constant";

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
    !revealed
      ? setDeltas({
          n: 0.5 * (letterWidth - beta),
          w: 0.25 * letterWidth,
        })
      : setDeltas({
          n: 0,
          w: 0,
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
    <div className="flex flex-col justify-center">
      <br />
      <div>
        <h1 className="text-center text-2xl font-bold">
          Where does Isaac call home?
          <br />
          <br />
          <button
            onClick={handleClick}
            className="p-2 w-64 font-bold text-theme-light bg-theme-dark border-4 border-theme-dark rounded-full hover:bg-theme-light hover:text-theme-dark transition in-expo duration-150"
          >
            Click to {!revealed ? "find out" : "hide"}
          </button>
        </h1>
      </div>
      <br />
      <div>
        <svg viewBox={viewBox}>
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
      <h1
        className="tracking-wide text-center text-4xl text-theme-dark font-bold"
        style={{
          transition: signatureCubicBezier,
          transitionDuration: "800ms",
        }}
      >
        {!revealed ? "It's..." : "The Pacific Northwest!"}
      </h1>
      {/* putting graph inside of sub-component will cause graph to only stay
      inside the sub-component, even if sticky */}
    </div>
  );
};

export default Northwest;
