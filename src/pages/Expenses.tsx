import { Button } from "@mui/material";
import GridTable from "../component/GridTable";
import Header from "../component/Header";
import { useState } from "react";
import { useAppDispatch } from "../redux/store";
import { addExpenses } from "../redux/ExpenseSlice";

interface ExpenseForm {
  purpose: string;
  amount: number;
  budget: number;
}

const Expenses = () => {
  const [addExpense, setAddExpense] = useState<boolean>(false);
  const [formData, setFormData] = useState<ExpenseForm>({ purpose: '', amount: 0, budget: 0 });
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "amount" ? parseFloat(value) : value, // Ensure amount is treated as a number
    });
  };

  const handleAddExpense = () => {
    setAddExpense(prev => !prev);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addExpenses({purpose: formData.purpose, amount: formData.amount, budget: 12000}));
    handleAddExpense()
    setFormData({ purpose: '', amount: 0 , budget: 0});
  };

  return (
    <div className="pad mt-4">
      <div className="flex items-center justify-between">
        <Header
          title="Track Your Expenses"
          text="Keep track and manage your expenses"
        />
        <button
          className="text-maintext font-semibold bg-[#a9d432] uppercase text-sm py-2 px-4 rounded"
          onClick={handleAddExpense}
        >
          Add New Expense
        </button>
      </div>
      <GridTable />
      {/* Overflow add expense */}
      {addExpense && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-[#21212190]">
          <div className="flex justify-center items-center h-full">
            <div className="w-[380px] h-[200px] bg-[#f5f5f5] pad rounded">
              <form onSubmit={handleSubmit}>
                <div className="">
                  <input
                    type="text"
                    placeholder="Purpose eg. Vacation"
                    className="w-full py-2 px-4 rounded mt-4"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Enter expense amount"
                    className="w-full py-2 px-4 rounded mt-4"
                    name="amount"
                    value={formData.amount || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex gap-4 mt-4">
                  <Button variant="contained" color="primary" type="submit">
                    Add Expense
                  </Button>
                  <Button variant="contained" color="secondary" onClick={handleAddExpense}>
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

export default Expenses;