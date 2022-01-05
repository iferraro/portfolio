import x from "../constant";
import { ReactComponent as IsaacLogo } from "../../IsaacLogo.svg";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-end items-center mr-4">
        <IsaacLogo style={{ height: 152, width: 120, fill:"#1C292C" }} />
      </div>
      <div className="flex flex-col justify-center text-theme-dark">
        <h1 className="text-6xl font-bold">
          Isaac
          <br />
          Ferraro
        </h1>
        <h2 className="text-2xl font-bold">Web Developer</h2>
      </div>
    </div>
  );
};

export default Header;
