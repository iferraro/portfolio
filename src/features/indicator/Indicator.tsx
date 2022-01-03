import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { redefine, selectT } from "./scrollSlice";

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
    <div className="fixed top-0">
      <p className="w-full text-xl text-black font-bold bg-green-400">t = {t}</p>
      {/* putting graph inside of sub-component will cause graph to only stay
      inside the sub-component, even if sticky */}
    </div>
  );
};

export default Graph;
