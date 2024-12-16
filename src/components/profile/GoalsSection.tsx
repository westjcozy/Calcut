import * as React from "react";
import { Card } from "../shared/Card";
import { UserProfile } from "../../types/profile";

interface GoalsSectionProps {
    profile: UserProfile;
    onUpdateGoals: () => void;
}

export function GoalsSection({ profile, onUpdateGoals }: GoalsSectionProps) {
    return (
        <Card className="mb-4">
            <gridLayout rows="auto, auto" columns="*, auto">
                <label row="0" col="0" className="text-xl font-bold mb-2">Goals</label>
                <button
                    row="0"
                    col="1"
                    className="text-indigo-600"
                    onTap={onUpdateGoals}
                >
                    Update
                </button>
            </gridLayout>

            <stackLayout className="mt-2">
                <gridLayout rows="auto" columns="*, auto" className="mb-2">
                    <label col="0" className="text-gray-600">Daily Calories</label>
                    <label col="1" className="text-right">{profile.dailyCalorieGoal} kcal</label>
                </gridLayout>

                <gridLayout rows="auto" columns="*, auto" className="mb-2">
                    <label col="0" className="text-gray-600">Monthly Budget</label>
                    <label col="1" className="text-right">${profile.monthlyBudget}</label>
                </gridLayout>
            </stackLayout>
        </Card>
    );
}