import * as React from "react";
import { Card } from "../shared/Card";
import { UserProfile } from "../../types/profile";

interface PreferencesSectionProps {
    profile: UserProfile;
    onUpdatePreferences: () => void;
}

export function PreferencesSection({ profile, onUpdatePreferences }: PreferencesSectionProps) {
    return (
        <Card className="mb-4">
            <gridLayout rows="auto, auto" columns="*, auto">
                <label row="0" col="0" className="text-xl font-bold mb-2">Preferences</label>
                <button
                    row="0"
                    col="1"
                    className="text-indigo-600"
                    onTap={onUpdatePreferences}
                >
                    Edit
                </button>
            </gridLayout>

            <stackLayout className="mt-2">
                <label className="text-gray-600 mb-2">Dietary Preferences:</label>
                <flexboxLayout className="flex-wrap">
                    {profile.dietaryPreferences.map((pref, index) => (
                        <label
                            key={index}
                            className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm mr-2 mb-2"
                        >
                            {pref}
                        </label>
                    ))}
                </flexboxLayout>

                <gridLayout rows="auto" columns="*, auto" className="mt-4">
                    <label col="0" className="text-gray-600">Notifications</label>
                    <switch
                        col="1"
                        checked={profile.notifications}
                        className="text-indigo-600"
                    />
                </gridLayout>
            </stackLayout>
        </Card>
    );
}