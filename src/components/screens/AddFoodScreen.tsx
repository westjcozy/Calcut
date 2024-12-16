import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type AddFoodScreenProps = {
    route: RouteProp<MainStackParamList, "AddFood">,
    navigation: FrameNavigationProp<MainStackParamList, "AddFood">,
};

export function AddFoodScreen({ navigation }: AddFoodScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-xl mb-6 text-center">
                Add Food Entry
            </label>
            
            <button
                className="text-lg text-white bg-indigo-600 p-4 rounded-lg mb-4 w-3/4"
                onTap={() => Dialogs.alert("Camera functionality coming soon!")}
            >
                Take Photo
            </button>
            
            <button
                className="text-lg text-white bg-indigo-600 p-4 rounded-lg mb-4 w-3/4"
                onTap={() => Dialogs.alert("Gallery picker coming soon!")}
            >
                Choose from Gallery
            </button>
            
            <button
                className="text-lg text-white bg-indigo-600 p-4 rounded-lg w-3/4"
                onTap={() => navigation.navigate("FoodDetails")}
            >
                Manual Entry
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