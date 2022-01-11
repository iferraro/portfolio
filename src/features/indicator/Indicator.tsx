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
  console.log(window.innerWidth, "<= window.innerWidth");
  const totalHeight = document.documentElement.getBoundingClientRect().height;
  const heightForBar = totalHeight - window.innerHeight;
  const ratio = t / heightForBar;
  console.log(totalHeight, "<= totalHeight");
  console.log(heightForBar, "<= heightForBar");
  return (
    <div className="fixed">
      <div
        className="fixed flex justify-center align-center p-2 top-4 border-4 border-theme-dark rounded-full text-2xl text-theme-dark font-bold bg-theme-light"
        style={{
          height: 56,
          width: ratio === 0 ? 56 : ratio * window.innerWidth - 48,
        }}
      >
        <p>
          {/* t = {t} */}
          {Math.floor(100 * ratio)}%
        </p>
        {/* putting graph inside of sub-component will cause graph to only stay
      inside the sub-component, even if sticky */}
      </div>
    </div>
  );
};

export default Graph;
