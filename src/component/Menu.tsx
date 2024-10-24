import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import BarChartIcon from '@mui/icons-material/BarChart';



const menuData = [
  {
    id: 1,
    title: 'Main',
    options: [
      {
        id: 1,
        title: 'Homepage',
        icon: <HomeIcon className="text-maintext"/>,
        path: '/',
      },
      {
        id: 2,
        title: 'profile',
        icon: <Person2Icon className="text-maintext"/>,
        path: '/',
      }
    ]
  },
  {
    id: 2,
    title: 'Menu',
    options: [
      {
        id: 2,
        title: 'statistics',
        icon: <BarChartIcon className="text-maintext"/>,
        path: '/',
      }
    ]
  },
  
]

const Menu = () => {
  return (
    <div className="w-[250px] border-r border-borderr pad h-screen sticky top-0 z-20">
    <div className='h-full relative'>
        <div>
          <div className="font-bold text-maintext text-3xl uppercase font-header">Trackify</div>
        </div>
        {/* Menu */}
        {menuData && 
          menuData.map((item) => (
            <div className="flex flex-col mt-8" key={item.id}>
              <div className="font-semibold uppercase text-smTitle py-1 text-sm font-header">{item.title}</div>
                {item.options.map((option) => (
                  <Link key={option.id} to={option.path} className="flex gap-1 py-3 px-2 hover:bg-bgsoft rounded cursor-pointer items-center">
                      {option.icon}
                      <p className="text-maintext capitalize">{option.title}</p>
                  </Link>
                ))}
            </div>
          ))}
        </div>
    </div>
  )
}

export default Menu;