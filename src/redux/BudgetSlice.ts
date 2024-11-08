import { format } from "date-fns";
import { budget } from "./data"
import { v4 as uuidv4 } from "uuid";
import { id } from "./data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const dateTime = format(new Date(), 'MMM dd, yyyy pp')
const initialState: budget[] = [
   {
     id: uuidv4(),
     budget_id: id,
     budget: 12000,
     purpose: 'A budget for Groceries',
     date: dateTime,
   },
   {
     id: uuidv4(),
     budget_id: uuidv4(),
     budget: 35000,
     purpose: 'A budget for Vacation',
     date: dateTime,
   }
]

export const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
      addBudget(state, action:PayloadAction<{budget: number, purpose: string}> ) {
        const { budget, purpose } = action.payload;
        state.push({
            id: uuidv4(),
            budget_id: uuidv4(),
            budget,
            purpose,
            date: dateTime,
          });
      },
      deleteBudget(state, action: PayloadAction<{ id: string }>) {
        return state.filter(state => state.budget_id !== action.payload.id)
      }      
    },
})


export const {addBudget,deleteBudget} = budgetSlice.actions;
export default budgetSlice.reducer