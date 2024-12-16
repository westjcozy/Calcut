import * as React from "react";
import { Card } from "../shared/Card";
import { UserProfile } from "../../types/profile";

interface ProfileHeaderProps {
    profile: UserProfile;
    onEditProfile: () => void;
}

export function ProfileHeader({ profile, onEditProfile }: ProfileHeaderProps) {
    return (
        <Card className="mb-4">
            <gridLayout rows="auto, auto" columns="*, auto">
                <stackLayout row="0" col="0">
                    <label className="text-2xl font-bold">{profile.name}</label>
                    <label className="text-gray-500">{profile.email}</label>
                </stackLayout>
                
                <button
                    row="0"
                    col="1"
                    className="text-indigo-600 p-2"
                    onTap={onEditProfile}
                >
                    Edit
                </button>
                
                <stackLayout row="1" colSpan="2" className="mt-4">
                    <gridLayout rows="auto" columns="auto, auto, auto" className="justify-between">
                        <stackLayout col="0" className="items-center">
                            <label className="font-semibold">{profile.height}cm</label>
                            <label className="text-gray-500 text-sm">Height</label>
                        </stackLayout>
                        
                        <stackLayout col="1" className="items-center">
                            <label className="font-semibold">{profile.weight}kg</label>
                            <label className="text-gray-500 text-sm">Weight</label>
                        </stackLayout>
                        
                        <stackLayout col="2" className="items-center">
                            <label className="font-semibold">{profile.age}</label>
                            <label className="text-gray-500 text-sm">Age</label>
                        </stackLayout>
                    </gridLayout>
                </stackLayout>
            </gridLayout>
        </Card>
    );
}