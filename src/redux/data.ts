export interface budget {
    id: string;
    budget_id: string;
    purpose: string;
    budget: string;
    amount: number;
    date: Date;
}

export interface expenses {
    id: string;
    budget_id: string;
    purpose: string;
    amount: number;
    date: string;
}