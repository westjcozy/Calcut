import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface ButtonProps {
    text: string;
    onTap: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    className?: string;
}

export function Button({ text, onTap, variant = 'primary', className = '' }: ButtonProps) {
    const getVariantClasses = () => {
        switch (variant) {
            case 'secondary':
                return 'bg-gray-600';
            case 'danger':
                return 'bg-red-600';
            default:
                return 'bg-indigo-600';
        }
    };

    return (
        <button
            className={`text-lg text-white ${getVariantClasses()} p-4 rounded-lg ${className}`}
            onTap={onTap}
        >
            {text}
        </button>
    );
}