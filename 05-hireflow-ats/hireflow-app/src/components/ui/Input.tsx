type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder:text-gray-400 ${className}`}
      {...props}
    />
  )
}
