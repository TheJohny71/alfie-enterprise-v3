// src/components/ui/input.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helper?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, helper, ...props }, ref) => {
    const id = React.useId()

    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium leading-none text-support-dark"
          >
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-support-light bg-background px-3 py-2 text-sm",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "placeholder:text-support-light",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-semantic-error focus-visible:ring-semantic-error",
            className
          )}
          ref={ref}
          {...props}
        />
        {(helper || error) && (
          <p
            className={cn(
              "text-sm",
              error ? "text-semantic-error" : "text-support-medium"
            )}
          >
            {error || helper}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
