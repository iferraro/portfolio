import IsaacLogo from "../../IsaacLogo";

const Header = () => {
  return (
    <div className="mt-8">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <IsaacLogo/>
        </div>
        <div className="flex flex-col justify-center text-center text-theme-dark">
          <h1 className="text-6xl font-bold">Isaac Ferraro</h1>
          <h2 className="text-2xl font-bold">Web Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
