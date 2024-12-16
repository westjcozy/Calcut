import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { HomeScreen } from "./screens/HomeScreen";
import { AddFoodScreen } from "./screens/AddFoodScreen";
import { BudgetScreen } from "./screens/BudgetScreen";
import { ReportsScreen } from "./screens/ReportsScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { FoodDetailsScreen } from "./screens/FoodDetailsScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#4F46E5",
                },
                headerTintColor: "#ffffff",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "SmartFood Budgeter" }}
            />
            <StackNavigator.Screen
                name="AddFood"
                component={AddFoodScreen}
                options={{ title: "Add Food" }}
            />
            <StackNavigator.Screen
                name="Budget"
                component={BudgetScreen}
                options={{ title: "Budget Tracking" }}
            />
            <StackNavigator.Screen
                name="Reports"
                component={ReportsScreen}
                options={{ title: "Reports" }}
            />
            <StackNavigator.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: "Profile" }}
            />
            <StackNavigator.Screen
                name="FoodDetails"
                component={FoodDetailsScreen}
                options={{ title: "Food Details" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);