import * as React from "react";
import { Card } from "../shared/Card";

interface Expense {
    id: string;
    date: string;
    description: string;
    amount: number;
}

interface ExpenseListProps {
    expenses: Expense[];
}

export function ExpenseList({ expenses }: ExpenseListProps) {
    return (
        <scrollView>
            <stackLayout>
                <label className="text-xl font-bold p-4">Recent Expenses</label>
                {expenses.map((expense) => (
                    <Card key={expense.id} className="mx-4">
                        <gridLayout rows="auto, auto" columns="*, auto">
                            <label row="0" col="0" className="font-semibold">{expense.description}</label>
                            <label row="0" col="1" className="text-right">${expense.amount}</label>
                            <label row="1" col="0" className="text-gray-500 text-sm">{expense.date}</label>
                        </gridLayout>
                    </Card>
                ))}
            </stackLayout>
        </scrollView>
    );
}