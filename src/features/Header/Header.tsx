import { ReactComponent as Repeat } from "../../repeat.svg";

const Header = () => {
  return (
    <header>
      <Repeat className="w-screen mb-0"/>
      <h1 className="text-4xl font-bold">Isaac Ferraro</h1>
      <h2 className="text-3xl font-bold">Junior Web Developer</h2>
      <hr />
    </header>
  );
};

export default Header;
