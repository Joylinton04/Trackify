import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import { expenseSlice } from "./ExpenseSlice";
import { budgetSlice } from "./BudgetSlice";






export const store = configureStore({
  reducer: {
    expenses:expenseSlice.reducer,
    budgets: budgetSlice.reducer
  },
})




export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export default store;