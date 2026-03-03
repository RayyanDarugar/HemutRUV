import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost"
    size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-brand-yellow text-brand-dark hover:bg-brand-600 shadow-sm": variant === "primary",
                        "bg-transparent text-foreground hover:bg-brand-slate/10 border-2 border-border shadow-sm": variant === "secondary",
                        "border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow/10": variant === "outline",
                        "hover:bg-brand-slate/10 text-foreground": variant === "ghost",
                        "h-10 px-4 py-2": size === "default",
                        "h-8 px-3 text-xs": size === "sm",
                        "h-12 px-8 text-base": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
