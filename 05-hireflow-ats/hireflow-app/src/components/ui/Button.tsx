import * as React from "react"

type ButtonVariant = "primary" | "secondary"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "rounded-md px-4 py-2 text-sm font-medium transition disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    secondary: "border border-gray-300 text-gray-700 hover:bg-gray-100"
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  )
}
