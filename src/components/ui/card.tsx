// src/components/ui/card.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md",
  {
    variants: {
      variant: {
        feature: "bg-white border-accent/10",
        info: "bg-gray-50 border-gray-100",
        action: "bg-white border-gray-200"
      }
    },
    defaultVariants: {
      variant: "feature"
    }
  }
)

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

export { Card, cardVariants }