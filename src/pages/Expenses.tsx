import { Button } from "@mui/material";
import GridTable from "../component/GridTable";
import Header from "../component/Header";


const Expenses = () => {
  return (
    <div className="pad mt-4">
      <div className="flex items-center justify-between">
        <Header 
          title="Track Your Expenses" 
          text="Keep track and manage your expenses"
        />
        <button className="text-maintext font-semibold bg-[#a9d432] uppercase text-sm py-2 px-4 rounded">Add New Expense</button>
      </div>
      <GridTable/>
    </div>
  )
}

export default Expenses;