import { useAppSelector } from "../../app/hooks";
import { selectT } from "../graph/graphSlice";

const letterWidth = 150; // desired width of 'N' and 'W'

const viewBox = `0 0 ${2.75 * letterWidth} ${1.5 * letterWidth}`

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

const boxPath = `
  M
    0,0
  v
    ${1.5 * letterWidth}
  h
    ${2.75 * letterWidth}
  v
   ${-1.5 * letterWidth}
  z
`;

const Northwest = () => {
  const t = useAppSelector(selectT);

  const nPath = `
  M 
    ${0.25 * letterWidth},${0.25 * letterWidth} 
  v
    ${letterWidth} 
  h
    ${0.5 * letterWidth}
  v
    ${-0.5 * (letterWidth - beta)}
  l
    ${0.5 * letterWidth},${0.5 * (letterWidth - beta)}
  v
    ${-1 * letterWidth}
  h
    ${-0.5 * letterWidth}
  v
    ${0.5 * (letterWidth - beta)}
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
    ${-1 * letterWidth}
  l
    ${-0.25 * letterWidth},${0.25 * letterWidth}
    ${-0.25 * letterWidth},${-0.25 * letterWidth}
    ${-0.25 * letterWidth},${0.25 * letterWidth}
  z
`;

  return (
    <div className="fixed w-1/2">
      <p className="text-xl text-black font-bold bg-green-400">t = {t}</p>
      <svg viewBox={viewBox}>
        <path d={boxPath} fill="#00FF00"/>
        <path d={nPath} fill="black" />
        <path d={wPath} fill="black" />
      </svg>
      {/* putting graph inside of sub-component will cause graph to only stay
      inside the sub-component, even if sticky */}
    </div>
  );
};

export default Northwest;
