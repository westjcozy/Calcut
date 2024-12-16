import * as React from "react";
import { Card } from "../shared/Card";
import { CategoryExpense } from "../../types/reports";

interface CategoryBreakdownProps {
    categories: CategoryExpense[];
}

export function CategoryBreakdown({ categories }: CategoryBreakdownProps) {
    return (
        <Card>
            <label className="text-lg font-bold mb-2">Spending by Category</label>
            <scrollView>
                <stackLayout>
                    {categories.map((category, index) => (
                        <gridLayout key={index} rows="auto" columns="*, auto, auto" className="mb-2">
                            <label col="0" className="text-gray-700">{category.category}</label>
                            <label col="1" className="text-right text-gray-900 mr-2">${category.amount}</label>
                            <label col="2" className="text-right text-gray-500">{category.percentage}%</label>
                            
                            {/* Progress bar */}
                            <stackLayout col="0" colSpan="3" className="h-1 bg-gray-200 rounded-full mt-1">
                                <stackLayout 
                                    className="h-1 bg-indigo-500 rounded-full"
                                    width={`${category.percentage}%`}
                                />
                            </stackLayout>
                        </gridLayout>
                    ))}
                </stackLayout>
            </scrollView>
        </Card>
    );
}