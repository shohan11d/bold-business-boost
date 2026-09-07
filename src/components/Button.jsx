function Button({ children, className = "", variant = "default", ...props }) {
  const baseClasses =
    "transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-offset-1 cursor-pointer";

  const variants = {
    default:
      "rounded-full bg-accent text-white hover:bg-brand-green focus:ring-accent",
  
    outline:
      "rounded-full border-1 border-brand-cyan-light/60 bg-transparent text-white hover:bg-accent hover:text-black hover:bg-brand-green-light hover:border-brand-green-light focus:ring-accent",
    square:
      "rounded-md border-1 border-borderBlue bg-transparent text-white hover:bg-accent hover:text-white focus:ring-accent",
    ghost: "rounded-full text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
