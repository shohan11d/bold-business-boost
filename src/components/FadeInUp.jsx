const FadeInUp = ({
  children,
  className = "",
  delay = "",
  animation = "animate-fade-in-up",
}) => {
  return <div className={`${animation} ${delay} ${className}`.trim()}>{children}</div>;
};

export default FadeInUp;
