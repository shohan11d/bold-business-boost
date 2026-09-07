// Animation removed for performance: this is now a plain wrapper that renders
// its children immediately (no IntersectionObserver, no transitions).
const FadeInUp = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};

export default FadeInUp;
