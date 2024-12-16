import * as React from "react";
import { Card } from "../shared/Card";
import { ProfileStats } from "../../types/profile";

interface StatsSectionProps {
    stats: ProfileStats;
}

export function StatsSection({ stats }: StatsSectionProps) {
    return (
        <Card>
            <label className="text-xl font-bold mb-4">Your Stats</label>
            <gridLayout rows="auto, auto" columns="*, *" className="text-center">
                <stackLayout row="0" col="0" className="p-2">
                    <label className="text-2xl font-bold text-indigo-600">{stats.totalMeals}</label>
                    <label className="text-gray-500">Total Meals</label>
                </stackLayout>
                
                <stackLayout row="0" col="1" className="p-2">
                    <label className="text-2xl font-bold text-indigo-600">${stats.averageDailySpending}</label>
                    <label className="text-gray-500">Avg. Daily Spending</label>
                </stackLayout>
                
                <stackLayout row="1" col="0" className="p-2">
                    <label className="text-2xl font-bold text-indigo-600">{stats.streakDays}</label>
                    <label className="text-gray-500">Day Streak</label>
                </stackLayout>
                
                <stackLayout row="1" col="1" className="p-2">
                    <label className="text-2xl font-bold text-indigo-600">{stats.savedRecipes}</label>
                    <label className="text-gray-500">Saved Recipes</label>
                </stackLayout>
            </gridLayout>
        </Card>
    );
}