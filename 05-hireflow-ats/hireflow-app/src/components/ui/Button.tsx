import * as React from "react"

type ButtonVariant = "primary" | "secondary" | "link"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

export default function Button({
  variant = "primary",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants: Record<ButtonVariant, string> = {
    primary:
      "px-4 py-2 rounded-md bg-brand-600 text-white hover:bg-brand-700",

    secondary:
      "px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100",

    link:
      // full reset + link styling
      "p-0 bg-transparent border-none text-brand-600 hover:text-brand-700 hover:underline focus-visible:ring-0"
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={[
        base,
        variants[variant],
        className
      ].join(" ")}
      {...props}
    />
  )
}
