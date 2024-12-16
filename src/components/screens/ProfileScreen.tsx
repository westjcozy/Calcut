import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { ProfileHeader } from "../profile/ProfileHeader";
import { GoalsSection } from "../profile/GoalsSection";
import { PreferencesSection } from "../profile/PreferencesSection";
import { StatsSection } from "../profile/StatsSection";
import { UserProfile, ProfileStats } from "../../types/profile";

type ProfileScreenProps = {
    route: RouteProp<MainStackParamList, "Profile">,
    navigation: FrameNavigationProp<MainStackParamList, "Profile">,
};

// Mock data - In a real app, this would come from a state management system
const mockProfile: UserProfile = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    height: 175,
    weight: 70,
    age: 30,
    gender: 'male',
    dailyCalorieGoal: 2500,
    monthlyBudget: 500,
    dietaryPreferences: ['Vegetarian', 'Low Carb', 'Gluten Free'],
    notifications: true,
};

const mockStats: ProfileStats = {
    totalMeals: 156,
    averageDailySpending: 25,
    streakDays: 7,
    savedRecipes: 12,
};

export function ProfileScreen({ navigation }: ProfileScreenProps) {
    const handleEditProfile = () => {
        Dialogs.alert("Edit Profile coming soon!");
    };

    const handleUpdateGoals = () => {
        Dialogs.alert("Update Goals coming soon!");
    };

    const handleUpdatePreferences = () => {
        Dialogs.alert("Update Preferences coming soon!");
    };

    return (
        <scrollView>
            <stackLayout style={styles.container}>
                <ProfileHeader 
                    profile={mockProfile}
                    onEditProfile={handleEditProfile}
                />
                
                <GoalsSection
                    profile={mockProfile}
                    onUpdateGoals={handleUpdateGoals}
                />
                
                <PreferencesSection
                    profile={mockProfile}
                    onUpdatePreferences={handleUpdatePreferences}
                />
                
                <StatsSection stats={mockStats} />
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