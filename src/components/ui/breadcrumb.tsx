import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*                                  Breadcrumb                                */
/* -------------------------------------------------------------------------- */

export function Breadcrumb({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      aria-label="breadcrumb"
      className={cn("flex", className)}
      {...props}
    />
  )
}

export function BreadcrumbList({
  className,
  ...props
}: React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export function BreadcrumbItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLLIElement>) {
  return (
    <li className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  )
}

/* -------------------------------------------------------------------------- */
/*                              Breadcrumb Link                               */
/* -------------------------------------------------------------------------- */

export const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, ...props }, ref) => (
  <Link
    ref={ref}
    className={cn("hover:text-foreground transition-colors", className)}
    {...props}
  />
))
BreadcrumbLink.displayName = "BreadcrumbLink"

/* -------------------------------------------------------------------------- */
/*                             Breadcrumb Separator                            */
/* -------------------------------------------------------------------------- */

export function BreadcrumbSeparator({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      /
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*                              Breadcrumb Page                                */
/* -------------------------------------------------------------------------- */

export function BreadcrumbPage({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      role="link"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  )
}
