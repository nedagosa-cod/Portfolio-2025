
const Link = ({children, href, className, target}) => {
  return (
    <a href={href} className={className} target={target}>
      {children}
    </a>
  );
};

export default Link;