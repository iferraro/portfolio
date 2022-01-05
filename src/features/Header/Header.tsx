import x from "../constant";
//import { ReactComponent as IsaacLogo } from "../../IsaacLogo.svg";

const IFLogoPath =
  "M 0,0 V 6.94975 L 13.843938,14.97459 v 81.2466 l -13.89949728,8.02483 v 6.95015 H 13.843938 47.202793 61.102383 v -6.95015 L 47.202793,96.22119 V 14.97459 L 61.102383,6.94975 V 0 H 47.202793 13.843938 Z M 68.052033,0 V 36.33836 L 101.41089,55.59779 V 0 Z m -13.8995,36.33836 v 27.7988 l 30.57898,17.6547 v -27.7991 z";

const Header = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div
        style={{ width: 2 * x + 48, height: x }}
        className="flex flex-wrap m-6"
      >
        <svg viewBox="0 0 383.25 420">
          <path d={IFLogoPath} fill="black" />
        </svg>
        <h1 className="text-4xl font-bold">Isaac Ferraro</h1>
        <br />
        <h2 className="text-xl font-bold">Web Developer</h2>
      </div>
    </div>
  );
};

export default Header;
