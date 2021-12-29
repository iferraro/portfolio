import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { redefine, selectEquation } from "./graphSlice";

const Graph = () => {
  const equation = useAppSelector(selectEquation);
  const dispatch = useAppDispatch();
  const handleScroll = () => {
    dispatch(redefine(window.scrollY));
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <div id="graph" className="sticky top-0 w-1/2 bg-black">
      <p className="text-xl font-bold">window.scrollY = {window.scrollY} <br /> sin(window.scrollY) = {equation}</p>
      {/* putting graph inside of sub-component will cause graph to only stay
      inside the sub-component, even if sticky */}
    </div>
  );
};

export default Graph;
