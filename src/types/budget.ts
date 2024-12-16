export interface Expense {
    id: string;
    date: string;
    description: string;
    amount: number;
}

export interface BudgetSummaryData {
    totalBudget: number;
    spent: number;
    remaining: number;
}