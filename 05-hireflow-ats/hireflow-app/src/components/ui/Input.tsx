type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 transition
        focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500
        disabled:bg-gray-100 disabled:cursor-not-allowed ${className}`}
      {...props}
    />
  )
}
