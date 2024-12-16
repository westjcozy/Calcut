export interface DailyExpense {
    date: string;
    amount: number;
}

export interface CategoryExpense {
    category: string;
    amount: number;
    percentage: number;
}

export interface NutritionSummary {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
}