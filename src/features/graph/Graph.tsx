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

const Graph = () => {
  const t = useAppSelector(selectT);
  const dispatch = useAppDispatch();
  const handleScroll = () => {
    dispatch(redefine(window.scrollY));
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <div id="graph" className="sticky top-0 w-1/2 bg-black">
      <p className="text-xl font-bold">t = {t}</p>
      {/* putting graph inside of sub-component will cause graph to only stay
      inside the sub-component, even if sticky */}
    </div>
  );
};

export default Graph;
