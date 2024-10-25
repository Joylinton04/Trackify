import { useContext } from "react";
import { ThemeContext } from "../context/useContext";
import { IconButton } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import user from '../assets/user.svg'
import PersonIcon from '@mui/icons-material/Person';



const Navbar = () => {
  const {mode, toggleMode} = useContext(ThemeContext)

  return (
    <div className="flex justify-between items-center py-2 px-4 border-b border-borderr flex-[1]">
      
      <div className="flex items-center text-maintext py-4"> 
        <p className="font-semibold uppercase font-header">Admin</p>
        <p><KeyboardArrowDownIcon/></p>
      </div>

      <div className="flex items-center gap-6">
        <IconButton onClick={() => toggleMode()} sx={{background: 'var(--bgsoft)'}}>
          {mode === 'dark'?
            <LightModeIcon className="text-maintext"/>
            :
            <DarkModeIcon className="text-maintext"/>
          }
        </IconButton>
        <div className="flex items-center justify-center gap-4 bg-bgsoft px-2 py-1 rounded">
          <div className="w-7 h-7 rounded-full">
            <PersonIcon className="text-maintext"/>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-maintext text-sm font-semibold">Me2.0</h1>
            <p className="text-softText text-xs">me2.0@gmail.com</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar;