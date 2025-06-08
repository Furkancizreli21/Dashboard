import React, { useState } from "react";
import {
  IoMdHome,
  IoIosApps,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";

function SideBar() {
  const [isEcommerceOpen, setIsEcommerceOpen] = useState(false);

  const menuGroups = [
    {
      title: "",
      items: [
        {
          icon: <IoMdHome className="text-lg" />,
          label: "Dashboard",
          path: "/login",
        },
        {
          icon: <IoIosApps className="text-lg" />,
          label: "Email Box",
          path: "/email",
        },
      ],
    },
    {
      title: "ELEMENTS",
      items: [
        {
          icon: <HiShoppingBag className="text-lg" />,
          label: "E-commerce",
          dropdown: [
            { label: "Add Product", path: "/add-product" },
            { label: "Products", path: "/products" },
            { label: "Customers", path: "/customers" },
          ],
        },
      ],
    },
    {
      title: "PAGES",
      items: [
        {
          icon: <FaUser className="text-lg" />,
          label: "User Profile",
          path: "/profile",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-white w-60 min-h-screen p-4 flex flex-col border-r-2">
      <div className="flex justify-center items-center mb-4">
        <img
          src="./src/assets/logo.png"
          alt="Logo"
          className="w-20 h-auto object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col gap-4 overflow-hidden">
        {menuGroups.map((group, index) => (
          <div key={index}>
            {group.title && (
              <p className="text-gray-400 text-xs font-semibold mb-1">
                {group.title}
              </p>
            )}
            <div className="flex flex-col gap-1">
              {group.items.map((item, idx) => {
                const hasDropdown = item.label === "E-commerce";

                const ItemContent = (
                  <div
                    onClick={() =>
                      hasDropdown && setIsEcommerceOpen(!isEcommerceOpen)
                    }
                    className="flex items-center justify-between text-sm px-2 py-1.5 rounded-md hover:bg-gray-700 cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    {hasDropdown &&
                      (isEcommerceOpen ? (
                        <IoMdArrowDropup className="text-lg" />
                      ) : (
                        <IoMdArrowDropdown className="text-lg" />
                      ))}
                  </div>
                );

                return (
                  <div key={idx}>
                    {hasDropdown ? (
                      <>
                        {ItemContent}
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isEcommerceOpen
                              ? "max-h-40 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="ml-7 flex flex-col gap-1 py-1">
                            {item.dropdown?.map((sub, subIdx) => (
                              <Link
                                to={sub.path}
                                key={subIdx}
                                className="text-sm text-white px-2 py-1 rounded-md hover:bg-gray-700 transition-all cursor-pointer"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link to={item.path}>{ItemContent}</Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
