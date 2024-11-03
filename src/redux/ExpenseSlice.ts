import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import { id } from "./data";

// Define the structure of an expense object
interface Expense {
  id: string;
  id_: number;
  budget_id: string;
  budget: number;
  purpose: string;
  date: string;
  amount: number;
}

// Initial expenses data
const initialState: Expense[] = [
  {
    id: uuid(),
    id_: 1,
    budget_id: id,
    budget: 120000,
    purpose: 'Groceries',
    date: format(new Date(), 'MMM dd, yyyy pp'),
    amount: 280,
  },
  {
    id: uuid(),
    id_: 2,
    budget_id: id,
    budget: 120000,
    purpose: 'PS5',
    date: format(new Date(), 'MMM dd, yyyy pp'),
    amount: 599,
  },
  {
    id: uuid(),
    id_: 3,
    budget_id: id,
    budget: 120000,
    purpose: 'Netflix',
    date: format(new Date(), 'MMM dd, yyyy pp'),
    amount: 120,
  },
  {
    id: uuid(),
    id_: 4,
    budget_id: id,
    budget: 120000,
    purpose: 'Spotify',
    date: format(new Date(), 'MMM dd, yyyy pp'),
    amount: 50,
  },
  {
    id: uuid(),
    id_: 5,
    budget_id: id,
    budget: 120000,
    purpose: 'Transportation',
    date: format(new Date(), 'MMM dd, yyyy pp'),
    amount: 80,
  },
];

// Create a slice for expenses
export const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    // Add a new expense
    addExpenses(state, action: PayloadAction<{ purpose: string; amount: number; budget: number }>) {
      const { purpose, amount, budget } = action.payload;
      const id_ = state.length ? state[state.length - 1].id_ + 1 : 1;
      const dateTime = format(new Date(), 'MMM dd, yyyy pp'); // Generate the current date
      state.push({
        id: uuid(),
        id_: id_,
        budget_id: id,
        budget,
        purpose,
        date: dateTime,
        amount,
      });
    },

    // Delete an expense
    deleteExpense(state, action: PayloadAction<string>) {
      const index = state.findIndex((expense) => expense.id === action.payload);
      if (index >= 0) {
        state.splice(index, 1);
      }
    },
  },
});

// Export actions and reducer
export const { addExpenses, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;