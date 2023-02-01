import React from "react";
import IsaacLogo from "../../IsaacLogo";

const Header = () => {
  return (
    <header className="flex flex-col justify-center pt-8 pb-4">
      <section className="flex justify-center">
        <IsaacLogo />
      </section>
      <section className="flex flex-col justify-center text-center text-theme-dark">
        <h1 className="text-6xl font-bold">Isaac Ferraro</h1>
        <h2 className="text-2xl font-bold">Web Developer</h2>
      </section>
    </header>
  );
};

export default Header;
