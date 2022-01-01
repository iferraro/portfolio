import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { redefine, selectT } from "./graphSlice";

const baseUnit = 40;

const pyramidUnit = 80;

const boxPath = `
  m
    0,${8 + 2 * baseUnit}
  h
    ${4 * Math.PI * baseUnit - 16}
`;

const sinePath = `
  m 
    0,${8 + 2 * baseUnit} 
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

// points 1, 2, 3: [0, pi/2]
// points 4, 5 ,6: [pi/2, pi]
// points 7, 8, 9: [pi, 3pi/2]
// points 10, 11, 12: [3pi/2, 2pi]

const Graph = () => {
  const t = useAppSelector(selectT);
  const dispatch = useAppDispatch();
  const handleScroll = () => {
    dispatch(redefine(window.scrollY));
  };
  const pyramidFrontPath = `
    m
      0,${6 * pyramidUnit}
    l
      ${6 * pyramidUnit},0
      ${-1 * pyramidUnit},${-2 * pyramidUnit - t}
    z
  `;

  const pyramidSidePath = `
    m
      ${6 * pyramidUnit},${6 * pyramidUnit}
    l
      ${4 * pyramidUnit},${-2 * pyramidUnit}
      ${-5 * pyramidUnit},${-1 * (t - 1)}
    z
  `;
  window.addEventListener("scroll", handleScroll);

  return (
    <div className="sticky top-0">
      <p className="m-0 w-1/3 text-xl font-bold bg-black">t = {t}</p>
      <svg className="w-full h-screen">
        <path
          d={pyramidFrontPath}
          fill="#004056"
          stroke="#AD7109"
          strokeWidth={5}
          strokeLinejoin="round"
        />
        <path
          d={pyramidSidePath}
          fill="#004056"
          stroke="#AD7109"
          strokeWidth={5}
          strokeLinejoin="round"
        />
        {/* <path d={sinePath} stroke="#AD7109" strokeWidth={2} fill="none" /> */}
        {/* <path d={boxPath} stroke="white" strokeWidth={2} fill="none" /> */}
      </svg>
      {/* putting graph inside of sub-component will cause graph to only stay
      inside the sub-component, even if sticky */}
    </div>
  );
};

export default Graph;
