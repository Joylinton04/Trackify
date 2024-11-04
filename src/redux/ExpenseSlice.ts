import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import { id as idd } from "./data";

// Define the structure of an expense object
interface Expense {
  id: string;
  id_: number;
  budget_id: string | null;
  purpose: string;
  date: string;
  amount: number;
}

// Initial expenses data
const initialState: Expense[] = [
  {
    id: uuid(),
    id_: 1,
    budget_id: idd,
    purpose: 'Groceries',
    date: format(new Date(), 'MMM dd, yyyy pp'),
    amount: 280,
  },
  {
    id: uuid(),
    id_: 2,
    budget_id: idd,
    purpose: 'PS5',
    date: format(new Date(), 'MMM dd, yyyy pp'),
    amount: 599,
  },
  {
    id: uuid(),
    id_: 3,
    budget_id: idd,
    purpose: 'Netflix',
    date: format(new Date(), 'MMM dd, yyyy pp'),
    amount: 120,
  },
  {
    id: uuid(),
    id_: 4,
    budget_id: idd,
    purpose: 'Spotify',
    date: format(new Date(), 'MMM dd, yyyy pp'),
    amount: 50,
  },
  {
    id: uuid(),
    id_: 5,
    budget_id: idd,
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
    addExpenses(state, action: PayloadAction<{ purpose: string; amount: number; id: string | undefined }>) {
      const { purpose, amount, id } = action.payload;
      const id_ = state.length ? state[state.length - 1].id_ + 1 : 1;
      const dateTime = format(new Date(), 'MMM dd, yyyy pp'); // Current date and time
  
      state.push({
        id: uuid(),
        id_: id_,
        budget_id: id ?? null,  // Default to `null` if no budget ID is provided
        purpose,
        date: dateTime,
        amount,
      });
    },

    // Delete an expense
    deleteExpense(state, action: PayloadAction<{ id: string }>) {
      return state.filter(state => state.budget_id !== action.payload.id)
    }  
  },
});

// Export actions and reducer
export const { addExpenses, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;