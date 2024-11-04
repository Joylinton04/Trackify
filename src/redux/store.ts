import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { expenseSlice } from "./ExpenseSlice";
import { budgetSlice } from "./BudgetSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  expenses: expenseSlice.reducer,
  budgets: budgetSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
  }),
})


export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export default store;
export const persistor = persistStore(store)