import { useState, useEffect } from "react";
import { signatureCubicBezier } from "./features/constant";

const IsaacLogo = () => {
  const [fPathDeltas, setFPathDeltas] = useState({ top: 0, mid: 0 });
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
    m ${20 + fPathDeltas.top} 0
    v 66
    l 48 27
    v -93 
    z
    `;

  const fPathMid = `
    m ${24 + fPathDeltas.mid} 66
    v 40
    l 44 24.75
    v -40
    z
    `;
  // 48/27 = 44/24.75; ratio had to be corrected from original SVG

  useEffect(() => {
    setTimeout(() => {
      setFPathDeltas({ top: 77, mid: 53 });
    }, 500);
    // setTimeout(() => {
    //   setFPathDeltas({ top: 10, mid: -10 });
    // }, 1000);
  }, []);

  return (
    <div>
      <svg
        width="145mm"
        height="168mm"
        version="1.1"
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
    </div>
  );
};

export default IsaacLogo;
