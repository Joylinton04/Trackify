import { createSlice } from "@reduxjs/toolkit";
import { expenses } from "./data";
import { format } from 'date-fns'
import {v4 as uuid } from 'uuid'

const dateTime = format(new Date(), 'MMM dd, yyyy pp')
const initialState: expenses[] = [
    {
        id: uuid(),
        budget_id: uuid(),
        purpose: 'Groceries',
        date: dateTime,
        amount: -180,
      },
      {
        id: uuid(),
        budget_id: uuid(),
        purpose: 'PS5',
        date: dateTime,
        amount: -500,
      },
      {
        id: uuid(),
        budget_id: uuid(),
        purpose: 'Netflix',
        date: dateTime,
        amount: -50,
      },
      {
        id: uuid(),
        budget_id: uuid(),
        purpose: 'Spofity',
        date: dateTime,
        amount: 20,
      },
      {
        id: uuid(),
        budget_id: uuid(),
        purpose: 'Transportation',
        date: dateTime,
        amount: -10,
      },
]

export const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action) => {
            const { purpose, amount } = action.payload;
            state.push({
                id: uuid(),
                budget_id: uuid(),
                purpose,
                date: dateTime,
                amount,
            });
        },
        deleteExpense: (state, action) => {
            const index = state.findIndex((expense) => expense.id === action.payload);
            if (index >= 0) {
                state.splice(index, 1);
            }
        },
    },
})