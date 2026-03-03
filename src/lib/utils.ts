import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Safely merges Tailwind classes, prioritizing later classes
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
