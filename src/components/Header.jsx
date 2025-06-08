import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-gray-900 h-20 w-full flex justify-between items-center px-6">
      <IoMenu className="text-3xl cursor-pointer" />
      <input
        type="text"
        placeholder="Search"
        className="w-[400px] rounded-2xl border-2 px-5 py-2 outline-none text-gray-900"
      />
      <div className="flex gap-6 cursor-pointer text-2xl text-white">
        <IoIosNotifications />
        <FaBasketShopping />
        <FaUser />
      </div>
    </div>
  );
}

export default Header;
