import * as React from "react"

type ButtonVariant = "primary" | "secondary" | "link"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

export default function Button({
  variant = "primary",
  className = "",
  disabled,
  style,
  ...props
}: ButtonProps) {
  const base =
    "text-sm font-medium transition focus:outline-none"

  const variants = {
    primary:
      "!bg-[#7C5CDE] px-4 py-2 rounded-md text-white enabled:hover:!bg-[#6B4FD6] focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",

    secondary:
      "px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",

    link:
      "!text-[#7C5CDE] hover:underline"
  }

  const disabledStyles =
    "opacity-50 cursor-not-allowed pointer-events-none"

  const linkResetStyles: React.CSSProperties =
    variant === "link"
      ? {
        padding: 0,
        margin: 0,
        background: "transparent",
        border: "none",
        borderRadius: 0,
        boxShadow: "none",
        appearance: "none",
        WebkitAppearance: "none"
      }
      : {}

  return (
    <button
      type="button"
      disabled={disabled}
      style={{ ...linkResetStyles, ...style }}
      className={[
        base,
        variants[variant],
        disabled ? disabledStyles : "",
        className
      ].join(" ")}
      {...props}
    />
  )
}
