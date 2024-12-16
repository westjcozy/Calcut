export interface UserProfile {
    id: string;
    name: string;
    email: string;
    height: number;
    weight: number;
    age: number;
    gender: 'male' | 'female' | 'other';
    dailyCalorieGoal: number;
    monthlyBudget: number;
    dietaryPreferences: string[];
    notifications: boolean;
}

export interface ProfileStats {
    totalMeals: number;
    averageDailySpending: number;
    streakDays: number;
    savedRecipes: number;
}