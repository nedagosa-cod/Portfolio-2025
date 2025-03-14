
const Link = ({children, href, className}) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;