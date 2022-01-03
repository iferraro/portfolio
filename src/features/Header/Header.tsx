import Graph from "../indicator/Indicator";
import x from "../constant";

const lineWidth = 10;

const IFPath = `
  M
    0,0
  v
    ${10 * lineWidth}
  h
    ${lineWidth}
  v
    ${-9 * lineWidth}
  h
    ${lineWidth}
  v
    ${9 * lineWidth}
  h
    ${3 * lineWidth}
  v
    ${-9 * lineWidth}
  h
    ${4 * lineWidth}
  v
    ${lineWidth}
  h
    ${-3 * lineWidth}
  v
    ${3 * lineWidth}
  h
    ${3 * lineWidth}
  v
    ${lineWidth}
  h
    ${-3 * lineWidth}
  v
    ${4 * lineWidth}
  h
    ${lineWidth}
  v
    ${-3 * lineWidth}
  h
    ${3 * lineWidth}
  v
    ${-3 * lineWidth}
  h
    ${-3 * lineWidth}
  v
    ${-lineWidth}
  h
    ${3 * lineWidth}
  v
    ${-3 * lineWidth}
  h
    ${-6 * lineWidth}
  v
    ${9 * lineWidth}
  h
    ${-lineWidth}
  v
    ${-9 * lineWidth}
  z
`;

const Header = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div style={{ width: x, height: x }} className="m-6 bg-blue-200">
        <svg>
          <path d={IFPath} className="fill-black" />
        </svg>
      </div>
      <div style={{ width: x, height: x }} className="m-6 bg-blue-200">
        <h1 className="text-4xl font-bold">Isaac Ferraro</h1>
        <h2 className="text-xl font-bold">Web Developer</h2>
      </div>
    </div>
  );
};

export default Header;
