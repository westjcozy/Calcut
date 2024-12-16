import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl mb-4 font-bold text-center">
                Welcome to SmartFood Budgeter
            </label>
            
            <button
                className="text-lg text-white bg-indigo-600 p-4 rounded-lg mb-4 w-3/4"
                onTap={() => navigation.navigate("AddFood")}
            >
                Add Food
            </button>
            
            <button
                className="text-lg text-white bg-indigo-600 p-4 rounded-lg mb-4 w-3/4"
                onTap={() => navigation.navigate("Budget")}
            >
                View Budget
            </button>
            
            <button
                className="text-lg text-white bg-indigo-600 p-4 rounded-lg mb-4 w-3/4"
                onTap={() => navigation.navigate("Reports")}
            >
                Reports
            </button>
            
            <button
                className="text-lg text-white bg-indigo-600 p-4 rounded-lg w-3/4"
                onTap={() => navigation.navigate("Profile")}
            >
                Profile
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f4f6",
    },
});