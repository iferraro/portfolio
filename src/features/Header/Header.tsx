import x from "../constant";
import IsaacLogo from "../../IsaacLogo";
import { Transition } from "@headlessui/react";
import { useState } from "react";

const Header = () => {
  const [isShowing, setIsShowing] = useState(false);
  setTimeout(() => {
    setIsShowing(true);
  }, 150);

  return (
    <div>
      <Transition
        as="div"
        show={isShowing}
        enter="transition-opacity duration-500 in-expo "
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <IsaacLogo/>
          </div>
          <div className="flex flex-col justify-center text-center text-theme-dark">
            <h1 className="text-6xl font-bold">Isaac Ferraro</h1>
            <h2 className="text-2xl font-bold">Web Developer</h2>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Header;
