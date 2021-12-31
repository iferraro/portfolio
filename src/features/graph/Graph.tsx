import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { redefine, selectT } from "./graphSlice";

const sineCriteria = {
  // could also make an interface/class Criteria/graphCriteria; sineCriteria would be an instance of it
  domain: [0, 2 * Math.PI],
  step: 100,
  k: 100,
};

const svgCriteria = {
  width: (sineCriteria.domain[1] - sineCriteria.domain[0]) * sineCriteria.k,
  height: 200,
  yLine: 100,
  fillColor: "#000",
  strokeColor: "#000",
};
const baseUnit = 40;
const d = `
  m 
    0,${10 + 2 * baseUnit} 
  c 
    ${baseUnit},${-1 * baseUnit}
    ${2 * baseUnit},${-2 * baseUnit}
    ${3 * baseUnit},${-2 * baseUnit}
    ${baseUnit},0
    ${2 * baseUnit},${baseUnit}
    ${3 * baseUnit},${2 * baseUnit}
    ${baseUnit},${baseUnit}
    ${2 * baseUnit},${2 * baseUnit}
    ${3 * baseUnit},${2 * baseUnit}
    ${baseUnit},0
    ${2 * baseUnit},${-1 * baseUnit}
    ${3 * baseUnit},${-2 * baseUnit}
    `;

const Graph = () => {
  const t = useAppSelector(selectT);
  const dispatch = useAppDispatch();
  const handleScroll = () => {
    dispatch(redefine(window.scrollY));
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <div className="sticky top-0">
      <p className="text-xl font-bold bg-theme-dark">t = {t}</p>
      <svg className="w-screen h-60">
        <path d={d} strokeWidth={5} stroke="#AD7109" fill="none" />
      </svg>
      {/* putting graph inside of sub-component will cause graph to only stay
      inside the sub-component, even if sticky */}
    </div>
  );
};

export default Graph;
