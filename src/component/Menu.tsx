import { Link, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useEffect, useState } from "react";
import useScroll from "../hook/useScroll";

const Menu = () => {
  const { scrollY } = useScroll();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    if (scrollY >= 40) {
      setShowMenu(true); // Hide bottom menu when scrolled more than 60px
    } else {
      setShowMenu(false); // Show bottom menu when less than 60px
    }
  }, [scrollY]);

  const menuData = [
    {
      id: 1,
      title: "Main",
      options: [
        {
          id: 1,
          title: "Homepage",
          icon: (
            <HomeIcon
              className="icon text-[#f5f5f5]"
              sx={{ fontSize: "30px" }}
            />
          ),
          path: "/",
        },
        {
          id: 2,
          title: "Profile",
          icon: (
            <Person2Icon
              className="icon text-[#f5f5f5]"
              sx={{ fontSize: "30px" }}
            />
          ),
          path: "/",
        },
      ],
    },
    {
      id: 2,
      title: "Menu",
      options: [
        {
          id: 2,
          title: "Budget",
          icon: (
            <BarChartIcon
              className="icon text-[#f5f5f5]"
              sx={{ fontSize: "30px" }}
            />
          ),
          path: "/budget",
        },
        /* {
          id: 3,
          title: "Expenses",
          icon: (
            <BarChartIcon
              className="icon text-[#f5f5f5]"
              sx={{ fontSize: "30px" }}
            />
          ),
          path: "/expenses",
        }, */
      ],
    },
  ];

  return (
    <>
      {/* Sidebar Menu */}
      <div className="w-[220px] border-r border-borderr pad h-screen sticky top-0 z-20 menu bg-bgdark lgg:w-max ssm:hidden">
        <div className="h-full relative">
          <div className="py-2">
            <div className="font-bold text-white text-3xl uppercase font-header mdd:hidden">
              Trackify
            </div>
          </div>
          {/* Menu */}
          {menuData &&
            menuData.map((item) => (
              <div
                className="flex flex-col mt-5 mdd:-mt-2 ssm:-mt-4"
                key={item.id}
              >
                <div className="uppercase text-white py-2 text-sm font-header">
                  {item.title}
                </div>
                {item.options.map((option) => (
                  <NavLink
                    key={option.id}
                    to={option.path}
                    className="flex gap-1 py-4 px-2 hover:bg-bgsoft hover:scale-105 duration-300 rounded cursor-pointer items-center"
                  >
                    {option.icon}
                    <p className="capitalize text-white mdd:hidden">
                      {option.title}
                    </p>
                  </NavLink>
                ))}
              </div>
            ))}
        </div>
      </div>

      {/* Bottom Navigation Menu */}
      <div
        className={`mobilemenu bg-[#000] ssm:fixed bottom-0 left-0 w-full h-max z-50 ${
          showMenu ? "opacity-0" : "opacity-100"
        } duration-500`}
      >
        <div className="flex gap-4 w-full justify-center">
          {menuData &&
            menuData.map((item) => (
              <div className="flex gap-4" key={item.id}>
                {item.options.map((option) => (
                  <NavLink
                    key={option.id}
                    to={option.path}
                    className="flex gap-1 py-4 px-2 hover:bg-bgsoft hover:scale-110 duration-300 rounded cursor-pointer items-center"
                  >
                    {option.icon}
                  </NavLink>
                ))}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Menu;