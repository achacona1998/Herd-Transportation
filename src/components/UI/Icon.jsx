export const Icon = ({ name, className = "", ...props }) => {
  const iconClass = `icon-${name} ${className}`.trim();

  return (
    <svg className={iconClass} {...props}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};
