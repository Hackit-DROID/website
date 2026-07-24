export function Button({
  children,
  variant = 'primary', // 'primary', 'secondary', 'text-link', 'icon-circular'
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4ade80]/50 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary: "bg-[#4ade80] text-[#0a0a0a] hover:bg-[#22c55e] active:scale-[0.98] rounded-md",
    secondary: "bg-[#1a1a1a] text-[#ffffff] border border-[#2a2a2a] hover:border-[#3a3a3a] hover:bg-[#242424] active:scale-[0.98] rounded-md",
    "text-link": "bg-transparent text-[#ffffff] hover:text-[#4ade80] underline-offset-4 hover:underline p-0 font-medium",
    "icon-circular": "bg-[#1a1a1a] text-[#ffffff] hover:text-[#4ade80] hover:bg-[#242424] border border-[#2a2a2a] rounded-full p-2.5"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs h-8",
    md: "px-5 py-2.5 text-sm h-10",
    lg: "px-7 py-3 text-base h-12"
  };

  const sizeStyle = variant === 'icon-circular' ? '' : sizes[size] || sizes.md;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizeStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
