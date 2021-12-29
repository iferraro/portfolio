import { useState, useEffect } from "react";
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
    <div
      id="graph"
      className="sticky top-0 right-0 float-right text-right w-1/2 bg-black"
    >
      <p>{equation}</p>
    </div>
  );
};

export default Graph;
