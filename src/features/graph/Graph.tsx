import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { redefine, selectT } from "./graphSlice";

const baseUnit = 40;

const boxPath = `
  m
    0,0
  v
    ${4 * baseUnit}
  h
    ${2 * Math.PI * baseUnit}
  v
   ${-4 * baseUnit}
  z
`;

const sinePath = `
  M 
    0,${baseUnit} 
  c 
    ${baseUnit},${-1 * baseUnit}
    0,${-1 * baseUnit}
    ${(Math.PI / 2) * baseUnit},${-1 * baseUnit}
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
  window.addEventListener("scroll", handleScroll);

  return (
    <div className="sticky top-0">
      <p className="m-0 w-1/3 text-xl font-bold bg-black">t = {t}</p>
      <svg className="w-full">
        <path d={boxPath} fill="blue" />
        <path d={sinePath} fill="#AD7109" />
      </svg>
      {/* putting graph inside of sub-component will cause graph to only stay
      inside the sub-component, even if sticky */}
    </div>
  );
};

export default Graph;
