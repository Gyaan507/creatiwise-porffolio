export function Button({ className = "", children, ...props }) {
  return (
    <button {...props} className={`inline-flex items-center justify-center font-medium transition ${className}`}>
      {children}
    </button>
  )
}

export default Button
