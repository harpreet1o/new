import React from "react";

// height: 9.6rem;
// padding: 0 4.8rem;
// position: relative; for later header sticky
function Navbar() {
  return (
    <header className="flex justify-between bg-black text-white p-6 items-center">
      <h1 className="font-logo text-xl  ml-8 text-blue">Harpreet Singh</h1>
      <ul className="flex items-center gap-6 mr-8 text-lg">
        <li className="font-medium  transition duration-300 ease-in-out hover:text-blue cursor-ponter">
          Projects
        </li>
        <li className="font-medium  transition duration-300 ease-in-out hover:text-blue cursor-pointer ">
          Bio
        </li>
        <li className="font-medium  transition duration-300 ease-in-out hover:text-blue cursor-pointer">
          Contact
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
