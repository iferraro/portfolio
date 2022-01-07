import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { redefine, selectT } from "../indicator/scrollSlice";

const letterWidth = 192; // desired width of 'N' and 'W'

const viewBox = `0 0 ${2.75 * letterWidth} ${1.5 * letterWidth}`;

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
  const dispatch = useAppDispatch();
  const northwestEl = document.getElementById("northwest");
  const threshold: number = t + Number(northwestEl?.getBoundingClientRect().top);
  const handleScroll = () => {
    dispatch(redefine(window.scrollY));
    console.log("the threshold is", threshold);
  };
  window.addEventListener("scroll", handleScroll);

  const nPath = `
  M 
    ${0.25 * letterWidth},${0.25 * letterWidth} 
  v
    ${letterWidth} 
  h
    ${0.5 * letterWidth}
  v
    ${t <= 0.5 * (letterWidth - beta) ? -t : -0.5 * (letterWidth - beta)}
  L
    ${1.25 * letterWidth}, ${1.25 * letterWidth}
  v
    ${-letterWidth}
  h
    ${-0.5 * letterWidth}
  v
    ${t <= 0.5 * (letterWidth - beta) ? t : 0.5 * (letterWidth - beta)}
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
    ${-0.25 * letterWidth},${t <= 0.25 * letterWidth ? t : 0.25 * letterWidth}
  L
    ${2 * letterWidth} ${0.25 * letterWidth}
  l
    ${-0.25 * letterWidth},${t <= 0.25 * letterWidth ? t : 0.25 * letterWidth}
  z
`;

  return (
    <div className="flex flex-col justify-center">
      <div>
        <h1 className="text-center text-2xl font-bold">
          Where do I call home?
        </h1>
      </div>
      <div id="northwest">
        <svg viewBox={viewBox}>
          {/* <path d={boxPath} className="fill-black" /> */}
          <path d={nPath} className="fill-theme-dark" />
          <path d={wPath} className="fill-theme-dark" />
        </svg>
      </div>
      {/* putting graph inside of sub-component will cause graph to only stay
      inside the sub-component, even if sticky */}
    </div>
  );
};

export default Northwest;
