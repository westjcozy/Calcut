import * as React from "react";
import { Card } from "../shared/Card";

interface BudgetSummaryProps {
    totalBudget: number;
    spent: number;
    remaining: number;
}

export function BudgetSummary({ totalBudget, spent, remaining }: BudgetSummaryProps) {
    const getProgressColor = () => {
        const percentage = (spent / totalBudget) * 100;
        if (percentage >= 90) return 'bg-red-500';
        if (percentage >= 70) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    return (
        <Card>
            <label className="text-xl font-bold mb-2">Budget Summary</label>
            <gridLayout rows="auto, auto, auto" columns="*, *" className="w-full">
                <label row="0" col="0" className="text-gray-600">Total Budget:</label>
                <label row="0" col="1" className="text-right">${totalBudget}</label>
                
                <label row="1" col="0" className="text-gray-600">Spent:</label>
                <label row="1" col="1" className="text-right">${spent}</label>
                
                <label row="2" col="0" className="text-gray-600">Remaining:</label>
                <label row="2" col="1" className="text-right">${remaining}</label>
            </gridLayout>
            
            <stackLayout className="h-2 bg-gray-200 rounded-full mt-4">
                <stackLayout 
                    className={`h-2 rounded-full ${getProgressColor()}`}
                    width={`${(spent / totalBudget) * 100}%`}
                />
            </stackLayout>
        </Card>
    );
}