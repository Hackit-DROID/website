export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-sans font-semibold transition-all duration-200 ease-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-[16px] shadow-sm";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover active:scale-[0.98] border border-transparent shadow-soft",
    secondary: "bg-surface-secondary text-text-primary border border-border hover:border-border-hover hover:bg-surface active:scale-[0.98]",
    outline: "border border-border text-text-primary hover:bg-surface-secondary hover:border-border-hover active:scale-[0.98]",
    ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary",
  };

  const sizes = {
    sm: "px-4.5 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-sm"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
