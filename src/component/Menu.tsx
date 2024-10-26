import { Link, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import BarChartIcon from "@mui/icons-material/BarChart";

const Menu = () => {
  const menuData = [
    {
      id: 1,
      title: "Main",
      options: [
        {
          id: 1,
          title: "Homepage",
          icon: <HomeIcon className="icon text-[#f5f5f5]" sx={{fontSize: '30px'}} />,
          path: "/",
        },
        {
          id: 2,
          title: "profile",
          icon: <Person2Icon className="icon text-[#f5f5f5]" sx={{fontSize: '30px'}} />,
          path: "/profile",
        },
      ],
    },
    {
      id: 2,
      title: "Menu",
      options: [
        {
          id: 2,
          title: "Expenses",
          icon: <BarChartIcon className="icon text-[#f5f5f5]" sx={{fontSize: '30px'}} />,
          path: "/expenses",
        },
      ],
    },
  ];

  return (
    <div className="w-[220px] border-r border-borderr pad h-screen sticky top-0 z-20 menu bg-bgdark lgg:w-max">
      <div className="h-full relative">
        <div className="py-2">
          <div className="font-bold text-white text-3xl uppercase font-header mdd:hidden">
            Trackify
          </div>
        </div>
        {/* Menu */}
        {menuData &&
          menuData.map((item) => (
            <div className="flex flex-col mt-8 mdd:-mt-2 ssm:-mt-4" key={item.id}>
              <div className="uppercase text-white py-2 text-sm font-header">
                {item.title}
              </div>
              {item.options.map((option) => (
                <NavLink
                  key={option.id}
                  to={option.path}
                  className="flex gap-1 py-4 px-2 hover:bg-bgsoft hover:scale-110 duration-300 rounded cursor-pointer items-center"
                >
                  {option.icon}
                  <p className="capitalize text-white mdd:hidden">{option.title}</p>
                </NavLink>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Menu;
