import * as React from "react";
import { Card } from "../shared/Card";
import { NutritionSummary } from "../../types/reports";

interface NutritionOverviewProps {
    nutrition: NutritionSummary;
}

export function NutritionOverview({ nutrition }: NutritionOverviewProps) {
    return (
        <Card>
            <label className="text-lg font-bold mb-2">Nutrition Overview</label>
            <gridLayout rows="auto, auto, auto, auto" columns="*, auto" className="w-full">
                <label row="0" col="0" className="text-gray-600">Calories:</label>
                <label row="0" col="1" className="text-right">{nutrition.calories} kcal</label>
                
                <label row="1" col="0" className="text-gray-600">Protein:</label>
                <label row="1" col="1" className="text-right">{nutrition.protein}g</label>
                
                <label row="2" col="0" className="text-gray-600">Carbs:</label>
                <label row="2" col="1" className="text-right">{nutrition.carbs}g</label>
                
                <label row="3" col="0" className="text-gray-600">Fat:</label>
                <label row="3" col="1" className="text-right">{nutrition.fat}g</label>
            </gridLayout>
        </Card>
    );
}