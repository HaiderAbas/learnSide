const Button = ({
    label,
    children,
    onClick,
    type = "button",
    variant = "primary", 
    size = "md",  
    disabled = false,
    className = "",
  }) => {
    const baseStyle = "rounded font-medium transition duration-300 focus:outline-none";
  
    const sizeStyles = {
      sm: "px-4 py-1 text-[8px]",
      md: "px-4 py-2 text-base",
      lg: "px-7 py-3 text-lg",
    };
  
    const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : "";
  
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyle}  ${sizeStyles[size]} ${disabledStyle} ${className}`}
      >
        {label || children}
      </button>
    );
  };
  
  export default Button;