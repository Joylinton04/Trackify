import { useState } from "react";
import Header from "../component/Header";
import { useAppDispatch, useAppSelector } from "../redux/store";
import AddIcon from "@mui/icons-material/Add";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteBudget, addBudget as addNewBudget } from "../redux/BudgetSlice";
import { Link } from "react-router-dom";

interface BudgetForm {
  purpose: string;
  budget: number;
}

const Budget = () => {
  const budgets = useAppSelector((state) => state.budgets);
  const expenses = useAppSelector((state) => state.expenses);
  const reversedBudgets = [...budgets].reverse();
  const [addBudget, setAddBudget] = useState<boolean>(false);
  const [formData, setFormData] = useState<BudgetForm>({ purpose: '', budget: 0 });
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "budget" ? parseFloat(value) : value,
    });
  };

  const handleAddBudget = () => {
    setAddBudget((prev) => !prev);

  };

  const handleDeleteBudget = (budget_id: string) => {
   dispatch(deleteBudget({id: budget_id}))
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    dispatch(addNewBudget({budget: formData.budget, purpose: formData.purpose}));
    setFormData({ purpose: '', budget: 0 });
    setTimeout(() => {
      handleAddBudget();
    },200)
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#ff0000"];

  return (
    <div className="pad">
      <div className="flex gap-2 justify-between items-center">
        <Header title="Budgets" text="Add a new budget" />
        <button 
          className="text-maintext font-semibold bg-[#a9d432] uppercase text-sm py-2 px-4 rounded"
          onClick={handleAddBudget}
        >
          <AddIcon className="text-maintext" />
        </button>
      </div>

      {/* Budget Details */}
      {reversedBudgets.map((budget) => {
        const filteredExpenses = expenses.filter((exp) => exp.budget_id === budget.budget_id);
        const totalExpenses = filteredExpenses.reduce((acc, exp) => acc + exp.amount, 0);
        const percentageWidth = (budget.budget > 0 ? (totalExpenses / budget.budget) * 100 : 0);
        const balance = budget.budget - totalExpenses;
        return (
          <div key={budget.budget_id} className="mt-6 flex flex-col gap-4">
            <div className="border-borderr border p-4 rounded-2xl shadow-md cursor-pointer">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center gap-2">
                  <div>
                    <h1 className="text-maintext text-4xl font-bold">${(budget.budget).toLocaleString()}</h1>
                    <p className="text-maintext">{budget.purpose}</p>
                  </div>
                  <IconButton
                  onClick={() => handleDeleteBudget(budget.budget_id)}>
                    <DeleteIcon 
                      className="text-red-500"
                    />
                  </IconButton>
                </div>
                <Link className="flex flex-col gap-2" to={`/expenses/${budget.budget_id}`}>
                  <div className="w-full">
                    <div
                      className="rounded h-2 duration-200"
                      style={{
                        width: `${percentageWidth}%`,
                        backgroundColor: percentageWidth < 20 ? COLORS[0] : percentageWidth < 60 ? 'rgb(30 64 175)' : 'green'}}></div>
                  </div>
                  <p className="text-maintext">{(Math.floor(percentageWidth))}%</p>
                </Link>
                <Link className="flex flex-col gap-4" to={`/expenses/${budget.budget_id}`}>
                  <div className="flex justify-between gap-2">
                    <p className="text-softText">Net Expense</p>
                    <h1 className="text-red-500 font-bold">${(totalExpenses).toLocaleString()}</h1>
                  </div>
                  <div className="flex justify-between gap-2">
                    <p className="text-softText">Balance</p>
                    <h1 className="text-maintext font-bold">${(balance).toLocaleString()}</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      {/* Add Budget Form */}
      {addBudget && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-[#21212190]">
          <div className="flex justify-center items-center h-full">
            <div className="w-[380px] h-[200px] bg-[#f5f5f5] pad rounded">
              <form onSubmit={handleSubmit}>
                <div className="">
                  <input
                    type="number"
                    placeholder="Enter Budget"
                    className="w-full py-2 px-4 rounded mt-4"
                    name="budget"
                    value={formData.budget || ''}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Purpose e.g., for school"
                    className="w-full py-2 px-4 rounded mt-4"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex gap-4 mt-4">
                  <Button variant="contained" color="primary" type="submit">
                    Add Budget
                  </Button>
                  <Button variant="contained" color="secondary" onClick={handleAddBudget}>
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Budget;