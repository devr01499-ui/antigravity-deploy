import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*                               Button Group                                 */
/* -------------------------------------------------------------------------- */

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

export const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  ButtonGroupProps
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      ref={ref}
      className={cn(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
})

ButtonGroup.displayName = "ButtonGroup"
