import { ReactComponent as SineWave } from "../../sine-wave.svg";

const Header = () => {
  return (
    <header>
      <svg
        width="193"
        version="1.1"
        viewBox="0 0 512 166"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(146 -40)">
          <path
            d="m-144 123c19-19 38-38 56-52 19-14 38-24 56-28 19-3.3 38 0.2 56 9.6 19 9.4 38 25 56 42 19 18 38 38 56 55 19 18 38 33 56 42 19 9.4 38 13 56 9.6 19-3.3 38-13 56-28 19-14 38-33 56-52"
            fill="none"
            stroke="#c0923f"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4.2"
          />
        </g>
      </svg>
      <h1 className="text-4xl font-bold">Isaac Ferraro</h1>
      <h2 className="text-xl font-bold">Junior Web Developer</h2>
      <hr />
    </header>
  );
};

export default Header;
