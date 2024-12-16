import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { SpendingChart } from "../reports/SpendingChart";
import { CategoryBreakdown } from "../reports/CategoryBreakdown";
import { NutritionOverview } from "../reports/NutritionOverview";

type ReportsScreenProps = {
    route: RouteProp<MainStackParamList, "Reports">,
    navigation: FrameNavigationProp<MainStackParamList, "Reports">,
};

// Mock data - In a real app, this would come from a state management system
const mockDailyExpenses = [
    { date: '2024-01-15', amount: 45.50 },
    { date: '2024-01-14', amount: 32.75 },
    { date: '2024-01-13', amount: 28.25 },
    { date: '2024-01-12', amount: 15.50 },
    { date: '2024-01-11', amount: 22.00 },
    { date: '2024-01-10', amount: 18.75 },
    { date: '2024-01-09', amount: 25.50 },
];

const mockCategories = [
    { category: 'Groceries', amount: 120.50, percentage: 45 },
    { category: 'Restaurants', amount: 85.75, percentage: 32 },
    { category: 'Coffee Shops', amount: 35.25, percentage: 13 },
    { category: 'Other', amount: 26.50, percentage: 10 },
];

const mockNutrition = {
    calories: 2150,
    protein: 85,
    carbs: 245,
    fat: 72,
};

export function ReportsScreen({ navigation }: ReportsScreenProps) {
    return (
        <scrollView>
            <stackLayout style={styles.container}>
                <SpendingChart dailyExpenses={mockDailyExpenses} />
                <CategoryBreakdown categories={mockCategories} />
                <NutritionOverview nutrition={mockNutrition} />
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f3f4f6",
        padding: 16,
    },
});