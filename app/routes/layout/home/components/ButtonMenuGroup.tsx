import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

interface ItemButtonI {
  title: string;
  link: string;
}

interface Props {
  itemButton: Array<ItemButtonI>;
}

export default function ButtonMenuGroup({ itemButton }: Props) {
  const [active, setActive] = useState("Home");
  const location = useLocation();
  const currentPath = location.pathname;

  const buttons = ["Home", "Profile", "Settings"];

  return (
    <div className="flex justify-center items-center">
      <div className="inline-flex bg-[#17163c] p-1 rounded-lg shadow-lg">
        {itemButton.map((btn) => (
          <NavLink
            key={btn.link}
            to={btn.link}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out
              ${
                currentPath === btn.link
                  ? "bg-white text-[#17163c] shadow-md"
                  : "text-white hover:bg-white/10"
              }`}
          >
            {btn.title}
          </NavLink>
        ))}
      </div>
    </div>
    // <div className="flex justify-center items-center">
    //   <div className="inline-flex bg-[#17163c] p-1 rounded-lg shadow-lg">
    //     {buttons.map((btn) => (
    //       <button
    //         key={btn}
    //         onClick={() => setActive(btn)}
    //         className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out
    //           ${
    //             active === btn
    //               ? "bg-white text-[#17163c] shadow-md"
    //               : "text-white hover:bg-white/10"
    //           }`}
    //       >
    //         {btn}
    //       </button>
    //     ))}
    //   </div>
    // </div>
  );
};

