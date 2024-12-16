import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { BudgetSummary } from "../budget/BudgetSummary";
import { ExpenseList } from "../budget/ExpenseList";
import { Button } from "../shared/Button";

type BudgetScreenProps = {
    route: RouteProp<MainStackParamList, "Budget">,
    navigation: FrameNavigationProp<MainStackParamList, "Budget">,
};

// Mock data - In a real app, this would come from a state management system
const mockExpenses = [
    { id: '1', date: '2024-01-15', description: 'Grocery Shopping', amount: 45.50 },
    { id: '2', date: '2024-01-14', description: 'Restaurant Lunch', amount: 15.75 },
    { id: '3', date: '2024-01-13', description: 'Coffee Shop', amount: 4.25 },
];

export function BudgetScreen({ navigation }: BudgetScreenProps) {
    // Mock budget data
    const budgetData = {
        totalBudget: 300,
        spent: 65.50,
        remaining: 234.50,
    };

    return (
        <stackLayout style={styles.container}>
            <BudgetSummary 
                totalBudget={budgetData.totalBudget}
                spent={budgetData.spent}
                remaining={budgetData.remaining}
            />
            
            <Button 
                text="Set Budget"
                onTap={() => {}} // TODO: Implement budget setting
                className="mx-4 my-2"
            />
            
            <ExpenseList expenses={mockExpenses} />
        </stackLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#f3f4f6",
    },
});