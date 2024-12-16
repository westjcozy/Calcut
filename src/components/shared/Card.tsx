import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = '' }: CardProps) {
    return (
        <stackLayout
            className={`bg-white rounded-lg shadow-md p-4 m-2 ${className}`}
        >
            {children}
        </stackLayout>
    );
}