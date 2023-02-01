import React, { useState, useEffect } from "react";
import { signatureCubicBezier } from "./features/constant";

const IsaacLogo = () => {
  const [fPathPoints, setFPathPoints] = useState({ top: 20, mid: 24 });
  const iPath = `
    m 0 0 
    v 10
    l 20 11
    v 126
    l -20 11
    v 10 
    h 88 
    v -10 
    l -20 -11
    v -126 
    l 20 -11
    v -10
    z
    `;

  const fPathTop = `
    m ${fPathPoints.top} 0
    v 66
    l 48 27
    v -93 
    z
    `;

  const fPathMid = `
    m ${fPathPoints.mid} 66
    v 40
    l 44 24.75
    v -40
    z
    `;
  // 48/27 = 44/24.75; ratio had to be corrected from original SVG

  useEffect(() => {
    setTimeout(() => {
      setFPathPoints({ top: 97, mid: 77 });
    }, 500);
  }, []);

  return (
    <svg
      width={180}
      viewBox="0 0 145 168"
      xmlns="http://www.w3.org/2000/svg"
      fill="#1C292C"
    >
      <path d={iPath} />
      <path
        d={fPathTop}
        style={{
          transition: signatureCubicBezier,
          transitionDuration: "1000ms",
        }}
      />
      <path
        d={fPathMid}
        style={{
          transition: signatureCubicBezier,
          transitionDuration: "1000ms",
        }}
      />
    </svg>
  );
};

export default IsaacLogo;
