import { v4 as uuidv4 } from "uuid";

export interface budget {
    id: string;
    budget_id: string;
    budget: number;
    purpose: string;
    date: string;
}

export interface expenses {
    id: string;
    id_: number;
    budget_id: string;
    purpose: string;
    amount: number;
    date: string;
}

export const id = uuidv4();