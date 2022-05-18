import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { redefine, selectT } from "./scrollSlice";

const Indicator = () => {
  const t = useAppSelector(selectT);
  const dispatch = useAppDispatch();
  const handleScroll = () => {
    dispatch(redefine(window.scrollY));
  };
  window.addEventListener("scroll", handleScroll);
  const totalHeight = document.documentElement.getBoundingClientRect().height;
  const heightForBar = totalHeight - window.innerHeight;
  const ratio = t / heightForBar;
  return (
    <div className="fixed flex justify-start align-center top-0 left-0 w-screen h-4 bg-theme-light">
      <div
        className="flex justify-center text-xl font-bold text-theme-light bg-theme-dark"
        style={{
          width: ratio === 0 ? 0 : ratio * window.innerWidth,
          height: 16,
        }}
      />
    </div>
  );
};

export default Indicator;
