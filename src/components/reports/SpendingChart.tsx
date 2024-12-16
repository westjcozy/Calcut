import * as React from "react";
import { Card } from "../shared/Card";
import { DailyExpense } from "../../types/reports";

interface SpendingChartProps {
    dailyExpenses: DailyExpense[];
}

export function SpendingChart({ dailyExpenses }: SpendingChartProps) {
    const maxAmount = Math.max(...dailyExpenses.map(expense => expense.amount));
    
    return (
        <Card>
            <label className="text-lg font-bold mb-2">Weekly Spending</label>
            <gridLayout rows="auto" columns="auto, *" className="h-40">
                {/* Y-axis labels */}
                <stackLayout row="0" col="0" className="mr-2">
                    <label className="text-xs text-gray-500">${maxAmount}</label>
                    <label className="text-xs text-gray-500">${maxAmount / 2}</label>
                    <label className="text-xs text-gray-500">$0</label>
                </stackLayout>
                
                {/* Chart bars */}
                <flexboxLayout row="0" col="1" className="justify-between items-end">
                    {dailyExpenses.map((expense, index) => (
                        <stackLayout key={index} className="items-center">
                            <stackLayout 
                                className="w-8 bg-indigo-500 rounded-t"
                                height={`${(expense.amount / maxAmount) * 100}%`}
                            />
                            <label className="text-xs text-gray-500 mt-1">
                                {new Date(expense.date).toLocaleDateString('en-US', { weekday: 'short' })}
                            </label>
                        </stackLayout>
                    ))}
                </flexboxLayout>
            </gridLayout>
        </Card>
    );
}